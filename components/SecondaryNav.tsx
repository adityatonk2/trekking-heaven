'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { secondaryNavItems } from '@/lib/trek-data';

const navSectionMap: Record<string, number> = {
  'winter-treks': 0,
  'summer-treks': 1,
  'monsoon-treks': 0,
  'village-tour': 2,
  'international-trek': 0,
  'autumn-treks': 0,
  expedition: 0,
  'bike-tour': 0,
  'upcoming-treks': 0,
  blogs: 3,
  videos: 4,
};

const iconPaths: Record<string, string> = {
  trek: '/secondary-nav-icons/trek-icon.jpeg',
  tour: '/secondary-nav-icons/tour-icon.jpeg',
  village: '/secondary-nav-icons/village-icon.jpeg',
  blog: '/secondary-nav-icons/blog-icon.jpeg',
  video: '/secondary-nav-icons/video-icon.jpeg',
};

export default function SecondaryNav() {
  const pathname = usePathname();
  const isTreksPage = pathname === '/treks';
  const isArticlesPage = pathname === '/articles' || pathname.startsWith('/articles/');
  const isVideosPage = pathname === '/videos' || pathname.startsWith('/videos/');
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    if (isArticlesPage) {
      setActiveIdx(3); // Blogs
    } else if (isVideosPage) {
      setActiveIdx(4); // Videos
    } else if (isTreksPage && typeof window !== 'undefined' && window.scrollY < 400) {
      setActiveIdx(0);
    }
  }, [isTreksPage, isArticlesPage, isVideosPage]);

  useEffect(() => {
    const updateActiveNav = () => {
      const scrollY = window.scrollY;
      let activeSection: string | null = null;

      document.querySelectorAll('.trek-section[id]').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY - 150;
        if (scrollY >= sectionTop - 50) {
          const id = section.id;
          if (navSectionMap[id] !== undefined) activeSection = id;
        }
      });

      if (activeSection !== null) {
        setActiveIdx(navSectionMap[activeSection]);
      } else if (isArticlesPage) {
        setActiveIdx(3); // Blogs
      } else if (isVideosPage) {
        setActiveIdx(4); // Videos
      } else if (isTreksPage && window.scrollY < 400) {
        setActiveIdx(0);
      } else {
        setActiveIdx(-1);
      }
    };

    updateActiveNav();
    const handler = () => requestAnimationFrame(updateActiveNav);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [isTreksPage, isArticlesPage, isVideosPage]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, idx: number) => {
    const hashIdx = href.indexOf('#');
    const targetId = hashIdx >= 0 ? href.slice(hashIdx + 1) : '';
    const isHashLink = href.startsWith('#') || (href.includes('#') && targetId);

    if (isHashLink) {
      const target = targetId ? document.getElementById(targetId) : null;
      const samePage = (href.startsWith('/treks') && pathname === '/treks') ||
        (href.startsWith('/') && !href.startsWith('/treks') && pathname === '/');
      if (target && samePage) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveIdx(idx);
      }
    }
  };

  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-inner">
        <div className="secondary-nav-container">
          {secondaryNavItems.map((item, idx) => (
          <Link
            key={item.href}
            href={item.href}
            className={`secondary-nav-item ${activeIdx >= 0 && activeIdx === idx ? 'active' : ''}`}
            onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.href, idx)}
          >
            <Image
              src={iconPaths[item.icon]}
              alt={item.label}
              width={48}
              height={48}
              className="secondary-icon-img"
              sizes="(max-width: 768px) 32px, 48px"
            />
            <span className="secondary-nav-label">{item.label}</span>
          </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
