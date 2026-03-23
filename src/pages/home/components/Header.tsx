import { useState, useEffect } from 'react';

interface HeaderProps {
  onVisitClick: () => void;
}

const navLinks = [
  { label: 'Acasă', href: '#acasa' },
  { label: 'Despre noi', href: '#despre-noi' },
  { label: 'Creșă & Grădiniță', href: '#cresa-gradinita' },
  { label: 'Școală', href: '#scoala' },
  { label: 'Activități', href: '#activitati' },
  { label: 'Admitere', href: '#admitere' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onVisitClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md border-b border-navy-100 shadow-sm'
          : 'bg-gradient-to-b from-navy-950/55 via-navy-950/20 to-transparent'
      }`}
    >
      {/* Desktop layout */}
      <div
        className={`hidden xl:flex max-w-7xl mx-auto px-8 items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-[96px]' : 'h-[200px]'
        }`}
      >
        {/* Logo */}
        <a href="#acasa" onClick={handleLogoClick} className="flex-shrink-0 cursor-pointer flex items-center">
          <img
            src="/images/c23c69e55476.webp"
            alt="Little Genius logo"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? 'h-[80px]' : 'h-[176px]'
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-base font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                scrolled
                  ? 'text-navy-800 hover:text-navy-600'
                  : 'text-white hover:text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={onVisitClick}
          className={`whitespace-nowrap font-bold text-sm px-6 py-3 rounded-full cursor-pointer transition-all duration-300 ${
            scrolled
              ? 'bg-navy-700 hover:bg-navy-800 text-white'
              : 'bg-amber-400 hover:bg-amber-300 text-navy-900 shadow-[0_0_20px_rgba(251,191,36,0.4)]'
          }`}
        >
          Programează o vizită
        </button>
      </div>

      {/* Mobile layout */}
      <div
        className={`xl:hidden transition-all duration-500 ${
          scrolled ? 'h-[78px]' : 'h-[155px]'
        }`}
      >
        <div className="relative w-full h-full flex items-center justify-center px-4">
          {/* Centered logo */}
          <a href="#acasa" onClick={handleLogoClick} className="cursor-pointer flex items-center justify-center">
            <img
              src="/images/c23c69e55476.webp"
              alt="Little Genius logo"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? 'h-[60px]' : 'h-[128px]'
              }`}
            />
          </a>

          {/* Hamburger absolute right */}
          <button
            className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 cursor-pointer transition-all rounded-xl ${
              scrolled
                ? 'text-navy-800 hover:bg-navy-50 bg-navy-50'
                : 'text-white hover:bg-white/15 bg-navy-950/40 backdrop-blur-sm'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            <i className={menuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="bg-white border-t border-navy-100 px-6 py-6 shadow-lg">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-navy-800 text-base font-semibold hover:text-navy-600 transition-colors cursor-pointer py-1 border-b border-stone-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onVisitClick(); }}
                className="whitespace-nowrap mt-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold text-sm px-5 py-3.5 rounded-full cursor-pointer transition-all duration-200 w-full"
              >
                Programează o vizită
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
