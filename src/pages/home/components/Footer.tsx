import { useState } from 'react';
import LegalModal from './LegalModal';

type LegalType = 'privacy' | 'cookies' | 'terms';

const quickLinks = [
  { label: 'Acasă', href: '#acasa' },
  { label: 'Despre noi', href: '#despre-noi' },
  { label: 'Creșă & Grădiniță', href: '#cresa-gradinita' },
  { label: 'Activități', href: '#activitati' },
  { label: 'Admitere', href: '#admitere' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState<LegalType | null>(null);
  const year = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#acasa') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-navy-900 text-navy-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">

          {/* Top grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-navy-800">

            {/* Column 1: Brand */}
            <div>
              <img
                src="/images/c23c69e55476.webp"
                alt="Little Genius"
                className="h-10 w-auto object-contain mb-5 opacity-90"
                loading="lazy"
              />
              <p className="text-sm text-navy-400 leading-relaxed max-w-xs">
                Instituție educațională privată din București — creșă, grădiniță și școală gimnazială, 
                într-un mediu unitar, sigur și orientat spre dezvoltarea reală a copilului.
              </p>
              {/* Social */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.facebook.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  aria-label="Facebook Little Genius"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-navy-800 hover:bg-amber-400 text-navy-300 hover:text-navy-900 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-facebook-fill text-base" />
                </a>
                <a
                  href="https://www.instagram.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  aria-label="Instagram Little Genius"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-navy-800 hover:bg-amber-400 text-navy-300 hover:text-navy-900 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-instagram-line text-base" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-200 mb-5">
                Navigare rapidă
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="text-sm text-navy-400 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-200 mb-5">
                Contact
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <i className="ri-map-pin-line text-amber-400 text-sm" />
                  </div>
                  <span className="text-sm text-navy-400 leading-relaxed">
                    Str. Carol Knappe nr. 95, sector 1, București
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-amber-400 text-sm" />
                  </div>
                  <a
                    href="tel:+40724245249"
                    className="text-sm text-navy-400 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    0724 245 249
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-amber-400 text-sm" />
                  </div>
                  <a
                    href="mailto:office@littlegenius.ro"
                    className="text-sm text-navy-400 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    office@littlegenius.ro
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-amber-400 text-sm" />
                  </div>
                  <span className="text-sm text-navy-400">Luni – Vineri · 08:00 – 19:00</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-600">

            {/* Copyright */}
            <p>© Little Genius {year} · Str. Carol Knappe nr. 95, sector 1, București</p>

            {/* Legal links */}
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <button
                onClick={() => setLegalOpen('privacy')}
                className="hover:text-navy-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                Politica de Confidențialitate
              </button>
              <button
                onClick={() => setLegalOpen('cookies')}
                className="hover:text-navy-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                Politica Cookies
              </button>
              <button
                onClick={() => setLegalOpen('terms')}
                className="hover:text-navy-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                Termeni și Condiții
              </button>
            </div>

            {/* WebsiteON credit */}
            <a
              href="https://websiteon.ro/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="whitespace-nowrap hover:text-navy-300 transition-colors cursor-pointer"
            >
              Website creat de WebsiteON
            </a>
          </div>

        </div>
      </footer>

      {/* Legal modals */}
      <LegalModal
        isOpen={legalOpen !== null}
        type={legalOpen}
        onClose={() => setLegalOpen(null)}
      />
    </>
  );
}
