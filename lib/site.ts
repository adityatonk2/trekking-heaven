/** Canonical site URL, used for metadataBase, sitemap, robots, and JSON-LD. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trekkersheaven.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Trekkers Heaven';
