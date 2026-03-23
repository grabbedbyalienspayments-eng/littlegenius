import { useEffect, useRef, useState } from 'react';

const educationBlocks = [
  {
    id: 'cresa',
    icon: 'ri-sun-line',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    borderColor: 'border-amber-100',
    accentBar: 'bg-amber-400',
    title: 'Creșă',
    age: '6 luni – 3 ani',
    text: 'Un mediu cald și atent, în care cei mici se acomodează treptat, învață prin joc și își formează primele rutine.',
    bullets: [
      'Rutine zilnice structurate',
      'Educatoare dedicate 1:5',
      'Activități senzoriale și motorii',
      'Program flexibil de acomodare',
    ],
  },
  {
    id: 'gradinita',
    icon: 'ri-leaf-line',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    accentBar: 'bg-emerald-400',
    title: 'Grădiniță',
    age: '3 – 6 ani',
    text: 'Activități educative și recreative care susțin dezvoltarea intelectuală, emoțională și socială a copilului.',
    bullets: [
      'Curriculum integrat prin joc',
      'Engleză și germană de la 3 ani',
      'Ateliere de artă și creativitate',
      'Pregătire graduală pentru școală',
    ],
  },
  {
    id: 'scoala',
    icon: 'ri-graduation-cap-line',
    iconColor: 'text-navy-700',
    iconBg: 'bg-navy-100',
    borderColor: 'border-navy-100',
    accentBar: 'bg-navy-500',
    title: 'Școală',
    age: 'Clasa 0 – Clasa a VIII-a',
    text: 'Un program structurat care încurajează performanța, responsabilitatea și dorința de a învăța.',
    bullets: [
      'Clase mici, atenție individualizată',
      'Materii opționale și aprofundate',
      'After-school și activități extra',
      'Pregătire olimpiade și concursuri',
    ],
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cresa-gradinita" className="py-28 bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-6 h-px bg-navy-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
              Structura educațională
            </span>
            <span className="w-6 h-px bg-navy-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
            Educație adaptată fiecărei etape de dezvoltare
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {educationBlocks.map((block, i) => (
            <div
              key={block.id}
              className={`bg-white border ${block.borderColor} rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${block.accentBar}`} />

              <div className="p-9">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${block.iconBg} flex items-center justify-center mb-5`}>
                  <i className={`${block.icon} text-2xl ${block.iconColor}`} />
                </div>

                {/* Title + age badge */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-2xl font-bold text-neutral-900">{block.title}</h3>
                  <span className="text-xs font-semibold text-neutral-500 bg-neutral-100 rounded-full px-3 py-1 whitespace-nowrap">
                    {block.age}
                  </span>
                </div>

                {/* Paragraph */}
                <p className="text-base text-neutral-500 leading-relaxed mb-6">{block.text}</p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${block.accentBar}`} />
                      <span className="text-sm text-neutral-600 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
