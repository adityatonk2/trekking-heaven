import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customize Your Trek | Trekkers Heaven — Plan Your Trip',
  description:
    'Customize your Himalayan trek for your group. Share your dates, group size, budget and preferences — we\'ll plan a trip that fits.',
};

export default function CustomizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
