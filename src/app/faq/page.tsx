import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Foire Aux Questions (FAQ) — Clic&Progress · Soufiyan",
  description:
    "Toutes les réponses à vos questions sur les formations Clic&Progress : pédagogie active, financements OPCO, visioconférence et sous-traitance OF à Clermont-Ferrand et France entière.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />

      {/* ══ HERO BANNÈRE FAQ (RESPECT DESIGN SYSTEM : #F9F8F6 + BADGE AVEC LIGNES) ══ */}
      <section className="relative bg-[#F9F8F6] border-b border-[#E8E5DF] overflow-hidden">
        <div
          className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 75% 25%, rgba(255,101,0,0.06) 0%, transparent 65%)" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-4">
            <span className="w-5 h-px bg-[#FF6500]" />
            Aide &amp; Informations
            <span className="w-5 h-px bg-[#FF6500]" />
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-6 leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Foire Aux <span className="text-[#FF6500]">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed max-w-2xl mx-auto font-normal">
            Retrouvez en toute transparence le détail sur notre approche pédagogique 80/20,
            la prise en charge par votre OPCO, le déroulement des sessions en entreprise ou visio, et notre accompagnement sur-mesure.
          </p>
        </div>
      </section>

      {/* ══ SECTION FAQ PRINCIPALE ══ */}
      <FaqSection />

      <Footer />
    </div>
  );
}
