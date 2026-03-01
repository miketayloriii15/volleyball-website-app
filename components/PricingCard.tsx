const signupUrl = process.env.NEXT_PUBLIC_SIGNUP_FORM_URL || '#kontakt';

export default function PricingCard() {
  return (
    <section
      id="informacje"
      className="py-20 md:py-28 bg-navy-dark"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
          >
            Informacje{' '}
            <span className="text-accent-orange">podstawowe</span>
          </h2>
        </div>

        <div className="fade-in-section">
          <div className="bg-navy-card rounded-2xl border border-accent-orange/20 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-accent-orange to-accent-orange-hover" />

            <div className="p-8 md:p-12 text-center">
              {/* Date */}
              <div className="mb-8">
                <p className="text-text-soft text-sm uppercase tracking-wider mb-2">
                  Termin
                </p>
                <p className="text-white text-xl md:text-2xl font-bold">
                  29 czerwca 2026 – 4 lipca 2026
                </p>
              </div>

              {/* Location */}
              <div className="mb-10">
                <p className="text-text-soft text-sm uppercase tracking-wider mb-2">
                  Lokalizacja
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">
                  Hala Zespołu Szkół nr 2 w Dębicy
                </p>
                <p className="text-text-soft mt-1">
                  koło stadionu KS Wisłoka
                </p>
                <p className="text-text-soft">
                  ul. Lisa 2, 39-200 Dębica
                </p>
              </div>

              {/* Divider */}
              <div className="w-24 h-px bg-accent-orange/30 mx-auto mb-10" />

              {/* Price */}
              <div id="cena" className="mb-10">
                <p className="text-text-soft text-sm uppercase tracking-wider mb-3">
                  Cena
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-7xl font-black text-accent-orange">
                    849
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    PLN
                  </span>
                </div>
                <p className="text-text-soft text-sm mt-2">/ uczestniczka</p>
              </div>

              {/* Urgency notice */}
              <div className="mb-8 inline-flex items-center gap-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse flex-shrink-0" />
                <p className="text-accent-orange text-sm font-semibold">
                  Liczba miejsc ograniczona — nie czekaj!
                </p>
              </div>

              {/* CTA */}
              <a
                id="rezerwacja"
                href={signupUrl}
                className="btn-glow inline-block bg-accent-orange hover:bg-accent-orange-hover text-white font-bold px-10 py-4 rounded-lg text-base uppercase tracking-wider transition-all duration-300"
              >
                Zarezerwuj miejsce
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
