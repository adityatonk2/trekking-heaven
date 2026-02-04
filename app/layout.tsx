import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SecondaryNav from '@/components/SecondaryNav';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import ScrollToTop from '@/components/ScrollToTop';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Trekkers Heaven | Top Himalayan Treks 2025 | Adventure Trekking Tours',
  description:
    'Top Himalayan Treks 2025 — Adventure trekking tours with experienced local guides. Your journey to the mountains starts here.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header />
        <SecondaryNav />
        {children}
        <Footer />
        <ScrollToTop />
        <FloatingChat />
      </body>
    </html>
  );
}
