export interface ExpeditionPackage {
  id: string;
  title: string;
  region: string;
  duration: string;
  altitude: string;
  highlights: string[];
  slug?: string;
  image?: string;
  pdfUrl?: string;
}

export const coreExpeditions: ExpeditionPackage[] = [
  {
    id: 'chopta-tungnath',
    title: 'Chopta Tungnath Trek',
    region: 'Uttarakhand',
    duration: '3D/2N',
    altitude: '11,154 ft',
    highlights: ['Tungnath temple', 'Deoriatal Lake', 'Chaukhamba views'],
    slug: 'chopta-tungnath-trek',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    pdfUrl: '/trek-pdfs/chopta-tungnath.pdf',
  },
  {
    id: 'hampta-chandrataal',
    title: 'Hampta Pass & Chandrataal',
    region: 'Himachal Pradesh',
    duration: '5D/4N',
    altitude: '14,101 ft',
    highlights: ['Manali to Lahaul transition', 'Chandrataal Lake'],
    slug: 'hampta-pass-trek',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80',
    pdfUrl: '/trek-pdfs/hampta-pass.pdf',
  },
  {
    id: 'kedarkantha',
    title: 'Kedarkantha Trek',
    region: 'Uttarakhand',
    duration: '5D',
    altitude: '12,500 ft',
    highlights: ['Sankri base', 'Summit sunrise', 'Swargarohini and Bandarpoonch'],
    slug: 'kedarkantha-trek',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    pdfUrl: '/trek-pdfs/kedarkantha.pdf',
  },
  {
    id: 'kuari-pass',
    title: 'Kuari Pass Trek',
    region: 'Uttarakhand',
    duration: '5D/4N',
    altitude: '12,516 ft',
    highlights: ['360 degree views of Nanda Devi', 'Trishul', 'Chaukhamba'],
    slug: 'kuari-pass-trek',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    pdfUrl: '/trek-pdfs/kuari-pass.pdf',
  },
];

export const leisurePackage = {
  title: 'Manali-Kasol 6-Day Package',
  subtitle: 'Leisure & Sightseeing',
  duration: '6 Days',
  highlights: [
    'Hadimba Temple, Vashisht Hot Springs',
    'Solang Valley adventure',
    'Kasol and Manikaran riverside exploration',
  ],
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
};

export const logisticsInclusions = [
  { icon: 'users', title: 'Guides and support staff' },
  { icon: 'tent', title: 'Tents and guesthouse stay (where applicable)' },
  { icon: 'utensils', title: 'Meals during trek' },
  { icon: 'heart-pulse', title: 'Medical kit with oxygen and stretcher' },
  { icon: 'file-check', title: 'Trekking equipment' },
  { icon: 'file-check', title: 'Permits and first aid support' },
];

export const rentalGear = [
  { item: 'Jacket', price: '\u20B9500' },
  { item: 'Trekking Shoes', price: '\u20B9500' },
  { item: 'Trekking Stick', price: '\u20B9300' },
  { item: 'Raincoat', price: '\u20B9300' },
  { item: 'Gloves / Torch / Pants', price: '\u20B9200' },
];

export const bookingPolicy = [
  'Advance booking: \u20B91,000',
  'Balance payable at pickup',
  'Government ID mandatory (Aadhar/License)',
  'Consent letter and emergency contact required',
];

export const preparationPoints = [
  'Must be fit for 4-5 hrs walking per day',
];

export const bestSeasons = [
  { period: 'April-June', desc: 'Pleasant' },
  { period: 'Sept-Nov', desc: 'Clear views' },
  { period: 'Dec-Mar', desc: 'Snow treks' },
];
