import { useEffect, useRef, useState } from 'react';

const communicationTools = [
  {
    icon: 'ri-newspaper-line',
    color: 'text-navy-700',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
    label: 'Jurnalul clasei',
    desc: 'Părinții sunt la curent cu viața de zi cu zi a copilului — activități, momente speciale, mesaje din partea echipei.',
  },
  {
    icon: 'ri-file-chart-line',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    label: 'Evaluări periodice',
    desc: 'Progresul fiecărui copil este monitorizat și comunicat clar familiei — fără presiune, cu îndrumare constructivă.',
  },
  {
    icon: 'ri-psychotherapy-line',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    label: 'Consiliere psihopedagogică',
    desc: 'Fiecare copil beneficiază de sprijin continuu din partea psihologului școlii, individual și în grup.',
  },
  {
    icon: 'ri-parent-line',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    label: 'Școala părinților',
    desc: 'Întâlniri periodice cu teme practice și dialog deschis — parteneriat real, nu comunicare unilaterală.',
  },
];

const dailyProgram = [
  {
    time: 'Dimineața',
    icon: 'ri-sun-line',
    items: ['Primirea copiilor', 'Joc liber sau activitate de grup', 'Micul dejun echilibrat'],
  },
  {
    time: 'Activități educative',
    icon: 'ri-book-open-line',
    items: ['Ore conform curriculumului', 'Limbi moderne intensiv', 'Activități practice și creative'],
  },
  {
    time: 'Pauze & mișcare',
    icon: 'ri-run-line',
    items: ['Ieșire pe teren de joacă', 'Activitate fizică organizată', 'Masă de prânz sănătos'],
  },
  {
    time: 'Dupămasă',
    icon: 'ri-moon-line',
    items: ['After-school & teme asistate', 'Cluburi opționale', 'Program individual'],
  },
];

const subjects = [
  {
    icon: 'ri-book-open-line',
    label: 'Limba română',
    keywords: ['lectură', 'scriere', 'comunicare'],
    color: 'text-navy-700',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
    accent: '#1e3a5f',
  },
  {
    icon: 'ri-translate-2',
    label: 'Limbi moderne',
    keywords: ['engleză', 'germană', 'fluență'],
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    accent: '#b45309',
  },
  {
    icon: 'ri-calculator-line',
    label: 'Matematică',
    keywords: ['logică', 'calcul', 'raționament'],
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    accent: '#065f46',
  },
  {
    icon: 'ri-leaf-line',
    label: 'Științe ale naturii',
    keywords: ['biologie', 'chimie', 'fizică'],
    color: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    accent: '#0f766e',
  },
  {
    icon: 'ri-palette-line',
    label: 'Educație plastică',
    keywords: ['desen', 'creație', 'estetică'],
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    accent: '#e11d48',
  },
  {
    icon: 'ri-tools-line',
    label: 'Educație tehnologică',
    keywords: ['proiecte', 'construcție', 'aplicat'],
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    accent: '#ea580c',
  },
  {
    icon: 'ri-run-line',
    label: 'Educație fizică',
    keywords: ['sport', 'mișcare', 'sănătate'],
    color: 'text-cyan-700',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    accent: '#0e7490',
  },
  {
    icon: 'ri-music-2-line',
    label: 'Educație muzicală',
    keywords: ['ritm', 'cântat', 'auz muzical'],
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    accent: '#6d28d9',
  },
  {
    icon: 'ri-compass-3-line',
    label: 'Consiliere & Orientare',
    keywords: ['identitate', 'valori', 'viitor'],
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    accent: '#0d9488',
  },
  {
    icon: 'ri-ancient-gate-line',
    label: 'Istorie',
    keywords: ['civilizații', 'critică', 'context'],
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    accent: '#b45309',
  },
  {
    icon: 'ri-earth-line',
    label: 'Geografie',
    keywords: ['hărți', 'mediu', 'diversitate'],
    color: 'text-navy-700',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
    accent: '#1d4ed8',
  },
  {
    icon: 'ri-heart-line',
    label: 'Religie',
    keywords: ['valori', 'tradiție', 'etică'],
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    accent: '#f43f5e',
  },
];

