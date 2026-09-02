import HeroSection from '@/components/HeroSection';
import TrekCarousel from '@/components/TrekCarousel';
import CustomizeBanner from '@/components/CustomizeBanner';
import ReviewsSection from '@/components/ReviewsSection';
import OfficeLocation from '@/components/OfficeLocation';
import SectionBlock from '@/components/SectionBlock';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="main-content">
        <TrekCarousel />

        <CustomizeBanner />

        <section id="reviews" className="trek-section">
          <ReviewsSection />
        </section>

        <OfficeLocation />

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
