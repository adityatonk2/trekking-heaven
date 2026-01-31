import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TrekSection from '@/components/TrekSection';
import { trekSections } from '@/lib/trek-data';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="main-content">
        {trekSections.map((section) => (
          <TrekSection key={section.id} section={section} />
        ))}

        {/* Blogs & Articles */}
        <section id="blogs" className="trek-section">
          <h2 className="section-title">Blogs & Articles</h2>
          <div className="section-intro">
            <p>
              Explore trekking tips, gear guides, and stories from the trail.
              Our blog brings you closer to the Himalayas.
            </p>
          </div>
          <Link href="/articles" className="btn btn-primary">
            Read Articles
          </Link>
        </section>

        {/* Videos */}
        <section id="videos" className="trek-section">
          <h2 className="section-title">Trek Documentaries & Videos</h2>
          <div className="section-intro">
            <p>
              Watch documentary-style videos from our treks. Real experiences,
              real mountains.
            </p>
          </div>
          <Link href="/videos" className="btn btn-primary">
            Watch Videos
          </Link>
        </section>
      </main>
    </>
  );
}
