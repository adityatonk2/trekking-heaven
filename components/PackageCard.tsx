import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Mountain, FileText, MessageCircle, Download } from 'lucide-react';
import type { ExpeditionPackage } from '@/lib/trekking-packages-data';
import { WHATSAPP_URL } from '@/lib/constants';

interface PackageCardProps {
  package: ExpeditionPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in *${pkg.title}* (${pkg.duration}). Please share itinerary and booking details.`
  );
  const whatsappLink = `${WHATSAPP_URL}?text=${whatsappMessage}`;

  return (
    <article className="package-card">
      {pkg.image && (
        <div className="package-card-image">
          <Image
            src={pkg.image}
            alt={pkg.title}
            width={400}
            height={240}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      )}
      <div className="package-card-content">
        <h3 className="package-card-title">{pkg.title}</h3>
        <p className="package-card-region">
          <MapPin size={14} aria-hidden />
          {pkg.region}
        </p>
        <div className="package-card-meta">
          <span>
            <Calendar size={14} aria-hidden />
            {pkg.duration}
          </span>
          <span>
            <Mountain size={14} aria-hidden />
            {pkg.altitude}
          </span>
        </div>
        <ul className="package-card-highlights">
          {pkg.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className="package-card-actions">
          {pkg.slug && (
            <Link href={`/treks/${pkg.slug}`} className="btn btn-secondary package-btn-itinerary">
              <FileText size={18} />
              View Itinerary
            </Link>
          )}
          {pkg.pdfUrl && (
            <a
              href={pkg.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary package-btn-pdf"
              title="Download Trek PDF"
            >
              <Download size={18} />
              Download PDF
            </a>
          )}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary package-btn-book"
          >
            <MessageCircle size={18} />
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
