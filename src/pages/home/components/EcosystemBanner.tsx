import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: '01',
    label: 'Creșă',
    age: '1 – 3 ani',
    icon: 'ri-heart-line',
    accent: '#f59e0b',
    accentClass: 'text-amber-400',
    glowColor: 'rgba(251,191,36,0.25)',
    bgImg: '/images/eco-bg-1.webp',
    desc: 'Primele rutine, siguranță emoțională și adaptare ghidată. Educatoare dedicate, program organizat, mediu cald și afectuos.',
    details: ['Adaptare treptată', 'Rutine structurate', 'Mediu sigur și cald', 'Joc și explorare'],
    color: '#f59e0b',
    platformH: '28%',
    borderActive: 'border-amber-400/70',
    glowClass: 'shadow-[0_0_32px_rgba(251,191,36,0.35)]',
    bgClass: 'bg-amber-400',
  },
  {
    num: '02',
    label: 'Grădiniță',
    age: '3 – 6 ani',
    icon: 'ri-seedling-line',
    accent: '#34d399',
    accentClass: 'text-emerald-400',
    glowColor: 'rgba(52,211,153,0.22)',
    bgImg: '/images/eco-bg-2.webp',
    desc: 'Joc structurat, explorare, socializare și pregătire gradată pentru școală. Opționale integrale, limbi moderne timpurii.',
    details: ['Socializare activă', 'Pregătire pentru școală', 'Opționale integrate', 'Limbi moderne'],
    color: '#34d399',
    platformH: '54%',
    borderActive: 'border-emerald-400/70',
    glowClass: 'shadow-[0_0_32px_rgba(52,211,153,0.3)]',
    bgClass: 'bg-emerald-400',
  },
  {
    num: '03',
    label: 'Școală',
    age: '6 – 14 ani',
    icon: 'ri-graduation-cap-line',
    accent: '#fcd34d',
    accentClass: 'text-amber-300',
    glowColor: 'rgba(252,211,77,0.22)',
    bgImg: '/images/eco-bg-3.webp',
    desc: 'Curriculum național, engleză & germană intensiv, cluburi, after-school. Gândire critică, responsabilitate, încredere.',
    details: ['Curriculum național', 'Engleză & germană', 'Cluburi & after-school', 'Gândire critică'],
    color: '#fcd34d',
    platformH: '80%',
    borderActive: 'border-amber-300/70',
    glowClass: 'shadow-[0_0_32px_rgba(252,211,77,0.3)]',
    bgClass: 'bg-amber-300',
  },
];

