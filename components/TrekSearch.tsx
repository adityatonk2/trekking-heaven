'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin } from 'lucide-react';
import { getAllTreks, type Trek } from '@/lib/trek-data';

const MAX_RESULTS = 8;

function filterTreks(treks: Trek[], query: string): Trek[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return treks.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.origin.toLowerCase().includes(q) ||
      t.difficulty.toLowerCase().includes(q)
  );
}

export default function TrekSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const allTreks = useMemo(() => getAllTreks(), []);
  const results = useMemo(() => filterTreks(allTreks, query), [allTreks, query]);
  const showDropdown = (focused || open) && query.trim().length > 0;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="trek-search-wrap" ref={wrapperRef}>
      <label htmlFor="trek-search-input" className="sr-only">
        Search treks
      </label>
      <div className="trek-search-input-wrap">
        <Search size={18} className="trek-search-icon" aria-hidden />
        <input
          id="trek-search-input"
          type="search"
          placeholder="Search treks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setFocused(true);
            if (query.trim()) setOpen(true);
          }}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false);
              (e.target as HTMLInputElement).blur();
            }
          }}
          className="trek-search-input"
          autoComplete="off"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
          aria-controls="trek-search-results"
        />
      </div>
      {showDropdown && (
        <ul
          id="trek-search-results"
          className="trek-search-dropdown"
          role="listbox"
        >
          {results.length === 0 ? (
            <li className="trek-search-empty">No treks found</li>
          ) : (
            results.slice(0, MAX_RESULTS).map((trek) => (
              <li key={trek.slug} role="option">
                <Link
                  href={`/treks/${trek.slug}`}
                  className="trek-search-result"
                  onClick={() => {
                    setQuery('');
                    setOpen(false);
                  }}
                >
                  <span className="trek-search-result-name">{trek.name}</span>
                  <span className="trek-search-result-meta">
                    <MapPin size={12} aria-hidden />
                    {trek.origin} · {trek.days}d · {trek.difficulty}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
