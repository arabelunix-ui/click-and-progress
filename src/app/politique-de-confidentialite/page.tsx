import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Clic&Progress · Soufiyan",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) du site Clic&Progress (Soufiyan).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />

      {/* ══ HERO BANNÈRE CONFIDENTIALITÉ (RESPECT DESIGN SYSTEM : #F9F8F6 + BADGE AVEC LIGNES) ══ */}
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
            Protection des données (RGPD)
            <span className="w-5 h-px bg-[#FF6500]" />
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Politique de <span className="text-[#FF6500]">Confidentialité</span>
          </h1>

          <p className="text-base sm:text-lg text-[#1A1A1A]/65 leading-relaxed max-w-2xl mx-auto font-normal">
            Protection de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) — Règlement UE 2016/679.
          </p>
        </div>
      </section>

      {/* ══ CORPS DU DOCUMENT (CARTES ÉPURÉES & TYPOGRAPHIE SYSTEM) ══ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* INTRODUCTION */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-10 shadow-sm text-base text-[#1A1A1A]/80 leading-relaxed">
            <p className="font-medium text-[#1A1A1A]">
              <strong className="text-[#FF6500] font-bold">Clic&amp;Progress</strong>, représentée par <strong className="text-[#1A1A1A]">Soufiyan</strong> (Formateur &amp; Consultant indépendant), s&apos;engage à protéger la vie privée des utilisateurs de son site internet et de ses services de formation. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles.
            </p>
          </div>

          {/* 01. RESPONSABLE DU TRAITEMENT */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">01 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Responsable du traitement
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Responsable / Organisme
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">Clic&amp;Progress</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Représentant légal &amp; DPO
                </span>
                <span className="text-base font-semibold text-[#1A1A1A]">Soufiyan (Fondateur)</span>
              </div>
              <div className="border-b sm:border-b-0 pb-4 sm:pb-0 border-[#E8E5DF]/60">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  SIRET / SIREN
                </span>
                <span className="text-base font-mono font-semibold text-[#1A1A1A]">Disponible sur devis et convention de formation</span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/45 block mb-1">
                  Email DPO &amp; Contact
                </span>
                <a href="mailto:contact@clicandprogress.fr" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                  contact@clicandprogress.fr
                </a>
              </div>
            </div>
            <p className="mt-6 pt-6 border-t border-[#E8E5DF]/60 text-sm text-[#1A1A1A]/70">
              Pour toute question relative à la protection de vos données ou pour exercer vos droits RGPD, vous pouvez contacter notre responsable du traitement à l&apos;adresse email ci-dessus.
            </p>
          </div>

          {/* 02. DONNÉES PERSONNELLES COLLECTÉES */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">02 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Données personnelles collectées
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center font-bold font-mono text-sm mb-4">
                  A
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-3">Données d&apos;identification</h3>
                <ul className="space-y-2 text-sm text-[#1A1A1A]/75 list-disc list-inside">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l&apos;entreprise et fonction</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center font-bold font-mono text-sm mb-4">
                  B
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-3">Données de navigation</h3>
                <ul className="space-y-2 text-sm text-[#1A1A1A]/75 list-disc list-inside">
                  <li>Adresse IP &amp; Localisation</li>
                  <li>Type de navigateur et OS</li>
                  <li>Pages consultées &amp; durée</li>
                  <li>Données de cookies analytiques</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center font-bold font-mono text-sm mb-4">
                  C
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-3">Données contractuelles</h3>
                <ul className="space-y-2 text-sm text-[#1A1A1A]/75 list-disc list-inside">
                  <li>Formations &amp; coaching souscrits</li>
                  <li>Historique des communications</li>
                  <li>Dossiers de financement OPCO</li>
                  <li>Données de facturation / émargement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 03. FINALITÉS DU TRAITEMENT */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">03 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Finalités du traitement
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 mb-6">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <div className="space-y-4">
              {[
                { num: "1", title: "Exécution contractuelle", desc: "Gestion des prestations de formation continue, coaching, et accompagnement pédagogique." },
                { num: "2", title: "Relation client & Pédagogique", desc: "Réponse à vos demandes de contact, d'audit de compétences et de renseignements sur nos programmes." },
                { num: "3", title: "Communication", desc: "Envoi d'informations sur nos sessions de formation, webinaires et actualités (avec votre consentement préalable)." },
                { num: "4", title: "Amélioration de nos services", desc: "Analyse statistique et retours qualité (audits Qualiopi) pour améliorer nos parcours pédagogiques et notre site." },
                { num: "5", title: "Obligations légales & Qualiopi", desc: "Respect des obligations comptables, fiscales, de traçabilité des émargements et de conformité administrative." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#E8E5DF] shadow-sm">
                  <span className="w-8 h-8 rounded-lg bg-[#1A1A1A] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 04. BASE LÉGALE DU TRAITEMENT */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">04 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Base légale du traitement
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF]">
                <span className="font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider block mb-2">Base 01</span>
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1.5">L&apos;exécution d&apos;un contrat</h4>
                <p className="text-sm text-[#1A1A1A]/70">Pour la fourniture, la planification et l&apos;organisation de nos prestations de formation et d&apos;accompagnement.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF]">
                <span className="font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider block mb-2">Base 02</span>
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1.5">Votre consentement</h4>
                <p className="text-sm text-[#1A1A1A]/70">Pour l&apos;inscription à nos communications pédagogiques, newsletters ou le dépôt de cookies non strictement nécessaires.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF]">
                <span className="font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider block mb-2">Base 03</span>
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1.5">L&apos;intérêt légitime</h4>
                <p className="text-sm text-[#1A1A1A]/70">Pour l&apos;amélioration continue de nos programmes, la sécurité de notre plateforme et la prévention de la fraude.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF]">
                <span className="font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider block mb-2">Base 04</span>
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1.5">Les obligations légales</h4>
                <p className="text-sm text-[#1A1A1A]/70">Pour le respect des réglementations applicables aux organismes de formation, au code du travail et à la comptabilité.</p>
              </div>
            </div>
          </div>

          {/* 05. DURÉE DE CONSERVATION */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">05 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Durée de conservation
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E5DF] border-b border-[#E8E5DF] bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-wider font-bold">
                <div className="p-4 sm:p-5">Type de données</div>
                <div className="p-4 sm:p-5">Durée de conservation</div>
              </div>
              <div className="divide-y divide-[#E8E5DF]/60 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 items-center">
                  <span className="font-bold text-[#1A1A1A]">Données de contact (prospects)</span>
                  <span className="text-[#1A1A1A]/75 font-mono">3 ans à compter du dernier contact</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 items-center bg-[#FAF8F4]/50">
                  <span className="font-bold text-[#1A1A1A]">Données clients &amp; apprenants</span>
                  <span className="text-[#1A1A1A]/75 font-mono">5 ans après la fin de la relation contractuelle</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 items-center">
                  <span className="font-bold text-[#1A1A1A]">Données de facturation &amp; conventions</span>
                  <span className="text-[#1A1A1A]/75 font-mono">10 ans (obligation légale et comptable)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 items-center bg-[#FAF8F4]/50">
                  <span className="font-bold text-[#1A1A1A]">Cookies analytiques</span>
                  <span className="text-[#1A1A1A]/75 font-mono">13 mois maximum</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 items-center">
                  <span className="font-bold text-[#1A1A1A]">Données de navigation / logs techniques</span>
                  <span className="text-[#1A1A1A]/75 font-mono">12 mois</span>
                </div>
              </div>
            </div>
          </div>

          {/* 06. DESTINATAIRES DES DONNÉES */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">06 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Destinataires des données
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 mb-6">
              Vos données personnelles peuvent être transmises exclusivement aux destinataires suivants :
            </p>
            <ul className="space-y-3 text-base text-[#1A1A1A]/80 list-disc list-inside mb-6">
              <li><strong className="text-[#1A1A1A]">Personnel habilité de Clic&amp;Progress</strong> (Soufiyan et collaborateurs pédagogiques sous clause de confidentialité).</li>
              <li><strong className="text-[#1A1A1A]">Sous-traitants techniques</strong> (hébergement Vercel Inc., outils de visioconférence et d&apos;évaluation) dans le cadre de contrats strictement conformes au RGPD.</li>
              <li><strong className="text-[#1A1A1A]">Organismes partenaires &amp; Financeurs OPCO / France Travail</strong> (le cas échéant, avec votre accord dans le cadre de la prise en charge de vos formations).</li>
              <li><strong className="text-[#1A1A1A]">Autorités administratives ou judiciaires</strong> (uniquement sur requête légale ou audit officiel).</li>
            </ul>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-[#FF6500] border border-[#E8E5DF] text-sm text-[#1A1A1A] font-medium shadow-sm">
              <strong className="text-[#FF6500] font-bold">Important :</strong> Vos données ne sont <strong className="underline">jamais vendues, louées ou cédées</strong> à des tiers à des fins commerciales. Tout transfert hors UE (ex: hébergement cloud) fait l&apos;objet de garanties appropriées (clauses contractuelles types de la Commission Européenne).
            </div>
          </div>

          {/* 07. SÉCURITÉ DES DONNÉES */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">07 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Sécurité des données
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 mb-6">
              Clic&amp;Progress met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre toute violation, perte ou altération :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Chiffrement des communications de bout en bout (protocole SSL/TLS 256 bits)",
                "Accès restreint aux données par authentification renforcée et gestion des privilèges",
                "Hébergement sécurisé chez des prestataires certifiés ISO/IEC 27001 / SOC 2",
                "Sauvegardes régulières et procédures de récupération après incident",
                "Sensibilisation continue et audits de conformité sur les traitements de données",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4.5 rounded-2xl border border-[#E8E5DF]">
                  <svg className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-[#1A1A1A]/85">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 08. VOS DROITS */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">08 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Vos droits
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 mb-6">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez à tout moment des droits suivants sur vos données :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {[
                { right: "Droit d'accès", desc: "Obtenir confirmation du traitement et accéder à une copie de vos données." },
                { right: "Droit de rectification", desc: "Corriger ou mettre à jour des données inexactes, incomplètes ou obsolètes." },
                { right: "Droit à l'effacement", desc: "Demander la suppression de vos données personnelles (« droit à l'oubli »)." },
                { right: "Droit à la limitation", desc: "Limiter temporairement le traitement de vos données dans certaines circonstances." },
                { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et couramment utilisé." },
                { right: "Droit d'opposition", desc: "Vous opposer au traitement de vos données pour motifs légitimes ou de prospection." },
              ].map((r, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-[#E8E5DF] hover:border-[#FF6500]/50 transition-all shadow-sm">
                  <h4 className="text-base font-bold text-[#1A1A1A] mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6500]" />
                    {r.right}
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold mb-1">Pour exercer vos droits en toute simplicité :</h4>
                <p className="text-sm text-white/70">Nous vous répondrons dans un délai maximum de 30 jours (sur présentation d&apos;un justificatif d&apos;identité).</p>
              </div>
              <a
                href="mailto:contact@clicandprogress.fr?subject=Exercice%20de%20mes%20droits%20RGPD"
                className="px-6 py-3 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white font-extrabold text-xs uppercase tracking-wider transition-all shrink-0 shadow-md"
              >
                contact@clicandprogress.fr
              </a>
            </div>
          </div>

          {/* 09. RÉCLAMATION CNIL & CONTACT */}
          <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
            <div
              className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(circle at 80% 80%, rgba(255,101,0,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 space-y-8">
              
              <div>
                <div className="flex items-center gap-3 border-b border-white/15 pb-5 mb-6">
                  <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">09 —</span>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                  >
                    Réclamation auprès de la CNIL
                  </h2>
                </div>
                <p className="text-base text-white/80 leading-relaxed mb-4">
                  Si vous estimez, après nous avoir contactés, que le traitement de vos données n&apos;est pas conforme à la réglementation ou que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
                </p>
                <div className="bg-[#2E2E2E]/80 p-6 rounded-2xl border border-white/10 text-sm space-y-1 font-mono text-white/90">
                  <p className="font-bold text-[#FF6500]">CNIL — Commission Nationale de l&apos;Informatique et des Libertés</p>
                  <p>3 Place de Fontenoy — TSA 80715</p>
                  <p>75334 Paris Cedex 07</p>
                  <p className="pt-2">
                    Site officiel :{" "}
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#FF6500] hover:underline font-bold">
                      www.cnil.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>
                  Contact DPO / Protection des données
                </h3>
                <p className="text-sm text-white/75 mb-6">
                  Pour toute question relative à cette politique de confidentialité ou pour toute demande d&apos;assistance liée à vos données :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-[#2E2E2E]/80 p-5 rounded-2xl border border-white/10">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 block mb-1.5">
                      Email officiel DPO
                    </span>
                    <a href="mailto:contact@clicandprogress.fr" className="text-base font-bold text-[#FF6500] hover:underline block truncate">
                      contact@clicandprogress.fr
                    </a>
                  </div>
                  <div className="bg-[#2E2E2E]/80 p-5 rounded-2xl border border-white/10">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 block mb-1.5">
                      Organisme / Siège
                    </span>
                    <span className="text-base font-semibold text-white block truncate">
                      Clic&amp;Progress — Clermont-Ferrand, France
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* DATE DE MISE À JOUR EN BAS DE PAGE (SANS BOUTON RETOUR EN BAS) */}
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
