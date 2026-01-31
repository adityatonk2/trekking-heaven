import type { Metadata } from 'next';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/lib/video-data';

export const metadata: Metadata = {
  title: 'Trek Videos & Documentaries | Trekkers Heaven',
  description:
    'Watch documentary-style videos from our treks. Kedarkantha, Har Ki Dun, winter treks and Himalayan tips — real experiences, real mountains.',
  openGraph: {
    title: 'Trek Videos | Trekkers Heaven',
    description:
      'Documentary-style videos from Himalayan treks. Real experiences, real mountains.',
  },
};

export default function VideosPage() {
  return (
    <main className="videos-page">
      <section className="videos-section">
        <div className="videos-container">
          <h1 className="videos-title">Trek Documentaries & Videos</h1>
          <p className="videos-intro">
            Watch documentary-style videos from our treks. Real experiences,
            real mountains — from winter summits to valley trails.
          </p>
          <div className="videos-grid">
            {videos.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
