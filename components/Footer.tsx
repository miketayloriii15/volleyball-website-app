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
