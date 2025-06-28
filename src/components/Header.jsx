// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="bg-[#d8912c] text-white px-12 py-8 shadow-md h-42">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wide">
          LEJHRO
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium">
          <a href="#" className="hover:underline">Innovations</a>
          <a href="#" className="hover:underline">Business Services</a>
          <a href="#" className="hover:underline">Financial Services</a>
          <a href="#" className="hover:underline">Bootcamp</a>
        </nav>

        {/* Menu icon for mobile (optional) */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            {/* Placeholder for menu icon (Hamburger menu) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
