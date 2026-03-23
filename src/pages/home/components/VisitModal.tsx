import { useState, useEffect } from 'react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VisitModal({ isOpen, onClose }: VisitModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus('idle');
      setCharCount(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new URLSearchParams();
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
    inputs.forEach((input) => {
      if (input.name) data.append(input.name, input.value);
    });

    try {
      const res = await fetch('https://readdy.ai/api/form/d6u1uuf5ehaffuo434c0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-stone-100">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Programează o vizită</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Completează formularul și te vom contacta în cel mai scurt timp.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-700 cursor-pointer transition-colors rounded-lg hover:bg-stone-100 ml-4 flex-shrink-0"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="px-8 py-12 text-center">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <i className="ri-check-line text-2xl text-amber-500" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 mb-2">Mulțumim!</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-7">
              Solicitarea ta a fost trimisă cu succes. Echipa Little Genius te va contacta în scurt timp.
            </p>
            <button
              onClick={onClose}
              className="whitespace-nowrap bg-amber-400 hover:bg-amber-500 text-neutral-900 font-semibold text-sm px-6 py-2.5 rounded-full cursor-pointer transition-all duration-200"
            >
              Închide
            </button>
          </div>
        ) : (
          <form
            data-readdy-form
            onSubmit={handleSubmit}
            className="px-8 py-7 flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Prenume și Nume <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="ex: Maria Popescu"
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Adresă de email <span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="ex: maria@email.com"
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Număr de telefon
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="ex: 07XX XXX XXX"
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Section interest */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Interesat(ă) pentru
              </label>
              <select
                name="sectiune"
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="">Selectează o opțiune</option>
                <option value="Creșă">Creșă</option>
                <option value="Grădiniță">Grădiniță</option>
                <option value="Școală">Școală</option>
                <option value="Informații generale">Informații generale</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Mesaj sau preferință dată vizită
              </label>
              <textarea
                name="mesaj"
                rows={3}
                maxLength={500}
                placeholder="Orice detaliu util sau preferință pentru dată..."
                onChange={(e) => setCharCount(e.target.value.length)}
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
              <p className="text-xs text-neutral-400 mt-1 text-right">{charCount}/500</p>
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
              disabled={status === 'submitting'}
              className="whitespace-nowrap w-full bg-amber-400 hover:bg-amber-500 disabled:bg-amber-300 text-neutral-900 font-semibold text-sm py-3 rounded-full cursor-pointer transition-all duration-200 mt-1"
            >
              {status === 'submitting' ? 'Se trimite...' : 'Trimite solicitarea'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