export default function TeamParentsSection() {
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
    <section className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 space-y-28">

        {/* === Relația cu părinții === */}
        <div>
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-navy-600" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">Parteneriat școală–familie</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-5">
                Părinții, parte activă din ecosistem
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                Educația nu se oprește la ușa clasei. La Little Genius, familia este implicată real —
                prin instrumente de comunicare clare, transparentă și dialog deschis cu echipa pedagogică.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Evaluările periodice, jurnalul clasei, ședințele individuale și consilierea
                psihopedagogică formează un sistem care elimină surprizele și construiește încredere.
              </p>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communicationTools.map((tool, i) => (
                <div
                  key={tool.label}
                  className={`flex items-start gap-4 border ${tool.border} rounded-2xl p-6 bg-white hover:shadow-[0_8px_32px_rgba(9,24,56,0.07)] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${120 + i * 80}ms` }}
                >
                  <div className={`w-13 h-13 rounded-xl ${tool.bg} flex items-center justify-center flex-shrink-0`} style={{ width: '52px', height: '52px', minWidth: '52px' }}>
                    <i className={`${tool.icon} text-2xl ${tool.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800 text-base mb-1.5 leading-snug">{tool.label}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-navy-50 border border-navy-100 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-navy-100 shrink-0">
              <i className="ri-team-line text-2xl text-navy-700" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-navy-900 text-lg mb-1.5">Echipă pedagogică dedicată, cu formare continuă</p>
              <p className="text-base text-navy-600 leading-relaxed">
                Educatoarele și profesorii Little Genius sunt selectați cu atenție și participă constant
                la programe de formare. Relația dintre cadrul didactic și copil este prioritatea numărul unu.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 bg-white border border-navy-200 text-navy-700 text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap shrink-0">
              <i className="ri-check-line text-sm" />
              Transparență completă
            </span>
          </div>
        </div>

        {/* === Program instructiv-educativ === */}
        <div>
          <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-navy-600" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">Program educațional</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900">O zi echilibrată, de dimineață</h2>
            </div>
            <p className="text-base text-neutral-500 max-w-sm leading-relaxed lg:text-right">
              Structura zilei alternează concentrarea cu mișcarea, activitățile dirijate cu jocul liber — pentru un copil odihnit, curios și receptiv.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dailyProgram.map((block, i) => (
              <div
                key={block.time}
                className={`bg-stone-50 border border-stone-100 rounded-2xl p-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${300 + i * 90}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-stone-100 mb-5">
                  <i className={`${block.icon} text-xl text-amber-500`} />
                </div>
                <p className="font-bold text-neutral-800 text-base mb-4">{block.time}</p>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-500">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* === Oferta educațională — premium subject cards BIGGER === */}
        <div>
          <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-navy-600" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-navy-600">Curriculum</span>
              <span className="w-10 h-px bg-navy-600" />
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Oferta educațională
            </h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Disciplinele predate acoperă integral curriculumul național, completat cu limbi moderne intensive, activități de dezvoltare personală și opționale extracurriculare.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-all duration-700 delay-350 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {subjects.map((subj, i) => (
              <div
                key={subj.label}
                className={`group flex items-start gap-5 border-2 ${subj.border} rounded-2xl p-7 bg-white hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(9,24,56,0.12)] cursor-default transition-all duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${400 + i * 30}ms` }}
              >
                <div
                  className={`rounded-2xl ${subj.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  style={{ width: '60px', height: '60px', minWidth: '60px' }}
                >
                  <i className={`${subj.icon} text-2xl ${subj.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-neutral-800 text-base mb-2.5 leading-snug">{subj.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {subj.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-sm px-2.5 py-1 rounded-full border font-semibold"
                        style={{ borderColor: subj.accent + '35', color: subj.accent + 'dd', background: subj.accent + '12' }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
