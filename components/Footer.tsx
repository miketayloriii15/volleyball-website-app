import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy-card border-t border-white/5" aria-label="Stopka">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative w-24 h-24">
              <Image
                src="/assets/logo_no_background.PNG"
                alt="GRYF Volleyball Camp logo"
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
            <p className="text-text-soft text-sm text-center md:text-left">
              GRYF Volleyball Camp
              <br />
              Dębica 2026
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
              Nawigacja
            </h3>
            {[
              { label: 'Start', href: '#start' },
              { label: 'O nas', href: '#o-nas' },
              { label: 'Kadra', href: '#kadra' },
              { label: 'Informacje', href: '#informacje' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-soft text-sm hover:text-accent-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/assets/regulamin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-soft text-sm hover:text-accent-orange transition-colors"
            >
              Regulamin
            </a>
            <a
              href="/assets/regulamin.pdf"
              download
              className="text-sm font-semibold text-accent-orange border border-accent-orange/50 hover:bg-accent-orange hover:text-white transition-all duration-300 px-3 py-1.5 rounded-lg"
            >
              Pobierz Regulamin
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
              Kontakt
            </h3>
            <a
              href="https://www.instagram.com/gryfcampdebica?igsh=Mm4zamJqd3Z3dDJy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-soft text-sm hover:text-accent-orange transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @gryfcampdebica
            </a>
            <p className="text-text-soft text-sm text-center md:text-right">
              Hala Zespołu Szkół nr 2
              <br />
              ul. Lisa 2, Dębica
            </p>
            <p className="text-text-soft text-sm">
              29.06.2026 – 04.07.2026
            </p>
            <a
              href="mailto:gryfcampdebica@gmail.com"
              className="text-text-soft text-sm hover:text-accent-orange transition-colors"
            >
              gryfcampdebica@gmail.com
            </a>
            <a
              href="tel:+48884030709"
              className="text-text-soft text-sm hover:text-accent-orange transition-colors"
            >
              +48 884 030 709
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-text-soft text-xs">
            &copy; {new Date().getFullYear()} GRYF Volleyball Camp. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
