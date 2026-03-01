export default function ContactForm() {
  return (
    <section
      id="kontakt"
      className="py-20 md:py-28 bg-navy-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
          >
            <span className="text-accent-orange">Kontakt</span>
          </h2>
          <p className="text-text-soft text-base md:text-lg mb-4">
            Wypełnij formularz, a my odezwiemy się do Ciebie.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-text-soft">
            <a
              href="mailto:gryfcampdebica@gmail.com"
              className="text-accent-orange hover:underline font-medium"
            >
              gryfcampdebica@gmail.com
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a
              href="tel:+48884030709"
              className="text-accent-orange hover:underline font-medium"
            >
              +48 884 030 709
            </a>
          </div>
        </div>

        <div className="fade-in-section rounded-2xl overflow-hidden border border-white/5">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeH6GAcUFgYZvw6Om2nebU4279TT6dy6VoHyYDae33KlNJRng/viewform?embedded=true"
            className="w-full h-[1400px] sm:h-[1200px] md:h-[1000px]"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formularz kontaktowy"
          >
            Ładowanie…
          </iframe>
        </div>
      </div>
    </section>
  );
}
