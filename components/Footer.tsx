import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, AtSign } from 'lucide-react';
import { TEL_PRIMARY_URL, TEL_SECONDARY_URL, PRIMARY_DISPLAY, SECONDARY_DISPLAY, OFFICE_ADDRESS_FULL, EMAIL_ADDRESS, EMAIL_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-pattern" />
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image
                src="/new-logo.png"
                alt="Trekkers Heaven"
                width={180}
                height={40}
                className="logo-img logo-img-footer"
              />
            </Link>
            <Link href="/" className="logo logo-secondary-link" aria-label="Trekkers Heaven - Explore the Unknown">
              <Image
                src="/secondary-logo.png"
                alt="Trekkers Heaven - Explore the Unknown"
                width={240}
                height={154}
                className="secondary-logo-img"
              />
            </Link>
            <p>
              We are a diverse group of passionate travellers that aim to craft
              experiences for guests to create an unforgettable journey in the
              Himalayas.
            </p>
          </div>
          <div className="footer-contact">
            <h4><MapPin size={18} className="footer-icon" aria-hidden /> Visit Us</h4>
            <p>{OFFICE_ADDRESS_FULL}</p>
          </div>
          <div className="footer-contact">
            <h4><Mail size={18} className="footer-icon" aria-hidden /> Mail/Write Us</h4>
            <p>
              <a href={EMAIL_URL}>{EMAIL_ADDRESS}</a>
            </p>
          </div>
          <div className="footer-contact">
            <h4><Phone size={18} className="footer-icon" aria-hidden /> Call Us</h4>
            <p>
              <a href={TEL_PRIMARY_URL}>{PRIMARY_DISPLAY}</a>
              {', '}
              <a href={TEL_SECONDARY_URL}>{SECONDARY_DISPLAY}</a>
            </p>
          </div>
          <div className="footer-badges">
            <h4>Certifications</h4>
            <Image
              src="/certifications.png"
              alt="Certifications"
              width={120}
              height={60}
              className="footer-badge-img"
            />
            <h4>Recommended by</h4>
            <Image
              src="/recommended-by.gif"
              alt="Recommended by"
              width={120}
              height={60}
              className="footer-badge-img"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
              Facebook
            </a>
            <a href="https://www.instagram.com/trekkers.heaven" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
              Instagram
            </a>
            <a href="https://www.threads.net/@trekkers.heaven?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <AtSign size={20} />
              Threads
            </a>
            <a href="https://youtube.com/@trekkersheaven?si=ZVCQkEIXa049PrTY" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} />
              YouTube
            </a>
          </div>
          <p className="footer-copyright">© Trekkers Heaven. All Rights Reserved</p>
          <div className="footer-links">
            <Link href="/policies#disclaimer">Disclaimer</Link>
            <Link href="/policies#environmental">Environmental Policy</Link>
            <Link href="/policies#cancellation">Cancellation Policy</Link>
            <Link href="/policies#terms">Terms & Conditions</Link>
            <Link href="/policies#privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
