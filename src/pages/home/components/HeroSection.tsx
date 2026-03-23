import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onVisitClick: () => void;
}

const floatingPills = [
  'Număr mic de elevi',
  'Engleză & germană intensiv',
  'After-school & Școală de vară',
  'Cabinet medical & psihologic',
];

const lightRays = [
  { left: '35%', width: 80, height: '68%', rotate: -8, blur: 32, opacity: 0.07 },
  { left: '43%', width: 140, height: '58%', rotate: 1, blur: 45, opacity: 0.055 },
  { left: '54%', width: 90, height: '72%', rotate: -4, blur: 38, opacity: 0.065 },
  { left: '65%', width: 60, height: '48%', rotate: 5, blur: 28, opacity: 0.05 },
  { left: '75%', width: 110, height: '52%', rotate: -2, blur: 50, opacity: 0.04 },
];

export default function HeroSection({ onVisitClick }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="acasa" className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* PLANE 1: Background slow zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/images/hero-cine-2.webp"
          alt="Little Genius — instituție educațională București"
          className="w-full h-full object-cover object-top animate-slow-zoom"
          style={{ transformOrigin: 'center center' }}
        />
      </div>

      {/* PLANE 2: Much stronger atmospheric overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/99 via-navy-950/93 to-navy-800/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/65" />
        <div className="absolute inset-0 bg-navy-950/35" />
      </div>

      {/* PLANE 2b: Mobile extra overlay */}
      <div className="xl:hidden absolute inset-0 bg-navy-950/60" />

      {/* PLANE 3: Academic blue light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block">
        {lightRays.map((ray, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: ray.left,
              width: `${ray.width}px`,
              height: ray.height,
              background: `linear-gradient(to bottom, rgba(96,165,250,${ray.opacity}), transparent)`,
              transform: `rotate(${ray.rotate}deg)`,
              transformOrigin: 'top center',
              filter: `blur(${ray.blur}px)`,
            }}
          />
        ))}
        <div
          className="absolute top-0 left-[32%] right-[8%] h-[220px]"
          style={{ background: 'radial-gradient(ellipse at 55% 0%, rgba(59,130,246,0.12), transparent 70%)' }}
        />
      </div>

      {/* PLANE 4: Ambient warm orbs */}
      <div className="absolute top-[18%] left-[28%] w-[480px] h-[480px] rounded-full bg-amber-400/5 blur-[110px] animate-ambient pointer-events-none" />
      <div className="absolute bottom-[12%] left-[8%] w-[260px] h-[260px] rounded-full bg-navy-500/18 blur-[70px] animate-ambient pointer-events-none" style={{ animationDelay: '2.5s' }} />

      {/* Left accent line */}
      <div className="absolute left-0 top-24 bottom-24 w-[3px] bg-gradient-to-b from-transparent via-amber-400/80 to-transparent hidden xl:block" />

      {/* PLANE 5: Main editorial content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 xl:px-8 pt-44 xl:pt-52 pb-20 xl:pb-28">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 items-center">

          {/* LEFT — editorial */}
          <div className="max-w-[680px]">

            {/* Institutional badge */}
            <div className={`mb-8 inline-flex items-center gap-3 glass-light rounded-full px-5 py-2.5 transition-all duration-700 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 animate-glow-amber" />
              <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.10em] sm:tracking-[0.14em] uppercase leading-tight">
                Creșă · Grădiniță · Școală · Sector 1, București
              </span>
            </div>

            {/* Display headline — MUCH bigger */}
            <div className={`mb-6 transition-all duration-700 delay-100 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="font-display text-[80px] sm:text-[100px] lg:text-[128px] font-bold text-white leading-[0.88] tracking-tight">
                Little
              </h1>
              <h1 className="font-display text-[80px] sm:text-[100px] lg:text-[128px] font-bold italic text-amber-300 leading-[0.88] tracking-tight">
                Genius
              </h1>
            </div>

            {/* Subheadline — bigger */}
            <p className={`text-2xl xl:text-3xl font-light text-white/95 leading-snug mb-6 transition-all duration-700 delay-200 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Instituție educațională cu traseu complet,
              <br className="hidden lg:block" />
              <em className="not-italic text-amber-200 font-normal"> de la creșă la școală</em>
            </p>

            {/* Body — bigger */}
            <p className={`text-lg xl:text-xl text-white leading-relaxed mb-9 max-w-[540px] transition-all duration-700 delay-250 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Little Genius reunește creșă, grădiniță și școală gimnazială într-un mediu unitar,
              stabil și orientat spre dezvoltarea reală a fiecărui copil. Continuitate fără rupturi,
              valori fără compromis.
            </p>

            {/* Pills — bigger */}
            <div className={`flex flex-wrap gap-2.5 mb-10 transition-all duration-700 delay-300 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {floatingPills.map((sig) => (
                <span key={sig} className="text-sm text-white/85 font-semibold border border-white/25 rounded-full px-4 py-2 bg-white/10 whitespace-nowrap hover:bg-white/18 hover:border-white/40 transition-all duration-200 cursor-default">
                  {sig}
                </span>
              ))}
            </div>

            {/* CTA cluster */}
            <div className={`flex flex-wrap items-center gap-5 transition-all duration-700 delay-400 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <button
                onClick={onVisitClick}
                className="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-navy-900 font-bold text-lg px-10 py-4.5 rounded-full cursor-pointer transition-all duration-300 shadow-[0_0_32px_rgba(251,191,36,0.50)] hover:shadow-[0_0_60px_rgba(251,191,36,0.80)]"
                style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
              >
                Programează o vizită
              </button>
              <a
                href="#admitere"
                onClick={scrollTo('#admitere')}
                className="whitespace-nowrap glass-light text-white text-lg font-semibold px-8 py-4 rounded-full cursor-pointer transition-all duration-200 hover:bg-white/28"
              >
                Informații admitere
              </a>
            </div>

            {/* Mobile image strip */}
            <div className="xl:hidden mt-12 grid grid-cols-2 gap-3">
              <div className="relative h-32 rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.55)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 to-transparent z-10" />
                <img
                  src="/images/hero-r2m.webp"
                  alt="Teren de joacă"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-3 left-3 z-20 text-sm font-semibold text-white drop-shadow-md">Teren de joacă</span>
              </div>
              <div className="relative h-32 rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.55)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 to-transparent z-10" />
                <img
                  src="/images/hero-r3m.webp"
                  alt="Activități variate"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-3 left-3 z-20 text-sm font-semibold text-white drop-shadow-md">Activități variate</span>
              </div>
            </div>
          </div>

          {/* RIGHT — floating atmospheric panels (desktop only) */}
          <div className="hidden xl:flex flex-col items-end gap-4 pl-12 animate-fade-in delay-600">

            {/* Primary panel */}
            <div className="relative w-[390px] h-[285px] rounded-2xl overflow-hidden animate-float-slow" style={{ boxShadow: '0 40px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/20 to-transparent z-10" />
              <img
                src="/images/hero-r1.webp"
                alt="Predare în clase mici"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 right-4 z-20 glass-dark rounded-xl px-4 py-3">
                <p className="text-sm font-bold text-white">Predare în clase mici</p>
                <p className="text-xs text-navy-300 mt-0.5">Atenție individualizată</p>
              </div>
              <div className="absolute top-3 left-3 z-20 w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400/45 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              </div>
            </div>

            {/* Two smaller panels */}
            <div className="flex gap-3.5 w-[390px]">
              <div className="relative flex-1 h-[155px] rounded-xl overflow-hidden animate-float-slow" style={{ animationDelay: '1.5s', boxShadow: '0 20px 44px rgba(0,0,0,0.45)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent z-10" />
                <img
                  src="/images/hero-r2.webp"
                  alt="Teren de joacă"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-3 left-3 z-20 text-sm font-semibold text-white/95">Teren de joacă</span>
              </div>
              <div className="relative flex-1 h-[155px] rounded-xl overflow-hidden animate-float-slow" style={{ animationDelay: '3.0s', boxShadow: '0 20px 44px rgba(0,0,0,0.45)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent z-10" />
                <img
                  src="/images/hero-r3.webp"
                  alt="Activități variate"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-3 left-3 z-20 text-sm font-semibold text-white/95">Activități variate</span>
              </div>
            </div>

            {/* Ecosystem badge */}
            <div className="glass-dark rounded-2xl px-6 py-4 w-[390px] flex items-center gap-3">
              {['Creșă', 'Grădiniță', 'Școală'].map((lv, i) => (
                <span key={lv} className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white whitespace-nowrap">{lv}</span>
                  {i < 2 && <i className="ri-arrow-right-s-line text-amber-400 text-base" />}
                </span>
              ))}
              <span className="ml-auto text-xs text-navy-400 whitespace-nowrap font-semibold">Traseu complet</span>
            </div>
          </div>

        </div>
      </div>

      {/* PLANE 6: Foreground micro depth */}
      <div className="absolute bottom-28 left-[51%] hidden xl:flex items-center gap-2 opacity-20 pointer-events-none">
        <span className="w-10 h-px bg-white" />
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="w-10 h-px bg-white" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-1200">
        <span className="text-white/35 text-[11px] font-bold uppercase tracking-[0.24em]">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/35 to-white/0" />
      </div>

      {/* Bottom bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy-800 pointer-events-none" />

    </section>
  );
}
