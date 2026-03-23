import { useEffect, useRef, useState } from 'react';

const infoItems = [
  {
    icon: 'ri-book-open-line',
    label: 'Program educațional',
    href: '#cresa-gradinita',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: 'ri-palette-line',
    label: 'Activități și opționale',
    href: '#activitati',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: 'ri-file-list-3-line',
    label: 'Documente necesare pentru înscriere',
    href: '#admitere',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: 'ri-route-line',
    label: 'Admitere și pași de urmat',
    href: '#admitere',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: 'ri-calendar-check-line',
    label: 'Contact și programare vizită',
    href: '#contact',
    color: 'text-stone-600',
    bg: 'bg-stone-100',
  },
];

export default function InfoSection() {
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-6 h-px bg-navy-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
              Informații
            </span>
            <span className="w-6 h-px bg-navy-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5">
            Informații utile pentru părinți
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Ne dorim ca informațiile importante să fie ușor de găsit, clare și accesibile pentru fiecare
            familie interesată de Little Genius.
          </p>
        </div>

        {/* Quick-access items */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {infoItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`group flex items-center gap-5 bg-white border border-navy-100 hover:border-navy-200 rounded-xl px-6 py-4 cursor-pointer transition-all duration-200 hover:bg-navy-50 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${60 + i * 70}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <i className={`${item.icon} text-lg ${item.color}`} />
              </div>
              <span className="flex-1 text-base font-medium text-neutral-800">{item.label}</span>
              <div className="w-5 h-5 flex items-center justify-center text-navy-300 group-hover:text-navy-500 group-hover:translate-x-0.5 transition-all duration-200">
                <i className="ri-arrow-right-line text-sm" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
