import { useEffect, useRef, useState } from 'react';

interface FinalCTASectionProps {
  onVisitClick: () => void;
}

export default function FinalCTASection({ onVisitClick }: FinalCTASectionProps) {
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

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[640px] overflow-hidden flex" ref={ref}>

      {/* ── LEFT PANEL: Atmospheric image ─────── */}
      <div className="relative hidden lg:block lg:w-[44%] overflow-hidden">
        <img
          src="/images/cta-split-1.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom"
          loading="lazy"
        />
        {/* Right-side gradient mask → content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-950/20 to-navy-950/95" />
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy-950/60 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent" />

        {/* Floating caption on image */}
        <div className="absolute bottom-10 left-8 z-10">
          <div className="glass-dark rounded-xl px-5 py-3.5 inline-block">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">Little Genius</p>
            <p className="text-sm text-white font-semibold">Sector 1, București</p>
            <p className="text-xs text-navy-300 mt-0.5">Str. Carol Knappe nr. 95</p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: Conversion content ────── */}
      <div
        className="relative flex-1 flex items-center overflow-hidden"
        style={{ background: '#070f1c' }}
      >
        {/* Atmospheric bg */}
        <div className="absolute inset-0">
          <img
            src="/images/cta-split-bg.webp"
            alt=""
            className="w-full h-full object-cover object-center opacity-20 animate-slow-zoom"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1c]/60 to-[#070f1c]/95" />
          <div className="absolute inset-0" style={{ background: '#070f1c', opacity: 0.7 }} />
        </div>

        {/* Glow orb */}
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-amber-400/8 blur-[80px] pointer-events-none animate-ambient" />

        {/* Content */}
        <div className="relative z-10 px-10 lg:px-14 xl:px-20 py-24 w-full max-w-lg">
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-glow-amber" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">Înscrierea este deschisă</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Vă așteptăm să ne
            </h2>
            <h2 className="font-display text-4xl lg:text-5xl font-bold italic text-amber-300 leading-tight mb-8">
              cunoaștem
            </h2>

            <p className="text-base text-navy-200 leading-relaxed mb-4">
              Dacă doriți să aflați mai multe despre Little Genius, despre programe, activități
              sau procesul de înscriere, vă invităm să ne contactați.
            </p>
            <p className="text-sm text-navy-400 leading-relaxed mb-10">
              O vizită la fața locului este cel mai bun prim pas. Vă primim cu drag.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={onVisitClick}
                className="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-navy-900 font-bold text-base px-9 py-4 rounded-full cursor-pointer transition-all duration-300 shadow-[0_0_32px_rgba(251,191,36,0.4)] hover:shadow-[0_0_52px_rgba(251,191,36,0.65)]"
              >
                Programează o vizită
              </button>
              <a
                href="#contact"
                onClick={handleContact}
                className="whitespace-nowrap glass-light text-white font-semibold text-base px-8 py-4 rounded-full cursor-pointer transition-all duration-200 hover:bg-white/20 text-center"
              >
                Contactează-ne
              </a>
            </div>

            {/* Address + contact line */}
            <div className="flex flex-col gap-2 pt-8 border-t border-navy-800">
              <div className="flex items-center gap-2 text-navy-400 text-sm">
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <i className="ri-map-pin-line text-xs text-amber-400/50" />
                </div>
                Str. Carol Knappe nr. 95, Sector 1, București
              </div>
              <div className="flex items-center gap-2 text-navy-400 text-sm">
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <i className="ri-mail-line text-xs text-amber-400/50" />
                </div>
                <a href="mailto:office@littlegenius.ro" className="text-amber-400/70 hover:text-amber-400 transition-colors duration-200 cursor-pointer">
                  office@littlegenius.ro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
