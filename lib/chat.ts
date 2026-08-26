import { getDb } from './mongodb';

const CHAT_LOGS_COLLECTION = 'chat_rate_logs';
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 25;

interface ChatLogEntry {
  ip: string;
  createdAt: Date;
}

/** Lightweight per-IP rate limit so the (paid) Gemini API can't be abused. */
export async function isChatRateLimited(ip: string | undefined): Promise<boolean> {
  if (!ip) return false;

  try {
    const db = await getDb();
    const collection = db.collection<ChatLogEntry>(CHAT_LOGS_COLLECTION);
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

    const count = await collection.countDocuments({ ip, createdAt: { $gte: since } });
    if (count >= RATE_LIMIT_MAX) return true;

    await collection.insertOne({ ip, createdAt: new Date() });
    return false;
  } catch {
    // If MongoDB is unreachable, fail open — better to allow chat than break it.
    return false;
  }
}
