import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrekSection from '@/components/TrekSection';
import { trekSections } from '@/lib/trek-data';

export const metadata: Metadata = {
  title: 'Himalayan Treks 2025 | Expert-Led Trekking Tours | Trekkers Heaven',
  description:
    'Explore the Himalayas with expert-led treks. Winter, summer, monsoon & autumn treks. Kedarkantha, Har Ki Dun, Kuari Pass & more. Book your Himalayan adventure.',
  openGraph: {
    title: 'Explore the Himalayas with Expert-Led Treks | Trekkers Heaven',
    description:
      'Top Himalayan treks in India & Nepal. Snow peaks, alpine meadows, spiritual trails. Expert guides, safe expeditions.',
  },
};

export default function TreksPage() {
  return (
    <main className="treks-page">
      {/* Hero Section */}
      <section className="treks-hero">
        <div className="treks-hero-overlay" />
        <Image
          src="/hero-img.png"
          alt="Himalayan trekking adventure"
          fill
          priority
          sizes="100vw"
          className="treks-hero-img"
        />
        <div className="treks-hero-content">
          <h1 className="treks-hero-title">
            Explore the Himalayas with Expert-Led Treks
          </h1>
          <p className="treks-hero-subtitle">
            Snow peaks, alpine meadows, spiritual trails — discover India&apos;s
            finest Himalayan adventures with local experts
          </p>
          <Link href="#winter-treks" className="treks-hero-cta">
            View Treks
          </Link>
        </div>
      </section>

      {/* Trek Sections */}
      <div className="treks-content">
        {trekSections.map((section) => (
          <TrekSection key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
