/* =============================================================================
   HERO SECTION — Alarm Clock Coffee
   Design: Analog Warmth — full-bleed vintage poster with layered typography
   ============================================================================= */
import { Clock, MapPin, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663645789674/jybSqysaVNaUjCySfjvGAk/hero-banner-M2TSNA5ne2tUu7JPRUfRqM.webp";

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVisit = () => {
    document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Alarm Clock Coffee interior"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        {/* Dark gradient overlay — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08] via-[#1A0F08]/60 to-[#1A0F08]/20" />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>



      {/* Content */}
      <div className="relative z-10 container pb-16 md:pb-20 pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-3xl">
          {/* Logo badge */}
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 animate-fade-up">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-2xl border-2 border-[#C8622A] flex items-center justify-center flex-shrink-0 bg-[#2C1A0E]/40 backdrop-blur-sm">
              <img src="/logo.svg" alt="Alarm Clock Coffee" className="w-9 md:w-12 h-9 md:h-12 object-contain rounded-xl" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-[#EDE0C8] text-sm md:text-lg tracking-wider">ALARM CLOCK</p>
              <p className="font-mono-label text-[#C8622A] text-[8px] md:text-[9px] tracking-[0.3em] uppercase">Coffee & Roastery</p>
            </div>
          </div>

          {/* Eyebrow label */}
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 animate-fade-up-delay-1">
            <span className="font-mono-label text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-[#C8622A]">
              Est. Chamkar Doung · Phnom Penh
            </span>
            <div className="h-px w-8 md:w-12 bg-[#C8622A]/60" />
          </div>

          {/* Main headline */}
          <h1 className="font-display text-[#EDE0C8] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-3 md:mb-4 animate-fade-up-delay-2">
            Alarm
            <br />
            <span className="text-[#C8622A]">Clock</span>
            <br />
            Coffee
          </h1>

          {/* Tagline */}
          <p className="font-body italic text-[#EDE0C8]/80 text-base md:text-lg lg:text-xl max-w-md mb-6 md:mb-8 animate-fade-up-delay-3">
            {t('hero.tagline')}
          </p>

          {/* Rating + info row */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-8 md:mb-10 text-sm md:text-base animate-fade-up-delay-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star
                  key={i}
                  className={`w-3 md:w-4 h-3 md:h-4 ${i <= 4 ? "fill-[#C8622A] text-[#C8622A]" : "fill-[#C8622A]/40 text-[#C8622A]/40"}`}
                />
              ))}
              <span className="font-mono-label text-[#EDE0C8] text-xs md:text-sm ml-1">4.6</span>
              <span className="font-mono-label text-[#EDE0C8]/50 text-[10px] md:text-xs">(38)</span>
            </div>
            <div className="hidden sm:block w-px h-3 md:h-4 bg-[#EDE0C8]/20" />
            <div className="flex items-center gap-1 text-[#EDE0C8]/70">
              <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#C8622A] flex-shrink-0" />
              <span className="font-mono-label text-[10px] md:text-xs tracking-wider hidden md:inline">Chamkar Doung, Phnom Penh</span>
              <span className="font-mono-label text-[10px] md:text-xs tracking-wider md:hidden">Phnom Penh</span>
            </div>
            <div className="hidden md:block w-px h-3 md:h-4 bg-[#EDE0C8]/20" />
            <div className="flex items-center gap-1 text-[#EDE0C8]/70">
              <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#C8622A] flex-shrink-0" />
              <span className="font-mono-label text-[10px] md:text-xs tracking-wider">6 AM</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2 md:gap-4 animate-fade-up-delay-5">
            <button
              onClick={scrollToMenu}
              className="bg-[#A63D2F] hover:bg-[#C8622A] text-[#EDE0C8] px-6 md:px-8 py-2.5 md:py-3.5 font-mono-label text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#A63D2F]/30 rounded-lg"
            >
              {t('hero.viewMenu')}
            </button>
            <button
              onClick={scrollToVisit}
              className="border border-[#EDE0C8]/40 hover:border-[#C8622A] text-[#EDE0C8] hover:text-[#C8622A] px-6 md:px-8 py-2.5 md:py-3.5 font-mono-label text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded-lg"
            >
              {t('hero.findUs')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-[#EDE0C8]/30" />
        <span className="font-mono-label text-[9px] tracking-[0.3em] text-[#EDE0C8]/40 uppercase">Scroll</span>
      </div>
    </section>
  );
}
