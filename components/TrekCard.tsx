import Image from 'next/image';
import Link from 'next/link';
import { Info, CalendarDays } from 'lucide-react';
import type { Trek } from '@/lib/trek-data';

interface TrekCardProps {
  trek: Trek;
}

export default function TrekCard({ trek }: TrekCardProps) {
  return (
    <article className="trek-card">
      <div className="trek-card-image">
        <Image
          src={trek.image}
          alt={trek.name}
          width={448}
          height={280}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="trek-card-content">
        <h3 className="trek-card-title">{trek.name}</h3>
        <p className="trek-origin">{trek.origin}</p>
        <p className="trek-meta">
          <span>{trek.days} Days</span>
          <span className="dot">•</span>
          <span>{trek.difficulty}</span>
          {trek.note && (
            <span className="trek-note"> {trek.note}</span>
          )}
        </p>
        <div className="trek-actions">
          <Link href={`/treks/${trek.slug}`} className="btn btn-primary trek-btn-primary">
            <Info size={18} />
            Get Trek Info
          </Link>
          <Link href={`/treks/${trek.slug}#dates`} className="btn btn-secondary trek-btn-secondary">
            <CalendarDays size={18} />
            View Dates
          </Link>
        </div>
      </div>
    </article>
  );
}
