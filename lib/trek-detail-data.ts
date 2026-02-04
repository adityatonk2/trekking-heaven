import type { Trek } from './trek-data';
import { trekSections } from './trek-data';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string[];
  altitude?: string;
  distance?: string;
}

export interface RentalItem {
  name: string;
  price: string;
  image: string; // URL or placeholder path
}

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
  season?: string; // e.g. Summer | Autumn
  months?: string; // e.g. April | May | ...
  trailType?: string;
  railHead?: string;
  airport?: string;
  priceStrikethrough?: string;
  pricePerPerson?: string;
  priceNote?: string;
  discountBadge?: string;
  servicePoints?: string[];
  pdfUrl?: string;

  // New Fields
  itinerary?: ItineraryDay[];
  highlights?: string[];
  whoCanParticipate?: string[];
  howToReach?: {
    pickup: string[];
    reachDehradun: string[];
    dropOff: string[];
  };
  rentalGear?: RentalItem[]; // New Rental Gear
  policyImage?: string; // "Loved it? Do it again for free" image
}

// Standard Rental Gear List (can be reused)
const STANDARD_RENTAL_GEAR: RentalItem[] = [
  { name: 'Trekking Jacket', price: '₹ 500', image: '/rental-gears/trekking-jacket.jpeg' },
  { name: 'Hiking Pants', price: '₹ 500', image: '/rental-gears/hiking-pants.jpeg' },
  { name: 'Trekking Shoes', price: '₹ 500', image: '/rental-gears/trekking-shoe.jpeg' },
  { name: 'Woolen Socks', price: '₹ 200', image: '/rental-gears/woolen-socks.jpeg' },
  { name: 'Hand Gloves', price: '₹ 200', image: '/rental-gears/hand-gloves.jpeg' },
  { name: 'Head Torch', price: '₹ 150', image: '/rental-gears/head-torch.jpeg' },
  { name: 'Woolen Cap', price: '₹ 150', image: '/rental-gears/woolen-cap.jpeg' },
  { name: 'Poncho', price: '₹ 200', image: '/rental-gears/poncho.jpeg' },
  { name: 'Trekking Pole', price: '₹ 150', image: '/rental-gears/Tracking-pole.jpeg' },
  { name: 'Backpack (60L)', price: '₹ 500', image: '/rental-gears/back-pack.jpeg' },
];

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
    itinerary: [
      { day: 1, title: 'Arrival in Dehradun and Drive to Sankri', description: ['Drive Distance: 200 km | 7-8 hours', 'Altitude: 6,400 ft'], altitude: '6,400 ft' },
      { day: 2, title: 'Sankri to Juda Ka Talab', description: ['Trek Distance: 4 km | 5 hours', 'Altitude: 9,100 ft'], altitude: '9,100 ft' },
      { day: 3, title: 'Juda Ka Talab to Kedarkantha Base Camp', description: ['Trek Distance: 4 km | 2.5 hours', 'Altitude: 11,250 ft'], altitude: '11,250 ft' },
      { day: 4, title: 'Kedarkantha Base to Summit and back to Hargaon', description: ['Trek Distance: 6 km | 6-7 hours', 'Altitude: 12,500 ft'], altitude: '12,500 ft' },
      { day: 5, title: 'Hargaon to Sankri -> Drive to Dehradun', description: ['Trek Distance: 6 km | 4 hours', 'Drive: 200 km'], altitude: '6,400 ft' },
    ],
    rentalGear: STANDARD_RENTAL_GEAR,
  },
  'har-ki-dun-trek': {
    name: 'Har Ki Dun Trek',
    region: 'Uttarakhand | India',
    days: 7,
    difficulty: 'Easy to Moderate',
    maxAltitude: '11,600 Ft',
    trekkingKm: '36 KM',
    origin: 'Ex Dehradun to Dehradun',
    season: 'Summer | Autumn',
    months: 'April | May | June | September | October | November',
    railHead: 'Dehradun',
    stay: 'Camping (Twin sharing) & Hotel/Guesthouse',
    food: 'Meals while on trek & at Hotel/Guesthouse (Veg & Eggs)',
    trailType: 'Point to point trail | Camping at the same location upon returning.',
    airport: 'Jolly Grant Airport, which is 28 km away from Dehradun',
    baseCamp: 'Sankri',
    highlights: [
      'Services from Sankri to Sankri',
      'Pickup & Drop Location: Prince Chowk, Dehradun',
      'Base Camp Accommodation: Guest house stay with attached washroom (no bunk beds).',
      'Complimentary cloakroom at base camp for safe storage.',
      'Avail Special Casual Leave if you\'re a Central Govt. employee.',
      'Trek again for free',
    ],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri', description: ['Altitude Sankri: 1950 m / 6400 ft', 'Drive Distance: 200 km | 9-10 hrs'], altitude: '6400 ft' },
      { day: 2, title: 'Sankri to Dharkot and trek to Osla Village', description: ['Osla: 2750 m/ 9000 ft', 'Trek Distance: 8 km | 5-6 hrs'], altitude: '9000 ft' },
      { day: 3, title: 'Osla to Seematra', description: ['Altitude Seematra: 3250 m/ 10800 ft', 'Trek Distance: 7 km | 4-5 hrs'], altitude: '10800 ft' },
      { day: 4, title: 'Seematra to Har Ki Dun and Back to Seematra', description: ['Altitude Har Ki Dun: 3500 m/ 11600 ft', 'Trek Distance: 8 km (both sides) | 6-7 hrs'], altitude: '11600 ft' },
      { day: 5, title: 'Seematra to Pauni Gharat', description: ['Altitude Pauni Gharat: 2500 m / 8300 ft', 'Trek Distance: 8-9 km | 4-5 hrs'], altitude: '8300 ft' },
      { day: 6, title: 'Pauni Gharat to Dharkot and drive to Sankri', description: ['Trek Distance: 3-4 km | 2-3 hrs', 'Drive Distance: 24 km | 2 hrs'], altitude: '6400 ft' },
      { day: 7, title: 'Sankri To Dehradun | Saying Goodbye To The Mountains', description: ['Drive Distance: 200 km | 9-10 hrs'], altitude: '—' },
    ],
    whoCanParticipate: [
      'Age Requirement: Minimum 9 years',
      'First-timers are welcome, though prior trekking experience is preferred. Good fitness is a must.',
      'The Trekker should have sufficient stamina to cover 5 km of distance by jogging in 35 minutes without stress.',
      'If the trekker wants to carry a backpack then he/she should be able to carry a 10-12 kg backpack.',
    ],
    howToReach: {
      pickup: [
        'It is essential for everyone to arrive at Prince Chowk, Dehradun (06:00 am).',
        'Once you have reached Dehradun, we will manage the rest of your travel arrangements if you opted for pickup service.',
      ],
      reachDehradun: [
        'Take an overnight train from Delhi to Dehradun.',
        'Take a bus to Dehradun ISBT from Delhi Kashmiri gate ISBT or Chandigarh.',
        'Take a flight to Dehradun airport (Jolly Grant Airport).',
      ],
      dropOff: [
        'The designated drop-off point is Prince Chowk, Dehradun.',
        'Arrive in Prince Chowk by 7:30 to 8:30 pm.',
      ],
    },
    pricePerPerson: '₹12,500',
    priceNote: '(Extra 5% GST)',
    rentalGear: STANDARD_RENTAL_GEAR,
  },
  'chopta-tungnath-trek': {
    pdfUrl: '/trek-pdfs/chopta-tungnath.pdf',
    itinerary: [
      { day: 1, title: 'Dehradun to Sari Village (Base Camp)', description: ['Drive: 7-8 hours'], altitude: '6,600 ft' },
      { day: 2, title: 'Sari to Deoriatal and back', description: ['Trek: 2-3 hours'], altitude: '7,800 ft' },
      { day: 3, title: 'Sari to Chopta -> Tungnath -> Chandrashila -> Chopta', description: ['Trek: 5-6 hours'], altitude: '13,100 ft' },
      { day: 4, title: 'Chopta to Dehradun', description: ['Drive: 7 hours'], altitude: '—' },
    ],
    rentalGear: STANDARD_RENTAL_GEAR,
  },
  'badasu-pass-trek': {
    name: 'Badasu Pass Trek',
    region: 'Uttarakhand | India',
    days: 8,
    difficulty: 'Difficult',
    maxAltitude: '5,400 m',
    trekkingKm: '45 KM',
    origin: 'Ex Sankri',
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri', description: ['Drive to Sankri base camp'], altitude: '6,400 ft' },
      { day: 2, title: 'Sankri to Seema', description: ['Trek through forest trails'], altitude: '8,400 ft' },
      { day: 3, title: 'Seema to Rainbasera', description: ['Along the Supin river'], altitude: '10,200 ft' },
      { day: 4, title: 'Rainbasera to Ruinsara Tal', description: ['Beautiful alpine lake'], altitude: '11,500 ft' },
      { day: 5, title: 'Ruinsara Tal to Badasu Base Camp', description: ['Steep ascent'], altitude: '13,500 ft' },
      { day: 6, title: 'Base Camp to Badasu Pass and desc', description: ['Crossing the pass'], altitude: '17,700 ft' },
      { day: 7, title: 'Descent to Base Camp/Sankri', description: ['Long descent'], altitude: '6,400 ft' },
      { day: 8, title: 'Sankri to Dehradun', description: ['Drive back'], altitude: '-' },
    ],
    pricePerPerson: '₹14,500',
    priceNote: '(Extra 5% GST)',
    gallery: ['/latest-treks/badasu-pass-trek.png'],
    rentalGear: STANDARD_RENTAL_GEAR,
  },
  'char-dham-yatra': {
    name: 'Char Dham Yatra',
    region: 'Uttarakhand | India',
    days: 10,
    difficulty: 'Moderate',
    maxAltitude: '3,500 m',
    trekkingKm: 'Mixed Drive & Walk',
    origin: 'Ex Haridwar',
    itinerary: [
      { day: 1, title: 'Haridwar to Barkot', description: ['Drive journey'], altitude: '1,220 m' },
      { day: 2, title: 'Barkot to Yamunotri to Barkot', description: ['Trek to temple and back'], altitude: '3,291 m' },
      { day: 3, title: 'Barkot to Uttarkashi', description: ['Drive to Uttarkashi'], altitude: '1,158 m' },
      { day: 4, title: 'Uttarkashi to Gangotri to Uttarkashi', description: ['Darshan at Gangotri'], altitude: '3,100 m' },
      { day: 5, title: 'Uttarkashi to Guptkashi', description: ['Scenic drive'], altitude: '1,319 m' },
      { day: 6, title: 'Guptkashi to Kedarnath', description: ['Trek/Helicopter to shrine'], altitude: '3,583 m' },
      { day: 7, title: 'Kedarnath to Guptkashi', description: ['Return journey'], altitude: '1,319 m' },
      { day: 8, title: 'Guptkashi to Badrinath', description: ['Drive to Badrinath'], altitude: '3,133 m' },
      { day: 9, title: 'Badrinath to Rudraprayag', description: ['Return leg starts'], altitude: '895 m' },
      { day: 10, title: 'Rudraprayag to Haridwar', description: ['Tor end'], altitude: '300 m' },
    ],
    pricePerPerson: 'On Request',
    gallery: ['/latest-treks/char-dham.png'],
  },
  'gangotri-yamunotri-yatra': {
    name: 'Gangotri & Yamunotri Yatra',
    region: 'Uttarakhand | India',
    days: 5,
    difficulty: 'Moderate',
    maxAltitude: '3,291 m',
    trekkingKm: 'Mixed Drive & Walk',
    origin: 'Ex Haridwar',
    itinerary: [
      { day: 1, title: 'Haridwar to Barkot', description: ['Drive journey'], altitude: '1,220 m' },
      { day: 2, title: 'Barkot to Yamunotri to Barkot', description: ['Trek to temple and back'], altitude: '3,291 m' },
      { day: 3, title: 'Barkot to Uttarkashi', description: ['Drive to Uttarkashi'], altitude: '1,158 m' },
      { day: 4, title: 'Uttarkashi to Gangotri to Uttarkashi', description: ['Trek to temple'], altitude: '3,100 m' },
      { day: 5, title: 'Uttarkashi to Haridwar', description: ['Return journey'], altitude: '300 m' },
    ],
    pricePerPerson: 'On Request',
    gallery: ['/latest-treks/gangotri-yamnotri-trek.png'],
  },
  'kedarnath-badrinath-yatra': {
    name: 'Kedarnath & Badrinath Yatra',
    region: 'Uttarakhand | India',
    days: 6,
    difficulty: 'Moderate',
    maxAltitude: '3,583 m',
    trekkingKm: 'Mixed Drive & Walk',
    origin: 'Ex Haridwar',
    itinerary: [
      { day: 1, title: 'Haridwar to Guptkashi', description: ['Drive journey'], altitude: '1,319 m' },
      { day: 2, title: 'Guptkashi to Kedarnath', description: ['Trek 16km'], altitude: '3,583 m' },
      { day: 3, title: 'Kedarnath to Guptkashi', description: ['Trek down'], altitude: '1,319 m' },
      { day: 4, title: 'Guptkashi to Badrinath', description: ['Drive to temple'], altitude: '3,133 m' },
      { day: 5, title: 'Badrinath to Rudraprayag', description: ['Return journey'], altitude: '895 m' },
      { day: 6, title: 'Rudraprayag to Haridwar', description: ['Tour end'], altitude: '300 m' },
    ],
    pricePerPerson: 'On Request',
    gallery: ['/latest-treks/kedarnath-badrinath.png'],
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
    itinerary: extra?.itinerary,
    highlights: extra?.highlights,
    whoCanParticipate: extra?.whoCanParticipate,
    howToReach: extra?.howToReach,
    season: extra?.season,
    months: extra?.months,
    trailType: extra?.trailType,
    railHead: extra?.railHead,
    airport: extra?.airport,
    pdfUrl: extra?.pdfUrl,
    rentalGear: extra?.rentalGear,
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
