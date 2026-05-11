/* =============================================================================
   REVIEWS SECTION — Alarm Clock Coffee
   Design: Analog Warmth — editorial pull-quote style reviews
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const reviews = [
  {
    name: "Sweet Sinay",
    role: "Local Guide · 763 reviews",
    rating: 5,
    text: "First of all, I love the name, Alarm Clock Coffee. In a city with coffee shops like 'Waiting Cafe', 'Warm Coffee', 'Obama Black Coffee', and any number of other bizarre names, Alarm Clock Coffee seems very reasonable, indeed! The coffee is excellent and the atmosphere is warm and welcoming.",
    date: "A year ago",
    highlight: true,
  },
  {
    name: "Barbara Kasasa",
    role: "Local Guide · 206 reviews",
    rating: 5,
    text: "The most friendly and passionate people. We bought 1kg freshly ground Mondulkiri robusta coffee. The smell alone is heaven, the taste is great. The price amazing. They made us try some dripped Arabica coffee... Potent, did not sleep that night. And I only had a few sips. 😂",
    date: "5 years ago",
    highlight: false,
  },
  {
    name: "Pro Eater",
    role: "Local Guide · 586 reviews",
    rating: 4,
    text: "Alarm Clock coffee and roastery. Americano for 6,000 riels. Very aromatic, dark roast, nice body but a bit harsh and has bitterness. More than good considering the price. Interior was a bit messy.",
    date: "3 years ago",
    highlight: false,
  },
];

const ratingBreakdown = [
  { stars: 5, pct: 72 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 2 },
];

const tags = ["Friendly Staff", "Indoor Seating", "Great Coffee", "Good Value", "Dark Roast"];

export default function ReviewsSection() {
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
    <section id="reviews" ref={sectionRef} className="py-24 bg-[#EDE0C8]">
      <div className="container">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-[#A63D2F]/40" />
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#A63D2F]">{t('reviews.whatGuestsSay')}</span>
          </div>
          <h2 className="font-display text-[#2C1A0E] text-5xl md:text-6xl">{t('reviews.reviews')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: rating summary */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Big rating */}
            <div className="bg-[#2C1A0E] text-[#EDE0C8] p-8 mb-6">
              <div className="font-display text-7xl text-[#C8622A] leading-none">4.6</div>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className={`w-4 h-4 ${i <= 4 ? "fill-[#C8622A] text-[#C8622A]" : "fill-[#C8622A]/40 text-[#C8622A]/40"}`} />
                ))}
              </div>
              <p className="font-mono-label text-[11px] tracking-wider text-[#EDE0C8]/60 mt-2">Based on 38 Google reviews</p>

              {/* Breakdown */}
              <div className="mt-6 space-y-2">
                {ratingBreakdown.map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="font-mono-label text-[10px] text-[#EDE0C8]/60 w-4">{stars}</span>
                    <div className="flex-1 h-1.5 bg-[#EDE0C8]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#C8622A] rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${pct}%` : "0%" }}
                      />
                    </div>
                    <span className="font-mono-label text-[10px] text-[#EDE0C8]/40 w-8">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#2C1A0E]/50 mb-3">Mentioned Often</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-label text-[10px] tracking-[0.1em] uppercase border border-[#2C1A0E]/30 text-[#2C1A0E]/70 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: review cards */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  review.highlight
                    ? "bg-[#2C1A0E] border-[#A63D2F]/30 text-[#EDE0C8]"
                    : "bg-[#FAF6EE] border-[#2C1A0E]/10 text-[#2C1A0E]"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`font-body font-semibold text-base ${review.highlight ? "text-[#EDE0C8]" : "text-[#2C1A0E]"}`}>
                      {review.name}
                    </h4>
                    <p className={`font-mono-label text-[10px] tracking-wider mt-0.5 ${review.highlight ? "text-[#EDE0C8]/50" : "text-[#2C1A0E]/50"}`}>
                      {review.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3 h-3 ${s <= review.rating ? "fill-[#C8622A] text-[#C8622A]" : "fill-[#C8622A]/30 text-[#C8622A]/30"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className={`absolute -top-1 -left-1 w-6 h-6 opacity-20 ${review.highlight ? "text-[#C8622A]" : "text-[#A63D2F]"}`} />
                  <p className={`font-body italic text-sm leading-relaxed pl-4 ${review.highlight ? "text-[#EDE0C8]/80" : "text-[#2C1A0E]/70"}`}>
                    {review.text}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-current/10">
                  <span className={`font-mono-label text-[10px] tracking-wider ${review.highlight ? "text-[#EDE0C8]/40" : "text-[#2C1A0E]/40"}`}>
                    {review.date} · Google Maps
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
