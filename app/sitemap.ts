import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getAllTrekSlugs } from '@/lib/trek-detail-data';
import { getAllArticleSlugs } from '@/lib/article-data';
import { getAllVideoSlugs } from '@/lib/video-data';

const STATIC_ROUTES = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/treks', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/trekking-packages', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/articles', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/videos', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/customize', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/policies', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const trekEntries: MetadataRoute.Sitemap = getAllTrekSlugs().map((slug) => ({
    url: `${SITE_URL}/treks/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/articles/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const videoEntries: MetadataRoute.Sitemap = getAllVideoSlugs().map((slug) => ({
    url: `${SITE_URL}/videos/${encodeURIComponent(slug)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticEntries, ...trekEntries, ...articleEntries, ...videoEntries];
}
