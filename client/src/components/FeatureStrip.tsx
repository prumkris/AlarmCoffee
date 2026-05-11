/* =============================================================================
   FEATURE STRIP — Alarm Clock Coffee
   Design: Analog Warmth — dark strip with key selling points
   ============================================================================= */
import { Coffee, Award, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  { icon: Coffee, key: "roastery" },
  { icon: Award, key: "robusta" },
  { icon: MapPin, key: "location" },
  { icon: Clock, key: "hours" },
];

export default function FeatureStrip() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#1A0F08] border-y border-[#A63D2F]/20 py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#A63D2F]/20">
          {features.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center gap-3 md:px-8 first:pl-0 last:pr-0">
              <div className="w-9 h-9 border border-[#C8622A]/40 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#C8622A]" />
              </div>
              <div>
                <p className="font-body font-semibold text-[#EDE0C8] text-sm leading-tight">{t(`feature.${key}`)}</p>
                <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-[#EDE0C8]/40 mt-0.5">{t(`feature.${key}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
