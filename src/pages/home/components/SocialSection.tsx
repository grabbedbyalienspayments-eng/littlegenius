import { useEffect, useRef, useState } from 'react';

const commitments = [
  {
    icon: 'ri-seedling-line',
    label: 'Educație pentru viitor',
    desc: 'Formăm copii care gândesc, colaborează și contribuie — nu doar elevi care acumulează informații.',
    img: '/images/soc-c1.webp',
    accent: '#34d399',
    accentBg: 'bg-emerald-500',
  },
  {
    icon: 'ri-global-line',
    label: 'Responsabilitate față de comunitate',
    desc: 'Implicăm copiii în activități care îi conectează la lumea din jur, la natură, la ceilalți și la valorile civice.',
    img: '/images/soc-c2.webp',
    accent: '#60a5fa',
    accentBg: 'bg-blue-400',
  },
  {
    icon: 'ri-hand-heart-line',
    label: 'Incluziune și respect',
    desc: 'Fiecare copil este primit cu respect, indiferent de ritmul său de dezvoltare sau de particularitățile sale.',
    img: '/images/soc-c3.webp',
    accent: '#f472b6',
    accentBg: 'bg-pink-400',
  },
  {
    icon: 'ri-recycle-line',
    label: 'Educație ecologică',
    desc: 'Activitățile noastre includ teme legate de mediu, natură și responsabilitate față de planeta pe care o locuim.',
    img: '/images/soc-c4.webp',
    accent: '#f59e0b',
    accentBg: 'bg-amber-400',
  },
];

export default function SocialSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [cardsActive, setCardsActive] = useState(0);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!hasPlayedRef.current) {
            hasPlayedRef.current = true;
            if (window.innerWidth >= 1024) {
              setTimeout(() => setIsLocked(true), 200);
            } else {
              setCardsActive(4);
            }
          }
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isLocked) return;
    const t1 = setTimeout(() => setCardsActive(1), 0);
    const t2 = setTimeout(() => setCardsActive(2), 700);
    const t3 = setTimeout(() => setCardsActive(3), 1400);
    const t4 = setTimeout(() => setCardsActive(4), 2100);
    const release = setTimeout(() => setIsLocked(false), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(release); };
  }, [isLocked]);

  useEffect(() => {
    if (!isLocked) return;
    const prevent = (e: WheelEvent) => e.preventDefault();
    window.addEventListener('wheel', prevent, { passive: false });
    return () => window.removeEventListener('wheel', prevent);
  }, [isLocked]);

  return (
    <section className="relative overflow-hidden" style={{ background: '#070f1c' }} ref={ref}>

      {/* SVG wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '72px' }}>
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ width: '100%', height: '72px', display: 'block' }}>
          <path d="M0,0 C480,72 960,72 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/2 left-[8%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none animate-ambient" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-amber-400/5 blur-[90px] pointer-events-none animate-ambient" style={{ animationDelay: '2s' }} />

      {/* Scroll lock indicator */}
      {isLocked && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 pointer-events-none">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`w-2 h-2 rounded-full transition-all duration-400 ${cardsActive > i ? 'bg-amber-400 scale-110' : 'bg-navy-600'}`} />
            ))}
          </div>
          <span className="text-xs text-navy-300 font-medium">Valorile noastre</span>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28 pb-20">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-amber-500">Implicare socială</span>
            <span className="w-8 h-px bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Valori care merg
            <br />
            <em className="not-italic italic text-amber-300">dincolo de sală</em>
          </h2>
          <p className="text-base text-navy-300 max-w-xl mx-auto leading-relaxed">
            Educația la Little Genius nu se limitează la materii și teme. Ne asumăm responsabilitatea de 
            a forma caractere, de a cultiva empatie și de a construi relații sănătoase cu lumea din jur.
          </p>
        </div>

        {/* Commitment cards grid — each with image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commitments.map((item, i) => (
            <div
              key={item.label}
              className={`group relative rounded-2xl overflow-hidden cursor-default transition-all duration-700 ${
                cardsActive > i
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
                height: '340px',
                boxShadow: cardsActive > i ? `0 0 40px ${item.accent}25, 0 24px 48px rgba(0,0,0,0.5)` : 'none',
                border: `1px solid ${item.accent}25`,
              }}
            >
              {/* Background image */}
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Cinematic layered gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.26) 100%)',
                }}
              />
              {/* Radial depth layer — darkens center where text sits */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 72%)',
                }}
              />
              {/* Mobile extra overlay — sm:hidden means active only on mobile */}
              <div
                className="absolute inset-0 sm:hidden"
                style={{ background: 'rgba(0,0,0,0.12)' }}
              />
              {/* Hover darkening layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'rgba(0,0,0,0.11)' }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: item.accent, opacity: 0.75 }}
              />

              {/* Content — perfectly centered column */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-5">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.accent}22`,
                    border: `1px solid ${item.accent}45`,
                    boxShadow: `0 0 18px ${item.accent}20`,
                  }}
                >
                  <i className={`${item.icon} text-2xl`} style={{ color: item.accent }} />
                </div>

                <h3
                  className="text-base font-extrabold text-white mb-3 leading-snug tracking-wide max-w-[200px]"
                  style={{
                    textShadow:
                      '0 2px 10px rgba(0,0,0,0.65), 0 1px 3px rgba(0,0,0,0.5)',
                  }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm text-white/90 leading-[1.75] max-w-[210px]"
                  style={{
                    textShadow: '0 1px 6px rgba(0,0,0,0.55)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${cardsActive >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-navy-400 max-w-2xl mx-auto leading-relaxed">
            Comunitatea noastră înseamnă copii, familii, educatori și parteneri care împart aceleași valori:
            grijă, respect, curiozitate și dorință de a contribui la o lume mai bună.
          </p>
        </div>
      </div>

      {/* SVG wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '64px' }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ width: '100%', height: '64px', display: 'block' }}>
          <path d="M0,64 C360,16 1080,16 1440,64 L1440,64 L0,64 Z" fill="#fafaf9" />
        </svg>
      </div>
    </section>
  );
}
