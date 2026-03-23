import { useEffect, useRef, useState } from 'react';

const newsItems = [
  {
    tag: 'Porți deschise',
    tagColor: 'text-amber-700',
    tagBg: 'bg-amber-50',
    tagBorder: 'border-amber-100',
    title: 'Zi de porți deschise — cunoașteți echipa și spațiul',
    desc: 'Invităm familiile interesate să viziteze Little Genius, să cunoască educatorii și să descopere mediul în care copiii cresc și învață.',
    icon: 'ri-door-open-line',
    iconColor: 'text-amber-500',
    imgSeq: 'news1',
  },
  {
    tag: 'Eveniment',
    tagColor: 'text-emerald-700',
    tagBg: 'bg-emerald-50',
    tagBorder: 'border-emerald-100',
    title: 'Serbare de final de an — momente de neuitat',
    desc: 'Serbările anuale sunt ocazii în care copiii își demonstrează progresul, bucuria și talentele în fața familiei.',
    icon: 'ri-star-smile-line',
    iconColor: 'text-emerald-500',
    imgSeq: 'news2',
  },
  {
    tag: 'Proiect educațional',
    tagColor: 'text-teal-700',
    tagBg: 'bg-teal-50',
    tagBorder: 'border-teal-100',
    title: 'Proiecte tematice și activități interactive',
    desc: 'Pe parcursul anului desfășurăm proiecte educaționale tematice care implică activ copiii în descoperire și creație.',
    icon: 'ri-lightbulb-line',
    iconColor: 'text-teal-500',
    imgSeq: 'news3',
  },
];

export default function NewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-6 h-px bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
              Noutăți și momente importante
            </span>
            <span className="w-6 h-px bg-amber-400" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-5">
            O comunitate activă, mereu în mișcare
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            La Little Genius, viața școlii nu se oprește la ore. Organizăm constant evenimente, activități și programe speciale care reunesc copiii, familiile și echipa.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsItems.map((item, i) => (
            <article
              key={item.title}
              className={`bg-white border border-stone-100 rounded-2xl overflow-hidden hover:-translate-y-1 cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={`/images/${item.imgSeq}.webp`}
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${item.tagBg} ${item.tagBorder} ${item.tagColor} mb-4`}>
                  <div className="w-3 h-3 flex items-center justify-center">
                    <i className={`${item.icon} text-xs ${item.iconColor}`} />
                  </div>
                  {item.tag}
                </span>
                <h3 className="font-bold text-neutral-900 text-base leading-snug mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-sm text-neutral-400">
            Pentru detalii despre evenimentele viitoare, contactați-ne direct la{' '}
            <a href="mailto:office@littlegenius.ro" className="text-amber-600 hover:text-amber-700 font-medium cursor-pointer transition-colors">
              office@littlegenius.ro
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
