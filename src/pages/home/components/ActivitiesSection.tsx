import { useEffect, useRef, useState } from 'react';

const ACTIVITIES = [
  {
    icon: 'ri-translate-2',
    label: 'Limba engleză',
    accent: '#f59e0b',
    rotation: -1.5,
    img: '/images/act-img-1.webp',
  },
  {
    icon: 'ri-rhythm-line',
    label: 'Dans',
    accent: '#f43f5e',
    rotation: 0.8,
    img: '/images/act-img-2.webp',
  },
  {
    icon: 'ri-palette-line',
    label: 'Desen & Arte',
    accent: '#fb923c',
    rotation: -0.6,
    img: '/images/act-img-3.webp',
  },
  {
    icon: 'ri-water-flash-line',
    label: 'Înot',
    accent: '#2dd4bf',
    rotation: 1.4,
    img: '/images/act-img-4.webp',
  },
  {
    icon: 'ri-lightbulb-flash-line',
    label: 'Workshopuri',
    accent: '#fbbf24',
    rotation: -1.2,
    img: '/images/act-img-5.webp',
  },
  {
    icon: 'ri-calendar-event-line',
    label: 'Evenimente educative',
    accent: '#34d399',
    rotation: 0.6,
    img: '/images/act-img-6.webp',
  },
  {
    icon: 'ri-map-pin-2-line',
    label: 'Excursii',
    accent: '#60a5fa',
    rotation: -0.9,
    img: '/images/act-img-7.webp',
  },
  {
    icon: 'ri-star-smile-line',
    label: 'Serbări',
    accent: '#f472b6',
    rotation: 1.1,
    img: '/images/act-img-8.webp',
  },
  {
    icon: 'ri-flask-line',
    label: 'Proiecte educaționale',
    accent: '#a78bfa',
    rotation: -1.8,
    img: '/images/act-img-9.webp',
  },
  {
    icon: 'ri-tent-line',
    label: 'Tabere',
    accent: '#4ade80',
    rotation: 0.4,
    img: '/images/act-img-10.webp',
  },
  {
    icon: 'ri-scissors-cut-line',
    label: 'Activități creative',
    accent: '#fb7185',
    rotation: -0.7,
    img: '/images/act-img-11.webp',
  },
  {
    icon: 'ri-basketball-line',
    label: 'Activități sportive',
    accent: '#f97316',
    rotation: 1.6,
    img: '/images/act-img-12.webp',
  },
];

const STAGGER_ORDER = [0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

export default function ActivitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="activitati"
      className="relative overflow-hidden"
      style={{ background: '#070f1c' }}
      ref={ref}
    >

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '80px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
          <path d="M0,0 C480,80 960,80 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Ambient atmosphere */}
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-amber-500/5 blur-[100px] pointer-events-none animate-ambient" />
      <div className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] bg-emerald-500/4 blur-[90px] pointer-events-none animate-ambient" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-36 pb-24">

        {/* Section header + feature */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-amber-500" />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-amber-500">Activități</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Activități care
            </h2>
            <h2 className="font-display text-5xl lg:text-6xl font-bold italic text-amber-300 leading-tight mb-8">
              completează educația
            </h2>
            <p className="text-lg text-navy-200 leading-relaxed mb-6 max-w-md">
              Copiii participă la activități care stimulează creativitatea, mișcarea și
              dezvoltarea personală — în afara orelor, dar la fel de importante pentru formarea lor.
            </p>
          </div>

          {/* Featured: English Camp */}
          <div
            className={`relative rounded-3xl overflow-hidden transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ height: '340px', boxShadow: '0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(251,191,36,0.12)' }}
          >
            <img
              src="/images/act-feat-1.webp"
              alt="Tabăra de engleză Little Genius"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070f1c]/95 via-[#070f1c]/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-4">
                <i className="ri-star-line text-sm text-amber-400" />
                <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Program special</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Tabăra de engleză</h3>
              <p className="text-base text-navy-200 leading-relaxed">
                Activități lingvistice + joc + creativitate, într-un mediu familiar și sigur.
              </p>
            </div>
          </div>
        </div>

        {/* Activity cards — TALLER with big centered text */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {ACTIVITIES.map((act, idx) => {
            const staggerIdx = STAGGER_ORDER.indexOf(idx);
            return (
              <div
                key={act.label}
                className={`activity-card group relative rounded-2xl overflow-hidden cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{
                  '--rotation': `${act.rotation}deg`,
                  height: '210px',
                  transitionDelay: `${staggerIdx * 60}ms`,
                } as React.CSSProperties}
              >
                {/* Background image */}
                <img
                  src={act.img}
                  alt={act.label}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Strong dark overlay — text must dominate */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070f1c]/97 via-[#070f1c]/72 to-[#070f1c]/30" />

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 100%, ${act.accent}22, transparent 65%)` }}
                />

                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: act.accent, opacity: 0.8 }}
                />

                {/* CENTERED content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center">
                  {/* Icon */}
                  <div
                    className="mb-3 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-115"
                    style={{ background: `${act.accent}28`, border: `1.5px solid ${act.accent}50` }}
                  >
                    <i className={`${act.icon} text-xl`} style={{ color: act.accent }} />
                  </div>
                  {/* BIG LABEL — centered */}
                  <span
                    className="font-bold text-white leading-tight group-hover:text-white transition-colors duration-200"
                    style={{ fontSize: '18px' }}
                  >
                    {act.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className={`mt-14 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-base text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Prin aceste activități, copiii își dezvoltă abilitățile sociale, imaginația și spiritul de echipă —
            formând personalități echilibrate, curioase și încrezătoare în sine.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '80px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" fill="#fafaf9" />
        </svg>
      </div>
    </section>
  );
}
