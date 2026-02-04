import Link from 'next/link';
import type { ReactNode } from 'react';

interface SectionBlockProps {
  id?: string;
  title: string;
  intro: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export default function SectionBlock({
  id,
  title,
  intro,
  ctaLabel,
  ctaHref,
  className = '',
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className={`trek-section section-block ${className}`.trim()}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="section-block-inner">
        <h2
          id={id ? `${id}-heading` : undefined}
          className="section-title"
        >
          {title}
        </h2>
        <div className="section-intro">{intro}</div>
        <Link href={ctaHref} className="btn btn-primary btn-lg">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
