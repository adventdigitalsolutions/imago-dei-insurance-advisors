'use client';

import React, { useState, useEffect } from 'react';
import { getCopy } from '@/getCopy';
import Image from 'next/image';
import { Button } from '@/components/button';
import Link from 'next/link';
import { FiBriefcase, FiUser, FiBookOpen } from 'react-icons/fi';

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

  const getMobileNavIcon = (label: string) => {
    const normalizedLabel = label.toLowerCase();

    if (normalizedLabel.includes('solutions')) {
      return <FiBriefcase size={22} strokeWidth={2.15} aria-hidden="true" />;
    }

    if (normalizedLabel.includes('about')) {
      return <FiUser size={22} strokeWidth={2.15} aria-hidden="true" />;
    }

    return <FiBookOpen size={22} strokeWidth={2.15} aria-hidden="true" />;
  };

  return (
    <nav
      className={`w-full bg-white/90 backdrop-blur-md fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm border-b border-clinical-border' : 'border-b border-clinical-border/70'
        }`}
    >
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between max-w-6xl mx-auto gap-2 sm:gap-4">
        <Link className="shrink-0 lg:w-1/3" href="/">
          <Image
            src="/imago-dei-logo.png"
            alt="Imago Dei Insurance Advisors Logo"
            width={357}
            height={313}
            priority
            className="h-[58px] w-auto sm:h-[70px]"
          />
        </Link>
        {/* -- DESKTOP -- */}
        <div className="lg:flex hidden lg:w-full lg:pr-10">
          <ul className="flex space-x-8 items-center w-full justify-end">
            {Object.entries(navbarItems).map(([key, label]) => (
              <li key={key}>
                <a
                  href={`${formatLink(label)}`}
                  className="text-ink font-normal tracking-[0.02em] text-[1.08rem] sm:text-[1.18rem] transition-colors hover:text-medical-blue inline-flex items-center gap-2.5"
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
            <Button className="!text-[0.86rem] sm:!text-[0.9rem] !whitespace-nowrap">{getCopy('navbarAppointment')}</Button>
          </Link>
        </div>
        {/* -- MOBILE -- */}
        <div className="lg:hidden flex items-center justify-end space-x-1.5 sm:space-x-2 min-w-0 flex-1">
          <Link
            href="https://calendly.com/david-sog0/30min?month=2025-07"
            target="_blank"
          >
            <Button
              size="small"
              className="!px-4 !py-2 !text-[0.78rem] sm:!text-[0.86rem] !tracking-[0.07em] whitespace-nowrap"
            >
              {getCopy('navbarAppointment')}
            </Button>
          </Link>
          <button
            aria-label="Open menu"
            className="ml-1 sm:ml-2 flex flex-col justify-center items-center w-9 h-9 sm:w-10 sm:h-10 shrink-0"
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
        <ul className="flex flex-col pl-8 items-start space-y-5">
          {Object.entries(navbarItems).map(([key, label]) => (
            <li key={key}>
              <a
                href={`${formatLink(label)}`}
                className="text-ink font-normal tracking-[0.02em] text-[1.14rem] sm:text-[1.22rem] transition-colors hover:text-medical-blue inline-flex items-center gap-2.5"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-medical-blue/85 -translate-y-[1px]">{getMobileNavIcon(label)}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
