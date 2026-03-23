import { useEffect, useRef, useState } from 'react';

const values = [
  { icon: 'ri-building-4-line', label: 'Instituție completă' },
  { icon: 'ri-team-line', label: 'Clase mici' },
  { icon: 'ri-chat-3-line', label: 'Comunicare cu părinții' },
  { icon: 'ri-seedling-line', label: 'Continuitate educațională' },
];

export default function AboutSection() {
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
    <section id="despre-noi" className="relative bg-white py-28 overflow-hidden" ref={ref}>

      {/* Decorative oversized background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[200px] lg:text-[280px] text-navy-50 leading-none select-none pointer-events-none whitespace-nowrap -z-0">
        LG
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-navy-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600">Despre noi</span>
            </div>

            {/* Large editorial heading */}
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-3">
              Educație structurată,
            </h2>
            <h2 className="font-display text-4xl lg:text-5xl font-bold italic text-navy-600 leading-tight mb-8">
              grijă autentică
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed mb-5">
              Little Genius este o instituție educațională privată din București care reunește creșă, 
              grădiniță și școală gimnazială. Copilul intră mic și crește în continuitate — fără rupturi 
              de mediu, fără adaptări stresante, fără schimbări de valori.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed mb-10">
              Punem accent pe metode colaborative de predare, pe relația reală cu fiecare familie 
              și pe formarea unui copil echilibrat, motivat și pregătit pentru viață.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-navy-50/80 border border-navy-100 rounded-xl px-4 py-3"
                >
                  <div className="w-7 h-7 flex items-center justify-center text-navy-600 flex-shrink-0">
                    <i className={`${item.icon} text-base`} />
                  </div>
                  <span className="text-sm font-semibold text-navy-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side — elevated composition */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative w-full h-[540px] rounded-2xl overflow-hidden img-zoom-wrap shadow-[0_24px_60px_rgba(9,24,56,0.15)]">
                <img
                  src="/images/about-3.webp"
                  alt="Educatoare cu elevi la Little Genius"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>

              {/* Floating navy card */}
              <div className="absolute bottom-6 left-6 bg-navy-800/90 backdrop-blur-sm rounded-xl px-5 py-4">
                <p className="text-sm font-bold text-white">Continuitate educațională</p>
                <p className="text-xs text-navy-300 mt-0.5">Creșă · Grădiniță · Școală</p>
              </div>

              {/* Floating accent card - top right */}
              <div className="absolute -top-4 -right-4 bg-amber-400 rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(251,191,36,0.4)] animate-float-slow">
                <p className="text-xs font-black text-navy-900 uppercase tracking-wide">Sector 1</p>
                <p className="text-xs font-semibold text-navy-800">București</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
