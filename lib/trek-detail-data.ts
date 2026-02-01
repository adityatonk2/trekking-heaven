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
  pdfUrl?: string;
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
    pdfUrl: '/trek-pdfs/kedarkantha.pdf',
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
  'chopta-tungnath-trek': {
    pdfUrl: '/trek-pdfs/chopta-tungnath.pdf',
  },
  'hampta-pass-trek': {
    pdfUrl: '/trek-pdfs/hampta-pass.pdf',
  },
  'kuari-pass-trek': {
    pdfUrl: '/trek-pdfs/kuari-pass.pdf',
  },
  'langtang-valley-trek': {
    gallery: [
      '/langtang-valley.png',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
    ],
  },
  'valley-of-flowers-trek': {
    slug: 'valley-of-flowers-trek',
    name: 'Valley of Flowers Trek',
    region: 'Uttarakhand | India',
    origin: 'Ex Rishikesh',
    days: 6,
    difficulty: 'Easy to Moderate',
    maxAltitude: '14,100 Ft',
    trekkingKm: '37 KM',
    pickupPoint: 'Back stayz (hotel) Laxman Jhula Near SBI Bank Tapovan, Rishikesh',
    dropPoint: 'Back stayz (hotel) Laxman Jhula Near SBI Bank Tapovan, Rishikesh',
    reportingTime: '6:00 AM',
    droppingTime: '6:30 PM to 7:30 PM',
    servicesFrom: 'Rishikesh to Rishikesh',
    bestSeason: 'July to September',
    pricePerPerson: '₹11,800',
    priceNote: '(Extra 5% GST)',
    servicePoints: [
      'Services from Rishikesh',
      'Pickup & Drop: Laxman Jhula, Rishikesh',
      'Please reach Rishikesh a day before to avoid delays',
    ],
    gallery: [
      '/valley-of-flowers.png',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80',
    ],
  },
  'rupin-pass-trek': {
    slug: 'rupin-pass-trek',
    name: 'Rupin Pass Trek',
    region: 'Himachal Pradesh | India',
    origin: 'Ex Shimla',
    days: 7,
    difficulty: 'Moderate to Difficult',
    maxAltitude: '15,350 Ft',
    trekkingKm: '42 KM',
    pickupPoint: 'Old Bus Stand, Shimla',
    dropPoint: 'Old Bus Stand, Shimla',
    reportingTime: '5:30 AM',
    droppingTime: '11:00 PM to 1:00 AM',
    servicesFrom: 'Bawta to Sangla',
    baseCamp: 'Home stay with attached washroom (no bunk beds)',
    bestSeason: 'May–June, September–October',
    pricePerPerson: '₹16,500',
    priceNote: '(Extra 5% GST)',
    servicePoints: [
      'Services from Bawta to Sangla',
      'Pickup & Drop: Old Bus Stand, Shimla',
      'Keep a buffer day and arrive a day early to avoid delays',
      'Complimentary cloakroom at base camp',
    ],
    gallery: [
      '/rupin-pass-trek.png',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
    ],
  },
  'phulara-ridge-trek': {
    slug: 'phulara-ridge-trek',
    name: 'Phulara Ridge Trek',
    region: 'Uttarakhand | India',
    origin: 'Ex Sankri to Sankri',
    days: 6,
    difficulty: 'Easy to Moderate',
    maxAltitude: '12,150 Ft',
    trekkingKm: '29 KM',
    pickupPoint: 'Prince Chowk, Sankri',
    dropPoint: 'Prince Chowk, Sankri',
    reportingTime: '6:00 AM',
    droppingTime: '6:30 PM to 7:30 PM',
    servicesFrom: 'Sankri to Sankri',
    baseCamp: 'Guest house stay with attached washroom (no bunk beds)',
    bestSeason: 'April–June, October–November',
    pricePerPerson: '₹9,500',
    priceNote: '(Extra 5% GST)',
    servicePoints: [
      'Services from Sankri to Sankri',
      'Pickup & Drop: Prince Chowk, Sankri',
      'Keep a buffer day and arrive a day early to avoid delays',
      'Complimentary cloakroom at base camp',
    ],
    gallery: [
      '/phulara-ridge.png',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
    ],
  },
  'kedar-tal-trek': {
    slug: 'kedar-tal-trek',
    name: 'Kedar Tal Trek',
    region: 'Uttarakhand | India',
    origin: 'Ex Dehradun',
    days: 7,
    difficulty: 'Difficult',
    maxAltitude: '15,500 Ft',
    trekkingKm: '32 KM',
    pickupPoint: 'Prince Chowk, Dehradun',
    dropPoint: 'Prince Chowk, Dehradun',
    reportingTime: '6:00 AM',
    droppingTime: '6:30 PM to 7:30 PM',
    servicesFrom: 'Gangotri to Gangotri',
    baseCamp: 'Guest house stay with attached washroom (no bunk beds)',
    bestSeason: 'May–June, October',
    pricePerPerson: '₹16,000',
    priceNote: '(Extra 5% GST)',
    servicePoints: [
      'Services from Gangotri to Gangotri',
      'Pickup & Drop: Prince Chowk, Dehradun',
      'Pickup: 06:00 AM | Drop: 06:30 PM–07:30 PM (weather/road dependent)',
      'Keep a buffer day and arrive a day early to avoid delays',
      'Base Camp Accommodation: Guest house stay with attached washroom (no bunk beds)',
      'Complimentary cloakroom at base camp for safe storage',
    ],
    gallery: [
      '/kedar-tal.png',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
    ],
  },
  'kashmir-great-lakes-trek': {
    slug: 'kashmir-great-lakes-trek',
    name: 'Kashmir Great Lakes Trek',
    region: 'Kashmir | India',
    origin: 'Ex Srinagar',
    days: 8,
    difficulty: 'Moderate to Difficult',
    maxAltitude: '13,750 Ft',
    trekkingKm: '72 KM',
    pickupPoint: 'Nishat Garden Near the Parking Area',
    dropPoint: 'Nishat Garden Near the Parking Area',
    reportingTime: '12:00 PM',
    droppingTime: '6:30 PM to 7:30 PM',
    servicesFrom: 'Shitkadi camp to Naranag',
    bestSeason: 'July–August',
    pricePerPerson: '₹21,000',
    priceNote: '(Extra 5% GST)',
    servicePoints: [
      '5% GST will be applicable on Trek Cost and Add-ons',
      'Services Shitkadi camp to Naranag',
      'Meeting Point (Pickup/Drop): Nishat Garden Near the Parking Area',
      'Reporting Time: 12:00 PM',
      'Drop Time: 6:30 PM to 7:30 PM (weather/road dependent)',
      'Please reach Srinagar a day before to avoid delays',
    ],
    gallery: [
      '/kashmir-great-lake.png',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80',
    ],
  },
  'pangarchulla-peak-trek': {
    slug: 'pangarchulla-peak-trek',
    name: 'Pangarchulla Peak Trek',
    region: 'Uttarakhand | India',
    origin: 'Ex Rishikesh',
    days: 7,
    difficulty: 'Moderate to Difficult',
    maxAltitude: '15,100 Ft',
    trekkingKm: '39 KM',
    pickupPoint: 'Back stayz (hotel) Laxman Jhula Near SBI Bank Tapovan, Rishikesh',
    dropPoint: 'Back stayz (hotel) Laxman Jhula Near SBI Bank Tapovan, Rishikesh',
    reportingTime: '6:00 AM',
    droppingTime: '6:30 PM to 7:30 PM',
    servicesFrom: 'Pipalkoti to Pipalkoti',
    bestSeason: 'March–April',
    pricePerPerson: '₹13,250',
    priceNote: '(Extra 5% GST)',
    servicePoints: [
      '5% GST will be applicable on Trek Cost and Add-ons',
      'Stargazing with Telescopes',
      'Services Pipalkoti to Pipalkoti',
      'Meeting Point (Pickup/Drop): Laxman Jhula, Rishikesh (if transport opted from us)',
      'Reporting Time: 6:00 AM',
      'Drop Time: 6:30 PM to 7:30 PM (weather/road dependent)',
      'Please reach Rishikesh a day before to avoid delays',
    ],
    gallery: [
      '/pangar-chulla.png',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
    ],
  },
  'roopkund-trek': {
    slug: 'roopkund-trek',
    name: 'Roopkund Trek',
    region: 'Uttarakhand | India',
    origin: 'Ex Kathgodam',
    days: 8,
    difficulty: 'Moderate to Difficult',
    maxAltitude: '15,696 Ft',
    trekkingKm: '53 KM',
    trainInfo: 'Kathgodam is the nearest rail head.',
    servicesFrom: 'Lohajung to Lohajung (circle trail)',
    baseCamp: 'Lohajung',
    food: 'Meals while on trek & at Hotel/Guesthouse (Veg & Eggs)',
    stay: 'Camping (Twin sharing) & Hotel/Guesthouse',
    bestSeason: 'April–June, September',
    pricePerPerson: 'On request',
    servicePoints: [
      'Circle trail — camping in various locations, starting and ending at same point',
      'Base Camp: Lohajung',
      'Rail Head: Kathgodam',
      'Season: Summer | Autumn',
      'Months: April, May, June, September',
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
    pdfUrl: extra?.pdfUrl,
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
