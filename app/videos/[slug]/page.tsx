import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getVideoBySlug,
  getAllVideoSlugs,
  getYouTubeEmbedUrl,
} from '@/lib/video-data';

interface VideoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllVideoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: VideoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return { title: 'Video Not Found' };
  return {
    title: `${video.title} | Trekkers Heaven Videos`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
    },
  };
}

export default async function VideoWatchPage({ params }: VideoPageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) notFound();

  const embedUrl = getYouTubeEmbedUrl(video.youtubeId, true);

  return (
    <main className="video-watch-page">
      <div className="video-watch-container">
        <nav className="video-watch-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/videos">Videos</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{video.title}</span>
        </nav>

        <article className="video-watch-content">
          <div className="video-watch-embed-wrapper">
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-watch-iframe"
            />
          </div>
          <header className="video-watch-header">
            <h1 className="video-watch-title">{video.title}</h1>
            {video.duration && (
              <span className="video-watch-meta">{video.duration}</span>
            )}
          </header>
          <p className="video-watch-desc">{video.description}</p>
          <div className="video-watch-actions">
            <Link href="/videos" className="btn btn-secondary">
              More Videos
            </Link>
            <Link href="/treks" className="btn btn-primary">
              Explore Treks
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
