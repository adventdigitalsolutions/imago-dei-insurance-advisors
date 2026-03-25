'use client';

import React, { useState, useEffect } from 'react';
import { getCopy } from '@/getCopy';
import Image from 'next/image';
import { Button } from '@/components/button';
import Link from 'next/link';

export const Navbar = () => {
  const navbarItems = getCopy('navbarItems');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatLink = (label: string) =>
    label.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav
      className={`w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm border-b border-clinical-border' : 'border-b border-clinical-border/70'
        }`}
    >
      <div className="px-6 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <Link className="lg:w-1/3" href="/">
          <Image
            src="/imago-dei-logo.png"
            alt="Imago Dei Logo"
            width={70}
            height={70}
          />
        </Link>
        {/* -- DESKTOP -- */}
        <div className="lg:flex hidden lg:w-full lg:pr-10">
          <ul className="flex space-x-8 items-center w-full justify-end">
            {Object.entries(navbarItems).map(([key, label]) => (
              <li key={key}>
                <a
                  href={`${formatLink(label)}`}
                  className="text-muted-ink font-semibold text-sm tracking-wide uppercase transition-colors duration-200 hover:text-medical-navy border-b-2 border-transparent hover:border-medical-blue pb-0.5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <Link
            href="https://calendly.com/david-sog0/30min?month=2025-07"
            target="_blank"
          >
            <Button>{getCopy('navbarAppointment')}</Button>
          </Link>
        </div>
        {/* -- MOBILE -- */}
        <div className="lg:hidden flex items-center space-x-2">
          <Link
            href="https://calendly.com/david-sog0/30min?month=2025-07"
            target="_blank"
          >
            <Button size="small">{getCopy('navbarAppointment')}</Button>
          </Link>
          <button
            aria-label="Open menu"
            className="ml-2 flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-clinical-border ${menuOpen ? 'max-h-96 pt-6 pb-9' : 'max-h-0 py-0'
          }`}
      >
        <ul className="flex flex-col pl-8 items-start space-y-6">
          {Object.entries(navbarItems).map(([key, label]) => (
            <li key={key}>
              <a
                href={`${formatLink(label)}`}
                className="text-ink font-medium uppercase tracking-wide text-xl transition-colors hover:text-medical-blue"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
