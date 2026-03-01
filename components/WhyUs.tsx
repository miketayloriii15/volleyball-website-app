import Image from 'next/image';

const features = [
  {
    title: 'TRENERKI Z TAURON LIGI',
    description:
      'Nasze trenerki potrafią przekazać praktyczne wskazówki, których nie ma w podręcznikach, i pokazać, jak naprawdę wygląda gra na wysokim poziomie.',
  },
  {
    title: 'INDYWIDUALNE PODEJŚCIE',
    description:
      'Każdy uczestnik jest widoczny i ważny dla trenera, a treningi są dostosowane do indywidualnych potrzeb i poziomu uczestniczek.',
  },
  {
    title: 'ROZWÓJ NIE TYLKO SPORTOWY',
    description:
      'Uczymy współpracy w drużynie, radzenia sobie z emocjami, odpowiedzialności i budowania pewności siebie.',
  },
  {
    title: 'AKTYWNE DNI BEZ NUDY',
    description:
      'Oprócz treningów przygotowaliśmy wiele dodatkowych atrakcji: konkursy, mini-turnieje, gościa specjalnego oraz Wielki Mecz Finałowy i ognisko.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="o-nas"
      className="py-20 md:py-28 bg-navy-mid"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Text Column */}
          <div className="fade-in-section">
            <h2
              id="why-us-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-8"
            >
              Dlaczego{' '}
              <span className="text-accent-orange">MY</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg leading-relaxed mb-4">
              Jako zawodniczki same przechodziłyśmy przez kolejne etapy rozwoju
              sportowego, dlatego wiemy, jak dużą rolę odgrywa nie tylko trening,
              ale także drużyna i wsparcie otoczenia. Chcemy przekazać
              uczestniczkom wiedzę techniczną, a jednocześnie pokazać, jak radzić
              sobie z trudnościami, stresem i sportowymi niepowodzeniami.
            </p>
            <p className="text-text-soft text-base md:text-lg leading-relaxed mb-4">
              Jedna z naszych trenerek pochodzi z Dębicy i właśnie tutaj
              rozpoczynała swoją sportową drogę, dlatego zależy nam na budowaniu
              lokalnej społeczności i oddaniu części tego, co same otrzymałyśmy
              na początku swojej kariery.
            </p>
            <p className="text-text-soft text-base md:text-lg leading-relaxed">
              Dla nas siatkówka to coś więcej niż sport, to przestrzeń do rozwoju
              na wielu płaszczyznach. Poprzez treningi uczymy dziewczynki
              współpracy, odpowiedzialności oraz budowania pewności siebie, która
              przekłada się także na funkcjonowanie poza boiskiem.
            </p>
          </div>

          {/* Logo Column */}
          <div className="fade-in-section flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/assets/logo_no_background.PNG"
                alt="GRYF Volleyball Camp logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-in-section card-hover bg-navy-card rounded-xl p-6 border border-white/5 hover:border-accent-orange/50 group"
            >
              <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4 group-hover:bg-accent-orange/30 transition-colors duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-orange" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-text-soft text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
