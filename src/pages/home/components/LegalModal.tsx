import { useEffect } from 'react';

type LegalType = 'privacy' | 'cookies' | 'terms' | null;

interface LegalModalProps {
  isOpen: boolean;
  type: LegalType;
  onClose: () => void;
}

const titles: Record<NonNullable<LegalType>, string> = {
  privacy: 'Politica de Confidențialitate',
  cookies: 'Politica Cookies',
  terms: 'Termeni și Condiții',
};

function PrivacyContent() {
  return (
    <div className="prose prose-sm max-w-none text-neutral-600">
      <p className="text-xs text-neutral-400 mb-6">Ultima actualizare: Martie 2026</p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">1. Cine suntem</h3>
      <p className="mb-5 leading-relaxed">
        Little Genius este o instituție de educație timpurie și școlară, cu sediul în Str. Carol Knappe
        nr. 95, sector 1, București. Ne angajăm să protejăm datele personale ale utilizatorilor
        acestui site conform Regulamentului (UE) 2016/679 (GDPR).
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">2. Ce date colectăm</h3>
      <p className="mb-3 leading-relaxed">
        Prin intermediul formularelor de contact și programare vizită, colectăm:
      </p>
      <ul className="list-disc pl-5 mb-5 space-y-1 leading-relaxed">
        <li>Nume și prenume</li>
        <li>Adresă de email</li>
        <li>Număr de telefon</li>
        <li>Conținutul mesajului transmis</li>
      </ul>
      <h3 className="text-base font-bold text-neutral-900 mb-3">3. Scopul prelucrării</h3>
      <p className="mb-5 leading-relaxed">
        Datele colectate sunt utilizate exclusiv pentru a răspunde solicitărilor de contact, pentru
        a programa vizite la sediul instituției și pentru a furniza informații despre procesul de
        admitere. Nu folosim datele în scopuri de marketing fără consimțământ explicit.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">4. Temeiul legal</h3>
      <p className="mb-5 leading-relaxed">
        Prelucrarea datelor se bazează pe consimțământul explicit al utilizatorului (Art. 6(1)(a)
        GDPR), exprimat prin bifarea căsuței de acord din formularul de contact.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">5. Durata stocării</h3>
      <p className="mb-5 leading-relaxed">
        Datele personale transmise prin formular sunt stocate pe o perioadă de maximum 12 luni de
        la data transmiterii sau până la retragerea consimțământului.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">6. Drepturile dumneavoastră</h3>
      <p className="mb-3 leading-relaxed">Aveți dreptul la:</p>
      <ul className="list-disc pl-5 mb-5 space-y-1 leading-relaxed">
        <li>Acces la datele personale</li>
        <li>Rectificarea datelor inexacte</li>
        <li>Ștergerea datelor</li>
        <li>Restricționarea prelucrării</li>
        <li>Retragerea consimțământului</li>
        <li>Depunerea unei plângeri la ANSPDCP</li>
      </ul>
      <h3 className="text-base font-bold text-neutral-900 mb-3">7. Contact</h3>
      <p className="leading-relaxed">
        Pentru orice solicitare legată de datele dumneavoastră personale, ne puteți contacta la{' '}
        <a href="mailto:office@littlegenius.ro" className="text-amber-600 hover:underline">
          office@littlegenius.ro
        </a>.
      </p>
    </div>
  );
}

