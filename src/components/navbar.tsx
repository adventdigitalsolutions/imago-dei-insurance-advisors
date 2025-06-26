'use client';

import React, { useState } from 'react';
import { getCopy } from '@/getCopy';
import Image from 'next/image';
import { Button } from '@/components/button';

export const Navbar = () => {
  const navbarItems = getCopy('navbarItems');
  const [menuOpen, setMenuOpen] = useState(false);

  const formatLink = (label: string) =>
    label.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className="w-full bg-white fixed top-0 z-50 shadow-md">
      <div className="px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Image
          src="/imago-dei-logo.png"
          alt="Imago Dei Logo"
          width={80}
          height={80}
        />
        {/* -- DESKTOP -- */}
        <div className="lg:flex hidden">
          <ul className="flex space-x-10">
            {Object.entries(navbarItems).map(([key, label]) => (
              <li key={key}>
                <a
                  href={`${formatLink(label)}`}
                  className="text-royal-purple transition-all duration-200 hover:text-gray-300 text-lg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button>Book an Appointment</Button>
        </div>
        {/* -- MOBILE -- */}
        <div className="lg:hidden flex items-center space-x-2">
          <Button variant="small">Book an Appointment</Button>
          <button
            aria-label="Open menu"
            className="ml-2 flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-6 h-0.5 bg-royal-purple transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-royal-purple my-1 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-royal-purple transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white shadow-md ${
          menuOpen ? 'max-h-96 pt-6 pb-9' : 'max-h-0 py-0'
        }`}
      >
        <ul className="flex flex-col pl-8 items-start space-y-4">
          {Object.entries(navbarItems).map(([key, label]) => (
            <li key={key}>
              <a
                href={`${formatLink(label)}`}
                className="text-royal-purple transition-all duration-200 hover:text-gray-300 text-2xl"
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
