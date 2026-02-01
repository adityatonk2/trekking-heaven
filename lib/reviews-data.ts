export interface CategoryRating {
  label: string;
  score: number;
  isPositive?: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  images?: string[];
}

export interface ReviewsData {
  averageRating: number;
  totalRatings: number;
  distribution: { stars: number; count: number; percentage: number }[];
  categories: CategoryRating[];
  reviews: Review[];
}

export const defaultReviewsData: ReviewsData = {
  averageRating: 4.2,
  totalRatings: 1247,
  distribution: [
    { stars: 5, count: 612, percentage: 49 },
    { stars: 4, count: 374, percentage: 30 },
    { stars: 3, count: 187, percentage: 15 },
    { stars: 2, count: 50, percentage: 4 },
    { stars: 1, count: 24, percentage: 2 },
  ],
  categories: [
    { label: 'Trail Condition', score: 4.5, isPositive: true },
    { label: 'Safety', score: 4.3, isPositive: true },
    { label: 'Guides', score: 4.4, isPositive: true },
    { label: 'Camping', score: 3.8, isPositive: false },
    { label: 'Scenery', score: 4.1, isPositive: false },
  ],
  reviews: [
    {
      id: '1',
      author: 'Priya S.',
      rating: 5,
      date: '3 months ago',
      text: 'Easy booking, great value! Stunning trails at a reasonable price. The summit sunrise at Kedarkantha was unforgettable. Professional guides and cozy camps. Highly recommended!',
      images: [
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80',
        'https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&q=80',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80',
      ],
    },
    {
      id: '2',
      author: 'Rahul M.',
      rating: 4,
      date: '4 months ago',
      text: 'Effortless booking, unbeatable affordability! Small yet comfortable camps in the heart of the Himalayas. Surrounded by majestic peaks, it\'s a peaceful gem. Thumbs up!',
    },
    {
      id: '3',
      author: 'Anjali K.',
      rating: 5,
      date: '2 months ago',
      text: 'Best trekking experience! The team made everything smooth from start to finish. Views were breathtaking and the food at camp was surprisingly good. Will definitely trek with them again.',
    },
  ],
};
