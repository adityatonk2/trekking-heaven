import { ObjectId, type Filter } from 'mongodb';
import { z } from 'zod';
import { getDb } from './mongodb';

export const LEADS_COLLECTION = 'leads';

export const LEAD_STATUSES = ['new', 'contacted', 'closed'] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

const tripRequirementsSchema = z.object({
  startDate: z.string().max(40).optional(),
  endDate: z.string().max(40).optional(),
  duration: z.string().max(120).optional(),
  location: z.string().max(120).optional(),
  participants: z.string().max(40).optional(),
  ageGroup: z.string().max(60).optional(),
  budget: z.string().max(60).optional(),
  serviceType: z.string().max(60).optional(),
  extra: z.string().max(2000).optional(),
});

const baseFields = {
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(120),
  email: z.string().trim().email('Enter a valid email').max(200).optional().or(z.literal('')),
  phone: z.string().trim().min(6, 'Enter a valid phone number').max(20).optional().or(z.literal('')),
  // Honeypot — real users never fill this; bots typically do.
  company: z.string().max(200).optional().or(z.literal('')),
};

export const contactLeadSchema = z.object({
  source: z.literal('contact'),
  ...baseFields,
  subject: z.string().max(60).optional(),
  message: z.string().trim().min(5, 'Message must be at least 5 characters').max(4000),
});

export const customizeLeadSchema = z.object({
  source: z.literal('customize'),
  ...baseFields,
  tripRequirements: tripRequirementsSchema,
});

export const popupLeadSchema = z.object({
  source: z.literal('popup'),
  ...baseFields,
  trekInterest: z.string().max(120).optional(),
  message: z.string().max(2000).optional(),
});

export const leadInputSchema = z.discriminatedUnion('source', [
  contactLeadSchema,
  customizeLeadSchema,
  popupLeadSchema,
]);

export type LeadInput = z.infer<typeof leadInputSchema>;

export interface LeadDocument {
  _id?: ObjectId;
  source: 'contact' | 'customize' | 'popup';
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  trekInterest?: string;
  tripRequirements?: z.infer<typeof tripRequirementsSchema>;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
  ip?: string;
  userAgent?: string;
}

/** Require at least one contact method (email or phone) beyond the name. */
export function hasContactMethod(input: { email?: string; phone?: string }): boolean {
  return Boolean(input.email?.trim() || input.phone?.trim());
}

const DUPLICATE_WINDOW_MS = 2 * 60 * 1000; // 2 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 8;

/** Returns an existing near-duplicate lead within the dedup window, if any. */
export async function findRecentDuplicate(
  input: LeadInput,
  ip: string | undefined
): Promise<LeadDocument | null> {
  const db = await getDb();
  const since = new Date(Date.now() - DUPLICATE_WINDOW_MS);

  const filter: Filter<LeadDocument> = {
    source: input.source,
    name: input.name,
    createdAt: { $gte: since },
  };
  if (input.email) filter.email = input.email;
  if (input.phone) filter.phone = input.phone;

  return db.collection<LeadDocument>(LEADS_COLLECTION).findOne(filter, {
    sort: { createdAt: -1 },
  });
}

/** Basic per-IP rate limit to slow down spam/bot submissions. */
export async function isRateLimited(ip: string | undefined): Promise<boolean> {
  if (!ip) return false;
  const db = await getDb();
  const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
  const count = await db
    .collection<LeadDocument>(LEADS_COLLECTION)
    .countDocuments({ ip, createdAt: { $gte: since } });
  return count >= RATE_LIMIT_MAX;
}

export async function insertLead(
  input: LeadInput,
  meta: { ip?: string; userAgent?: string }
): Promise<LeadDocument> {
  const db = await getDb();
  const now = new Date();

  const doc: LeadDocument = {
    source: input.source,
    name: input.name,
    email: input.email || undefined,
    phone: input.phone || undefined,
    status: 'new',
    createdAt: now,
    updatedAt: now,
    ip: meta.ip,
    userAgent: meta.userAgent,
  };

  if (input.source === 'contact') {
    doc.subject = input.subject;
    doc.message = input.message;
  } else if (input.source === 'customize') {
    doc.tripRequirements = input.tripRequirements;
  } else {
    doc.trekInterest = input.trekInterest;
    doc.message = input.message;
  }

  const result = await db.collection<LeadDocument>(LEADS_COLLECTION).insertOne(doc);
  return { ...doc, _id: result.insertedId };
}

export async function listLeads(options: {
  source?: 'contact' | 'customize' | 'popup';
  status?: LeadStatus;
  limit?: number;
}): Promise<LeadDocument[]> {
  const db = await getDb();
  const filter: Filter<LeadDocument> = {};
  if (options.source) filter.source = options.source;
  if (options.status) filter.status = options.status;

  return db
    .collection<LeadDocument>(LEADS_COLLECTION)
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(options.limit ?? 300)
    .toArray();
}

export async function updateLeadStatus(
  id: string,
  status: LeadStatus
): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const db = await getDb();
  const result = await db
    .collection<LeadDocument>(LEADS_COLLECTION)
    .updateOne({ _id: new ObjectId(id) }, { $set: { status, updatedAt: new Date() } });
  return result.matchedCount > 0;
}

export async function deleteLead(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const db = await getDb();
  const result = await db
    .collection<LeadDocument>(LEADS_COLLECTION)
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}
