/**
 * Rental gear items — images from public/rental-gears/
 * Display names derived from filenames; prices for display on trek detail.
 */
export interface RentalGearItem {
  name: string;
  image: string;
  price: string;
}

export const RENTAL_GEARS: RentalGearItem[] = [
  { name: 'Trekking Jacket', image: '/rental-gears/trekking-jacket.jpeg', price: '₹ 500' },
  { name: 'Hiking Pants', image: '/rental-gears/hiking-pants.jpeg', price: '₹ 500' },
  { name: 'Trekking Shoe', image: '/rental-gears/trekking-shoe.jpeg', price: '₹ 500' },
  { name: 'Woolen Socks', image: '/rental-gears/woolen-socks.jpeg', price: '₹ 200' },
  { name: 'Hand Gloves', image: '/rental-gears/hand-gloves.jpeg', price: '₹ 200' },
  { name: 'Head Torch', image: '/rental-gears/head-torch.jpeg', price: '₹ 150' },
  { name: 'Woolen Cap', image: '/rental-gears/woolen-cap.jpeg', price: '₹ 150' },
  { name: 'Poncho', image: '/rental-gears/poncho.jpeg', price: '₹ 200' },
  { name: 'Trekking Pole', image: '/rental-gears/Tracking-pole.jpeg', price: '₹ 150' },
  { name: 'Backpack (60L)', image: '/rental-gears/back-pack.jpeg', price: '₹ 500' },
];
