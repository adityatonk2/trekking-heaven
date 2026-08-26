'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react';

interface ItineraryDay {
    day: number;
    title: string;
    description: string[];
    altitude?: string;
    distance?: string;
}

interface TrekItineraryProps {
    itinerary: ItineraryDay[];
}

export default function TrekItinerary({ itinerary }: TrekItineraryProps) {
    // Use a Record to track expansion state for each day (by index or day number)
    // Initially, maybe expand the first day? Or all collapsed. Let's start with all collapsed.
    const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({});

    const toggleDay = (dayNum: number) => {
        setExpandedDays((prev) => ({
            ...prev,
            [dayNum]: !prev[dayNum],
        }));
    };

    const expandAll = () => {
        const allExpanded: Record<number, boolean> = {};
        itinerary.forEach((item) => (allExpanded[item.day] = true));
        setExpandedDays(allExpanded);
    };

    const collapseAll = () => {
        setExpandedDays({});
    };

    return (
        <div className="trek-itinerary-container">
            <div className="trek-itinerary-controls">
                <button onClick={expandAll} className="itinerary-control-btn">Expand All</button>
                <button onClick={collapseAll} className="itinerary-control-btn">Collapse All</button>
            </div>

            <div className="trek-itinerary-list">
                {itinerary.map((day) => {
                    const isExpanded = !!expandedDays[day.day];

                    return (
                        <div
                            key={day.day}
                            className={`itinerary-card ${isExpanded ? 'active' : ''}`}
                        >
                            <div
                                className="itinerary-header"
                                onClick={() => toggleDay(day.day)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isExpanded}
                            >
                                <div className="itinerary-day-badge">Day {day.day}</div>
                                <h3 className="itinerary-title">{day.title}</h3>
                                <div className="itinerary-toggle-icon">
                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>

                            {/* Brief Info (Visible always or just when expanded? Let's show brief stats always in header or just below title if desired. 
                  User asked for "brief for each track day". The title acts as the brief. 
                  But maybe they want a short summary always visible? 
                  For now, let's keep details hidden until expanded). 
              */}

                            <div
                                className="itinerary-content"
                                style={{
                                    maxHeight: isExpanded ? '1000px' : '0',
                                    opacity: isExpanded ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease-in-out'
                                }}
                            >
                                <div className="itinerary-details">

                                    {/* Meta Stats Row */}
                                    {(day.altitude || day.distance) && (
                                        <div className="itinerary-meta-row">
                                            {day.altitude && (
                                                <div className="meta-pill">
                                                    <MapPin size={14} />
                                                    <span>{day.altitude}</span>
                                                </div>
                                            )}
                                            {day.distance && (
                                                <div className="meta-pill">
                                                    <Clock size={14} /> {/* Distance usually correlates with time/effort */}
                                                    <span>{day.distance}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <ul className="itinerary-desc-list">
                                        {day.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
        .trek-itinerary-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .trek-itinerary-controls {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-bottom: 0.5rem;
        }

        .itinerary-control-btn {
          font-size: 0.85rem;
          color: var(--color-primary);
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .itinerary-control-btn:hover {
          text-decoration: underline;
        }

        .trek-itinerary-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .itinerary-card {
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          background: white;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .itinerary-card:hover {
          border-color: var(--color-primary);
        }

        .itinerary-card.active {
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(15, 61, 51, 0.08);
        }

        .itinerary-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          cursor: pointer;
          background: #f8fafc;
          transition: background 0.2s;
        }

        .itinerary-card.active .itinerary-header {
          background: #f0fdf4; /* Very light green tint when active */
          border-bottom: 1px solid #e2e8f0;
        }

        .itinerary-day-badge {
          background: var(--color-primary);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .itinerary-title {
          flex: 1;
          min-width: 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0;
        }

        .itinerary-toggle-icon {
          color: var(--color-text-muted);
        }

        .itinerary-details {
          padding: 1.25rem;
        }

        .itinerary-meta-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          background: #f1f5f9;
          padding: 0.4rem 0.75rem;
          border-radius: 0.5rem;
          font-weight: 500;
          color: #475569;
        }

        .itinerary-desc-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-left: 0.5rem;
        }

        .itinerary-desc-list li {
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .itinerary-desc-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
        }
      `}</style>
        </div>
    );
}
