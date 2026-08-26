'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const SUBJECT_OPTIONS = [
  { value: 'trek-inquiry', label: 'Trek Inquiry' },
  { value: 'bike-tour', label: 'Bike Tour' },
  { value: 'village-tour', label: 'Village Tour' },
  { value: 'international', label: 'International Trek' },
  { value: 'custom', label: 'Custom Trip' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();

    if (!email && !phone) {
      setError('Please provide an email or phone number so we can reach you.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'contact',
          name: formData.get('name'),
          email,
          phone,
          subject: formData.get('subject'),
          message: formData.get('message'),
          company: formData.get('company'), // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form-success" role="status">
        <CheckCircle2 size={40} className="contact-form-success-icon" aria-hidden />
        <h3>Message Sent</h3>
        <p>Thanks for reaching out — we typically respond within 24 hours.</p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field — hidden from real users, catches simple bots */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required minLength={2} placeholder="Your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue="trek-inquiry">
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={5}
          placeholder="Tell us about your trek plans, group size, preferred dates..."
        />
      </div>

      {status === 'error' && error && (
        <p className="contact-form-error" role="alert">
          <AlertCircle size={16} aria-hidden /> {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
