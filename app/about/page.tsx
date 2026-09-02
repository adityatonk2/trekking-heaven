import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroCollage from '@/components/HeroCollage';

export const metadata: Metadata = {
  title: 'About Us | Trekkers Heaven — Himalayan Trekking Experts',
  description:
    'Learn about Trekkers Heaven. We are passionate Himalayan travellers crafting unforgettable trekking experiences. Safety-first, local expertise, adventure-driven.',
  openGraph: {
    title: 'About Trekkers Heaven | Himalayan Trekking Experts',
    description:
      'A diverse group of passionate travellers crafting experiences for guests to create unforgettable journeys in the Himalayas.',
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <HeroCollage />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Trekkers Heaven</h1>
          <p className="about-hero-subtitle">
            Passionate Himalayan travellers crafting unforgettable experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Our Story</h2>
          <div className="about-content-grid">
            <div className="about-text">
              <p>
                Trekkers Heaven was born from a deep love for the Himalayas. We
                are a diverse group of passionate travellers, mountaineers, and
                local guides who came together with one goal: to craft
                experiences that allow every guest to create an unforgettable
                journey in the world&apos;s most majestic mountains.
              </p>
              <p>
                Based in Dehradun, the gateway to Uttarakhand&apos;s trekking
                trails, we combine years of on-ground expertise with a genuine
                commitment to safety, sustainability, and authentic adventure.
                From snow-clad winter treks to lush summer meadows, from village
                tours to high-altitude expeditions — we design every trip with
                care and attention to detail.
              </p>
            </div>
            <div className="about-image-block">
              <Image
                src="/props/adventure-photo.jpg"
                alt="Himalayan trekking adventure"
                width={500}
                height={350}
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <h2 className="about-section-title">Our Mission & Values</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Safety First</h3>
              <p>
                Every trek is planned with safety at the core. Expert guides,
                proper equipment, and small group sizes ensure a secure and
                enjoyable experience.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Local Expertise</h3>
              <p>
                Our team knows the trails intimately. We share local stories,
                hidden routes, and the best times to experience each region.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <h3>Sustainable Adventure</h3>
              <p>
                We believe in leaving the mountains better than we found them.
                Responsible trekking, minimal impact, and respect for local
                communities guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Why Choose Trekkers Heaven</h2>
          <ul className="about-list">
            <li>Expert-led treks with certified mountain guides</li>
            <li>Small batch sizes for personalized attention</li>
            <li>Curated treks across winter, summer, monsoon, and autumn</li>
            <li>International treks including Everest Base Camp & Annapurna</li>
            <li>Village tours and cultural immersion experiences</li>
            <li>Bike tours through Leh-Ladakh and Spiti Valley</li>
            <li>Transparent pricing with no hidden costs</li>
            <li>Based in Dehradun — at the heart of Himalayan trekking</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <h2 className="about-cta-title">Ready for Your Himalayan Adventure?</h2>
          <p className="about-cta-text">
            Explore our treks, find your perfect trail, or get in touch — we&apos;re
            just a call away.
          </p>
          <div className="about-cta-buttons">
            <Link href="/treks" className="btn btn-primary">
              View All Treks
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
