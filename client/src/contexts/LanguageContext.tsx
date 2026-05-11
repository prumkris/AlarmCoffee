/* =============================================================================
   LANGUAGE CONTEXT — Alarm Clock Coffee
   Manages Khmer/English language switching
   ============================================================================= */
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "km";

interface Translations {
  en: Record<string, string>;
  km: Record<string, string>;
}

const translations: Translations = {
  en: {
    // Navbar
    "nav.home": "HOME",
    "nav.menu": "MENU",
    "nav.story": "OUR STORY",
    "nav.reviews": "REVIEWS",
    "nav.visit": "VISIT US",
    "nav.callUs": "CALL US",

    // Hero
    "hero.tagline": "Wake up to something worth getting out of bed for. Freshly roasted, passionately brewed.",
    "hero.viewMenu": "View Menu",
    "hero.findUs": "Find Us",

    // Feature Strip
    "feature.roastery": "In-House Roastery",
    "feature.roasteryDesc": "Freshly roasted daily",
    "feature.robusta": "Mondulkiri Robusta",
    "feature.robustaDesc": "Sourced from Cambodian highlands",
    "feature.location": "Chamkar Doung",
    "feature.locationDesc": "Heart of Phnom Penh",
    "feature.hours": "Open from 6 AM",
    "feature.hoursDesc": "Your morning ritual awaits",

    // Menu
    "menu.ourMenu": "Our Menu",
    "menu.title": "ម៉ឺនុយរបស់យើង",
    "menu.desc": "Freshly roasted, carefully brewed. Every cup tells a story from the hills of Mondulkiri.",
    "menu.espresso": "Espresso",
    "menu.iced": "Iced Drinks",
    "menu.bubble": "Bubble Tea",
    "menu.beans": "Beans",
    "menu.disclaimer": "* Prices in Cambodian Riel (៛). Approx. ៛1–5 per person. Dine-in · Kerbside Pickup · Delivery available.",

    // Story
    "story.ourStory": "Our Story",
    "story.title": "រឿងរបស់យើង",
    "story.desc": "Alarm Clock Coffee isn't just about serving great coffee—it's about waking up to something worth getting out of bed for. Founded in the heart of Chamkar Doung, Phnom Penh, we're dedicated to sourcing the finest Mondulkiri Robusta beans and roasting them with passion.",

    // Reviews
    "reviews.reviews": "Reviews",
    "reviews.summary": "What Our Customers Say",
    "reviews.whatGuestsSay": "What Guests Say",

    // Popular Times
    "times.whenToVisit": "When to Visit",
    "times.popular": "Popular Times",
    "times.busiest": "Usually busiest around",

    // Visit
    "visit.findUs": "Find Us",
    "visit.hours": "Hours",
    "visit.contact": "Contact",
    "visit.services": "Services",
    "visit.dineIn": "Dine-in",
    "visit.pickup": "Kerbside pickup",
    "visit.delivery": "Delivery",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.openDaily": "Open 6 AM Daily",
    "footer.desc": "Wake up to something worth getting out of bed for. Freshly roasted Mondulkiri Robusta, brewed with passion in Chamkar Doung.",
    "footer.copyright": "© 2026 Alarm Clock Coffee. All rights reserved.",
    "footer.home": "Home",
    "footer.menu": "Our Menu",
    "footer.story": "Our Story",
    "footer.reviews": "Reviews",
    "footer.visit": "Visit Us",
    "footer.address": "GV5M+48, Chamkar Doung, Phnom Penh",
    "footer.phone": "098 200 927",
    "footer.hours": "Mon–Sun: 6 AM–5:30 PM",
  },
  km: {
    // Navbar
    "nav.home": "ដើម",
    "nav.menu": "ម៉ឺនុយ",
    "nav.story": "រឿងរបស់យើងខ្ញុំ",
    "nav.reviews": "ពិនិត្យ",
    "nav.visit": "ចូលមក",
    "nav.callUs": "ហៅយើងខ្ញុំ",

    // Hero
    "hero.tagline": "ដឹងថាមានអ្វីដែលគួរឱ្យលើកលង់ក្នុងពេលព្រឹក។ បាយបង្ហូរដែលស្រស់ស្អាត ដែលបង្ហូរដោយចិត្ត។",
    "hero.viewMenu": "មើលម៉ឺនុយ",
    "hero.findUs": "ស្វាគមន៍",

    // Feature Strip
    "feature.roastery": "ឡើងលើផ្ទាល់ខ្លួន",
    "feature.roasteryDesc": "បង្ហូរថ្មីក្នុងរៀងរាល់ថ្ងៃ",
    "feature.robusta": "Mondulkiri Robusta",
    "feature.robustaDesc": "ចេញពីលើភ្នំកម្ពុច",
    "feature.location": "ចំការដូង",
    "feature.locationDesc": "ស្នូលនៃភ្នំពេញ",
    "feature.hours": "បើកចាប់ពីម៉ោង ៦ ព្រឹក",
    "feature.hoursDesc": "ពិធីរបស់អ្នកក្នុងពេលព្រឹក",

    // Menu
    "menu.ourMenu": "ម៉ឺនុយរបស់យើងខ្ញុំ",
    "menu.title": "ម៉ឺនុយរបស់យើងខ្ញុំ",
    "menu.desc": "បង្ហូរដោយយកចិត្តទុកដាក់ ដែលបង្ហូរដោយចិត្ត។ រៀងរាល់ពាក្យប្រាប់រឿងពីលើភ្នំ Mondulkiri។",
    "menu.espresso": "Espresso",
    "menu.iced": "ភ្នាក់ងារក្រាច",
    "menu.bubble": "ស្ពៃលក្ខណ៍",
    "menu.beans": "豆",
    "menu.disclaimer": "* តម្លៃគិតជាប្រាក់រៀល (៛)។ ប្រហែល ៛១–៥ ក្នុងម្នាក់។ ញ៉ាំនៅហាង · ខ្ចប់យកទៅជិត · មានដឹកជញ្ជូន។",

    // Story
    "story.ourStory": "រឿង",
    "story.title": "រឿង",   "story.desc": "Alarm Clock Coffee មិនមែនគ្រាន់តែបម្រើកាហ្វេដ៏ល្អប៉ុណ្ណោះទេ វាគឺលើកលង់ដឹងថាមានអ្វីដែលគួរឱ្យលើកលង់ក្នុងពេលព្រឹក។ ដែលបង្កើតឡើងនៅកណ្តាលចំការដូង ភ្នំពេញ យើងខ្ញុំប្តេជ្ញាធានាក្នុងការស្វែងរកគ្រាប់ Mondulkiri Robusta ល្អបំផុត ហើយបង្ហូរវាដោយចិត្ត។",

    // Reviews
    "reviews.reviews": "ពិនិត្យ",
    "reviews.summary": "តើអតិថិជនរបស់យើងខ្ញុំនិយាយថាម្តេច",
    "reviews.whatGuestsSay": "តើអតិថិជនបាននិយាយថាម្តេច",

    // Popular Times
    "times.whenToVisit": "ពេលណាដែលត្រូវចូលមក",
    "times.popular": "ពេលវេលាដ៏ពេញលេញ",
    "times.busiest": "ជាធម្មតា바្ន ក្នុងពេល",

    // Visit
    "visit.findUs": "ស្វាគមន៍",
    "visit.hours": "ម៉ោង",
    "visit.contact": "ទាក់ទង",
    "visit.services": "សេវាកម្ម",
    "visit.dineIn": "ញ៉ាំក្នុងផ្ទះ",
    "visit.pickup": "ទទួលយកពីផ្នែកម្ខាង",
    "visit.delivery": "ដឹកជញ្ជូន",

    // Footer
    "footer.quickLinks": "តំណភ្ជាប់រហ័ស",
    "footer.contact": "ទាក់ទី",
    "footer.openDaily": "បើកចាប់ពីម៉ោង ៦ ព្រឹក",
    "footer.desc": "ដឹងថាមានអ្វីដែលគួរឱ្យលើកលង់ក្នុងពេលព្រឹក។ Mondulkiri Robusta ដែលបង្ហូរដោយចិត្ត នៅចំការដូង។",
    "footer.copyright": "© 2026 Alarm Clock Coffee។ រក្សាសិទ្ធិទាំងអស់។",
    "footer.home": "ទោងចំការ",
    "footer.menu": "ម៉ឺនុយរបស់យើងខ្ញុំ",
    "footer.story": "រទាក់របស់យើងខ្ញុំ",
    "footer.reviews": "ផ្ទីវី",
    "footer.visit": "ច្ចុប្រើកុទបង្ហាស់",
    "footer.address": "GV5M+48, ចំការដូង, ព្រេញពេញ",
    "footer.phone": "098 200 927",
    "footer.hours": "ច្ចុទ–ម្មិទ: ៦ ព្រឹក–៥:៩៦ ព្រឹក",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === "km") {
      document.body.classList.add("khmer-mode");
    } else {
      document.body.classList.remove("khmer-mode");
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
