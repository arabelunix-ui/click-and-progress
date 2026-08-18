import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutJourney from "@/components/about/AboutJourney";
import AboutVideo from "@/components/about/AboutVideo";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "À propos de moi — Soufiyan · Clic&Progress",
  description:
    "Découvrez Soufiyan, formateur indépendant basé à Clermont-Ferrand, fondateur de Clic&Progress. Reconversion, IA, commerce et soft skills — une pédagogie vivante et directement applicable.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutValues />
     
      <AboutCTA />
      <Footer />
    </div>
  );
}
