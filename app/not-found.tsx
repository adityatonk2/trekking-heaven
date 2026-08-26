import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="state-page">
      <div className="state-page-inner">
        <Compass size={56} className="state-page-icon" aria-hidden />
        <h1 className="state-page-title">Trail Not Found</h1>
        <p className="state-page-text">
          Looks like this path doesn&apos;t exist. The page may have moved or the link
          might be outdated.
        </p>
        <div className="state-page-actions">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/treks" className="btn btn-secondary">
            Browse Treks
          </Link>
        </div>
      </div>
    </main>
  );
}
