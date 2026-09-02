import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TrekCard from './TrekCard';
import type { TrekSection as TrekSectionType } from '@/lib/trek-data';

interface TrekSectionProps {
  section: TrekSectionType;
  /** When set, only this many treks render, followed by a "View all" tile. */
  previewLimit?: number;
  /** Link target for the "View all" tile. Required when previewLimit is set. */
  viewAllHref?: string;
  /** Tints the section background to break up the page into visual bands. */
  tinted?: boolean;
}

function isIntroItem(
  item: string | { bold: string; text: string }
): item is { bold: string; text: string } {
  return typeof item === 'object' && 'bold' in item;
}

export default function TrekSection({
  section,
  previewLimit,
  viewAllHref,
  tinted,
}: TrekSectionProps) {
  const showSecondaryLogo = section.id === 'winter-treks';
  const isPreview = Boolean(previewLimit && section.treks.length > previewLimit);
  const visibleTreks = isPreview ? section.treks.slice(0, previewLimit) : section.treks;
  const remaining = section.treks.length - visibleTreks.length;

  return (
    <section
      id={section.id}
      className={`trek-section${tinted ? ' trek-section-tinted' : ''}`}
    >
      <div className="section-title-row">
        <h2 className="section-title">
          {section.title}
          {section.titleBr && (
            <>
              <br />
              {section.titleBr}
            </>
          )}
        </h2>
        {showSecondaryLogo && (
          <Image
            src="/secondary-logo.png"
            alt="Trekkers Heaven - Explore the Unknown"
            width={190}
            height={120}
            className="section-secondary-logo"
          />
        )}
      </div>
      {section.intro && (
        <div className="section-intro">
          {section.intro.map((item, i) => (
            <p key={i}>
              {isIntroItem(item) ? (
                <>
                  <strong>{item.bold}</strong>
                  {item.text}
                </>
              ) : (
                item
              )}
            </p>
          ))}
        </div>
      )}
      <div
        className={`trek-grid ${section.gridLarge ? 'trek-grid-large' : ''}`}
      >
        {visibleTreks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} />
        ))}
        {isPreview && viewAllHref && (
          <Link href={viewAllHref} className="trek-card trek-card-viewall">
            <span className="trek-card-viewall-count">+{remaining}</span>
            <span className="trek-card-viewall-label">
              View All {section.treks.length} Treks
            </span>
            <span className="trek-card-viewall-arrow">
              <ArrowRight size={18} />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
