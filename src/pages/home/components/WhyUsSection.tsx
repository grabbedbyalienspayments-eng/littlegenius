import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: 'ri-building-4-line',
    label: 'Ecosistem educațional complet',
    desc: 'Creșă, grădiniță și școală sub același acoperiș — continuitate reală, fără rupturi de mediu.',
  },
  {
    icon: 'ri-team-line',
    label: 'Clase cu număr mic de elevi',
    desc: 'Fiecare copil primește atenție individualizată și relație autentică cu profesorul.',
  },
  {
    icon: 'ri-discuss-line',
    label: 'Comunicare constantă cu familia',
    desc: 'Jurnal de clasă, evaluări periodice, școala părinților și consiliere psihopedagogică.',
  },
  {
    icon: 'ri-palette-line',
    label: 'Activități extracurriculare variate',
    desc: 'Cluburi, after-school, școală de vară, excursii, proiecte tematice și tabere.',
  },
  {
    icon: 'ri-heart-pulse-line',
    label: 'Siguranță și suport complet',
    desc: 'Cabinet medical, cabinet psihologic și personal dedicat în permanență.',
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="despre-noi-detalii" className="relative bg-white overflow-hidden" ref={ref}>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

        {/* Left — image with dramatic mask — NO hard bottom line */}
        <div className={`relative h-[420px] lg:h-auto overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="/images/why-cine-1.webp"
            alt="Viața la Little Genius"
            className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom"
          />

          {/* ── Right gradient — blends image into white content ── */}
          <div className="absolute inset-0 hidden lg:block" style={{
            background: 'linear-gradient(to right, transparent 30%, rgba(255,255,255,0.5) 65%, rgba(255,255,255,0.95) 85%, white 100%)'
          }} />

          {/* ── Bottom gradient — eliminates hard line, dissolves into white ── */}
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.85) 70%, white 100%)'
          }} />

          {/* Mobile bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white lg:hidden" />

          {/* Floating stat */}
          <div className="absolute bottom-10 left-6 glass-dark rounded-xl px-5 py-3.5 z-10 hidden lg:block">
            <p className="text-sm font-bold text-white">Un mediu unde copilul</p>
            <p className="text-xs text-navy-300 mt-0.5">este văzut și îndrumat</p>
          </div>
        </div>

        {/* Right — editorial content */}
        <div className={`flex flex-col justify-center px-8 lg:px-14 py-20 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-navy-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600">De ce Little Genius</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-2">
            Un mediu unde copilul
          </h2>
          <h2 className="font-display text-3xl lg:text-4xl font-bold italic text-navy-600 leading-tight mb-6">
            este văzut, îndrumat și sprijinit
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-10 max-w-sm">
            Părinții caută un mediu în care copilul să fie cunoscut, înțeles și ajutat să 
            devină mai bun în fiecare zi. La Little Genius, educația vine cu grijă reală și 
            comunicare constantă.
          </p>

          <div className="space-y-0 divide-y divide-stone-100">
            {reasons.map((item, i) => (
              <div
                key={item.label}
                className={`group flex items-start gap-4 py-4.5 hover:bg-navy-50/50 transition-all duration-300 -mx-2 px-2 rounded-lg cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-navy-100 group-hover:bg-navy-200 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200">
                  <i className={`${item.icon} text-base text-navy-700`} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-navy-900 text-sm mb-0.5">{item.label}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-5 h-5 flex items-center justify-center text-navy-200 group-hover:text-amber-400 transition-colors duration-200 shrink-0 mt-1">
                  <i className="ri-arrow-right-line text-xs" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
