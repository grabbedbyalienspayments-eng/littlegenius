import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: 'ri-shield-check-line',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    label: 'Mediu sigur și atent',
    desc: 'Spații gândite pentru siguranța fizică și emoțională, supraveghere continuă și afecțiune reală. Fiecare detaliu al mediului este proiectat cu grija pentru copil.',
  },
  {
    icon: 'ri-emotion-happy-line',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    label: 'Dezvoltare emoțională',
    desc: 'Copiii învață să se exprime, să relaționeze și să navigheze primele emoții într-un context suportiv, cu educatoare care înțeleg fiecare etapă.',
  },
  {
    icon: 'ri-heart-3-line',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    label: 'Formarea caracterului',
    desc: 'Valori sănătoase cultivate prin exemplu, rutine pozitive și interacțiuni ghidate. Caracter construit zi de zi, nu la comandă.',
  },
  {
    icon: 'ri-user-star-line',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    label: 'Educatori implicați',
    desc: 'Echipă dedicată, formată profesional, cu vocație reală pentru lucrul cu cei mici. Nu angajați — oameni care aleg să fie acolo pentru copiii tăi.',
  },
  {
    icon: 'ri-calendar-check-line',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    label: 'Program organizat',
    desc: 'O zi structurată echilibrat: rutine clare care creează siguranță, alternate cu joc liber care hrănește curiozitatea naturală.',
  },
  {
    icon: 'ri-gamepad-line',
    color: 'text-navy-600',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
    label: 'Învățare prin joc',
    desc: 'Copiii descoperă lumea prin activitate directă și explorare ghidată. Fiecare joc are un scop, fiecare activitate construiește ceva.',
  },
];

export default function NurserySection() {
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
    <section id="cresa-gradinita-detalii" className="relative bg-white py-28 overflow-hidden" ref={ref}>

      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-navy-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600">Creșă &amp; Grădiniță</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-2">
              Un loc în care
            </h2>
            <h2 className="font-display text-4xl lg:text-5xl font-bold italic text-navy-600 leading-tight">
              cei mici se simt acasă
            </h2>
          </div>
          <div>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Primii ani sunt hotărâtori. La Little Genius, creșa și grădinița oferă mult mai mult decât 
              supraveghere — un mediu de creștere reală, cu educatori care înțeleg și respectă ritmul 
              fiecărui copil.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {values.map((item, i) => (
            <div
              key={item.label}
              className={`group flex items-start gap-5 border ${item.border} rounded-2xl p-7 hover:-translate-y-1 cursor-default transition-all duration-500 hover:border-navy-200 hover:shadow-[0_12px_40px_rgba(9,24,56,0.08)] bg-white ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${80 + i * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${item.icon} text-2xl ${item.color}`} />
              </div>
              <div>
                <p className="font-bold text-neutral-800 text-base mb-2 leading-snug">{item.label}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo + quote */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="lg:col-span-2 h-64 rounded-2xl overflow-hidden relative img-zoom-wrap shadow-[0_8px_40px_rgba(9,24,56,0.1)]">
            <img
              src="/images/nursery2.webp"
              alt="Mediu cald și sigur în creșa și grădinița Little Genius"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
          </div>
          <div className="bg-navy-900 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 blur-[30px]" />
            <div className="relative z-10">
              <div className="w-8 h-8 flex items-center justify-center mb-5">
                <i className="ri-double-quotes-l text-2xl text-amber-400/60" />
              </div>
              <p className="text-sm text-navy-200 leading-relaxed italic mb-5">
                „Fiecare copil vine cu bucurie și pleacă cu ceva nou descoperit în el."
              </p>
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-amber-400/50" />
                <p className="text-xs text-navy-400 font-semibold uppercase tracking-widest">
                  Echipa Little Genius
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
