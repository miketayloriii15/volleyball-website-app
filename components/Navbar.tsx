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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-navy-dark shadow-lg'
            : 'bg-navy-dark/70 backdrop-blur-sm'
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
              onClick={handleLinkClick}
            >
              <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0">
                <Image
                  src="/assets/logo_no_background.PNG"
                  alt="GRYF Camp logo"
                  fill
                  className="object-contain"
                  sizes="44px"
                />
              </div>
              <span className="text-base md:text-xl font-bold tracking-wide group-hover:text-accent-orange transition-colors">
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
              className="md:hidden relative z-10 flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacyjne"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-dark/98 backdrop-blur-lg"
          onClick={handleLinkClick}
        />

        {/* Links — centred in full screen */}
        <div className="relative flex flex-col items-center justify-center h-full gap-2 pt-16">
          <div className="relative w-16 h-16 mb-6">
            <Image
              src="/assets/logo_no_background.PNG"
              alt="GRYF Camp logo"
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : '0ms' }}
              className={`text-2xl font-bold uppercase tracking-widest py-3 px-8 text-white hover:text-accent-orange transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