export default function EcosystemBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1); // -1 = intro, 0,1,2 = steps
  const [isLocked, setIsLocked] = useState(false);
  const hasPlayedRef = useRef(false);
  const wheelCountRef = useRef(0);
  const lockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Intersection observer — trigger lock when section enters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          if (window.innerWidth >= 1024) {
            setActiveStep(0);
            setIsLocked(true);
          } else {
            setActiveStep(3);
          }
        }
      },
      { threshold: 0.55 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Wheel event — advance steps
  useEffect(() => {
    if (!isLocked) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isLocked) return;
      e.preventDefault();
      if (e.deltaY < 0) return; // ignore scroll up

      wheelCountRef.current += 1;
      const next = wheelCountRef.current; // 1, 2, 3

      if (next <= 2) {
        setActiveStep(next);
      } else {
        // release
        setIsLocked(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isLocked]);

  // Reset wheel counter when lock starts
  useEffect(() => {
    if (isLocked) {
      wheelCountRef.current = 0;
    }
  }, [isLocked]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    };
  }, []);

  const step = activeStep >= 0 && activeStep <= 2 ? STEPS[activeStep] : null;

  return (
    <section
      id="traseu"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#070f1c', minHeight: '100vh' }}
    >

      {/* ── Ambient orbs ── */}
      <div className="absolute top-[20%] left-[5%] w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none animate-ambient" />
      <div className="absolute bottom-[15%] right-[5%] w-72 h-72 bg-emerald-500/4 blur-[100px] pointer-events-none animate-ambient" style={{ animationDelay: '2s' }} />

      {/* ─────────────────────────────────────────────────────
          DESKTOP — Cinematic fullscreen step carousel
      ───────────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-col items-center justify-center min-h-screen px-8 py-20">

        {/* Section header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: activeStep >= 0 ? 1 : 0, transform: activeStep >= 0 ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 mb-4">Un traseu educațional complet</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Educație adaptată fiecărei
            <em className="not-italic italic text-amber-200"> etape de dezvoltare</em>
          </h2>
          <p className="text-base text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Copilul nu schimbă mediul, nu schimbă valorile — crește în același spațiu, fără rupturi, de la 1 la 14 ani.
          </p>
        </div>

        {/* Three columns — crescendo staircase */}
        <div className="w-full max-w-7xl">
          <div className="flex items-end gap-5" style={{ height: '520px' }}>
            {STEPS.map((s, i) => {
              const isActive = activeStep >= 0 && i <= activeStep;
              const isCurrent = i === activeStep;
              // Height based on position in staircase
              const heights = ['58%', '76%', '100%'];
              const cardH = heights[i];

              return (
                <div
                  key={s.label}
                  className="relative flex-1 rounded-3xl overflow-hidden transition-all"
                  style={{
                    height: isActive ? cardH : '8%',
                    transition: 'height 0.9s cubic-bezier(0.34,1.2,0.64,1), opacity 0.6s ease, box-shadow 0.6s ease',
                    opacity: isActive ? 1 : 0.15,
                    boxShadow: isCurrent
                      ? `0 40px 80px rgba(0,0,0,0.7), 0 0 0 2px ${s.accent}50`
                      : isActive
                        ? '0 20px 40px rgba(0,0,0,0.5)'
                        : 'none',
                  }}
                >
                  {/* Background image */}
                  <img
                    src={s.bgImg}
                    alt={s.label}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700"
                    style={{ transform: isCurrent ? 'scale(1.04)' : 'scale(1)' }}
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isCurrent
                        ? 'linear-gradient(to top, rgba(7,15,28,0.95) 0%, rgba(7,15,28,0.65) 45%, rgba(7,15,28,0.25) 100%)'
                        : 'linear-gradient(to top, rgba(7,15,28,0.92) 0%, rgba(7,15,28,0.75) 60%, rgba(7,15,28,0.55) 100%)',
                    }}
                  />

                  {/* Accent color glow bar top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-500"
                    style={{ background: s.accent, opacity: isCurrent ? 1 : 0.4 }}
                  />

                  {/* Content — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    {/* Step number decorative */}
                    <div
                      className="font-display font-black select-none mb-1"
                      style={{
                        fontSize: isCurrent ? '120px' : '60px',
                        lineHeight: 1,
                        color: s.accent,
                        opacity: isCurrent ? 0.08 : 0.06,
                        position: 'absolute',
                        top: isCurrent ? '10px' : '6px',
                        right: '16px',
                        transition: 'all 0.7s ease',
                      }}
                    >
                      {s.num}
                    </div>

                    {/* Icon */}
                    <div
                      className="mb-4 flex items-center justify-center rounded-2xl transition-all duration-500"
                      style={{
                        width: isCurrent ? '60px' : '44px',
                        height: isCurrent ? '60px' : '44px',
                        background: `${s.accent}25`,
                        border: `1.5px solid ${s.accent}50`,
                      }}
                    >
                      <i className={`${s.icon}`} style={{ color: s.accent, fontSize: isCurrent ? '26px' : '18px' }} />
                    </div>

                    {/* Label */}
                    <h3
                      className="font-display font-bold text-white transition-all duration-500"
                      style={{ fontSize: isCurrent ? '42px' : '22px', lineHeight: 1.1, marginBottom: isCurrent ? '8px' : '4px' }}
                    >
                      {s.label}
                    </h3>
                    <p
                      className="font-semibold transition-all duration-500"
                      style={{ color: s.accent, fontSize: isCurrent ? '15px' : '11px', marginBottom: isCurrent ? '12px' : '6px' }}
                    >
                      {s.age}
                    </p>

                    {/* Description — visible for all active cards */}
                    {isActive && (
                      <div
                        className="transition-all duration-700"
                        style={{ opacity: isActive ? 1 : 0 }}
                      >
                        <p
                          className="text-navy-100 leading-relaxed mb-4 max-w-[340px]"
                          style={{ fontSize: isCurrent ? '15px' : '12px' }}
                        >
                          {s.desc}
                        </p>
                        <div className={isCurrent ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-1.5'}>
                          {s.details.map((d) => (
                            <div key={d} className="flex items-center gap-2">
                              <div
                                className="rounded-full shrink-0"
                                style={{ width: isCurrent ? '6px' : '5px', height: isCurrent ? '6px' : '5px', background: s.accent }}
                              />
                              <span
                                className="text-navy-300"
                                style={{ fontSize: isCurrent ? '14px' : '11px' }}
                              >
                                {d}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div
            className="flex items-center justify-center gap-3 mt-8 transition-all duration-500"
            style={{ opacity: isLocked ? 1 : 0 }}
          >
            <span className="text-xs text-navy-400 font-medium">
              {activeStep === 0 ? 'Continuă scroll-ul pentru a descoperi traseul' : activeStep === 1 ? 'Un pas mai departe…' : 'Traseul complet'}
            </span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-400"
                  style={{
                    width: activeStep === i ? '24px' : '8px',
                    height: '8px',
                    background: activeStep >= i ? STEPS[i].accent : 'rgba(100,116,139,0.4)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div
          className="mt-14 pt-8 border-t border-navy-800/60 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 w-full max-w-4xl transition-all duration-700"
          style={{ opacity: activeStep >= 2 ? 1 : 0, transform: activeStep >= 2 ? 'translateY(0)' : 'translateY(16px)' }}
        >
          {['Același mediu de la 1 la 14 ani', 'Valori educaționale coerente', 'Tranziții fără stres pentru copil'].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <i className="ri-check-line text-amber-400 text-base" />
              <span className="text-sm font-semibold text-navy-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────
          MOBILE — Vertical timeline (always visible)
      ───────────────────────────────────────────────────── */}
      <div className="lg:hidden px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400 mb-4">Un traseu educațional complet</p>
          <h2 className="font-display text-3xl font-bold text-white leading-tight mb-4">
            Educație adaptată fiecărei
            <em className="not-italic italic text-amber-200"> etape</em>
          </h2>
          <p className="text-sm text-navy-300 leading-relaxed">
            Copilul crește în același spațiu, fără rupturi, de la 1 la 14 ani.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {STEPS.map((s, i) => (
            <div key={s.label} className="relative flex gap-5 pb-10 animate-fade-in-up" style={{ animationDelay: `${i * 200}ms` }}>
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 shrink-0"
                  style={{ borderColor: s.accent + 'aa', background: 'rgba(13,24,45,0.9)', boxShadow: `0 0 24px ${s.accent}55` }}
                >
                  <i className={`${s.icon} text-lg`} style={{ color: s.accent }} />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2 min-h-[60px]" style={{ background: `linear-gradient(to bottom, ${s.accent}55, rgba(71,85,105,0.3))` }} />
                )}
              </div>
              <div className="flex-1 pt-1">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-44">
                  <img src={s.bgImg} alt={s.label} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,15,28,0.9) 0%, rgba(7,15,28,0.4) 60%, transparent 100%)' }} />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-display text-2xl font-bold text-white">{s.label}</h3>
                    <span className="text-sm font-semibold" style={{ color: s.accent }}>{s.age}</span>
                  </div>
                </div>
                <p className="text-sm text-navy-300 leading-relaxed mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.details.map((d) => (
                    <span key={d} className="text-xs px-3 py-1.5 rounded-full border font-semibold" style={{ borderColor: s.accent + '44', color: s.accent + 'cc', background: s.accent + '12' }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-navy-800 flex flex-col gap-3">
          {['Același mediu de la 1 la 14 ani', 'Valori educaționale coerente', 'Tranziții fără stres pentru copil'].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <i className="ri-check-line text-amber-400 text-sm" />
              <span className="text-xs font-semibold text-navy-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Curved bottom → white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '80px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

    </section>
  );
}
