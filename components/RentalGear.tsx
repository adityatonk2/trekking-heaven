import Image from 'next/image';
import { RENTAL_GEARS } from '@/lib/rental-gears-data';

export default function RentalGear() {
  return (
    <div className="rental-gears-section">
      <div className="rental-gears-grid">
        {RENTAL_GEARS.map((item) => (
          <article key={item.image} className="rental-gears-card">
            <div className="rental-gears-card-image">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="rental-gears-img"
              />
            </div>
            <div className="rental-gears-card-body">
              <h3 className="rental-gears-name">{item.name}</h3>
              <span className="rental-gears-price">{item.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
