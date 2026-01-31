export interface Trek {
  id: string;
  slug: string;
  name: string;
  origin: string;
  days: number;
  difficulty: string;
  image: string;
  note?: string;
}

export interface TrekSection {
  id: string;
  title: string;
  titleBr?: string;
  intro?: (string | { bold: string; text: string })[];
  treks: Trek[];
  gridLarge?: boolean;
}

export const trekSections: TrekSection[] = [
  {
    id: 'winter-treks',
    title: 'Top Winter Treks',
    intro: [
      { bold: '• Kedarkantha Trek –', text: ' A perfect summit trek for beginners, with 360° snow-clad mountain views.' },
      { bold: '• Kuari Pass Trek –', text: ' Known as the Curzon Trail, offering majestic views of Nanda Devi and other Himalayan peaks.' },
      { bold: '• Dayara Bugyal Trek –', text: ' Expansive snowfields and gentle terrain, ideal for a scenic winter experience.' },
      { bold: '• Chopta Tungnath Trek –', text: ' A short yet spiritual journey through snow-laden trails to the highest Shiva temple.' },
      { bold: '• Brahmatal Trek –', text: ' A frozen alpine lake and panoramic ridgelines make this trek a winter wonder.' },
    ],
    treks: [
      { id: '1', slug: 'kedarkantha-trek', name: 'Kedarkantha Trek', origin: 'Ex Dehradun to Dehradun', days: 5, difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80' },
      { id: '2', slug: 'chopta-tungnath-trek', name: 'Chopta & Tungnath Trek', origin: 'Ex Dehradun to Dehradun', days: 3, difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { id: '3', slug: 'kuari-pass-trek', name: 'Kuari Pass Trek', origin: 'Ex Dehradun to Dehradun', days: 6, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
      { id: '4', slug: 'brahmatal-trek', name: 'Brahmatal Trek', origin: 'Ex Rishikesh / Kathgodam', days: 6, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80' },
    ],
  },
  {
    id: 'summer-treks',
    title: 'Best Summer Treks in',
    titleBr: 'May to July',
    intro: [
      'When the plains heat up, the Himalayas offer a refreshing escape with lush green meadows, blooming wildflowers, and snow-capped peaks under clear blue skies. Here are some of the top summer treks perfect for this season — combining natural beauty, adventure, and unforgettable views:',
      { bold: 'Top Summer Treks:', text: '' },
      { bold: '• Har Ki Dun Trek –', text: ' A timeless valley trail through ancient villages and alpine meadows, rich in folklore and beauty.' },
      { bold: '• Bali Pass Trek –', text: ' A thrilling high-altitude adventure connecting Har Ki Dun and Yamunotri, with jaw-dropping glacier views.' },
      { bold: '• Phulara Ridge Trek –', text: ' A unique ridge walk with 360° Himalayan views and blooming meadows — a rare gem in Uttarakhand.' },
      { bold: '• Sar Pass Trek –', text: ' A classic Himachal trek through forests, meadows, and snowfields — ideal for beginners and adventure seekers alike.' },
      { bold: '• Bhrigu Lake Trek –', text: ' Short yet spectacular, this trek near Manali leads to a glacial lake surrounded by majestic peaks.' },
      "Whether you're looking for thrill or tranquility, summer treks offer the best of both worlds. Need help choosing the right trek for your group? We're just a call away.",
    ],
    treks: [
      { id: '5', slug: 'har-ki-dun-trek', name: 'Har Ki Dun Trek', origin: 'Ex Dehradun to Dehradun', days: 7, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80' },
      { id: '6', slug: 'bali-pass-trek', name: 'Bali Pass Trek', origin: 'Ex Dehradun to Dehradun', days: 8, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80' },
      { id: '7', slug: 'sar-pass-trek', name: 'Sar Pass Trek', origin: 'Ex Kasol', days: 5, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
      { id: '8', slug: 'bhrigu-lake-trek', name: 'Bhrigu Lake Trek', origin: 'Ex Gulaba', days: 4, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80' },
    ],
  },
  {
    id: 'monsoon-treks',
    title: 'Monsoon Treks (July–August)',
    intro: [
      'The monsoon brings lush greenery, cascading waterfalls, and dramatic cloudscapes to the Himalayas. These treks offer a unique perspective — misty valleys, blooming rhododendrons, and fewer crowds. Perfect for those seeking solitude and raw natural beauty.',
    ],
    treks: [
      { id: '9', slug: 'hampta-pass-trek', name: 'Hampta Pass Trek', origin: 'Ex Manali', days: 5, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80' },
      { id: '10', slug: 'bhrigu-lake-trek', name: 'Bhrigu Lake Trek', origin: 'Ex Gulaba', days: 4, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80' },
      { id: '11', slug: 'friendship-peak-expedition', name: 'Friendship Peak Expedition', origin: 'Ex Manali to Manali', days: 7, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
    ],
  },
  {
    id: 'village-tour',
    title: 'Village Tours',
    intro: [
      'Immerse yourself in Himalayan village life. Walk through ancient hamlets, meet local communities, and experience authentic culture. These gentle tours combine cultural discovery with scenic trails — ideal for families and first-time visitors.',
    ],
    treks: [
      { id: '12', slug: 'osla-village-tour', name: 'Osla Village Tour', origin: 'Ex Dehradun', days: 10, difficulty: 'Easy', note: 'beginners & families', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80' },
      { id: '13', slug: 'sankri-sour-jokhal-village', name: 'Sankri-Sour & Jokhal Village', origin: 'Ex Dehradun', days: 4, difficulty: 'Easy', note: 'beginners & families', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80' },
    ],
  },
  {
    id: 'international-trek',
    title: 'International Trek',
    intro: [
      'Explore beyond Indian borders. Our international treks take you to Nepal, Bhutan, and the world\'s highest peaks. Everest Base Camp, Annapurna Circuit, and more — experience legendary trails with expert guides.',
    ],
    treks: [
      { id: '28', slug: 'everest-base-camp-trek', name: 'Everest Base Camp Trek', origin: 'Ex Kathmandu / Lukla', days: 13, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80' },
      { id: '29', slug: 'annapurna-base-camp-trek', name: 'Annapurna Base Camp Trek', origin: 'Ex Pokhara / Kathmandu', days: 10, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { id: '30', slug: 'langtang-valley-trek', name: 'Langtang Valley Trek', origin: 'Ex Kathmandu', days: 8, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
    ],
  },
  {
    id: 'autumn-treks',
    title: 'Autumn Treks (September, October, November)',
    treks: [
      { id: '14', slug: 'har-ki-dun-trek', name: 'Har Ki Dun Trek', origin: 'Ex Dehradun to Dehradun', days: 7, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80' },
      { id: '15', slug: 'bali-pass-trek', name: 'Bali Pass Trek', origin: 'Ex Dehradun to Dehradun', days: 8, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80' },
      { id: '16', slug: 'chopta-tungnath-trek', name: 'Chopta & Tungnath Trek', origin: 'Ex Dehradun to Dehradun', days: 3, difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { id: '17', slug: 'kuari-pass-trek', name: 'Kuari Pass Trek', origin: 'Ex Dehradun to Dehradun', days: 6, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
      { id: '18', slug: 'black-peak-kalanag', name: 'Black Peak Kalanag', origin: 'Ex Dehradun to Dehradun', days: 16, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
      { id: '19', slug: 'everest-base-camp-trek', name: 'Everest Base Camp Trek', origin: 'Ex Kathmandu / Lukla', days: 13, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80' },
      { id: '20', slug: 'do-dham-yatra', name: 'Do Dham Yatra', origin: 'Ex Haridwar to Haridwar', days: 5, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1580707221190-b1b422a742e0?w=600&q=80' },
      { id: '21', slug: 'ek-dham-kedarnath-yatra', name: 'Ek Dham Kedarnath Yatra', origin: 'Ex Haridwar to Haridwar', days: 5, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
    ],
    gridLarge: true,
  },
  {
    id: 'expedition',
    title: 'Expeditions',
    intro: [
      'For seasoned trekkers ready for the ultimate challenge. Our expeditions take you to high-altitude peaks with professional support, technical gear, and experienced mountaineers. Push your limits in the world\'s most spectacular mountains.',
    ],
    treks: [
      { id: '22', slug: 'black-peak-kalanag', name: 'Black Peak Kalanag', origin: 'Ex Dehradun to Dehradun', days: 16, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
      { id: '23', slug: 'friendship-peak-expedition', name: 'Friendship Peak Expedition', origin: 'Ex Manali to Manali', days: 7, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
    ],
  },
  {
    id: 'bike-tour',
    title: 'Bike Tour',
    intro: [
      'Ride through the Himalayas on two wheels. Our bike tours combine adventure with stunning mountain roads — from Leh-Ladakh to Spiti Valley. Guided tours with support vehicles for a safe, exhilarating experience.',
    ],
    treks: [
      { id: '31', slug: 'leh-ladakh-bike-expedition', name: 'Leh-Ladakh Bike Expedition', origin: 'Ex Leh', days: 12, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { id: '32', slug: 'spiti-valley-bike-tour', name: 'Spiti Valley Bike Tour', origin: 'Ex Manali', days: 8, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
      { id: '33', slug: 'manali-to-leh-bike-ride', name: 'Manali to Leh Bike Ride', origin: 'Ex Manali', days: 10, difficulty: 'Difficult', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80' },
    ],
  },
  {
    id: 'upcoming-treks',
    title: 'Upcoming Treks',
    intro: [
      'Browse our calendar of upcoming departures. Join small groups, secure your spot, and prepare for an unforgettable Himalayan adventure. Limited batch sizes ensure personalized attention and safety.',
    ],
    treks: [
      { id: '24', slug: 'kedarkantha-trek', name: 'Kedarkantha Trek', origin: 'Ex Dehradun to Dehradun', days: 5, difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80' },
      { id: '25', slug: 'har-ki-dun-trek', name: 'Har Ki Dun Trek', origin: 'Ex Dehradun to Dehradun', days: 7, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80' },
      { id: '26', slug: 'kuari-pass-trek', name: 'Kuari Pass Trek', origin: 'Ex Dehradun to Dehradun', days: 6, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
      { id: '27', slug: 'sar-pass-trek', name: 'Sar Pass Trek', origin: 'Ex Kasol', days: 5, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
    ],
  },
];

export const secondaryNavItems = [
  { href: '/treks', label: 'Trek', icon: 'trek' },
  { href: '/treks#summer-treks', label: 'Tour Package', icon: 'tour' },
  { href: '/treks#village-tour', label: 'Village Tours', icon: 'village' },
  { href: '/articles', label: 'Blogs', icon: 'blog' },
  { href: '/videos', label: 'Videos', icon: 'video' },
];
