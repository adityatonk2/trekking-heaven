'use client';

import Image from 'next/image';

const MEDIA_ITEMS = [
    { type: 'video', src: '/reviews/review-video.mp4' },
    { type: 'video', src: '/reviews/review-video-2.mp4' },
    { type: 'video', src: '/reviews/review-video-3.mp4' },
    { type: 'image', src: '/reviews/review-image.jpeg' },
    { type: 'image', src: '/reviews/review-image-1.jpeg' },
    { type: 'image', src: '/reviews/review-image-2.jpeg' },
];

export default function ClientStories() {
    return (
        <div className="client-stories">
            <h3 className="stories-title">Client Moments</h3>
            <p className="stories-subtitle">See what our trekkers have to say about their journey.</p>

            <div className="stories-grid">
                {MEDIA_ITEMS.map((item, index) => (
                    <div key={index} className="story-card">
                        {item.type === 'video' ? (
                            <video
                                controls
                                className="story-media"
                                preload="metadata"
                                playsInline
                            >
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="story-image-wrapper">
                                <Image
                                    src={item.src}
                                    alt={`Client story ${index + 1}`}
                                    fill
                                    className="story-media"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .client-stories {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .stories-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .stories-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          font-size: 1rem;
        }
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          padding: 0 1rem;
        }
        @media (max-width: 768px) {
          .stories-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
          }
        }
        .story-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 9/16;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }
        .story-card:hover {
          transform: translateY(-4px);
        }
        .story-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .story-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      `}</style>
        </div>
    );
}
