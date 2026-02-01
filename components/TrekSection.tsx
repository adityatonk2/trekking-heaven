import Image from 'next/image';
import TrekCard from './TrekCard';
import type { TrekSection as TrekSectionType } from '@/lib/trek-data';

interface TrekSectionProps {
  section: TrekSectionType;
}

function isIntroItem(
  item: string | { bold: string; text: string }
): item is { bold: string; text: string } {
  return typeof item === 'object' && 'bold' in item;
}

export default function TrekSection({ section }: TrekSectionProps) {
  const showSecondaryLogo = section.id === 'winter-treks';

  return (
    <section id={section.id} className="trek-section">
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
        {section.treks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} />
        ))}
      </div>
    </section>
  );
}
