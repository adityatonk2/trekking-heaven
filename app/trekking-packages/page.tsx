import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Tent,
  UtensilsCrossed,
  HeartPulse,
  Shirt,
  Footprints,
  Mountain,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import {
  coreExpeditions,
  leisurePackage,
  logisticsInclusions,
  rentalGear,
  bookingPolicy,
  preparationPoints,
  bestSeasons,
} from '@/lib/trekking-packages-data';
import { WHATSAPP_URL, WHATSAPP_DISPLAY, TEL_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Trekking Packages | Himalayan Expeditions & Leisure Tours | Trekkers Heaven',
  description:
    'Explore our trekking packages: Chopta Tungnath, Hampta Pass, Kedarkantha, Kuari Pass. Manali–Kasol leisure package. Inclusions, rental gear, booking policy & best time to trek.',
};

const inclusionIcons: Record<string, React.ElementType> = {
  users: Users,
  tent: Tent,
  utensils: UtensilsCrossed,
  'heart-pulse': HeartPulse,
};

export default function TrekkingPackagesPage() {
  return (
    <main className="packages-page">
      {/* Hero */}
      <section className="packages-hero">
        <div className="packages-hero-overlay" />
        <Image
          src="/hero-img.png"
          alt="Himalayan trekking"
          fill
          priority
          sizes="100vw"
          className="packages-hero-img"
        />
        <div className="packages-hero-content">
          <h1 className="packages-hero-title">Trekking Packages</h1>
          <p className="packages-hero-subtitle">
            Curated Himalayan expeditions, leisure tours, and everything you need to know before you go
          </p>
        </div>
      </section>

      <div className="packages-content">
        {/* Core Trekking Expeditions */}
        <section id="expeditions" className="packages-section">
          <h2 className="packages-section-title">Core Trekking Expeditions</h2>
          <p className="packages-section-intro">
            Featured treks led by professional guides. Each package includes camping gear, meals, and support.
          </p>
          <div className="packages-grid">
            {coreExpeditions.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </section>

        {/* Leisure & Sightseeing Package */}
        <section id="leisure" className="packages-section packages-section-alt">
          <h2 className="packages-section-title">Leisure & Sightseeing Package</h2>
          <article className="leisure-card">
            <div className="leisure-card-image">
              <Image
                src={leisurePackage.image}
                alt={leisurePackage.title}
                width={600}
                height={360}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="leisure-card-content">
              <h3 className="leisure-card-title">{leisurePackage.title}</h3>
              <p className="leisure-card-duration">{leisurePackage.duration}</p>
              <ul className="leisure-card-highlights">
                {leisurePackage.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="leisure-card-actions">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi, I'm interested in the ${leisurePackage.title}. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* Logistics & Inclusions */}
        <section id="inclusions" className="packages-section">
          <h2 className="packages-section-title">Logistics & Inclusions</h2>
          <p className="packages-section-intro">
            Every expedition includes the following so you can focus on the trail.
          </p>
          <ul className="inclusions-list">
            {logisticsInclusions.map((item, i) => {
              const Icon = inclusionIcons[item.icon] ?? CheckCircle2;
              return (
                <li key={i} className="inclusions-item">
                  <span className="inclusions-icon" aria-hidden>
                    <Icon size={24} />
                  </span>
                  <span className="inclusions-text">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Rental Gear */}
        <section id="rental" className="packages-section packages-section-alt">
          <h2 className="packages-section-title">Rental Gear</h2>
          <p className="packages-section-intro">
            Don&apos;t have gear? Rent from us at pickup.
          </p>
          <div className="rental-grid">
            {rentalGear.map((row, i) => (
              <div key={i} className="rental-row">
                <span className="rental-item">
                  {row.item === 'Jacket' && <Shirt size={20} aria-hidden />}
                  {row.item === 'Trekking Shoes' && <Footprints size={20} aria-hidden />}
                  {row.item === 'Trekking Stick' && <Mountain size={20} aria-hidden />}
                  {row.item}
                </span>
                <span className="rental-price">{row.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Policy */}
        <section id="booking-policy" className="packages-section">
          <h2 className="packages-section-title">Booking Policy</h2>
          <ul className="policy-list">
            {bookingPolicy.map((point, i) => (
              <li key={i} className="policy-item">
                <AlertCircle size={20} className="policy-icon" aria-hidden />
                {point}
              </li>
            ))}
            <li className="policy-item policy-contact">
              <AlertCircle size={20} className="policy-icon" aria-hidden />
              <span>Contact: </span>
              <a href={TEL_URL} className="policy-link">{WHATSAPP_DISPLAY}</a>
              <span> / </span>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="policy-link">WhatsApp</a>
            </li>
          </ul>
        </section>

        {/* Preparation & Best Time */}
        <section id="before-you-go" className="packages-section packages-section-alt">
          <h2 className="packages-section-title">Before You Go</h2>
          <h3 className="packages-subtitle">Preparation</h3>
          <ul className="prep-list">
            {preparationPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <h3 className="packages-subtitle">Best Seasons</h3>
          <div className="seasons-grid">
            {bestSeasons.map((s, i) => (
              <div key={i} className="season-card">
                <Calendar size={22} className="season-icon" aria-hidden />
                <strong>{s.period}</strong>
                <span>{s.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="packages-cta">
          <h2 className="packages-cta-title">Ready to Book?</h2>
          <p className="packages-cta-text">
            Chat with us on WhatsApp or call for dates, availability, and custom packages.
          </p>
          <div className="packages-cta-buttons">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              WhatsApp
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
