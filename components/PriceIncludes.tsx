const items = [
  'Profesjonalne treningi siatkarskie',
  'Stała opieka wychowawców',
  'Ubezpieczenie NNW',
  'Starter Pack: koszulki, worek na buty, bidon, gadżety',
  'Wyżywienie (przekąska + obiad)',
  'Nielimitowany dostęp do wody',
  'Gry, zabawy sportowe i atrakcje poza treningami',
  'Nagrody i pamiątkowe dyplomy',
  'Treningi z profesjonalną trenerką przygotowania motorycznego',
  'Zdjęcia z profesjonalnej sesji zdjęciowej',
  'Wspólne ognisko z rodzinami na zakończenie',
];

export default function PriceIncludes() {
  return (
    <section
      className="py-20 md:py-28 bg-navy-mid"
      aria-labelledby="includes-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2
            id="includes-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
          >
            Co zawiera{' '}
            <span className="text-accent-orange">cena</span>
          </h2>
        </div>

        <div className="fade-in-section grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-navy-card rounded-lg p-4 border border-white/5 ${
                index === items.length - 1 && items.length % 2 !== 0
                  ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto sm:w-full'
                  : ''
              }`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
