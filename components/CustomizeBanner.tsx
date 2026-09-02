import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Users, MapPin, MessageCircleHeart, ArrowRight } from 'lucide-react';

const FEATURES = [
  { icon: CalendarDays, label: 'Flexible Dates' },
  { icon: Users, label: 'Any Group Size' },
  { icon: MapPin, label: 'Pick Your Region' },
  { icon: MessageCircleHeart, label: 'Confirm on WhatsApp' },
];

export default function CustomizeBanner() {
  return (
    <section id="customize" className="customize-banner">
      <div className="customize-banner-overlay" />
      <Image
        src="/trek-carousel/10008.jpg"
        alt="Trekker overlooking a flower-filled Himalayan valley"
        fill
        sizes="100vw"
        className="customize-banner-img"
      />
      <div className="customize-banner-content">
        <p className="customize-banner-eyebrow">Every group is different</p>
        <h2 className="customize-banner-title">Customize Your Trek</h2>
        <p className="customize-banner-desc">
          Tell us your dates, group size, and budget — we&apos;ll design a
          Himalayan trip that fits, then confirm it with you on WhatsApp.
        </p>
        <div className="customize-banner-features">
          {FEATURES.map(({ icon: Icon, label }) => (
            <span className="customize-banner-feature" key={label}>
              <Icon size={18} />
              {label}
            </span>
          ))}
        </div>
        <Link href="/customize" className="btn btn-primary btn-lg customize-banner-cta">
          Start Customizing
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
