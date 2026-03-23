import { useEffect, useRef, useState } from 'react';

export default function ProgramsSection() {
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
    <section className="bg-stone-50 py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                Programe speciale
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-8">
              Programe educaționale dedicate
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Pe parcursul anului organizăm programe speciale, precum tabere educaționale și activități
              tematice, care oferă copiilor oportunitatea de a învăța într-un mod interactiv și motivant.
            </p>
          </div>

          {/* Featured block — Tabăra de engleză */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative bg-white border border-amber-100 rounded-2xl overflow-hidden">

              {/* Top image */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src="/images/20.webp"
                  alt="Tabăra de engleză Little Genius"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="px-8 py-7">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3.5 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                    Program special
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Tabăra de engleză
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Un program dedicat celor mici, care combină activitățile lingvistice cu jocul, creativitatea
                  și descoperirea — într-un mediu familiar și sigur.
                </p>

                {/* Decorative bottom line */}
                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-2">
                  <i className="ri-information-line text-amber-400 text-sm" />
                  <span className="text-xs text-neutral-400">
                    Detalii disponibile la cerere
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
