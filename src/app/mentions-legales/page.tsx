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
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie numérique.
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
                  Nom commercial / Organisme
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Clic&amp;Progress</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Statut juridique
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Formateur &amp; Consultant indépendant</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Responsable / Fondateur
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Soufiyan</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Localisation &amp; Siège
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Clermont-Ferrand (63000), France</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Activité principale
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Formation continue d&apos;adultes, IA &amp; accompagnement pro</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  N° SIRET / SIREN
                </span>
                <span className="text-base font-mono font-semibold text-[#1A1A1A]">Disponible sur devis et convention de formation</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  N° TVA Intracommunautaire
                </span>
                <span className="text-base font-mono font-semibold text-[#1A1A1A]">Franchise en base de TVA (ou selon convention)</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Périmètre d&apos;intervention
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Auvergne-Rhône-Alpes, France entière &amp; Visioconférence</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Nom
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Soufiyan</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Qualité
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Fondateur de Clic&amp;Progress</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Email
                </span>
                <a href="mailto:contact@clicandprogress.fr" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                  contact@clicandprogress.fr
                </a>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6">
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
                  340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Site web
                </span>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                  https://vercel.com
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
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                Les marques, logos, signes et tout autre contenu du site font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.
              </p>
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#FF6500] border border-[#E8E5DF] text-[#1A1A1A] font-medium shadow-sm my-4">
                Les programmes pédagogiques, méthodes d&apos;apprentissage active 80/20, supports de formation, ainsi que la marque et le logo <strong className="text-[#FF6500] font-bold">Clic&amp;Progress</strong> sont les propriétés exclusives de <strong className="text-[#FF6500] font-bold">Soufiyan / Clic&amp;Progress</strong>.
              </div>
            </div>
          </div>

          {/* 05. CRÉDITS */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">05 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Crédits
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Conception et développement
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Clic&amp;Progress — Soufiyan</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Photographies &amp; Visuels
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">© Clic&amp;Progress — Tous droits réservés</span>
              </div>
            </div>
          </div>

          {/* 06. CONTACT */}
          <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
            <div
              className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(circle at 80% 80%, rgba(255,101,0,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/15 pb-5">
                <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">06 —</span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                >
                  Contact
                </h2>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                Pour toute question relative aux mentions légales, aux formations ou aux financements OPCO, vous pouvez nous contacter :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#2E2E2E]/80 p-5 rounded-2xl border border-white/10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 block mb-1.5">
                    Email direct
                  </span>
                  <a href="mailto:contact@clicandprogress.fr" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                    contact@clicandprogress.fr
                  </a>
                </div>
                <div className="bg-[#2E2E2E]/80 p-5 rounded-2xl border border-white/10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 block mb-1.5">
                    Site web
                  </span>
                  <a href="https://www.clicandprogress.fr" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-[#FF6500] hover:underline block truncate transition-colors">
                    www.clicandprogress.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DATE DE MISE À JOUR EN BAS DE PAGE */}
          <div className="pt-8 flex items-center justify-end border-t border-[#E8E5DF]">
            <span className="font-mono text-xs font-bold text-[#1A1A1A]/60 bg-[#F9F8F6] px-4 py-2 rounded-xl border border-[#E8E5DF]">
              Dernière mise à jour : 14 juillet 2026
            </span>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
