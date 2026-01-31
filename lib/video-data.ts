/**
 * YouTube video references for the Videos section.
 * Replace youtubeId with your video ID (11 chars from youtube.com/watch?v=XXXXX or youtu.be/XXXXX).
 */

export interface Video {
  slug: string;
  title: string;
  description: string;
  /** YouTube video ID (11 characters) from watch?v=ID or youtu.be/ID */
  youtubeId: string;
  duration?: string;
  publishedAt?: string;
}

export const videos: Video[] = [
  {
    slug: 'kedarkantha-trek-experience',
    title: 'Kedarkantha Trek — Winter Summit Experience',
    description:
      'Join our team on the Kedarkantha trek. Snow-clad trails, summit sunrise, and 360° Himalayan views. A perfect winter trek for beginners.',
    youtubeId: 'ssLkpltaFms',
    duration: '5:42',
  },
  {
    slug: 'Kedarkantha Trek: ',
    title: 'A Winter Wonderland in the Himalayas',
    description:
      'Documentary-style journey through the Har Ki Dun valley. Ancient villages, alpine meadows, and the legend of the Pandavas.',
    youtubeId: 'wErQfkyEUIA',
    duration: '8:15',
  },
  {
    slug: 'himalayan-trekking-tips',
    title: 'Hampta Pass Trek The Perfect Crossover Trek',
    description:
      'Essential tips for first-time trekkers. Gear, acclimatization, and what a typical day on a Himalayan trek looks like.',
    youtubeId: 'fGkdKlF7-ZQ',
    duration: '6:30',
  },
  {
    slug: 'winter-treks-uttarakhand',
    title: 'Osla and Harkidun Trek',
    description:
      'Explore the best winter treks from Dehradun: Kedarkantha, Chopta, Kuari Pass. Snow, camps, and mountain sunrises.',
    youtubeId: 'Lg_f2VeLj4c',
    duration: '10:00',
  },
];

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

export function getAllVideoSlugs(): string[] {
  return videos.map((v) => v.slug);
}

/** YouTube thumbnail URL (medium quality) */
export function getYouTubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
}

/** YouTube embed URL */
export function getYouTubeEmbedUrl(youtubeId: string, autoplay = false): string {
  const params = new URLSearchParams({ rel: '0' });
  if (autoplay) params.set('autoplay', '1');
  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
}
