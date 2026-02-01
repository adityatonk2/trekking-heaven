'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="primary-nav">
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/new-logo.png"
            alt="Trekkers Heaven"
            width={220}
            height={52}
            className="logo-img"
            priority
          />
        </Link>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <Link href="/" className="nav-link">
            Home
          </Link>
          <div className="nav-dropdown">
            <span className="nav-link">
              Treks <ChevronDown />
            </span>
            <div className="dropdown-menu">
              <Link href="/treks" onClick={() => setMenuOpen(false)}>
                All Treks
              </Link>
              <Link href="/treks#international-trek" onClick={() => setMenuOpen(false)}>
                International Trek
              </Link>
              <Link href="/treks#summer-treks" onClick={() => setMenuOpen(false)}>
                Tours
              </Link>
              <Link href="/treks#expedition" onClick={() => setMenuOpen(false)}>
                Expedition
              </Link>
              <Link href="/treks#village-tour" onClick={() => setMenuOpen(false)}>
                Village Tour
              </Link>
              <Link href="/treks#bike-tour" onClick={() => setMenuOpen(false)}>
                Bike Tour
              </Link>
            </div>
          </div>
          <Link href="/trekking-packages" className="nav-link">
            Trekking Packages
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>
          <Link href="/articles" className="nav-link">
            Articles
          </Link>
          <Link href="/customize" className="nav-link">
            Customize Your Trek
          </Link>
          <div className="nav-dropdown">
            <span className="nav-link">
              Policies <ChevronDown />
            </span>
            <div className="dropdown-menu">
              <Link href="/policies#disclaimer" onClick={() => setMenuOpen(false)}>
                Disclaimer
              </Link>
              <Link href="/policies#terms" onClick={() => setMenuOpen(false)}>
                Terms & Conditions
              </Link>
              <Link href="/policies#privacy" onClick={() => setMenuOpen(false)}>
                Privacy Policy
              </Link>
              <Link href="/policies#environmental" onClick={() => setMenuOpen(false)}>
                Environmental Policy
              </Link>
              <Link href="/policies#cancellation" onClick={() => setMenuOpen(false)}>
                Cancellation Policy
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>
        <button
          className={`mobile-menu-btn ${menuOpen ? 'is-active' : ''}`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
