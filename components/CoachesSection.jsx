'use client';

import '../styles/coaches.css';

const coaches = [
  {
    name: 'Aleksandra Kazała',
    role: 'Przyjmująca',
    image: '/assets/Aleksandra_Kazala.png',
    bio: 'Profesjonalna siatkarka pochodząca z Dębicy. Występowała w klubach w Polsce, Turcji i Francji oraz w lidze akademickiej w USA. Medalistka Tauron Ligi. Przekazuje uczestniczkom doświadczenie zdobyte w różnych systemach szkolenia oraz pokazuje, jak wygląda przygotowanie i funkcjonowanie zawodniczki na poziomie profesjonalnym.',
  },
  {
    name: 'Gabriela Ponikowska',
    role: 'Środkowa',
    image: '/assets/Gabriela_Ponikowska.png',
    bio: 'Osiem sezonów w Tauron Lidze oraz mistrzostwo I ligi. Zna drogę od pierwszych treningów po świadomą grę meczową. Podczas zajęć skupia się na technice, taktyce oraz kształtowaniu sportowej dyscypliny i odpowiedzialności w drużynie.',
  },
  {
    name: 'Karina Chmielewska',
    role: 'Rozgrywająca',
    image: '/assets/Karina_Chmielewska.png',
    bio: 'Medalistka Tauron Ligi, zdobywca Pucharu Polski. Jako rozgrywająca uczy rozumienia gry, podejmowania decyzji na boisku i współpracy zespołowej. Pokazuje, że siatkówka to nie tylko technika odbić, ale również komunikacja, odpowiedzialność i właściwe nastawienie mentalne.',
  },
  {
    name: 'Adrianna Kukulska',
    role: 'Przygotowanie motoryczne',
    image: '/assets/Adrianna_Kukulska.png',
    bio: 'Trenerka przygotowania motorycznego z doświadczeniem w sporcie wyczynowym, wieloletnia zawodniczka Tauron Ligi i brązowa medalistka mistrzostw Polski. Łączy praktykę zawodniczki z profesjonalnym podejściem do rozwoju siły, mocy i koordynacji ruchowej oraz profilaktyki urazów, dbając o bezpieczny i długofalowy rozwój uczestniczek.',
  },
];

export default function CoachesSection() {
  return (
    <section
      id="kadra"
      className="coaches-section"
      aria-labelledby="coaches-heading"
    >
      <div className="coaches-container">
        <div className="coaches-header fade-in-section">
          <h2 id="coaches-heading" className="coaches-title">
            Nasz{' '}
            <span className="coaches-title-accent">Zespół</span>
          </h2>
          <p className="coaches-subtitle">
            Zawodniczki z doświadczeniem najwyższego poziomu szkolenia
            siatkarskiego
          </p>
        </div>

        <div className="coaches-grid">
          {coaches.map(({ name, role, image, bio }) => (
            <article key={name} className="coach-card fade-in-section">
              <div className="coach-image-wrapper">
                <img
                  src={image}
                  alt={name + ' - trenerka siatkówki'}
                  className="coach-image"
                />
              </div>
              <div className="coach-body">
                <h3 className="coach-name">{name}</h3>
                <p className="coach-role">{role}</p>
                <p className="coach-bio">{bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
