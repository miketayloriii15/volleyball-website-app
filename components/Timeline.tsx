const schedule = [
  { time: '8:00 – 9:00',   activity: 'Przyjście na halę, gry i zabawy integracyjne' },
  { time: '9:00 – 10:30',  activity: 'I trening siatkarski (nauka techniki)' },
  { time: '10:30 – 11:00', activity: 'Przerwa i nawodnienie' },
  { time: '11:00 – 11:30', activity: 'Drugie śniadanie (snack)' },
  { time: '11:30 – 12:30', activity: 'Zajęcia dodatkowe – gry zespołowe, zabawy ruchowe, koordynacja, stretching, konkursy, wykłady, gość specjalny' },
  { time: '13:00',          activity: 'Obiad' },
  { time: '13:30 – 14:00', activity: 'Odpoczynek poobiedni' },
  { time: '14:00 – 15:30', activity: 'II trening siatkarski – gry i mini mecze' },
  { time: '15:30 – 16:00', activity: 'Rozciąganie, podsumowanie dnia i odbiór dzieci' },
];

export default function Timeline() {
  return (
    <section
      className="py-20 md:py-28 bg-navy-mid"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2
            id="schedule-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
          >
            Plan <span className="text-accent-orange">Dnia</span>
          </h2>
          <p className="text-text-soft text-base md:text-lg max-w-2xl mx-auto">
            Każdy dzień półkolonii ma stały i spokojny rytm. Łączymy trening
            siatkarski z zabawą, integracją i odpoczynkiem tak, aby dziewczynki
            rozwijały umiejętności sportowe, ale jednocześnie czerpały radość
            z aktywnych wakacji.
          </p>
        </div>

        {/* Vertical layout — handles long descriptions cleanly on all sizes */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[1.375rem] top-0 bottom-0 w-0.5 bg-accent-orange/30" />

          <div className="space-y-5">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="fade-in-section relative flex items-start gap-6"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-11 flex justify-center pt-[0.35rem]">
                  <div className="w-3 h-3 bg-accent-orange rounded-full z-10 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-navy-card rounded-lg p-4 border border-white/5 hover:border-accent-orange/30 transition-colors duration-300">
                  <span className="text-accent-orange font-bold text-sm block mb-1">
                    {item.time}
                  </span>
                  <p className="text-white font-medium text-sm leading-snug">
                    {item.activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
