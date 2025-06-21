import React from 'react';
import { getCopy } from '@/getCopy';

export const Navbar = () => {
  const navbarItems = getCopy('navbarItems');

  const formatLink = (label: string) =>
    label.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      <ul className="flex space-x-6">
        {Object.entries(navbarItems).map(([key, label]) => (
          <li key={key}>
            <a href={`${formatLink(label)}`} className="hover:text-gray-300">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
