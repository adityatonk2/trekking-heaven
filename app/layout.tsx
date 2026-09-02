import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import { OFFICE_ADDRESS, PRIMARY_DISPLAY, EMAIL_ADDRESS } from '@/lib/constants';
import { THEME_INIT_SCRIPT } from '@/lib/theme-script';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Trekkers Heaven | Top Himalayan Treks 2025 | Adventure Trekking Tours',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Top Himalayan Treks 2025 — Adventure trekking tours with experienced local guides. Your journey to the mountains starts here.',
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
  },
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
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/new-logo.png`,
    telephone: PRIMARY_DISPLAY,
    email: EMAIL_ADDRESS,
    address: {
      '@type': 'PostalAddress',
      streetAddress: OFFICE_ADDRESS.line1,
      addressLocality: OFFICE_ADDRESS.city,
      addressRegion: OFFICE_ADDRESS.state,
      postalCode: OFFICE_ADDRESS.pin,
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.instagram.com/trekkers.heaven',
      'https://youtube.com/@trekkersheaven',
    ],
  };

  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
