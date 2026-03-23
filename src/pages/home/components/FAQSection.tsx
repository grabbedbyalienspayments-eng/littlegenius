import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'Ce tipuri de programe oferiți?',
    a: 'Little Genius reunește structuri educaționale și activități gândite pentru a susține dezvoltarea copilului într-un mediu organizat, cald și atent.',
  },
  {
    q: 'Pot programa o vizită înainte de înscriere?',
    a: 'Da, încurajăm părinții să programeze o vizită pentru a cunoaște spațiul, atmosfera și echipa.',
  },
  {
    q: 'Aveți activități suplimentare pentru copii?',
    a: 'Da, copiii participă la activități precum limba engleză, dans, desen, înot, workshopuri tematice și evenimente educative.',
  },
  {
    q: 'Unde găsesc informațiile despre admitere?',
    a: 'În site există o secțiune dedicată admiterii, cu informații utile pentru părinți, inclusiv documentele și pașii de urmat.',
  },
  {
    q: 'Cum pot lua legătura cu dumneavoastră?',
    a: 'Ne puteți contacta telefonic, prin email sau prin formularul din pagina principală și puteți programa o vizită.',
  },
];

function FAQItem({ q, a, index, visible }: { q: string; a: string; index: number; visible: boolean }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border-b border-stone-200 last:border-b-0 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer"
      >
        <span className="text-base font-semibold text-neutral-900 leading-snug">{q}</span>
        <div
          className={`w-6 h-6 flex items-center justify-center flex-shrink-0 text-navy-600 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <i className="ri-arrow-down-s-line text-xl" />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight ?? 200}px` : '0px' }}
      >
        <div ref={contentRef} className="pb-5">
          <p className="text-base text-neutral-500 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
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
    <section className="bg-stone-50 py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: label + title */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-navy-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
                Întrebări frecvente
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
              Răspundem la întrebările părinților
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Dacă nu găsești răspunsul căutat, nu ezita să ne contactezi direct.
            </p>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} visible={visible} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