function CookiesContent() {
  return (
    <div className="prose prose-sm max-w-none text-neutral-600">
      <p className="text-xs text-neutral-400 mb-6">Ultima actualizare: Martie 2026</p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">1. Ce sunt cookie-urile</h3>
      <p className="mb-5 leading-relaxed">
        Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dumneavoastră
        atunci când vizitați un site web. Acestea permit funcționarea corectă a paginii și
        îmbunătățirea experienței de navigare.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">2. Cookie-uri strict necesare</h3>
      <p className="mb-5 leading-relaxed">
        Acest site utilizează exclusiv cookie-uri strict necesare pentru funcționarea corectă a
        paginii. Aceste cookie-uri nu colectează informații personale și nu pot fi dezactivate fără
        a afecta funcționalitatea de bază a site-ului.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">3. Cookie-uri funcționale</h3>
      <p className="mb-5 leading-relaxed">
        Pot fi utilizate cookie-uri funcționale pentru a memora preferințele dumneavoastră (ex:
        starea formularului). Acestea nu sunt transmise către terți și nu sunt folosite în scopuri
        publicitare.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">4. Cookie-uri de tracking și marketing</h3>
      <p className="mb-5 leading-relaxed">
        <strong className="text-neutral-800">Acest site nu utilizează</strong> cookie-uri de
        tracking, analitics, marketing sau pixeli publicitari de la terți. Nu există Google
        Analytics, Facebook Pixel sau alte instrumente de urmărire pe această pagină.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">5. Controlul cookie-urilor</h3>
      <p className="leading-relaxed">
        Puteți controla și șterge cookie-urile prin setările browserului dumneavoastră. Rețineți
        că dezactivarea tuturor cookie-urilor poate afecta funcționalitatea site-ului.
      </p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="prose prose-sm max-w-none text-neutral-600">
      <p className="text-xs text-neutral-400 mb-6">Ultima actualizare: Martie 2026</p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">1. Acceptarea termenilor</h3>
      <p className="mb-5 leading-relaxed">
        Prin utilizarea acestui site web, acceptați în mod implicit prezentele Termene și Condiții.
        Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">2. Scop și utilizare</h3>
      <p className="mb-5 leading-relaxed">
        Site-ul Little Genius este destinat exclusiv furnizării de informații despre instituția
        educațională, programele și serviciile oferite, și facilitării contactului cu potențialele
        familii interesate. Conținutul acestui site nu constituie o ofertă contractuală fermă.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">3. Proprietate intelectuală</h3>
      <p className="mb-5 leading-relaxed">
        Tot conținutul acestui site (texte, imagini, logo, design) este proprietatea Little Genius
        și este protejat de legislația română și europeană privind drepturile de autor. Reproducerea
        sau distribuirea fără acordul scris al Little Genius este interzisă.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">4. Limitarea responsabilității</h3>
      <p className="mb-5 leading-relaxed">
        Little Genius depune eforturi pentru a menține informațiile de pe site actualizate și
        corecte, dar nu garantează acuratețea absolută a acestora. Site-ul este furnizat „ca atare",
        fără garanții de orice natură.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">5. Modificarea termenilor</h3>
      <p className="mb-5 leading-relaxed">
        Little Genius își rezervă dreptul de a modifica prezentele Termene și Condiții în orice
        moment. Modificările intră în vigoare la publicarea pe site.
      </p>
      <h3 className="text-base font-bold text-neutral-900 mb-3">6. Legislație aplicabilă</h3>
      <p className="leading-relaxed">
        Prezentele Termene și Condiții sunt guvernate de legislația română. Orice litigiu va fi
        supus jurisdicției instanțelor competente din România.
      </p>
    </div>
  );
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-fade-in-up">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-stone-100 flex-shrink-0">
          <h3 className="text-lg font-bold text-neutral-900">{titles[type]}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-700 cursor-pointer rounded-lg hover:bg-stone-100 transition-colors"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-8 py-7">
          {type === 'privacy' && <PrivacyContent />}
          {type === 'cookies' && <CookiesContent />}
          {type === 'terms' && <TermsContent />}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-stone-100 flex-shrink-0">
          <button
            onClick={onClose}
            className="whitespace-nowrap w-full bg-stone-100 hover:bg-stone-200 text-neutral-700 font-medium text-sm py-2.5 rounded-full cursor-pointer transition-colors"
          >
            Închide
          </button>
        </div>

      </div>
    </div>
  );
}
