'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_IMAGES = [
  '/trek-carousel/10001.jpg',
  '/trek-carousel/10002.jpg',
  '/trek-carousel/10003.jpg',
  '/trek-carousel/10004.jpg',
  '/trek-carousel/10005.jpg',
  '/trek-carousel/10006.jpg',
  '/trek-carousel/10007.jpg',
  '/trek-carousel/10008.jpg',
  '/trek-carousel/10009.jpg',
  '/trek-carousel/10010.jpg',
  '/trek-carousel/10011.jpg',
  '/trek-carousel/10012.jpg',
];

const AUTOPLAY_DELAY = 4000;

export default function TrekCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % CAROUSEL_IMAGES.length) + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  const showNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const showPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length);
    }, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pauseAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resumeAutoplay = () => {
    pauseAutoplay();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length);
    }, AUTOPLAY_DELAY);
  };

  return (
    <section id="gallery" className="trek-section trek-carousel-section">
      <h2 className="section-title">Moments From the Trail</h2>
      <div className="section-intro">
        <p>A glimpse of the landscapes and memories our trekkers bring home.</p>
      </div>

      <div
        className="trek-carousel"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
      >
        <div className="trek-carousel-viewport">
          <div
            className="trek-carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {CAROUSEL_IMAGES.map((src, i) => (
              <div className="trek-carousel-slide" key={src}>
                <Image
                  src={src}
                  alt={`Himalayan trekking moment ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="trek-carousel-img"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="trek-carousel-nav trek-carousel-prev"
          onClick={showPrev}
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          className="trek-carousel-nav trek-carousel-next"
          onClick={showNext}
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>

        <div className="trek-carousel-dots">
          {CAROUSEL_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`trek-carousel-dot${i === index ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
