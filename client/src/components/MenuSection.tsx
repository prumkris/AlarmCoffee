/* =============================================================================
   MENU SECTION — Alarm Clock Coffee
   Design: Analog Warmth — editorial broadsheet-style menu layout
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICED_LATTE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663645789674/jybSqysaVNaUjCySfjvGAk/iced-latte-ktEwCoJZHyVZ5mkJzRUjgX.webp";
const COFFEE_POUR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663645789674/jybSqysaVNaUjCySfjvGAk/coffee-pour-7a8ESr8AiUCTjgcjZMFgoy.webp";
const COFFEE_BEANS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663645789674/jybSqysaVNaUjCySfjvGAk/coffee-beans-mytmNBgTgJrrszy7uX4J7w.webp";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    category: "Espresso & Hot Coffee",
    items: [
      { name: "Espresso", description: "Single or double shot of our dark-roast Mondulkiri Robusta", price: "4,000 ៛", tag: "House Favourite" },
      { name: "Americano", description: "Aromatic dark roast, nice body — very good considering the price", price: "6,000 ៛" },
      { name: "Cappuccino", description: "Espresso with steamed milk and a thick layer of foam", price: "7,000 ៛" },
      { name: "Latte", description: "Smooth espresso with velvety steamed milk and latte art", price: "7,500 ៛" },
      { name: "Drip Arabica", description: "Potent single-origin drip coffee — you have been warned", price: "8,000 ៛", tag: "Staff Pick" },
    ],
  },
  {
    category: "Iced & Cold Drinks",
    items: [
      { name: "Ice Latte", description: "Our most popular — espresso over ice with fresh milk", price: "7,500 ៛", tag: "Most Popular" },
      { name: "Iced Americano", description: "Bold, refreshing, dark roast over ice", price: "6,000 ៛" },
      { name: "Iced Cappuccino", description: "Chilled espresso with cold foam", price: "7,500 ៛" },
      { name: "Cold Brew", description: "Steeped 12 hours for a smooth, low-acid finish", price: "9,000 ៛" },
    ],
  },
  {
    category: "Bubble Tea",
    items: [
      { name: "Classic Milk Tea", description: "Creamy milk tea with chewy tapioca pearls", price: "6,000 ៛" },
      { name: "Brown Sugar Boba", description: "Tiger-stripe brown sugar syrup with fresh milk and pearls", price: "7,000 ៛", tag: "New" },
      { name: "Taro Milk Tea", description: "Earthy taro with sweet milk and boba pearls", price: "7,000 ៛" },
      { name: "Matcha Latte Boba", description: "Japanese matcha with milk and tapioca pearls", price: "7,500 ៛" },
    ],
  },
  {
    category: "Coffee Beans & Roasts",
    items: [
      { name: "Mondulkiri Robusta (250g)", description: "Freshly ground or whole bean — the smell alone is heaven", price: "18,000 ៛", tag: "Signature" },
      { name: "Mondulkiri Robusta (1kg)", description: "Bulk bag of our freshly ground Cambodian Robusta", price: "60,000 ៛" },
      { name: "Single Origin Arabica (250g)", description: "Light to medium roast, bright and complex", price: "22,000 ៛" },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-[#2C1A0E]/10 group hover:bg-[#2C1A0E]/5 transition-colors px-2 -mx-2">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-body font-semibold text-[#2C1A0E] text-base">{item.name}</span>
          {item.tag && (
            <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#A63D2F] border border-[#A63D2F]/50 px-2 py-0.5">
              {item.tag}
            </span>
          )}
        </div>
        <p className="font-body text-[#2C1A0E]/60 text-sm italic mt-0.5">{item.description}</p>
      </div>
      <span className="font-mono-label text-[#A63D2F] text-sm whitespace-nowrap mt-0.5">{item.price}</span>
    </div>
  );
}

export default function MenuSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
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
    <section id="menu" ref={sectionRef} className="py-24 bg-[#FAF6EE]">
      <div className="container">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-16 bg-[#A63D2F]/40" />
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#A63D2F]">What We Serve</span>
          </div>
          <h2 className="font-display text-[#2C1A0E] text-5xl md:text-6xl">{t('menu.ourMenu')}</h2>
          <p className="font-body italic text-[#2C1A0E]/60 mt-3 max-w-md text-lg">
            {t('menu.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: featured images */}
          <div className={`lg:col-span-1 space-y-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={ICED_LATTE_IMG}
                alt="Iced Latte"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2C1A0E]/80 to-transparent p-4">
                <span className="font-display text-[#EDE0C8] text-2xl">Ice Latte</span>
                <p className="font-mono-label text-[#C8622A] text-xs tracking-wider mt-1">Most Popular</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden aspect-square">
                <img src={COFFEE_POUR_IMG} alt="Coffee pour" className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden aspect-square">
                <img src={COFFEE_BEANS_IMG} alt="Coffee beans" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: menu list */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-[#2C1A0E]/15 pb-4">
              {menuData.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(i)}
                  className={`font-mono-label text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200 ${
                    activeTab === i
                      ? "bg-[#A63D2F] text-[#EDE0C8]"
                      : "text-[#2C1A0E]/60 hover:text-[#A63D2F] border border-[#2C1A0E]/20 hover:border-[#A63D2F]"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Menu items */}
            <div>
              <h3 className="font-display text-[#2C1A0E] text-2xl mb-6">{menuData[activeTab].category}</h3>
              <div>
                {menuData[activeTab].items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Price note */}
            <div className="mt-8 p-4 border border-[#2C1A0E]/15 bg-[#EDE0C8]/50">
              <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#2C1A0E]/50">
                {t('menu.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
