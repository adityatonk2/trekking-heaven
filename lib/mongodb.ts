import { MongoClient, type Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'trekkers_heaven';

interface MongoCache {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
}

// Reuse the connection across hot reloads in dev and across invocations
// in serverless environments.
declare global {
  // eslint-disable-next-line no-var
  var _mongoCache: MongoCache | undefined;
}

const cache: MongoCache = global._mongoCache ?? { client: null, promise: null };
if (!global._mongoCache) global._mongoCache = cache;

export async function getDb(): Promise<Db> {
  if (!MONGODB_URI) {
    throw new Error(
      'MONGODB_URI is not set. Add it to your environment variables to enable lead storage.'
    );
  }

  if (cache.client) {
    return cache.client.db(MONGODB_DB);
  }

  if (!cache.promise) {
    const client = new MongoClient(MONGODB_URI);
    cache.promise = client.connect();
  }

  cache.client = await cache.promise;
  return cache.client.db(MONGODB_DB);
}
