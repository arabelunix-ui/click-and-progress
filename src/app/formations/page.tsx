import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormationsList from "@/components/formations/FormationsList";

export const metadata: Metadata = {
  title: "Formations — Clic&Progress",
  description: "Découvrez les formations professionnelles couvertes sur toute la filière commerce.",
};

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />
      <main className="pt-24 pb-20">
        <FormationsList />
      </main>
      <Footer />
    </div>
  );
}
