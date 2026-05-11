/* =============================================================================
   VISIT SECTION — Alarm Clock Coffee
   Design: Analog Warmth — dark background, editorial layout with map
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Coffee, Truck, UtensilsCrossed, ChevronDown, ExternalLink } from "lucide-react";

const branches = [
  { id: "chamkar-doung", name: "Chamkar Doung", fullName: "Alarm Clock Coffee Chamkar Doung", phone: "098 200 927", query: "Alarm Clock Coffee Chamkar Doung", address: "បុរីពិភពថ្មីចំការដូង ១, St 1\nChamkar Doung, Phnom Penh", link: "https://maps.app.goo.gl/P2rPZmWETMM9eBpx8" },
  { id: "tuol-sleng", name: "Tuol Sleng", fullName: "Alarm Clock Coffee Tuol Sleng", phone: "010 728 751", query: "Alarm Clock Coffee Tuol Sleng, Phnom Penh", address: "Tuol Sleng, Phnom Penh", link: "https://maps.app.goo.gl/GketbtkbTNo85od29" },
  { id: "vanda", name: "Vanda", fullName: "Alarm Clock Coffee Vanda", phone: "015 933 222", query: "Alarm Clock Coffee Vanda, Phnom Penh", address: "Vanda, Phnom Penh", link: "https://maps.app.goo.gl/FYLDsbyUiVmZRT2F8" },
  { id: "tonle-basak", name: "Tonle Basak", fullName: "Alarm Clock Coffee Tonle Basak", phone: "098 200 927", query: "Alarm Clock Coffee Tonle Basak, Phnom Penh", address: "Tonle Basak, Phnom Penh", link: "https://maps.app.goo.gl/NZV87ezc5A4EjoXw6" },
  { id: "sisowath", name: "Sisowath High School", fullName: "Alarm Clock Coffee Sisowath High School", phone: "098 200 927", query: "Alarm Clock Coffee Sisowath High School, Phnom Penh", address: "Sisowath High School, Phnom Penh", link: "https://maps.app.goo.gl/ZHQ1FV5M6Xe7GRFg8" },
  { id: "iu-sensok", name: "IU SENSOK", fullName: "Alarm Clock Coffee IU SENSOK", phone: "098 200 927", query: "Alarm Clock Coffee IU SENSOK, Phnom Penh", address: "IU SENSOK, Phnom Penh", link: "https://maps.app.goo.gl/eJEqmN2NfYp15LJD6" },
  { id: "tk", name: "TK", fullName: "Alarm Clock Coffee TK", phone: "098 200 927", query: "Alarm Clock Coffee TK, Phnom Penh", address: "TK, Phnom Penh", link: "https://maps.app.goo.gl/8AcZDJT7zvFo5dv29" },
  { id: "canadia", name: "Canadia Tower", fullName: "Alarm Clock Coffee Canadia Tower", phone: "086 447 975", query: "Alarm Clock Coffee Canadia Tower, Phnom Penh", address: "Canadia Tower, Phnom Penh", link: "https://maps.app.goo.gl/QUd4ghMwazJ1dS4L6" },
  { id: "roasters-tk", name: "Roasters & Showroom TK", fullName: "Alarm Clock Coffee Roasters & Showroom TK", phone: "098 200 927", query: "Alarm Clock Coffee Roasters & Showroom TK, Phnom Penh", address: "TK, Phnom Penh", link: "https://maps.app.goo.gl/7vdRTD9C93wokayA9" },
  { id: "kuor-srouv2", name: "New World Kuor Srouv 2", fullName: "Alarm Clock Coffee New World Kuor Srouv2", phone: "096 883 5216", query: "Alarm Clock Coffee New World Kuor Srouv2, Phnom Penh", address: "New World Kuor Srouv 2, Phnom Penh", link: "https://maps.app.goo.gl/m4rfaD8rqfC5r24K6" },
  { id: "piphup-thmey", name: "Piphup Thmey Kuor Srov 2", fullName: "Alarm Coffee Piphup Thmey Kuor Srov 2", phone: "089 399 800", query: "Alarm Coffee Piphup Thmey Kuor Srov 2, Phnom Penh", address: "Piphup Thmey Kuor Srov 2, Phnom Penh", link: "https://maps.app.goo.gl/2gVbet7NdvSi7BMu6" },
];

const hours = [
  { day: "Monday", time: "6:00 AM – 5:30 PM" },
  { day: "Tuesday", time: "6:00 AM – 5:30 PM" },
  { day: "Wednesday", time: "6:00 AM – 5:30 PM" },
  { day: "Thursday", time: "6:00 AM – 5:30 PM" },
  { day: "Friday", time: "6:00 AM – 5:30 PM" },
  { day: "Saturday", time: "6:00 AM – 5:30 PM" },
  { day: "Sunday", time: "6:00 AM – 5:30 PM" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

const services = [
  { icon: UtensilsCrossed, label: "Dine-in" },
  { icon: Coffee, label: "Kerbside Pickup" },
  { icon: Truck, label: "Delivery" },
];

export default function VisitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="visit" ref={sectionRef} className="py-24 bg-[#2C1A0E]">
      <div className="container">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-[#C8622A]/60" />
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#C8622A]">Come Visit</span>
          </div>
          <h2 className="font-display text-[#EDE0C8] text-5xl md:text-6xl">Find Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className={`space-y-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Branch Selector */}
            <div className="relative">
              <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE0C8]/40 mb-2">Select Branch</p>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between border border-[#C8622A]/40 bg-[#1A0F08] px-4 py-3 text-left transition-colors hover:border-[#C8622A]"
              >
                <span className="font-body text-[#EDE0C8] text-base">{selectedBranch.fullName}</span>
                <ChevronDown className={`w-4 h-4 text-[#C8622A] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-[#1A0F08] border border-[#C8622A]/40 max-h-64 overflow-y-auto shadow-xl custom-scrollbar">
                  {branches.map(branch => (
                    <button
                      key={branch.id}
                      onClick={() => { setSelectedBranch(branch); setDropdownOpen(false); setMapReady(false); }}
                      className={`w-full text-left px-4 py-3 hover:bg-[#C8622A]/10 transition-colors ${selectedBranch.id === branch.id ? 'bg-[#C8622A]/20 text-[#C8622A]' : 'text-[#EDE0C8]'}`}
                    >
                      <span className="font-body text-sm block">{branch.fullName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-[#C8622A]/40 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#C8622A]" />
              </div>
              <div>
                <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE0C8]/40 mb-1">Address</p>
                <p className="font-body text-[#EDE0C8] text-base whitespace-pre-line">
                  {selectedBranch.address}
                </p>
                <a href={selectedBranch.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-1 font-mono-label text-[11px] text-[#C8622A] hover:text-[#EDE0C8] transition-colors">
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-[#C8622A]/40 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#C8622A]" />
              </div>
              <div>
                <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE0C8]/40 mb-1">Phone</p>
                <a
                  href={`tel:${selectedBranch.phone.replace(/\s+/g, '')}`}
                  className="font-body text-[#EDE0C8] text-xl hover:text-[#C8622A] transition-colors"
                >
                  {selectedBranch.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-[#C8622A]/40 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#C8622A]" />
              </div>
              <div className="flex-1">
                <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE0C8]/40 mb-3">Opening Hours</p>
                <div className="space-y-1.5">
                  {hours.map(({ day, time }) => (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-1.5 border-b border-[#EDE0C8]/5 ${
                        day === today ? "text-[#C8622A]" : "text-[#EDE0C8]/70"
                      }`}
                    >
                      <span className={`font-mono-label text-[11px] tracking-wider ${day === today ? "font-bold" : ""}`}>
                        {day}
                        {day === today && (
                          <span className="ml-2 text-[9px] bg-[#A63D2F] text-[#EDE0C8] px-1.5 py-0.5">Today</span>
                        )}
                      </span>
                      <span className="font-mono-label text-[11px]">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE0C8]/40 mb-4">Services</p>
              <div className="flex flex-wrap gap-3">
                {services.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 border border-[#C8622A]/30 px-4 py-2.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#C8622A]" />
                    <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#EDE0C8]/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative h-80 lg:h-full min-h-80 border border-[#C8622A]/20 overflow-hidden">
              <iframe
                key={selectedBranch.id}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedBranch.query)}&z=16&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapReady(true)}
                className={`w-full h-full transition-opacity duration-500 ${mapReady ? "opacity-100" : "opacity-0"}`}
              ></iframe>
              {!mapReady && (
                <div className="absolute inset-0 bg-[#1A0F08] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#C8622A] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#EDE0C8]/40">Loading map...</p>
                  </div>
                </div>
              )}
            </div>
            {/* Map caption */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#A63D2F] rounded-full" />
              <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#EDE0C8]/40">
                {selectedBranch.fullName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
