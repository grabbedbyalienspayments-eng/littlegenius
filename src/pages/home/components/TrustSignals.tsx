import { useEffect, useRef, useState } from 'react';

const trustItems = [
  { icon: 'ri-building-4-line', label: 'Instituție completă', sub: 'Creșă · Grădiniță · Școală' },
  { icon: 'ri-graduation-cap-line', label: 'Curriculum național', sub: 'Engleză & germană intensiv' },
  { icon: 'ri-group-line', label: 'Clase cu număr mic', sub: 'Atenție individualizată' },
  { icon: 'ri-heart-pulse-line', label: 'Cabinet medical & psihologic', sub: 'Siguranță completă' },
  { icon: 'ri-map-pin-2-line', label: 'Sector 1, București', sub: 'Str. Carol Knappe nr. 95' },
];

export default function TrustSignals() {
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
    <section className="relative bg-navy-800 py-0 overflow-hidden" ref={ref}>
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] bg-amber-400/5 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-navy-700/60">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className={`group flex items-center gap-4 px-6 py-7 hover:bg-navy-700/40 transition-all duration-300 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: `${i * 90}ms`, transitionDuration: '600ms' }}
            >
              {/* Glowing icon container */}
              <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-300 group-hover:animate-glow-amber" />
                <i className={`${item.icon} text-lg text-amber-400 relative z-10`} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold leading-tight">{item.label}</p>
                <p className="text-navy-300 text-xs mt-0.5 leading-tight">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
