import React from 'react';
import { getCopy } from '@/getCopy';
import Image from 'next/image';

export const Navbar = () => {
  const navbarItems = getCopy('navbarItems');

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
        <ul className="flex space-x-6">
          {Object.entries(navbarItems).map(([key, label]) => (
            <li key={key}>
              <a
                href={`${formatLink(label)}`}
                className="text-royal-purple transition-all duration-200 hover:text-gray-300 "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button>Book an Appointment</button>
      </div>
    </nav>
  );
};
