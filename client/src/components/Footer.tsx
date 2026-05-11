/* =============================================================================
   FOOTER — Alarm Clock Coffee
   Design: Analog Warmth — dark footer with vintage typography
   ============================================================================= */
import { Clock, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A0F08] border-t border-[#A63D2F]/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Alarm Clock Coffee Logo" className="h-12 w-12 object-contain rounded-lg" />
              <div>
                <div className="font-display text-[#EDE0C8] text-xl tracking-wider">ALARM CLOCK COFFEE</div>
                <div className="font-mono-label text-[#C8622A] text-[9px] tracking-[0.3em] uppercase">Coffee & Roastery · Phnom Penh</div>
              </div>
            </div>
            <p className="font-body italic text-[#EDE0C8]/50 text-sm max-w-xs leading-relaxed">
              {t('footer.desc')}
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/alccambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#EDE0C8]/20 flex items-center justify-center text-[#EDE0C8]/50 hover:text-[#C8622A] hover:border-[#C8622A]/50 transition-colors rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/alarmcoffeeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#EDE0C8]/20 flex items-center justify-center text-[#EDE0C8]/50 hover:text-[#C8622A] hover:border-[#C8622A]/50 transition-colors rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/MDfUS99BAaXsCBGo7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#EDE0C8]/20 flex items-center justify-center text-[#EDE0C8]/50 hover:text-[#C8622A] hover:border-[#C8622A]/50 transition-colors rounded-lg"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#C8622A] mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5">
              {[
                { key: "footer.home", href: "#home" },
                { key: "footer.menu", href: "#menu" },
                { key: "footer.story", href: "#story" },
                { key: "footer.reviews", href: "#reviews" },
                { key: "footer.visit", href: "#visit" },
              ].map(({ key, href }) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-body text-[#EDE0C8]/50 hover:text-[#C8622A] text-sm transition-colors text-left"
                  >
                    {t(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#C8622A] mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8622A] mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/MDfUS99BAaXsCBGo7" target="_blank" rel="noopener noreferrer" className="font-body text-[#EDE0C8]/50 hover:text-[#C8622A] text-sm transition-colors">
                  {t('footer.address')}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C8622A] flex-shrink-0" />
                <a href="tel:098200927" className="font-mono-label text-[#EDE0C8]/50 hover:text-[#C8622A] text-sm transition-colors">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#C8622A] flex-shrink-0" />
                <span className="font-mono-label text-[#EDE0C8]/50 text-sm">{t('footer.hours')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#EDE0C8]/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#EDE0C8]/25">
            {t('footer.copyright')}
          </p>
          <p className="font-mono-label text-[10px] tracking-[0.15em] text-[#EDE0C8]/20">
            Rated 4.6 ★ on Google Maps
          </p>
        </div>
      </div>
    </footer>
  );
}
