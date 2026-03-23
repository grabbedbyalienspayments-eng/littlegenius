import { useEffect, useRef, useState } from 'react';

const facilityCategories = [
  {
    label: 'Spațiu & Infrastructură',
    color: 'text-navy-700',
    colorHex: '#1e3a5f',
    iconBg: 'bg-navy-100',
    border: 'border-navy-100',
    headerBg: 'bg-navy-50',
    items: [
      { icon: 'ri-building-2-line', label: 'Clădire modernă', sub: 'Amenajată complet' },
      { icon: 'ri-layout-grid-line', label: 'Mobilier ergonomic', sub: 'Colaborativ, pe vârste' },
      { icon: 'ri-basketball-line', label: 'Sală de sport', sub: 'Echipată profesional' },
      { icon: 'ri-landscape-line', label: 'Teren de joacă', sub: 'Exterior, sigur' },
    ],
  },
  {
    label: 'Tehnologie & Didactică',
    color: 'text-amber-700',
    colorHex: '#b45309',
    iconBg: 'bg-amber-100',
    border: 'border-amber-100',
    headerBg: 'bg-amber-50',
    items: [
      { icon: 'ri-tv-2-line', label: 'Smartboard-uri', sub: 'În toate clasele' },
      { icon: 'ri-computer-line', label: 'Echipamente IT', sub: 'Moderne, actualizate' },
      { icon: 'ri-book-open-line', label: 'Materiale didactice', sub: 'Actualizate permanent' },
      { icon: 'ri-wifi-line', label: 'Resurse digitale', sub: 'Conectivitate completă' },
    ],
  },
  {
    label: 'Sănătate & Bunăstare',
    color: 'text-emerald-700',
    colorHex: '#065f46',
    iconBg: 'bg-emerald-100',
    border: 'border-emerald-100',
    headerBg: 'bg-emerald-50',
    items: [
      { icon: 'ri-heart-pulse-line', label: 'Cabinet medical', sub: 'Propriu, permanent' },
      { icon: 'ri-mental-health-line', label: 'Cabinet psihologic', sub: 'Consiliere & suport' },
      { icon: 'ri-restaurant-2-line', label: 'Sală de mese', sub: 'Meniuri echilibrate' },
      { icon: 'ri-t-shirt-line', label: 'Uniformă școlară', sub: 'Little Genius' },
    ],
  },
];

export default function FacilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.07 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-stone-50/60" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-navy-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600">Dotări & Facilități</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Vino la un mediu
              <br className="hidden lg:block" />
              <em className="not-italic italic text-navy-600"> complet echipat pentru copil</em>
            </h2>
          </div>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-lg">
            Spațiul fizic contează. Little Genius investește constant în infrastructură modernă, tehnologie didactică și condiții care susțin sănătatea și bunăstarea fiecărui copil.
          </p>
        </div>

        {/* Main: photo + categories */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {/* Photo */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[400px] facility-img-wrap relative">
            <img
              src="/images/fac-main-2.webp"
              alt="Sală de clasă modernă Little Genius — smartboard și mobilier colaborativ"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 glass-dark rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-tv-2-line text-base text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Smartboard-uri în toate clasele</p>
                <p className="text-xs text-navy-300 mt-0.5">Tehnologie integrată în predare</p>
              </div>
            </div>
          </div>

          {/* Categories stacked */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {facilityCategories.slice(0, 2).map((cat, ci) => (
              <div
                key={cat.label}
                className={`bg-white border ${cat.border} rounded-2xl overflow-hidden transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${200 + ci * 100}ms` }}
              >
                {/* Category header */}
                <div className={`${cat.headerBg} px-5 py-3.5 border-b ${cat.border} flex items-center gap-2`}>
                  <div className={`w-2 h-2 rounded-full`} style={{ background: cat.colorHex }} />
                  <p className={`text-sm font-bold uppercase tracking-[0.12em] ${cat.color}`}>{cat.label}</p>
                </div>
                {/* Items */}
                <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-stone-50">
                  {cat.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 px-4 py-3.5">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${cat.iconBg} flex-shrink-0`}>
                        <i className={`${item.icon} text-base ${cat.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-800 leading-tight">{item.label}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: third category + playground photo */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Third category full width card */}
          <div className={`lg:col-span-3 bg-white border ${facilityCategories[2].border} rounded-2xl overflow-hidden`}>
            <div className={`${facilityCategories[2].headerBg} px-5 py-3.5 border-b ${facilityCategories[2].border} flex items-center gap-2`}>
              <div className="w-2 h-2 rounded-full" style={{ background: facilityCategories[2].colorHex }} />
              <p className={`text-sm font-bold uppercase tracking-[0.12em] ${facilityCategories[2].color}`}>
                {facilityCategories[2].label}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y divide-stone-50">
              {facilityCategories[2].items.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-4 py-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${facilityCategories[2].iconBg} flex-shrink-0`}>
                    <i className={`${item.icon} text-base ${facilityCategories[2].color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800 leading-tight">{item.label}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playground photo */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden h-[140px] lg:h-auto facility-img-wrap">
            <img
              src="/images/fac-play-3.webp"
              alt="Teren de joacă Little Genius"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
