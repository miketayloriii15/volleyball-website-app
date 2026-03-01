'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Start', href: '#start' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Zespół', href: '#kadra' },
  { label: 'Informacje', href: '#informacje' },
  { label: 'Cena', href: '#cena' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      aria-label="Nawigacja główna"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#start"
            className="flex items-center gap-3 group"
            aria-label="GRYF CAMP — powrót do góry"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/assets/logo_no_background.PNG"
                alt="GRYF Camp logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide group-hover:text-accent-orange transition-colors">
              GRYF <span className="text-accent-orange">CAMP</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-soft hover:text-accent-orange transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacyjne"
        className={`md:hidden fixed inset-0 top-16 bg-navy-dark/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 pt-16">
          <div className="relative w-16 h-16 mb-4">
            <Image
              src="/assets/logo_no_background.PNG"
              alt="GRYF Camp logo"
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-xl font-semibold uppercase tracking-widest text-white hover:text-accent-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
