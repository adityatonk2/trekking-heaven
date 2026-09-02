import Image from 'next/image';

const CAROUSEL_IMAGES = [
  { src: '/trek-carousel/10001.jpg', width: 1152, height: 2048 },
  { src: '/trek-carousel/10002.jpg', width: 1224, height: 1632 },
  { src: '/trek-carousel/10003.jpg', width: 736, height: 1308 },
  { src: '/trek-carousel/10004.jpg', width: 819, height: 1024 },
  { src: '/trek-carousel/10005.jpg', width: 736, height: 920 },
  { src: '/trek-carousel/10006.jpg', width: 1080, height: 1054 },
  { src: '/trek-carousel/10007.jpg', width: 736, height: 1308 },
  { src: '/trek-carousel/10008.jpg', width: 1080, height: 1350 },
  { src: '/trek-carousel/10009.jpg', width: 1080, height: 1350 },
  { src: '/trek-carousel/10010.jpg', width: 750, height: 1000 },
  { src: '/trek-carousel/10011.jpg', width: 3024, height: 4032 },
  { src: '/trek-carousel/10012.jpg', width: 1200, height: 1600 },
];

export default function TrekCarousel() {
  return (
    <section id="gallery" className="trek-section trek-carousel-section">
      <h2 className="section-title">Moments From the Trail</h2>
      <div className="section-intro">
        <p>A glimpse of the landscapes and memories our trekkers bring home.</p>
      </div>

      <div className="trek-marquee">
        <div className="trek-marquee-fade trek-marquee-fade-left" />
        <div className="trek-marquee-fade trek-marquee-fade-right" />
        <div className="trek-marquee-track">
          {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((img, i) => (
            <div className="trek-marquee-slide" key={`${img.src}-${i}`}>
              <Image
                src={img.src}
                alt={`Himalayan trekking moment ${(i % CAROUSEL_IMAGES.length) + 1}`}
                width={img.width}
                height={img.height}
                className="trek-marquee-img"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
