import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import OfficeLocation from '@/components/OfficeLocation';
import ContactForm from '@/components/ContactForm';
import {
  WHATSAPP_URL,
  TEL_PRIMARY_URL,
  TEL_SECONDARY_URL,
  PRIMARY_DISPLAY,
  SECONDARY_DISPLAY,
  OFFICE_ADDRESS,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Trekkers Heaven — Himalayan Trekking Experts',
  description:
    'Get in touch with Trekkers Heaven. Visit us in Dehradun, call, email, or WhatsApp. We\'re here to help plan your Himalayan adventure.',
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <Image
          src="/hero-img.png"
          alt="Himalayan trekking"
          fill
          priority
          sizes="100vw"
          className="contact-hero-img"
        />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            We&apos;re here to help plan your Himalayan adventure
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our treks, bike tours, or village tours?
                Reach out—we typically respond within 24 hours.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <h3><MapPin size={20} className="contact-card-icon" aria-hidden /> Visit Us</h3>
                  <p>{OFFICE_ADDRESS.line1}</p>
                  <p>{OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state} {OFFICE_ADDRESS.pin}</p>
                </div>
                <div className="contact-card">
                  <h3><Phone size={20} className="contact-card-icon" aria-hidden /> Call Us</h3>
                  <p>
                    <a href={TEL_PRIMARY_URL}>{PRIMARY_DISPLAY}</a>
                    {', '}
                    <a href={TEL_SECONDARY_URL}>{SECONDARY_DISPLAY}</a>
                  </p>
                </div>
                <div className="contact-card">
                  <h3><Mail size={20} className="contact-card-icon" aria-hidden /> Email Us</h3>
                  <p>
                    <a href="mailto:trekkersheaven@zohomail.in">
                      trekkersheaven@zohomail.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-cta-buttons">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a href={TEL_PRIMARY_URL} className="btn btn-primary">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <OfficeLocation />

      <section className="contact-cta">
        <div className="contact-container">
          <h2>Ready to Explore?</h2>
          <p>Browse our treks and find your perfect Himalayan adventure.</p>
          <Link href="/treks" className="btn btn-secondary">
            View All Treks
          </Link>
        </div>
      </section>
    </main>
  );
}
