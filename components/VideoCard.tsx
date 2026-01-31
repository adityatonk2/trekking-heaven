import Image from 'next/image';
import Link from 'next/link';
import type { Video } from '@/lib/video-data';
import { getYouTubeThumbnail } from '@/lib/video-data';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const thumb = getYouTubeThumbnail(video.youtubeId);

  return (
    <article className="video-card">
      <Link href={`/videos/${video.slug}`} className="video-card-link">
        <div className="video-card-thumb">
          <Image
            src={thumb}
            alt={video.title}
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <span className="video-card-play" aria-hidden>
            <svg viewBox="0 0 68 48" width="68" height="48" fill="currentColor">
              <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.31 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.65 0 24 0 24s.06 10.35 1.22 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.69-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.35 68 24 68 24s-.06-10.35-1.22-16.26z" fill="red" />
              <path d="M45 24L27 14v20" fill="white" />
            </svg>
          </span>
          {video.duration && (
            <span className="video-card-duration">{video.duration}</span>
          )}
        </div>
        <div className="video-card-content">
          <h3 className="video-card-title">{video.title}</h3>
          <p className="video-card-desc">{video.description}</p>
          <span className="video-card-watch">Watch Video</span>
        </div>
      </Link>
    </article>
  );
}
