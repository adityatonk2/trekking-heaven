'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { getAllTreks } from '@/lib/trek-data';

const SHOW_DELAY_MS = 30000;
const DISMISS_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days
const DISMISSED_KEY = 'th_quick_query_dismissed_until';
const SUBMITTED_KEY = 'th_quick_query_submitted';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function shouldShowPopup(): boolean {
  try {
    if (localStorage.getItem(SUBMITTED_KEY)) return false;
    const dismissedUntil = localStorage.getItem(DISMISSED_KEY);
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) return false;
    return true;
  } catch {
    return true;
  }
}

export default function QuickQueryPopup() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const treks = getAllTreks();

  useEffect(() => {
    if (!shouldShowPopup()) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function dismiss() {
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now() + DISMISS_COOLDOWN_MS));
    } catch {
      // localStorage unavailable — fine, popup just won't remember the dismissal
    }
    setVisible(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    const formData = new FormData(e.currentTarget);
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();

    if (!phone && !email) {
      setError('Please share a phone number or email so we can reach you.');
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
          source: 'popup',
          name: formData.get('name'),
          phone,
          email,
          trekInterest: formData.get('trekInterest'),
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
      try {
        localStorage.setItem(SUBMITTED_KEY, '1');
      } catch {
        // ignore
      }
      setTimeout(() => setVisible(false), 3000);
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (!visible) return null;

  return (
    <div className="quick-query-overlay" role="dialog" aria-modal="true" aria-label="Quick trek query" onClick={dismiss}>
      <div className="quick-query-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="quick-query-close" onClick={dismiss} aria-label="Close">
          <X size={18} />
        </button>

        {status === 'success' ? (
          <div className="quick-query-success">
            <CheckCircle2 size={40} className="quick-query-success-icon" />
            <h3>Got it!</h3>
            <p>We&apos;ve received your query — our team will reach out shortly.</p>
          </div>
        ) : (
          <>
            <div className="quick-query-header">
              <span className="quick-query-eyebrow">Planning a trek?</span>
              <h3>Tell us what you&apos;re looking for</h3>
              <p>Share a few details and we&apos;ll get back to you with the best options.</p>
            </div>

            <form className="quick-query-form" onSubmit={handleSubmit} noValidate>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="qq-company">Company</label>
                <input type="text" id="qq-company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="quick-query-row">
                <input type="text" name="name" placeholder="Your name" required minLength={2} />
                <input type="tel" name="phone" placeholder="Phone number" />
              </div>
              <input type="email" name="email" placeholder="Email (optional)" />
              <select name="trekInterest" defaultValue="">
                <option value="">Which trek interests you?</option>
                {treks.map((t) => (
                  <option key={t.slug} value={t.name}>
                    {t.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet — suggest something</option>
              </select>
              <textarea name="message" placeholder="Anything else we should know? (optional)" rows={2} />

              {status === 'error' && error && (
                <p className="quick-query-error" role="alert">
                  <AlertCircle size={14} /> {error}
                </p>
              )}

              <button type="submit" className="btn btn-primary btn-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send My Query'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
