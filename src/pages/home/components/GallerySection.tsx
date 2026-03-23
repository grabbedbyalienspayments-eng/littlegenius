import { useEffect, useRef, useState } from 'react';

const galleryItems = [
  {
    src: '/images/gal-01.webp',
    alt: 'Activități colaborative în clasă',
    caption: 'Colaborare în clasă',
    height: 'h-[280px]',
    colSpan: 'md:col-span-2',
    delay: 100,
  },
  {
    src: '/images/gal-02.webp',
    alt: 'Lectură individualizată',
    caption: 'Lectură 1-la-1',
    height: 'h-[220px] md:h-auto md:min-h-[504px]',
    colSpan: 'md:col-span-1 md:row-span-2',
    delay: 180,
  },
  {
    src: '/images/gal-03.webp',
    alt: 'Activitate artistică — pictură',
    caption: 'Artă și creativitate',
    height: 'h-[220px]',
    colSpan: 'md:col-span-1',
    delay: 260,
  },
  {
    src: '/images/gal-04.webp',
    alt: 'Teren de joacă — recreere activă',
    caption: 'Recreere în aer liber',
    height: 'h-[220px]',
    colSpan: 'md:col-span-1',
    delay: 320,
  },
  {
    src: '/images/gal-05.webp',
    alt: 'Activitate muzicală grădiniță',
    caption: 'Muzică și ritm',
    height: 'h-[200px]',
    colSpan: 'md:col-span-1',
    delay: 400,
  },
  {
    src: '/images/gal-06.webp',
    alt: 'Masă sănătoasă în sala de mese',
    caption: 'Masă echilibrată',
    height: 'h-[200px]',
    colSpan: 'md:col-span-1',
    delay: 460,
  },
  {
    src: '/images/gal-07.webp',
    alt: 'Club de balet — activitate opțională',
    caption: 'Club balet',
    height: 'h-[200px]',
    colSpan: 'md:col-span-1',
    delay: 520,
  },
];

export default function GallerySection() {
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
    <section className="relative bg-stone-50 py-24 overflow-hidden" ref={ref}>

      {/* Subtle bg texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a2d4e 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Viața la Little Genius</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
              Momente reale din fiecare zi
            </h2>
          </div>
          <p className="text-base text-neutral-500 max-w-sm leading-relaxed">
            Activități, explorare, prietenie și bucuria copilăriei — reflectate în viața de zi cu zi.
          </p>
        </div>

        {/* Editorial masonry grid with hover depth */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-3.5 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={item.alt}
              className={`relative img-zoom-wrap rounded-2xl overflow-hidden group cursor-pointer ${item.height} ${item.colSpan} transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
                boxShadow: '0 4px 20px rgba(9,24,56,0.08)',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-top"
                loading={idx < 2 ? 'eager' : 'lazy'}
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-semibold leading-tight block">{item.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-neutral-400 italic">
            Imagini reprezentative din activitățile zilnice — creșă, grădiniță, școală, cluburi.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="whitespace-nowrap inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-semibold text-sm border border-navy-200 hover:border-navy-400 px-6 py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-navy-50"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-calendar-check-line text-sm" />
            </div>
            Programează o vizită
          </a>
        </div>

      </div>
    </section>
  );
}
