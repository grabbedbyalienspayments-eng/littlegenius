import { useEffect, useRef, useState } from 'react';

const teamPillars = [
  {
    icon: 'ri-award-line',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    label: 'Educatori și profesori cu vocație',
    desc: 'Fiecare cadru didactic este selectat nu doar pentru competența profesională, ci și pentru capacitatea de a construi relații autentice cu copiii.',
  },
  {
    icon: 'ri-focus-3-line',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    label: 'Formare continuă',
    desc: 'Echipa participă permanent la programe de formare, pentru a aplica metode moderne și actualizate.',
  },
  {
    icon: 'ri-community-line',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    label: 'Colaborare interdisciplinară',
    desc: 'Educatori, psihologi, profesori de limbi și instructori de sport lucrează împreună pentru un program coerent.',
  },
  {
    icon: 'ri-links-line',
    color: 'text-stone-600',
    bg: 'bg-stone-100',
    label: 'Colaborări educaționale',
    desc: 'Parteneriate cu organizații și programe educaționale care completează și îmbogățesc oferta Little Genius.',
  },
];

export default function TeamPartnersSection() {
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
    <section className="py-24 bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                Echipă și parteneri
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight mb-6">
              Oamenii din spatele Little Genius
            </h2>
            <p className="text-base text-neutral-500 leading-relaxed mb-8">
              Calitatea educației depinde de calitatea oamenilor care o oferă. La Little Genius, echipa educațională este construită în jurul valorilor de grijă, profesionalism și implicare reală.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed">
              Colaborăm cu parteneri și organizații care completează misiunea noastră educațională — pentru a oferi copiilor experiențe cât mai variate și bogate.
            </p>

            {/* Photo */}
            <div className="mt-10 h-52 rounded-2xl overflow-hidden">
              <img
                src="/images/team1.webp"
                alt="Echipa educațională Little Genius"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-4">
            {teamPillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className={`flex items-start gap-5 bg-white border border-stone-100 rounded-xl p-6 hover:-translate-y-0.5 cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${120 + i * 100}ms` }}
              >
                <div className={`w-11 h-11 rounded-lg ${pillar.bg} flex items-center justify-center shrink-0`}>
                  <i className={`${pillar.icon} text-lg ${pillar.color}`} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1.5 leading-snug">{pillar.label}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
