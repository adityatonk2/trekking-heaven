'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treksOpen, setTreksOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const treksRef = useRef<HTMLDivElement>(null);
  const policiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (treksRef.current && !treksRef.current.contains(target)) {
        setTreksOpen(false);
      }
      if (policiesRef.current && !policiesRef.current.contains(target)) {
        setPoliciesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, []);

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
          <div
            ref={treksRef}
            className={`nav-dropdown ${treksOpen ? 'is-open' : ''}`}
          >
            <button
              type="button"
              className="nav-link nav-dropdown-trigger"
              onClick={(e) => {
                e.stopPropagation();
                setTreksOpen(!treksOpen);
                setPoliciesOpen(false);
              }}
              aria-expanded={treksOpen}
              aria-haspopup="true"
            >
              Treks <ChevronDown />
            </button>
            <div className="dropdown-menu">
              <Link href="/treks" onClick={() => { setMenuOpen(false); setTreksOpen(false); }}>
                All Treks
              </Link>
              <Link href="/treks#international-trek" onClick={() => { setMenuOpen(false); setTreksOpen(false); }}>
                International Trek
              </Link>
              <Link href="/treks#summer-treks" onClick={() => { setMenuOpen(false); setTreksOpen(false); }}>
                Tours
              </Link>
              <Link href="/treks#expedition" onClick={() => { setMenuOpen(false); setTreksOpen(false); }}>
                Expedition
              </Link>
              <Link href="/treks#village-tour" onClick={() => { setMenuOpen(false); setTreksOpen(false); }}>
                Village Tour
              </Link>
              <Link href="/treks#bike-tour" onClick={() => { setMenuOpen(false); setTreksOpen(false); }}>
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
          <div
            ref={policiesRef}
            className={`nav-dropdown ${policiesOpen ? 'is-open' : ''}`}
          >
            <button
              type="button"
              className="nav-link nav-dropdown-trigger"
              onClick={(e) => {
                e.stopPropagation();
                setPoliciesOpen(!policiesOpen);
                setTreksOpen(false);
              }}
              aria-expanded={policiesOpen}
              aria-haspopup="true"
            >
              Policies <ChevronDown />
            </button>
            <div className="dropdown-menu">
              <Link href="/policies#disclaimer" onClick={() => { setMenuOpen(false); setPoliciesOpen(false); }}>
                Disclaimer
              </Link>
              <Link href="/policies#terms" onClick={() => { setMenuOpen(false); setPoliciesOpen(false); }}>
                Terms & Conditions
              </Link>
              <Link href="/policies#privacy" onClick={() => { setMenuOpen(false); setPoliciesOpen(false); }}>
                Privacy Policy
              </Link>
              <Link href="/policies#environmental" onClick={() => { setMenuOpen(false); setPoliciesOpen(false); }}>
                Environmental Policy
              </Link>
              <Link href="/policies#cancellation" onClick={() => { setMenuOpen(false); setPoliciesOpen(false); }}>
                Cancellation Policy
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>
        <button
          type="button"
          className={`mobile-menu-btn ${menuOpen ? 'is-active' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
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
