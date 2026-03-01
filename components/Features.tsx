import Image from 'next/image';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Trenerki z Tauron Ligi',
    description: 'Ucz się od zawodniczek grających na najwyższym poziomie rozgrywkowym w Polsce.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Indywidualne podejście',
    description: 'Każda uczestniczka otrzymuje spersonalizowane wskazówki dopasowane do swojego poziomu.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Dla każdego poziomu',
    description: 'Bez względu na doświadczenie — początkujące i zaawansowane zawodniczki znajdą tu coś dla siebie.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Atmosfera',
    description: 'Przyjazna atmosfera, nowe przyjaźnie i niezapomniane wspomnienia z boiska.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-navy-dark" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wide Image */}
        <div className="fade-in-section relative w-full h-64 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden mb-16">
          <Image
            src="/assets/game_photo_7.JPG"
            alt="Zawodniczki podczas gry w siatkówkę"
            fill
            className="object-cover object-[0%_center]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
        </div>

        <h2
          id="features-heading"
          className="sr-only"
        >
          Nasze atuty
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="fade-in-section flex">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
