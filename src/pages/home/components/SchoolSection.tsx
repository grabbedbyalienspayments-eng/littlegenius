import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    icon: 'ri-group-line',
    label: 'Clase cu număr mic de elevi',
    desc: 'Atenție individualizată, relație autentică profesor–elev și progres real pentru fiecare copil — nu doar pentru medie.',
  },
  {
    icon: 'ri-translate-2',
    label: 'Engleză și germană intensiv',
    desc: 'Limbi moderne integrate profund în programa zilnică, nu tratate ca materie adiacentă. Fluență reală, nu vocabular izolat.',
  },
  {
    icon: 'ri-lightbulb-line',
    label: 'Gândire independentă',
    desc: 'Elevii sunt încurajați să argumenteze, să pună întrebări și să rezolve probleme. Autonomia intelectuală, cultivată devreme.',
  },
  {
    icon: 'ri-shield-star-line',
    label: 'Încredere în sine și cooperare',
    desc: 'Spiritul de echipă primează. Greșeala face parte din proces — nu e motiv de descurajare, ci de creștere.',
  },
];

const curriculumPillars = [
  { icon: 'ri-book-open-line', label: 'Curriculum național integral' },
  { icon: 'ri-discuss-line', label: 'Metode colaborative de predare' },
  { icon: 'ri-user-settings-line', label: 'Diferențiere și individualizare' },
  { icon: 'ri-trophy-line', label: 'Participare la concursuri școlare' },
];

const clubs = [
  { icon: 'ri-chess-line', label: 'Șah' },
  { icon: 'ri-music-2-line', label: 'Dans' },
  { icon: 'ri-footprint-line', label: 'Balet' },
  { icon: 'ri-boxing-line', label: 'Karate' },
  { icon: 'ri-water-flash-line', label: 'Înot' },
  { icon: 'ri-music-line', label: 'Pian' },
];

const extraPrograms = [
  {
    icon: 'ri-time-line',
    color: 'text-navy-700',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
    label: 'After-school',
    desc: 'Program de după-amiază cu teme asistate, activități și supraveghere atentă — continuarea zilei în siguranță.',
  },
  {
    icon: 'ri-sun-line',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    label: 'Școală de vară',
    desc: 'Program estival educativ și recreativ cu activități variate, excursii tematice și experiențe noi.',
  },
  {
    icon: 'ri-restaurant-line',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    label: 'Alimentație sănătoasă',
    desc: 'Meniuri echilibrate, preparate zilnic cu atenție pentru nevoile nutriționale ale fiecărei vârste.',
  },
];

export default function SchoolSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="scoala" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Section intro — editorial split */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-navy-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
                Școală · Clasele I–VIII
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
              Școala Little Genius
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-5">
              Pregătire solidă pentru viață, nu doar pentru note. Curriculum național integral, metode 
              colaborative de predare și un mediu care cultivă gândirea independentă, motivația și 
              responsabilitatea personală.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed mb-8">
              Clasele mici permit profesorilor să cunoască fiecare elev în profunzime — nu există medii 
              ascunse, ci parcursuri individuale urmărite cu atenție și comunicate deschis familiei.
            </p>
            {/* Curriculum chips */}
            <div className="flex flex-wrap gap-2">
              {curriculumPillars.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-navy-50 border border-navy-100 rounded-full px-3.5 py-1.5"
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className={`${item.icon} text-xs text-navy-600`} />
                  </div>
                  <span className="text-xs font-semibold text-navy-800 whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="h-[420px] rounded-2xl overflow-hidden">
            <img
              src="/images/school-s2.webp"
              alt="Clasă Little Genius — metode colaborative de predare"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4 key pedagogical pillars */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {pillars.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-start gap-5 border border-navy-100 rounded-xl p-6 bg-navy-50/30 hover:bg-navy-50/70 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${300 + i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-xl text-navy-700`} />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-base mb-1.5 leading-snug">{item.label}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clubs band — navy */}
        <div
          className={`bg-navy-800 rounded-2xl p-8 mb-8 transition-all duration-700 delay-450 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-72 shrink-0">
              <h3 className="text-xl font-bold text-white mb-2">Cluburi și opționale</h3>
              <p className="text-sm text-navy-300 leading-relaxed">
                Activități extracurriculare integrate în programul zilnic — pentru descoperirea pasiunilor timpurii și dezvoltarea aptitudinilor speciale.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {clubs.map((club) => (
                <div
                  key={club.label}
                  className="flex items-center gap-2 bg-navy-700 border border-navy-600 hover:border-amber-400/70 rounded-full px-5 py-2.5 cursor-default transition-colors duration-200"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${club.icon} text-xs text-amber-400`} />
                  </div>
                  <span className="text-sm font-medium text-white whitespace-nowrap">{club.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra programs — horizontal cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-550 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {extraPrograms.map((prog) => (
            <div
              key={prog.label}
              className={`flex items-start gap-4 border ${prog.border} ${prog.bg} rounded-xl p-6`}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white flex-shrink-0">
                <i className={`${prog.icon} text-lg ${prog.color}`} />
              </div>
              <div>
                <p className="font-bold text-neutral-800 text-sm mb-1.5">{prog.label}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
