import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Calendar,
  Mountain,
  Footprints,
  Clock,
  Train,
  Tent,
  UtensilsCrossed,
  Home,
  Snowflake,
  MessageCircle,
  CheckCircle2,
  Plane,
  Bus,
  AlertCircle,
  HelpCircle,
  Download,
  Phone,
  Mail,
  Camera,
  Users,
  TrendingUp,
  Shield,
  Star,
  Info
} from 'lucide-react';
import {
  getTrekDetailBySlug,
  getAllTrekSlugs,
} from '@/lib/trek-detail-data';
import { WHATSAPP_URL, PRIMARY_DISPLAY } from '@/lib/constants';
import ReviewsSection from '@/components/ReviewsSection';
import TrekItinerary from '@/components/TrekItinerary';
import RentalGear from '@/components/RentalGear';
import ClientStories from '@/components/ClientStories';

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
    description: `${trek.name} — ${trek.days} days, ${trek.difficulty}. ${trek.origin}.`,
    openGraph: {
      title: `${trek.name} | Trekkers Heaven`,
      description: `${trek.days} days, ${trek.difficulty}. ${trek.origin}`,
      images: trek.gallery?.length ? [trek.gallery[0]] : [trek.image],
    },
  };
}

export default async function TrekDetailPage({ params }: TrekDetailPageProps) {
  const { slug } = await params;
  const trek = getTrekDetailBySlug(slug);

  if (!trek) notFound();

  const gallery = trek.gallery ?? [trek.image];
  const mainImage = gallery[0];

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in *${trek.name}* (${trek.days} days). Please share details and dates.`
  );
  const whatsappLink = `${WHATSAPP_URL}?text=${whatsappMessage}`;

  return (
    <main className="trek-detail-page-new">
      {/* Hero Section with Image Gallery */}
      <section className="trek-hero-new">
        <div className="trek-hero-image-main">
          <Image
            src={mainImage}
            alt={trek.name}
            fill
            priority
            className="object-cover"
          />
          <div className="trek-hero-overlay" />
        </div>

        <div className="trek-hero-content-new">
          <div className="container-new">
            {/* Breadcrumbs */}
            <nav className="breadcrumb-new">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/treks">Treks</Link>
              <span>/</span>
              <span>{trek.name}</span>
            </nav>

            {/* Title & Quick Stats */}
            <div className="trek-hero-header">
              <div className="trek-hero-title-section">
                <h1 className="trek-title-new">{trek.name}</h1>
                <p className="trek-subtitle-new">
                  <MapPin size={18} />
                  {trek.region?.split(',')[0] ?? trek.origin}
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="trek-hero-actions">
                <a href="#gallery" className="btn-icon-new">
                  <Camera size={20} />
                  Gallery
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener" className="btn-primary-new">
                  <MessageCircle size={20} />
                  Book Now
                </a>
              </div>
            </div>

            {/* Key Stats Bar */}
            <div className="trek-stats-grid-new">
              <div className="stat-card-new">
                <Calendar className="stat-icon-new" size={24} />
                <div>
                  <div className="stat-label-new">Duration</div>
                  <div className="stat-value-new">{trek.days} Days</div>
                </div>
              </div>
              <div className="stat-card-new">
                <Mountain className="stat-icon-new" size={24} />
                <div>
                  <div className="stat-label-new">Max Altitude</div>
                  <div className="stat-value-new">{trek.maxAltitude ?? '—'}</div>
                </div>
              </div>
              <div className="stat-card-new">
                <Footprints className="stat-icon-new" size={24} />
                <div>
                  <div className="stat-label-new">Distance</div>
                  <div className="stat-value-new">{trek.trekkingKm ?? '—'}</div>
                </div>
              </div>
              <div className="stat-card-new">
                <TrendingUp className="stat-icon-new" size={24} />
                <div>
                  <div className="stat-label-new">Difficulty</div>
                  <div className="stat-value-new">{trek.difficulty}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="trek-nav-sticky">
        <div className="container-new">
          <div className="trek-nav-links-new">
            {['Overview', 'Itinerary', 'Pricing', 'How to Reach', 'Rental Gears', 'Client Moments', 'Reviews'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="trek-nav-link-new"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container-new trek-content-new">
        <div className="trek-layout-new">
          {/* Main Content */}
          <div className="trek-main-content-new">

            {/* Overview Section */}
            <section id="overview" className="content-section-new">
              <h2 className="section-title-new">
                <Info size={28} />
                Trek Overview
              </h2>

              <div className="overview-grid-new">
                <div className="overview-card-new">
                  <Mountain size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Trek Name</div>
                    <div className="overview-value-new">{trek.name}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <MapPin size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Location</div>
                    <div className="overview-value-new">{trek.region ?? 'India'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Clock size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Duration</div>
                    <div className="overview-value-new">{trek.days} Days</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Mountain size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Max Altitude</div>
                    <div className="overview-value-new">{trek.maxAltitude ?? '—'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <AlertCircle size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Difficulty</div>
                    <div className="overview-value-new">{trek.difficulty}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Footprints size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Trek Distance</div>
                    <div className="overview-value-new">{trek.trekkingKm ?? '—'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Tent size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Base Camp</div>
                    <div className="overview-value-new">{trek.baseCamp ?? trek.origin}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Snowflake size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Best Season</div>
                    <div className="overview-value-new">{trek.bestSeason ?? 'All Year'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Home size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Accommodation</div>
                    <div className="overview-value-new">{trek.stay ?? 'Camping + Homestay'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <UtensilsCrossed size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Meals</div>
                    <div className="overview-value-new">{trek.food ?? 'Nutritious Veg Meals'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Train size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Nearest Railway</div>
                    <div className="overview-value-new">{trek.railHead ?? 'Nearby'}</div>
                  </div>
                </div>
                <div className="overview-card-new">
                  <Plane size={20} className="overview-icon-new" />
                  <div>
                    <div className="overview-label-new">Nearest Airport</div>
                    <div className="overview-value-new">{trek.airport ?? 'Nearby'}</div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {(trek.highlights || trek.servicePoints) && (
                <div className="highlights-section-new">
                  <h3 className="subsection-title-new">
                    <Star size={22} />
                    Trek Highlights
                  </h3>
                  <ul className="highlights-list-new">
                    {trek.highlights?.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={20} />
                        <span>{h}</span>
                      </li>
                    ))}
                    {trek.servicePoints?.map((p, i) => (
                      <li key={`s-${i}`}>
                        <CheckCircle2 size={20} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Itinerary Section */}
            <section id="itinerary" className="content-section-new">
              <h2 className="section-title-new">
                <Calendar size={28} />
                Day-by-Day Itinerary
              </h2>
              {trek.itinerary ? (
                <>
                  <TrekItinerary itinerary={trek.itinerary} />
                  {trek.pdfUrl && (
                    <a href={trek.pdfUrl} download className="btn-download-new">
                      <Download size={20} />
                      Download Detailed Itinerary PDF
                    </a>
                  )}
                </>
              ) : (
                <div className="no-data-new">Itinerary details coming soon...</div>
              )}
            </section>

            {/* Who Can Participate */}
            {trek.whoCanParticipate && (
              <section id="who-can-participate" className="content-section-new">
                <h2 className="section-title-new">
                  <Users size={28} />
                  Who Can Participate
                </h2>
                <ul className="participation-list-new">
                  {trek.whoCanParticipate.map((criteria, i) => (
                    <li key={i}>
                      <Shield size={18} />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* How To Reach */}
            {trek.howToReach && (
              <section id="how-to-reach" className="content-section-new">
                <h2 className="section-title-new">
                  <MapPin size={28} />
                  How To Reach
                </h2>

                <div className="reach-grid-new">
                  <div className="reach-card-new">
                    <h3 className="reach-title-new">
                      <MapPin size={20} />
                      Pickup Information
                    </h3>
                    <ul>
                      {trek.howToReach.pickup.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>

                  <div className="reach-card-new reach-card-accent">
                    <h3 className="reach-title-new">
                      <Train size={20} />
                      How to Reach Base
                    </h3>
                    <ol>
                      {trek.howToReach.reachDehradun.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="reach-card-new">
                    <h3 className="reach-title-new">
                      <Bus size={20} />
                      Drop-Off Information
                    </h3>
                    <ul>
                      {trek.howToReach.dropOff.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Reviews */}
            <section id="reviews" className="content-section-new">
              <ReviewsSection />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="trek-sidebar-new">
            <div className="sidebar-sticky-new">
              {/* Pricing Card */}
              <div id="pricing" className="pricing-card-new">
                <div className="pricing-header-new">
                  <div className="price-main-new">
                    <span className="price-amount-new">{trek.pricePerPerson}</span>
                    {!trek.pricePerPerson?.toLowerCase().includes('request') && (
                      <span className="price-unit-new">/Person</span>
                    )}
                  </div>
                  {trek.priceStrikethrough && (
                    <div className="price-old-new">{trek.priceStrikethrough}</div>
                  )}
                  {trek.discountBadge && (
                    <div className="discount-badge-new">{trek.discountBadge}</div>
                  )}
                </div>

                <div className="pricing-body-new">
                  <h3 className="pricing-section-title-new">Fixed Departure Dates</h3>
                  <div className="dates-grid-new">
                    {['March 2026', 'April 2026', 'May 2026'].map((month, i) => (
                      <button key={i} className="date-btn-new">
                        {month}
                      </button>
                    ))}
                  </div>

                  <h3 className="pricing-section-title-new">Add-ons</h3>
                  <div className="addons-grid-new">
                    <div className="addon-item-new">
                      <Shield size={16} />
                      <span>Insurance</span>
                      <span className="addon-price-new">₹280</span>
                    </div>
                    <div className="addon-item-new">
                      <Bus size={16} />
                      <span>Transport</span>
                      <span className="addon-price-new">₹2,200</span>
                    </div>
                    <div className="addon-item-new">
                      <Users size={16} />
                      <span>Offload</span>
                      <span className="addon-price-new">₹2,000</span>
                    </div>
                  </div>

                  <div className="pricing-actions-new">
                    <Link href="/customize" className="btn-book-new">
                      Book This Trek
                    </Link>
                    <a href={whatsappLink} target="_blank" rel="noopener" className="btn-whatsapp-new">
                      <MessageCircle size={20} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="contact-card-new">
                <h3 className="contact-title-new">
                  <HelpCircle size={20} />
                  Need Help?
                </h3>
                <p className="contact-text-new">
                  Our trek experts are here to help you plan your adventure.
                </p>
                <div className="contact-links-new">
                  <a href={`tel:${PRIMARY_DISPLAY}`} className="contact-link-new">
                    <Phone size={18} />
                    <span>{PRIMARY_DISPLAY}</span>
                  </a>
                  <a href="mailto:contact@trekkersheaven.com" className="contact-link-new">
                    <Mail size={18} />
                    <span>contact@trekkersheaven.com</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Rental Gears */}
      <section id="rental-gears" className="rental-section-new">
        <div className="wide">
          <h2 className="section-title-new section-title-center">
            <Camera size={28} />
            Rental Gears
          </h2>
          <RentalGear />
        </div>
      </section>

      {/* Client Moments */}
      <section id="client-moments" className="client-moments-section">
        <div className="wide">
          <ClientStories />
        </div>
      </section>
    </main>
  );
}
