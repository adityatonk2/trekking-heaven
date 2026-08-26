'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className="state-page">
      <div className="state-page-inner">
        <AlertTriangle size={56} className="state-page-icon" aria-hidden />
        <h1 className="state-page-title">Something Went Wrong</h1>
        <p className="state-page-text">
          We hit a snag loading this page. Please try again, or head back home.
        </p>
        <div className="state-page-actions">
          <button type="button" onClick={reset} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
