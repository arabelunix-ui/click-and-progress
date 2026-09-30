import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales — Clic&Progress · Soufiyan",
  description:
    "Mentions légales du site Clic&Progress (Soufiyan), éditeur, directeur de la publication, hébergement et droits de propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />

      {/* ══ HERO BANNÈRE MENTIONS LÉGALES (RESPECT DESIGN SYSTEM : #F9F8F6 + BADGE AVEC LIGNES) ══ */}
      <section className="relative bg-[#F9F8F6] border-b border-[#E8E5DF] overflow-hidden">
        <div
          className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 75% 25%, rgba(255,101,0,0.06) 0%, transparent 65%)" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10 flex flex-col items-center">
          
          {/* BOUTON RETOUR À L'ACCUEIL EN HAUT */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E8E5DF] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest shadow-sm hover:border-[#FF6500] hover:text-[#FF6500] transition-all mb-8 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>

          {/* BADGE SIGNATURE DU DESIGN SYSTEM */}
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-4">
            <span className="w-5 h-px bg-[#FF6500]" />
            Informations Légales
            <span className="w-5 h-px bg-[#FF6500]" />
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Mentions <span className="text-[#FF6500]">Légales</span>
          </h1>

          <p className="text-base sm:text-lg text-[#1A1A1A]/65 leading-relaxed max-w-2xl mx-auto font-normal">
            Conformément aux dispositions de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site clicandprogress.fr l&apos;identité des différents intervenants.
          </p>
        </div>
      </section>

      {/* ══ CORPS DU DOCUMENT (CARTES ÉPURÉES & TYPOGRAPHIE SYSTEM) ══ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 01. ÉDITEUR DU SITE */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">01 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Éditeur du site
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Éditeur
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Hazim Soufiyan</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Statut juridique
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Entrepreneur individuel (micro-entrepreneur)</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  N° SIRET
                </span>
                <span className="text-base font-mono font-semibold text-[#1A1A1A]">909 606 378 00018</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  TVA
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Non applicable, art. 293 B du CGI</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60 sm:col-span-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Adresse
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">3 mail Besset, 63000 Clermont-Ferrand</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Téléphone
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">06 78 28 20 23</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Email
                </span>
                <a href="mailto:clicprogress@gmail.com" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                  clicprogress@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 02. DIRECTEUR DE LA PUBLICATION */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">02 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Directeur de la publication
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Nom
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Hazim Soufiyan</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Qualité
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Éditeur du site</span>
              </div>
            </div>
          </div>

          {/* 03. HÉBERGEMENT */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">03 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Hébergement
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Hébergeur
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Vercel Inc.</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Adresse
                </span>
                <span className="text-sm font-semibold text-[#1A1A1A]/80 leading-relaxed">
                  440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Email
                </span>
                <a href="mailto:privacy@vercel.com" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                  privacy@vercel.com
                </a>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Site web
                </span>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                  vercel.com
                </a>
              </div>
            </div>
          </div>

          {/* 04. PROPRIÉTÉ INTELLECTUELLE */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">04 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Propriété intellectuelle
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                L&apos;ensemble du contenu de ce site (textes, visuels, logo) est la propriété de Hazim Soufiyan / Clic&amp;Progress, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.
              </p>
            </div>
          </div>

          {/* 05. CONTACT */}
          <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
            <div
              className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(circle at 80% 80%, rgba(255,101,0,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/15 pb-5">
                <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">05 —</span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                >
                  Contact
                </h2>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                Pour toute question relative au site, écrivez-nous :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#2E2E2E]/80 p-5 rounded-2xl border border-white/10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 block mb-1.5">
                    Email
                  </span>
                  <a href="mailto:clicprogress@gmail.com" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                    clicprogress@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DATE DE MISE À JOUR EN BAS DE PAGE */}
          <div className="pt-8 flex items-center justify-end border-t border-[#E8E5DF]">
            <span className="font-mono text-xs font-bold text-[#1A1A1A]/60 bg-[#F9F8F6] px-4 py-2 rounded-xl border border-[#E8E5DF]">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
