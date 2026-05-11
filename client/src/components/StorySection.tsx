/* =============================================================================
   STORY SECTION — Alarm Clock Coffee
   Design: Analog Warmth — editorial split layout with coffee beans image
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { Coffee, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BEANS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663645789674/jybSqysaVNaUjCySfjvGAk/coffee-beans-mytmNBgTgJrrszy7uX4J7w.webp";
const VIBE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663645789674/jybSqysaVNaUjCySfjvGAk/cafe-vibe-UvTtuK5GNU84LvptFcaR8R.webp";

const highlights = [
  {
    icon: Coffee,
    title: "Freshly Roasted",
    desc: "We roast our Mondulkiri Robusta in-house. The aroma alone will stop you in your tracks.",
  },
  {
    icon: Award,
    title: "Sourced from Cambodia",
    desc: "Our beans come directly from the highlands of Mondulkiri — supporting local farmers.",
  },
  {
    icon: Users,
    title: "Friendly & Passionate",
    desc: "\"The most friendly and passionate people\" — our guests say it better than we ever could.",
  },
];

export default function StorySection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-24 bg-[#2C1A0E] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C8622A]/60" />
              <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#C8622A]">Our Story</span>
            </div>

            <h2 className="font-display text-[#EDE0C8] text-5xl md:text-6xl leading-tight mb-6">
              {t('story.ourStory')}
            </h2>

            <div className="space-y-4 font-body text-[#EDE0C8]/75 text-base leading-relaxed">
              <p>
                {t('story.desc')}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-6">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#C8622A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#C8622A]" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-[#EDE0C8] text-base">{title}</h4>
                    <p className="font-body text-[#EDE0C8]/60 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: images */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={BEANS_IMG}
                  alt="Mondulkiri Robusta coffee beans"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Inset image — offset bottom-left */}
              <div className="absolute -bottom-8 -left-8 w-2/5 border-4 border-[#2C1A0E] overflow-hidden aspect-square shadow-2xl">
                <img
                  src={VIBE_IMG}
                  alt="Alarm Clock Coffee interior vibe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative stamp */}
              <div className="absolute top-6 right-6 bg-[#A63D2F] text-[#EDE0C8] p-4 transform rotate-3 shadow-xl">
                <div className="font-mono-label text-[9px] tracking-[0.3em] uppercase text-center">
                  <div className="text-2xl font-display mb-1">4.6</div>
                  <div>★★★★★</div>
                  <div className="mt-1">38 Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
