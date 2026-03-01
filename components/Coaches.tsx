import CoachCard from './CoachCard';

export default function Coaches() {
  return (
    <section
      id="kadra"
      className="py-20 md:py-28 bg-navy-mid"
      aria-labelledby="coaches-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2
            id="coaches-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
          >
            Nasz <span className="text-accent-orange">Zespół</span>
          </h2>
          <p className="text-text-soft text-base md:text-lg max-w-2xl mx-auto">
            Poznaj trenerki, które poprowadzą treningi podczas GRYF Volleyball Camp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="fade-in-section">
            <CoachCard
              imageSrc="/assets/aleksandra.png"
              name="Aleksandra Kazała"
              position="Przyjmująca"
              description="Profesjonalna zawodniczka pochodząca z Dębicy. Doświadczenie zdobyte w Polsce, Turcji, Francji oraz NCAA w USA. Medalistka Tauron Ligi. Wnosi międzynarodową wiedzę treningową na najwyższym poziomie."
            />
          </div>

          <div className="fade-in-section">
            <CoachCard
              imageSrc="/assets/gabba.png"
              name="Gabriela Ponikowska"
              position="Środkowa"
              description="8 sezonów w Tauron Lidze. Prowadzi zawodniczki od podstaw technicznych po świadomość meczową. Uczy techniki, taktyki oraz dyscypliny mentalnej na boisku."
            />
          </div>

          <div className="fade-in-section">
            <CoachCard
              name="Wkrótce"
              position="Trenerka"
              description="4 trenerka zostanie ogłoszona wkrótce. Śledź nasze media społecznościowe, aby dowiedzieć się więcej!"
              isPlaceholder
            />
          </div>
        </div>
      </div>
    </section>
  );
}
