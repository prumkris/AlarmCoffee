/* =============================================================================
   NAVBAR — Alarm Clock Coffee
   Design: Analog Warmth — sticky top nav with vintage typography
   ============================================================================= */
import { useState } from "react";
import { Menu, X, Instagram, Facebook, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C1A0E]/95 backdrop-blur-sm border-b border-[#A63D2F]/30">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="flex items-center gap-3 group"
        >
          <img src="/logo.svg" alt="Alarm Clock Coffee Logo" className="h-10 w-10 object-contain rounded-lg" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[#EDE0C8] text-sm tracking-wider">ALARM CLOCK</span>
            <span className="font-mono-label text-[#C8622A] text-[9px] tracking-[0.3em] uppercase hidden sm:inline">Coffee & Roastery</span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="font-mono-label text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#EDE0C8]/70 hover:text-[#C8622A] transition-colors"
            >
              {t(`nav.${link.href.slice(1).toLowerCase()}`)}
            </a>
          ))}
        </nav>

        {/* Language toggle */}
        <div className="hidden md:flex items-center gap-2 bg-[#2C1A0E]/60 rounded-lg p-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 font-mono-label text-[10px] tracking-[0.2em] uppercase transition-colors rounded ${
              language === 'en'
                ? 'bg-[#C8622A] text-[#EDE0C8]'
                : 'text-[#EDE0C8]/50 hover:text-[#EDE0C8]'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('km')}
            className={`px-3 py-1.5 font-mono-label text-[10px] tracking-[0.2em] uppercase transition-colors rounded ${
              language === 'km'
                ? 'bg-[#C8622A] text-[#EDE0C8]'
                : 'text-[#EDE0C8]/50 hover:text-[#EDE0C8]'
            }`}
          >
            KH
          </button>
        </div>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/alccambodia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EDE0C8]/50 hover:text-[#C8622A] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/alarmcoffeeshop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EDE0C8]/50 hover:text-[#C8622A] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://maps.app.goo.gl/MDfUS99BAaXsCBGo7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EDE0C8]/50 hover:text-[#C8622A] transition-colors"
            aria-label="Google Maps"
          >
            <MapPin className="w-4 h-4" />
          </a>
          <div className="w-px h-4 bg-[#EDE0C8]/20" />
          <a
            href="tel:098200927"
            className="bg-[#A63D2F] hover:bg-[#C8622A] text-[#EDE0C8] px-4 py-2 transition-colors duration-200 rounded-lg"
          >
            <span className="font-mono-label text-[11px] tracking-[0.15em] uppercase">Call Us</span>
          </a>
        </div>

        {/* Language toggle mobile */}
        <div className="md:hidden flex items-center gap-1.5 bg-[#2C1A0E]/60 rounded-lg p-1 mr-2">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 font-mono-label text-[9px] tracking-[0.2em] uppercase transition-colors rounded ${
              language === 'en'
                ? 'bg-[#C8622A] text-[#EDE0C8]'
                : 'text-[#EDE0C8]/50 hover:text-[#EDE0C8]'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('km')}
            className={`px-2 py-1 font-mono-label text-[9px] tracking-[0.2em] uppercase transition-colors rounded ${
              language === 'km'
                ? 'bg-[#C8622A] text-[#EDE0C8]'
                : 'text-[#EDE0C8]/50 hover:text-[#EDE0C8]'
            }`}
          >
            KH
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#EDE0C8] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2C1A0E] border-t border-[#A63D2F]/30 px-4 py-6 flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex flex-col">
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="block px-4 py-2 text-[#EDE0C8] hover:text-[#C8622A] transition-colors"
              >
                {t(`nav.${link.href.slice(1).toLowerCase()}`)}
              </a>
              {index < navLinks.length - 1 && (
                <div className="w-[80%] h-px bg-[#EDE0C8]/30 ml-4 mt-1" />
              )}
            </div>
          ))}

          <div className="mt-4 flex items-center gap-3 justify-center">
            <a
              href="https://www.instagram.com/alccambodia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EDE0C8]/50 hover:text-[#C8622A] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/alarmcoffeeshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EDE0C8]/50 hover:text-[#C8622A] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://maps.app.goo.gl/MDfUS99BAaXsCBGo7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EDE0C8]/50 hover:text-[#C8622A] transition-colors"
              aria-label="Google Maps"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
          <a
            href="tel:098200927"
            className="mt-3 flex items-center justify-center bg-[#A63D2F] text-[#EDE0C8] px-4 py-3 rounded-lg"
          >
            <span className="font-mono-label text-[11px] tracking-[0.15em] uppercase">Call: 098 200 927</span>
          </a>
        </div>
      )}
    </header>
  );
}
