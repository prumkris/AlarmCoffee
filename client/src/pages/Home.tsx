/* =============================================================================
   HOME PAGE — Alarm Clock Coffee
   Design: Analog Warmth — assembles all sections in editorial order
   ============================================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import ReviewsSection from "@/components/ReviewsSection";
import PopularTimes from "@/components/PopularTimes";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <MenuSection />
      <StorySection />
      <ReviewsSection />
      <PopularTimes />
      <VisitSection />
      <Footer />
    </div>
  );
}
