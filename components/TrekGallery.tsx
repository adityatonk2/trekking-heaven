'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface TrekGalleryProps {
  images: string[];
  trekName: string;
}

const MAX_GRID_THUMBS = 6;

export default function TrekGallery({ images, trekName }: TrekGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, showPrev, showNext]);

  const visibleThumbs = images.slice(0, MAX_GRID_THUMBS);
  const remaining = images.length - MAX_GRID_THUMBS;

  return (
    <>
      <div className="gallery-grid-new">
        {visibleThumbs.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className="gallery-thumb-new"
            onClick={() => setOpenIndex(i)}
            aria-label={`View photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${trekName} — photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 220px"
              className="gallery-thumb-img-new"
            />
            {i === MAX_GRID_THUMBS - 1 && remaining > 0 && (
              <span className="gallery-thumb-more-new">+{remaining}</span>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="gallery-lightbox-new"
          role="dialog"
          aria-modal="true"
          aria-label={`${trekName} photo gallery`}
          onClick={close}
        >
          <button
            type="button"
            className="gallery-lightbox-close-new"
            onClick={close}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav-new gallery-lightbox-prev-new"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="gallery-lightbox-imgwrap-new" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[openIndex]}
              alt={`${trekName} — photo ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="gallery-lightbox-img-new"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav-new gallery-lightbox-next-new"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {images.length > 1 && (
            <div className="gallery-lightbox-counter-new">
              {openIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
