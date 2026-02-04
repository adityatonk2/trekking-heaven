import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import TrekSection from '@/components/TrekSection';
import ReviewsSection from '@/components/ReviewsSection';
import OfficeLocation from '@/components/OfficeLocation';
import SectionBlock from '@/components/SectionBlock';
import { trekSections, type TrekSection as TrekSectionType } from '@/lib/trek-data';

function deduplicateTrekSections(sections: TrekSectionType[]): TrekSectionType[] {
  const seenSlugs = new Set<string>();
  return sections
    .map((section) => ({
      ...section,
      treks: section.treks.filter((trek) => {
        if (seenSlugs.has(trek.slug)) return false;
        seenSlugs.add(trek.slug);
        return true;
      }),
    }))
    .filter((section) => section.treks.length > 0);
}

const uniqueTrekSections = deduplicateTrekSections(trekSections);

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="main-content">
        {uniqueTrekSections.map((section) => (
          <TrekSection key={section.id} section={section} />
        ))}

        <section id="reviews" className="trek-section">
          <ReviewsSection />
        </section>

        <OfficeLocation />

        <section id="customize" className="trek-section trek-section-plan">
          <div className="plan-props-container">
            <div className="plan-prop-visual">
              <Image
                src="/props/adventure-photo.jpg"
                alt="Plan your Himalayan adventure"
                width={400}
                height={280}
                className="plan-prop-img"
              />
            </div>
            <div className="plan-prop-content">
              <h2 className="section-title">Plan Your Trek</h2>
              <div className="section-intro">
                <p>
                  Customize your adventure with us. Tell us your preferences — duration,
                  location, group size — and we&apos;ll design a trek that fits.
                </p>
              </div>
              <Link href="/customize" className="btn btn-primary btn-lg">
                Customize Your Trek
              </Link>
            </div>
          </div>
        </section>

        <SectionBlock
          id="blogs"
          title="Blogs & Articles"
          intro={
            <p>
              Explore trekking tips, gear guides, and stories from the trail.
              Our blog brings you closer to the Himalayas.
            </p>
          }
          ctaLabel="Read Articles"
          ctaHref="/articles"
        />

        <SectionBlock
          id="videos"
          title="Trek Documentaries & Videos"
          intro={
            <p>
              Watch documentary-style videos from our treks. Real experiences,
              real mountains.
            </p>
          }
          ctaLabel="Watch Videos"
          ctaHref="/videos"
        />
      </main>
    </>
  );
}
