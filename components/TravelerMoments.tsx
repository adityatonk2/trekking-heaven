import Image from 'next/image';

const TRAVELER_PHOTOS = [
  '/reviews/travelers/IMG_0009.jpg',
  '/reviews/travelers/IMG_1302.jpg',
  '/reviews/travelers/IMG_1309.jpg',
  '/reviews/travelers/IMG_9905.jpg',
  '/reviews/travelers/IMG_9910.jpg',
  '/reviews/travelers/IMG_9940.jpg',
];

export default function TravelerMoments() {
  return (
    <div className="traveler-moments">
      <h3 className="traveler-moments-title">Real Trekkers, Real Moments</h3>
      <div className="traveler-moments-grid">
        {TRAVELER_PHOTOS.map((src, i) => (
          <div className="traveler-moments-thumb" key={src}>
            <Image
              src={src}
              alt={`Trekkers Heaven group on a recent trek ${i + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 200px"
              className="traveler-moments-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
