import { useEffect, useRef, useState } from 'react';

const steps = [
  { number: '01', label: 'Contactează-ne', icon: 'ri-phone-line', desc: 'Sună sau scrie-ne. Răspundem prompt cu toate informațiile necesare.' },
  { number: '02', label: 'Programează o vizită', icon: 'ri-calendar-check-line', desc: 'Vino să descoperi Little Genius împreună cu copilul tău.' },
  { number: '03', label: 'Depune dosarul de înscriere', icon: 'ri-file-text-line', desc: 'Procesul este simplu, transparent și ghidat pas cu pas de echipa noastră.' },
];

const documents = [
  { icon: 'ri-file-text-line', label: 'Cerere înscriere' },
  { icon: 'ri-file-text-line', label: 'Formular înscriere' },
  { icon: 'ri-file-list-3-line', label: 'Regulament' },
  { icon: 'ri-contract-line', label: 'Contract' },
  { icon: 'ri-mental-health-line', label: 'Fișă psihopedagogică' },
  { icon: 'ri-heart-pulse-line', label: 'Fișă medicală' },
  { icon: 'ri-syringe-line', label: 'Copie carnet vaccinări' },
  { icon: 'ri-stethoscope-line', label: 'Avize medicale' },
  { icon: 'ri-id-card-line', label: 'Certificat naștere copil' },
  { icon: 'ri-parent-line', label: 'Copii acte părinți' },
  { icon: 'ri-image-line', label: 'Fotografii copil' },
];

export default function AdmissionSection() {
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

  const handleStepsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="admitere" className="bg-navy-50 py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Top: intro + steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Text side */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-navy-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy-700">Admitere</span>
            </div>

            <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-8">
              Înscrierea la<br /><em className="not-italic italic text-navy-600">Little Genius</em>
            </h2>

            <p className="text-xl text-neutral-700 leading-relaxed mb-5">
              Procesul de admitere este simplu și transparent.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed mb-10">
              Punem la dispoziția părinților toate informațiile necesare pentru înscriere, 
              inclusiv lista completă a documentelor și pașii de urmat. Echipa noastră te 
              ghidează la fiecare etapă.
            </p>

            <a
              href="#contact"
              onClick={handleStepsClick}
              className="whitespace-nowrap inline-flex items-center gap-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-base px-8 py-4 rounded-full cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(9,24,56,0.2)] hover:shadow-[0_8px_32px_rgba(9,24,56,0.35)]"
            >
              Contactează-ne acum
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-right-line text-base" />
              </div>
            </a>
          </div>

          {/* Steps visual */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex flex-col gap-0 relative">
              {/* Connecting line */}
              <div className="absolute left-[28px] top-[56px] bottom-[56px] w-0.5 bg-gradient-to-b from-navy-300 via-navy-200 to-navy-100" />

              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex items-start gap-5 bg-white border border-navy-100 rounded-2xl px-7 py-6 mb-3 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(9,24,56,0.1)] cursor-default ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-700 flex items-center justify-center relative z-10">
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p className="text-xl font-bold text-neutral-900 mb-1.5">{step.label}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}

              <div className="mt-2 flex items-start gap-3 px-1">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5 text-amber-500 flex-shrink-0">
                  <i className="ri-shield-check-line text-base" />
                </div>
                <p className="text-base text-neutral-500 leading-relaxed">
                  Echipa noastră îți oferă suport complet la fiecare pas al procesului.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Document checklist */}
        <div className={`bg-white border border-navy-100 rounded-2xl p-8 lg:p-10 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-72 shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-navy-100">
                  <i className="ri-file-list-3-line text-xl text-navy-700" />
                </div>
                <h3 className="font-bold text-neutral-900 text-xl">Documente necesare</h3>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Orientare utilă pentru pregătirea dosarului. Lista completă se obține la cerere sau la prima întâlnire cu echipa noastră.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {documents.map((doc, i) => (
                <div
                  key={doc.label}
                  className={`flex items-center gap-3 bg-navy-50 border border-navy-100 rounded-xl px-4 py-3 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${500 + i * 40}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 bg-white rounded-lg border border-navy-100">
                    <i className={`${doc.icon} text-sm text-navy-600`} />
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{doc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
