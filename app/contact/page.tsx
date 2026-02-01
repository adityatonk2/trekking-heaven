import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, TEL_URL, WHATSAPP_DISPLAY } from '@/lib/constants';

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
                  <p>Narayan Vihar, Kargi Road</p>
                  <p>Dehradun, Uttarakhand 248001</p>
                </div>
                <div className="contact-card">
                  <h3><Phone size={20} className="contact-card-icon" aria-hidden /> Call Us</h3>
                  <p>
                    <a href={TEL_URL}>{WHATSAPP_DISPLAY}</a>
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
                <a href={TEL_URL} className="btn btn-primary">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send a Message</h2>
              <form
                className="contact-form"
                action="#"
                method="post"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="trek-inquiry">Trek Inquiry</option>
                    <option value="bike-tour">Bike Tour</option>
                    <option value="village-tour">Village Tour</option>
                    <option value="international">International Trek</option>
                    <option value="custom">Custom Trip</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your trek plans, group size, preferred dates..."
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
