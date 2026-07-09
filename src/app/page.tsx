import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesStrip from "@/components/FeaturesStrip";
import LandingSection from "@/components/LandingSection";
import Applications from "@/components/Applications";
import VenusProduct from "@/components/VenusProduct";
import Briquettes from "@/components/Briquettes";
import MissionStatement from "@/components/MissionStatement";
import ThreeBenefits from "@/components/ThreeBenefits";
import NewsSection from "@/components/NewsSection";
import RatingSection from "@/components/RatingSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import VideoSection from "@/components/VideoSection";
import LogosCarousel from "@/components/LogosCarousel";

export default function Home() {
  return (
    <>
      {/* 0. Initial Loading Splash Screen */}
      <LoadingScreen />

      {/* 1. Sticky navigation bar */}
      <Navbar />

      <main id="main-content">
        {/* 2. Full-viewport hero */}
        <LandingSection />

        {/* 2b. Ils m'ont fait confiance — Logos Carousel
        <LogosCarousel /> */}

        {/* 3. Three feature bullets */}
        <FeaturesStrip />

        {/* 3b. Landing / hero section with CTA and portrait */}
        

        {/* 4. Tabbed applications — sticky horizontal scroll */}
        <Applications />

        {/* Sections below slide UP over Applications as you scroll past it */}
        <div className="relative" style={{ zIndex: 20 }}>
          {/* 5. Introducing Venus product section */}
          <VenusProduct />

          {/* 6. Briquette output section */}
          <Briquettes />

          {/* 7. Mission statement (light background) */}
          <MissionStatement />

          {/* 7b. YouTube Video section */}
          <VideoSection />

          {/* 8. Three benefits: Your Metal / Your Independence / Your World
          <ThreeBenefits /> */}

          {/* 9. Latest news articles */}
          <NewsSection />

          {/* 10. Community rating & testimonials */}
          <RatingSection />

          {/* 11. Newsletter / white paper signup */}
          <Newsletter />
        </div>
      </main>

      {/* 11. Site footer */}
      <Footer />
    </>
  );
}
