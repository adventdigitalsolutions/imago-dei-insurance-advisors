'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isSelfEmployedLandingPage =
    pathname === '/self-employed-health-insurance';

  return (
    <>
      {!isSelfEmployedLandingPage && <Navbar />}
      {children}
      {!isSelfEmployedLandingPage && <Footer />}
    </>
  );
}
