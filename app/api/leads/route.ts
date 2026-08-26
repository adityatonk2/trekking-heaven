import { NextResponse, type NextRequest } from 'next/server';
import { ZodError } from 'zod';
import {
  leadInputSchema,
  hasContactMethod,
  findRecentDuplicate,
  insertLead,
  isRateLimited,
} from '@/lib/leads';

export const runtime = 'nodejs';

function getClientIp(request: NextRequest): string | undefined {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0]?.trim();
  return request.headers.get('x-real-ip') || undefined;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  let input;
  try {
    input = leadInputSchema.parse(body);
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0]?.message ?? 'Invalid submission';
      return NextResponse.json({ error: message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  // Honeypot: silently "succeed" without writing anything, to keep bots
  // from realizing their submission was rejected.
  if (input.company) {
    return NextResponse.json({ ok: true, deduped: false });
  }

  if (!hasContactMethod(input)) {
    return NextResponse.json(
      { error: 'Please provide an email or phone number so we can reach you' },
      { status: 400 }
    );
  }

  const ip = getClientIp(request);

  try {
    if (await isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const duplicate = await findRecentDuplicate(input, ip);
    if (duplicate) {
      return NextResponse.json({ ok: true, deduped: true });
    }

    const userAgent = request.headers.get('user-agent') || undefined;
    await insertLead(input, { ip, userAgent });

    return NextResponse.json({ ok: true, deduped: false }, { status: 201 });
  } catch (err) {
    console.error('Failed to save lead:', err);
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please try WhatsApp or call us instead.' },
      { status: 500 }
    );
  }
}
