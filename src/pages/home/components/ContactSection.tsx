import { useState, useRef, useEffect } from 'react';

const contactInfo = [
  {
    icon: 'ri-map-pin-line',
    label: 'Adresă',
    value: 'Str. Carol Knappe nr. 95, sector 1, București',
    href: 'https://maps.google.com/?q=Str.+Carol+Knappe+nr.+95,+sector+1,+Bucuresti',
    external: true,
  },
  {
    icon: 'ri-phone-line',
    label: 'Telefon',
    value: '0724 245 249',
    href: 'tel:+40724245249',
    external: false,
  },
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: 'office@littlegenius.ro',
    href: 'mailto:office@littlegenius.ro',
    external: false,
  },
  {
    icon: 'ri-time-line',
    label: 'Program',
    value: 'Luni – Vineri · 08:00 – 19:00',
    href: null,
    external: false,
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [gdpr, setGdpr] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdpr) return;
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new URLSearchParams();
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[name], textarea[name]');
    inputs.forEach((input) => {
      if (input.name && input.name !== 'website') {
        data.append(input.name, input.value);
      }
    });

    try {
      const res = await fetch('https://readdy.ai/api/form/d6u22t1pcqg5q0qh6m4g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setGdpr(false);
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            Suntem la dispoziția dumneavoastră
          </h2>
          {/* Institutional note */}
          <div className="inline-flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 mt-2">
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <i className="ri-information-line text-xs text-amber-500" />
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Little Genius reunește{' '}
              <strong className="text-neutral-700 font-semibold">Grădinița Căsuța Piticilor</strong>
              {' '}și{' '}
              <strong className="text-neutral-700 font-semibold">Școala Gimnazială Little Genius</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: contact info + map */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Contact blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-stone-50 border border-stone-200 rounded-xl px-5 py-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={`${item.icon} text-amber-500 text-sm`} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      rel={item.external ? 'nofollow noopener noreferrer' : undefined}
                      target={item.external ? '_blank' : undefined}
                      className="text-sm font-medium text-neutral-800 hover:text-amber-600 transition-colors cursor-pointer leading-snug"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-neutral-800 leading-snug">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 h-64 w-full">
              <iframe
                title="Locație Little Genius"
                src="https://www.google.com/maps?q=Str.+Carol+Knappe+nr.+95,+sector+1,+Bucuresti&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              />
            </div>
          </div>

          {/* Right: contact form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-stone-50 border border-stone-200 rounded-2xl px-8 py-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-1">Trimite-ne un mesaj</h3>
              <p className="text-sm text-neutral-500 mb-7">
                Completează formularul și îți vom răspunde în cel mai scurt timp.
              </p>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <i className="ri-check-line text-2xl text-amber-500" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">Mulțumim!</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                    Mesajul tău a fost trimis. Te vom contacta în curând.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="whitespace-nowrap mt-6 text-sm text-amber-600 hover:text-amber-700 font-medium cursor-pointer transition-colors"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Nume */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Nume <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="ex: Maria Ionescu"
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="ex: 07XX XXX XXX"
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ex: maria@email.com"
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Mesaj <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      name="mesaj"
                      required
                      rows={4}
                      maxLength={500}
                      placeholder="Scrie-ne mesajul tău..."
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                    <p className="text-xs text-neutral-400 mt-1 text-right">{charCount}/500</p>
                  </div>

                  {/* GDPR */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr-contact"
                      checked={gdpr}
                      onChange={(e) => setGdpr(e.target.checked)}
                      required
                      className="mt-0.5 w-4 h-4 accent-amber-500 cursor-pointer flex-shrink-0"
                    />
                    <label htmlFor="gdpr-contact" className="text-xs text-neutral-500 leading-relaxed cursor-pointer">
                      Sunt de acord cu prelucrarea datelor mele pentru a fi contactat în legătură cu
                      solicitarea transmisă.
                    </label>
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <p className="text-sm text-red-500 text-center">
                      A apărut o eroare. Te rugăm să încerci din nou.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !gdpr}
                    className="whitespace-nowrap w-full bg-amber-400 hover:bg-amber-500 disabled:bg-amber-200 disabled:cursor-not-allowed text-neutral-900 font-semibold text-sm py-3 rounded-full cursor-pointer transition-all duration-200 mt-1"
                  >
                    {status === 'submitting' ? 'Se trimite...' : 'Trimite mesajul'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
