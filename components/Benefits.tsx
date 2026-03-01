const benefits = [
  {
    title: 'Trening z profesjonalistkami',
    description:
      'Kadrę tworzą zawodniczki grające na różnych pozycjach, dzięki czemu uczestniczki poznają siatkówkę z pełnej perspektywy — technicznej, taktycznej i mentalnej.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Nowoczesne metody szkolenia',
    description:
      'Pracujemy w oparciu o aktualne, międzynarodowe standardy treningowe stosowane w sporcie wyczynowym — skutecznie i świadomie.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Wielki Mecz Finałowy',
    description:
      'Zwieńczeniem półkolonii jest oficjalny mecz z sędziami i oprawą jak w profesjonalnych rozgrywkach — prawdziwe sportowe emocje.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Ognisko na zakończenie',
    description:
      'Po meczu zapraszamy uczestniczki wraz z rodzinami na wspólne ognisko integracyjne, które stanowi symboliczne podsumowanie całego tygodnia.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Nie ma czasu na nudę',
    description:
      'Poza treningami organizujemy gry ruchowe, zabawy zespołowe, konkursy z nagrodami oraz aktywności integracyjne, dzięki czemu każdy dzień jest intensywny i różnorodny.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Rozwój nie tylko sportowy',
    description:
      'Budujemy pewność siebie, odwagę w grze, umiejętność radzenia sobie z błędami oraz współpracę w grupie.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Unikalne nagrody i atrakcje',
    description:
      'Profesjonalna sesja zdjęciowa, konkursy z oryginalnymi nagrodami, sprzęt klubowy z Polski i zagranicy oraz spotkanie z gościem specjalnym z reprezentacji narodowej.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    title: 'Świetna atmosfera',
    description:
      'Tworzymy środowisko, w którym dzieci czują się swobodnie, nawiązują relacje i rozwijają pasję do sportu.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section
      className="py-20 md:py-28 bg-navy-dark"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
          >
            Dlaczego warto{' '}
            <span className="text-accent-orange">nas wybrać</span>
          </h2>
          <p className="text-text-soft text-base md:text-lg max-w-2xl mx-auto">
            Nasze półkolonie to nie tylko siatkówka. To realne interakcje
            z profesjonalnymi siatkarkami w atmosferze rywalizacji i dobrej
            zabawy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="fade-in-section card-hover bg-navy-card rounded-xl p-6 border border-white/5 hover:border-accent-orange/50 group"
            >
              <div className="text-accent-orange mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-soft text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
