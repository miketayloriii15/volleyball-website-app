import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sekcja powitalna"
    >
      {/* Background Image */}
      <Image
        src="/assets/game_3.jpg"
        alt="Gra w siatkówkę"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accent-orange font-semibold text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Dołącz do nas
        </p>

        <p className="text-lg md:text-xl text-text-soft font-medium mb-2 animate-fade-in">
          Półkolonie siatkarskie
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6 animate-slide-up">
          GRYF{' '}
          <span className="text-accent-orange">VOLLEYBALL</span>
          <br />
          CAMP
        </h1>

        <p className="text-text-soft text-base md:text-lg font-medium mb-2 animate-fade-in">
          Dębica — 29.06.2026 — 04.07.2026
        </p>

        <p className="text-white/90 text-sm md:text-base mb-2 animate-fade-in">
          Trenuj z zawodniczkami Tauron Ligi!
        </p>

        <p className="text-text-soft text-sm md:text-base mb-10 animate-fade-in">
          Siatkówka, rywalizacja i niezapomniane wspomnienia
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a
            href="#kontakt"
            className="btn-glow bg-accent-orange hover:bg-accent-orange-hover text-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wider transition-all duration-300"
          >
            Zapisz się
          </a>
          <a
            href="#o-nas"
            className="border-2 border-white/30 hover:border-accent-orange text-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 hover:text-accent-orange"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
