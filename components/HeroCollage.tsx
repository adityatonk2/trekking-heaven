import Image from 'next/image';

const HERO_COLLAGE_PHOTOS = [
  '/reviews/travelers/IMG_0009.jpg',
  '/reviews/travelers/IMG_1302.jpg',
  '/reviews/travelers/IMG_1309.jpg',
  '/reviews/travelers/IMG_9905.jpg',
  '/reviews/travelers/IMG_9910.jpg',
  '/reviews/travelers/IMG_9940.jpg',
];

/** Full-bleed collage of real trekker photos, used as the background layer of every page hero. */
export default function HeroCollage() {
  return (
    <div className="hero-collage">
      {HERO_COLLAGE_PHOTOS.map((src, i) => (
        <div className="hero-collage-tile" key={src}>
          <Image
            src={src}
            alt="Trekkers Heaven group on a Himalayan trek"
            fill
            priority={i < 3}
            sizes="(max-width: 768px) 33vw, 17vw"
            className="hero-bg"
          />
        </div>
      ))}
    </div>
  );
}
