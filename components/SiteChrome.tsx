'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import SecondaryNav from './SecondaryNav';
import Footer from './Footer';
import FloatingChat from './FloatingChat';
import ScrollToTop from './ScrollToTop';
import ChatWidget from './ChatWidget';
import QuickQueryPopup from './QuickQueryPopup';

/** Public site chrome (nav, footer, WhatsApp bubble) — hidden on /admin routes. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <SecondaryNav />
      {children}
      <Footer />
      <ScrollToTop />
      <FloatingChat />
      <ChatWidget />
      <QuickQueryPopup />
    </>
  );
}
