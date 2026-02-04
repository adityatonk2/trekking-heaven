import Image from 'next/image';
import { MapPin } from 'lucide-react';
import {
  OFFICE_ADDRESS,
  MAP_LINK,
  MAP_EMBED_SRC,
} from '@/lib/constants';

export default function OfficeLocation() {
  return (
    <section
      className="office-location"
      aria-labelledby="office-location-heading"
    >
      <div className="office-location-container">
        <h2 id="office-location-heading" className="office-location-title">
          Visit Our Office
        </h2>
        <p className="office-location-subtitle">
          Meet us in person for consultations, bookings, and support.
        </p>

        <div className="office-location-card">
          <div className="office-location-info">
            <div className="office-location-address">
              <MapPin
                size={24}
                className="office-location-icon"
                aria-hidden
              />
              <address className="office-location-address-text">
                <span className="office-location-line1">
                  {OFFICE_ADDRESS.line1}
                </span>
                <span>
                  {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state}{' '}
                  {OFFICE_ADDRESS.pin}
                </span>
              </address>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary office-location-cta"
            >
              Get Directions
            </a>
          </div>

          <div className="office-location-map-wrapper">
            <Image
              src="/office-image.jpg"
              alt="Trekkers Heaven Office"
              fill
              className="office-location-image"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
