import type { Trek } from './trek-data';
import { trekSections } from './trek-data';

export interface TrekDetail extends Trek {
  /** Gallery: main image + up to 4 extra (reuse main if fewer) */
  gallery?: string[];
  region?: string;
  maxAltitude?: string;
  trekkingKm?: string;
  pickupPoint?: string;
  dropPoint?: string;
  reportingTime?: string;
  droppingTime?: string;
  trainInfo?: string;
  servicesFrom?: string;
  baseCamp?: string;
  food?: string;
  stay?: string;
  bestSeason?: string;
  priceStrikethrough?: string;
  pricePerPerson?: string;
  priceNote?: string;
  discountBadge?: string;
  servicePoints?: string[];
}

const detailBySlug: Record<string, Partial<TrekDetail>> = {
  'kedarkantha-trek': {
    slug: 'kedarkantha-trek',
    name: 'Kedarkantha Trek',
    region: 'Sankri, Uttarakhand',
    origin: 'Ex Dehradun to Dehradun',
    days: 5,
    difficulty: 'Easy',
    maxAltitude: '12,500 Ft',
    trekkingKm: '19 Kms.',
    pickupPoint: 'Dehradun Railway Station',
    dropPoint: 'Dehradun Railway Station',
    reportingTime: '6:30am to 7:30am',
    droppingTime: '8:30pm to 9:30pm',
    trainInfo: 'Dehradun is the nearest rail head to the base camp.',
    servicesFrom: 'Dehradun to Dehradun',
    baseCamp: 'Sankri',
    food: 'All Meals (Veg + Egg)',
    stay: 'Guest house & Camping',
    bestSeason: 'Winter months November to March',
    priceStrikethrough: '₹7,400',
    pricePerPerson: '₹ 5,499',
    priceNote: '(Extra 5.00% GST)',
    discountBadge: '25% OFF',
    servicePoints: [
      'Dehradun - Dehradun',
      'Trek starts from Sankri',
      'Travelling charges applicable',
      'Pickup Point - Dehradun',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
    ],
  },
};

export function getTrekBySlug(slug: string): Trek | null {
  for (const section of trekSections) {
    const trek = section.treks.find((t) => t.slug === slug);
    if (trek) return trek;
  }
  return null;
}

export function getTrekDetailBySlug(slug: string): TrekDetail | null {
  const trek = getTrekBySlug(slug);
  if (!trek) return null;

  const extra = detailBySlug[slug];
  const gallery = extra?.gallery ?? [trek.image, trek.image, trek.image, trek.image, trek.image];

  return {
    ...trek,
    gallery,
    region: extra?.region ?? trek.origin,
    maxAltitude: extra?.maxAltitude ?? '—',
    trekkingKm: extra?.trekkingKm ?? '—',
    pickupPoint: extra?.pickupPoint ?? trek.origin,
    dropPoint: extra?.dropPoint ?? trek.origin,
    reportingTime: extra?.reportingTime ?? '—',
    droppingTime: extra?.droppingTime ?? '—',
    trainInfo: extra?.trainInfo ?? 'Contact us for travel details.',
    servicesFrom: extra?.servicesFrom ?? trek.origin,
    baseCamp: extra?.baseCamp ?? '—',
    food: extra?.food ?? 'All Meals',
    stay: extra?.stay ?? 'Camping',
    bestSeason: extra?.bestSeason ?? '—',
    priceStrikethrough: extra?.priceStrikethrough,
    pricePerPerson: extra?.pricePerPerson ?? 'On request',
    priceNote: extra?.priceNote,
    discountBadge: extra?.discountBadge,
    servicePoints: extra?.servicePoints ?? [trek.origin],
  };
}

export function getAllTrekSlugs(): string[] {
  const slugs = new Set<string>();
  for (const section of trekSections) {
    for (const trek of section.treks) {
      slugs.add(trek.slug);
    }
  }
  return Array.from(slugs);
}
