'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { WHATSAPP_NUMBER } from '@/lib/constants';

const SERVICE_TYPES = [
  'Trekking',
  'Bike Tour',
  'Village Tour',
  'International Trek',
  'Expedition',
  'Custom Package',
];

interface FormData {
  name: string;
  contact: string;
  email: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  participants: string;
  ageGroup: string;
  budget: string;
  serviceType: string;
  extra: string;
}

function buildWhatsAppMessage(data: FormData): string {
  // Format dates if available
  const dateRange = (data.startDate || data.endDate)
    ? `${data.startDate || '?'} to ${data.endDate || '?'}`
    : '—';

  const lines = [
    '*Customize Trek Request*',
    '',
    `Name: ${data.name || '—'}`,
    `Contact: ${data.contact || '—'}`,
    `Email: ${data.email || '—'}`,
    `Preferred Dates: ${dateRange}`,
    `Duration: ${data.duration || '—'}`,
    `Location: ${data.location || '—'}`,
    `Participants: ${data.participants || '—'}`,
    `Age group: ${data.ageGroup || '—'}`,
    `Budget: ${data.budget || '—'}`,
    `Type of service: ${data.serviceType || '—'}`,
  ];
  if (data.extra?.trim()) {
    lines.push('', `Extra details: ${data.extra.trim()}`);
  }
  return lines.join('\n');
}

export default function CustomizePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    email: '',
    startDate: '',
    endDate: '',
    duration: '',
    location: '',
    participants: '',
    ageGroup: '',
    budget: '',
    serviceType: '',
    extra: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage(formData);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="customize-page">
      <section className="customize-hero">
        <div className="customize-hero-overlay" />
        <Image
          src="/hero-img.png"
          alt="Himalayan trekking"
          fill
          priority
          sizes="100vw"
          className="customize-hero-img"
        />
        <div className="customize-hero-content">
          <h1 className="customize-hero-title">Customize Your Trek</h1>
          <nav className="customize-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Customize Your Trek</span>
          </nav>
        </div>
      </section>

      <section className="customize-section">
        <div className="customize-container">
          <div className="customize-props-row">
            <div className="customize-prop">
              <Image
                src="/props/traveler-bag-map.gif"
                alt="Traveler with backpack and map"
                width={280}
                height={200}
                unoptimized
                className="customize-prop-img"
              />
              <p className="customize-prop-caption">Plan your adventure</p>
            </div>
            <div className="customize-prop">
              <Image
                src="/props/tourist-map-navigation.gif"
                alt="Adventure navigation and exploration"
                width={280}
                height={200}
                unoptimized
                className="customize-prop-img"
              />
              <p className="customize-prop-caption">Find your way</p>
            </div>
          </div>
          <h2 className="customize-form-title">Customize Your Trek</h2>
          <p className="customize-intro">
            Customizing the trek works well for families, students, company
            teams, and friends. We keep fixed-departure batches to 15 or fewer
            so groups bond well. For your own group we run trips differently—we
            maintain at least one leader per 8 participants and can split into
            multiple sub-groups. Share your requirements below and we&apos;ll
            plan something that fits.
          </p>

          <form className="customize-form" onSubmit={handleSubmit}>
            <div className="customize-form-grid">
              <div className="customize-form-col">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact No.</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="Enter your mobile number"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration of the trip</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    placeholder="e.g. 5 days, 1 week"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ageGroup">Age group of participants</label>
                  <input
                    type="text"
                    id="ageGroup"
                    name="ageGroup"
                    placeholder="e.g. 25–40, families"
                    value={formData.ageGroup}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget (approx.) for entire trip</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="Enter approximate budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="customize-form-col">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Replaced 'dates' text input with Date Pickers */}
                <div className="form-group">
                  <label>Preferred Dates</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="startDate" style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.2rem', display: 'block' }}>Start Date</label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        style={{ width: '100%' }} // Ensure full width within flex item
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="endDate" style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.2rem', display: 'block' }}>End Date</label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Preferable location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Uttarakhand, Himachal, Nepal"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="participants">No. of participants</label>
                  <input
                    type="text"
                    id="participants"
                    name="participants"
                    placeholder="Enter number of participants"
                    value={formData.participants}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceType">Type of service</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="">Select type of service</option>
                    {SERVICE_TYPES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="extra">Any extra details</label>
                  <textarea
                    id="extra"
                    name="extra"
                    rows={3}
                    placeholder="Optional — special requests, etc."
                    value={formData.extra}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="customize-form-actions">
              <button type="submit" className="btn btn-primary btn-send">
                Send via WhatsApp
              </button>
              <p className="customize-form-hint">
                You&apos;ll be taken to WhatsApp with your details pre-filled.
                Send the message to get a reply from us.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
