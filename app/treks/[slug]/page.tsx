import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Backpack,
  MapPin,
  Calendar,
  Mountain,
  Footprints,
  Clock,
  Train,
  ArrowLeftRight,
  Tent,
  UtensilsCrossed,
  Home,
  Snowflake,
  MessageCircle,
  Package,
} from 'lucide-react';
import {
  getTrekDetailBySlug,
  getAllTrekSlugs,
} from '@/lib/trek-detail-data';
import { WHATSAPP_URL } from '@/lib/constants';

interface TrekDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTrekSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TrekDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trek = getTrekDetailBySlug(slug);
  if (!trek) return { title: 'Trek Not Found' };
  return {
    title: `${trek.name} | Trekkers Heaven`,
    description: `${trek.name} — ${trek.days} days, ${trek.difficulty}. ${trek.origin}. ${trek.bestSeason ?? 'Himalayan trek with Trekkers Heaven.'}`,
    openGraph: {
      title: `${trek.name} | Trekkers Heaven`,
      description: `${trek.days} days, ${trek.difficulty}. ${trek.origin}`,
      images: trek.gallery?.length ? [trek.gallery[0]] : [trek.image],
    },
  };
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="trek-detail-row">
      <span className="trek-detail-icon" aria-hidden>{icon}</span>
      <div className="trek-detail-meta">
        <span className="trek-detail-label">{label}</span>
        <span className="trek-detail-value">{value}</span>
      </div>
    </div>
  );
}

export default async function TrekDetailPage({ params }: TrekDetailPageProps) {
  const { slug } = await params;
  const trek = getTrekDetailBySlug(slug);

  if (!trek) notFound();

  const gallery = trek.gallery ?? [trek.image, trek.image, trek.image, trek.image];
  const mainImage = gallery[0];
  const gridImages = gallery.slice(1, 5);
  while (gridImages.length < 4) gridImages.push(trek.image);

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in *${trek.name}* (${trek.days} days). Please share details and dates.`
  );
  const whatsappLink = `${WHATSAPP_URL}?text=${whatsappMessage}`;

  return (
    <main className="trek-detail-page">
      <div className="trek-detail-container">
        {/* Breadcrumb */}
        <nav className="trek-detail-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/treks">Treks</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{trek.name}</span>
        </nav>

        {/* Gallery */}
        <section className="trek-detail-gallery">
          <div className="trek-detail-gallery-main">
            <Image
              src={mainImage}
              alt={trek.name}
              width={700}
              height={440}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="trek-detail-gallery-img"
            />
          </div>
          <div className="trek-detail-gallery-grid">
            {gridImages.map((src, i) => (
              <div key={i} className="trek-detail-gallery-thumb">
                <Image
                  src={src}
                  alt={`${trek.name} view ${i + 2}`}
                  width={280}
                  height={180}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Content: Details + Pricing */}
        <div className="trek-detail-content">
          <article className="trek-detail-card">
            <h1 className="trek-detail-title">{trek.name}</h1>

            <div className="trek-detail-rows">
              <DetailRow
                icon={<Backpack size={20} />}
                label="Trek"
                value={trek.name}
              />
              <DetailRow
                icon={<MapPin size={20} />}
                label="Region"
                value={trek.region ?? trek.origin}
              />
              <DetailRow
                icon={<Calendar size={20} />}
                label="Duration"
                value={`${trek.days} Days`}
              />
              <DetailRow
                icon={<Mountain size={20} />}
                label="Grade"
                value={trek.difficulty}
              />
              <DetailRow
                icon={<Mountain size={20} />}
                label="Max Altitude"
                value={trek.maxAltitude ?? '—'}
              />
              <DetailRow
                icon={<Footprints size={20} />}
                label="Trekking Km"
                value={trek.trekkingKm ?? '—'}
              />
              <DetailRow
                icon={<MapPin size={20} />}
                label="Pickup Point"
                value={trek.pickupPoint ?? trek.origin}
              />
              <DetailRow
                icon={<MapPin size={20} />}
                label="Drop Point"
                value={trek.dropPoint ?? trek.origin}
              />
              <DetailRow
                icon={<Clock size={20} />}
                label="Reporting Time"
                value={trek.reportingTime ?? '—'}
              />
              <DetailRow
                icon={<Clock size={20} />}
                label="Dropping Time"
                value={trek.droppingTime ?? '—'}
              />
              <DetailRow
                icon={<Train size={20} />}
                label="Train"
                value={trek.trainInfo ?? '—'}
              />
              <DetailRow
                icon={<ArrowLeftRight size={20} />}
                label="Services from"
                value={trek.servicesFrom ?? trek.origin}
              />
              <DetailRow
                icon={<Tent size={20} />}
                label="Base Camp"
                value={trek.baseCamp ?? '—'}
              />
              <DetailRow
                icon={<UtensilsCrossed size={20} />}
                label="Food"
                value={trek.food ?? '—'}
              />
              <DetailRow
                icon={<Home size={20} />}
                label="Stay"
                value={trek.stay ?? '—'}
              />
              <DetailRow
                icon={<Snowflake size={20} />}
                label="Best Season"
                value={trek.bestSeason ?? '—'}
              />
            </div>
          </article>

          <aside className="trek-detail-sidebar">
            <div className="trek-detail-price-card">
              {trek.priceStrikethrough && (
                <p className="trek-detail-price-old">
                  Starting From <s>{trek.priceStrikethrough}</s>
                </p>
              )}
              <p className="trek-detail-price-main">{trek.pricePerPerson} Per Person</p>
              {trek.discountBadge && (
                <span className="trek-detail-badge">{trek.discountBadge}</span>
              )}
              {trek.priceNote && (
                <p className="trek-detail-price-note">{trek.priceNote}</p>
              )}

              {trek.servicePoints && trek.servicePoints.length > 0 && (
                <ul className="trek-detail-service-points">
                  {trek.servicePoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="trek-detail-actions">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp trek-detail-btn-whatsapp"
                >
                  <MessageCircle size={20} />
                  Start Chat
                </a>
                <Link href="/customize" className="btn btn-primary trek-detail-btn-primary">
                  <Package size={20} />
                  Get Package
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
