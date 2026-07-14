import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente et d'Utilisation (CGVU) — Clic&Progress",
  description:
    "Conditions Générales de Vente et d'Utilisation des prestations de formation, conseil et accompagnement de Clic&Progress (Soufiyan).",
};

export default function CgvuPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />

      {/* ══ HERO BANNÈRE CGVU (RESPECT DESIGN SYSTEM : #F9F8F6 + BADGE AVEC LIGNES) ══ */}
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
            Conditions Générales (CGVU)
            <span className="w-5 h-px bg-[#FF6500]" />
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Conditions Générales de <span className="text-[#FF6500]">Vente &amp; d&apos;Utilisation</span>
          </h1>

          <p className="text-base sm:text-lg text-[#1A1A1A]/65 leading-relaxed max-w-2xl mx-auto font-normal">
            Applicables à l&apos;ensemble des prestations de formation, d&apos;accompagnement et de conseil dispensées par Clic&amp;Progress (Soufiyan).
          </p>
        </div>
      </section>

      {/* ══ CORPS DU DOCUMENT (CARTES ÉPURÉES & TYPOGRAPHIE SYSTEM) ══ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 01. OBJET */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">01 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Objet
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Les présentes CGVU, conformément à l&apos;article L 441-6 du Code de Commerce, ont pour objet de fixer les conditions dans lesquelles <strong className="text-[#1A1A1A]">Clic&amp;Progress</strong> fournit à ses clients des prestations de formation, d&apos;accompagnement et de services.
              </p>
              <p>
                Les présentes Conditions Générales de Vente et d&apos;Utilisation (CGVU) s&apos;appliquent à toutes les prestations fournies par l&apos;organisme <strong className="text-[#1A1A1A]">Clic&amp;Progress</strong>, représenté par <strong className="text-[#1A1A1A]">Soufiyan</strong> (Formateur &amp; Consultant indépendant basé à Clermont-Ferrand, France).
              </p>
              <p>
                Clic&amp;Progress intervient dans les domaines de la formation continue (présentielle, à distance ou mixte), du conseil en compétences, de l&apos;accompagnement aux outils d&apos;intelligence artificielle (IA), de l&apos;efficacité professionnelle et du développement des compétences pour le compte des organisations ou des particuliers.
              </p>
              <p>
                Les prestations s&apos;adressent à des clients professionnels, personnes physiques ou morales de droit privé ou de droit public, prestataires de services, entrepreneurs, salariés, demandeurs d&apos;emploi en reconversion ou organismes partenaires, en France et à l&apos;étranger.
              </p>
              <p>
                Le Client déclare être en capacité de représenter sa propre entreprise ou avoir les mandats nécessaires pour engager l&apos;entité pour laquelle il contracte. Il déclare être majeur et capable de contracter en vertu de la loi.
              </p>
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#FF6500] border border-[#E8E5DF] text-[#1A1A1A] font-medium shadow-sm my-4">
                Les programmes pédagogiques, processus de formation, méthodes d&apos;apprentissage active 80/20, supports de cours ainsi que la marque et le logo <strong className="text-[#FF6500] font-bold">Clic&amp;Progress</strong> sont les propriétés exclusives de Clic&amp;Progress et de son fondateur Soufiyan.
              </div>
              <p>
                La participation à un programme, une formation ou l&apos;utilisation d&apos;un service proposé par Clic&amp;Progress vaut acceptation par le Client des présentes Conditions Générales de Vente et d&apos;Utilisation sans réserve.
              </p>
            </div>
          </div>

          {/* 02. CHAMP D'APPLICATION ET CONDITIONS PARTICULIÈRES */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">02 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Champ d&apos;application
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 mb-6">
              Les présentes CGVU s&apos;appliquent à l&apos;ensemble des prestations dispensées par Clic&amp;Progress :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Formations professionnelles continues (en présentiel, à distance / visio ou mixtes)",
                "Conseil opérationnel et accompagnement à la transformation digitale / IA",
                "Actions de formation en situation de travail (AFEST) ou sur mesure",
                "Coaching individuel ou collectif et mentorat de compétences",
                "Interventions en sous-traitance / marque blanche pour organismes de formation (OF)",
                "Conception et vente de contenus pédagogiques, ateliers et outils pratiques",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4.5 rounded-2xl border border-[#E8E5DF] shadow-sm">
                  <svg className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#1A1A1A]/70 italic">
              Toute commande, validation de devis ou signature de convention implique l&apos;adhésion pleine et entière aux présentes CGVU.
            </p>
          </div>

          {/* 03. COMMANDE ET CONTRACTUALISATION */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">03 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Commande et contractualisation
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Les présentes CGVU peuvent être complétées par les Conditions Particulières prévues dans les documents transmis par Clic&amp;Progress aux Clients (devis, convention de formation professionnelle, contrat d&apos;accompagnement ou cahier des charges).
              </p>
              <p>
                En cas de contradiction entre les Conditions Particulières (convention de formation signée) et les présentes CGVU, les dispositions des Conditions Particulières priment. En cas de contradiction avec tout document émis par le Client, notamment ses conditions générales d&apos;achat, les présentes CGVU priment.
              </p>
              <p>
                Clic&amp;Progress se réserve le droit de modifier les présentes CGVU à tout moment. Les CGVU en vigueur sont celles accessibles en ligne sur le site internet au moment de la commande.
              </p>
              <p>
                Le Client reconnaît expressément que Clic&amp;Progress a pleinement rempli envers lui son devoir général d&apos;information et de conseil en application des articles 1112 et suivants du Code Civil, lui permettant de s&apos;assurer de l&apos;adéquation de la formule et du parcours pédagogique sélectionnés à ses besoins propres.
              </p>
            </div>
          </div>

          {/* 04. MODALITÉS FINANCIÈRES */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">04 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Modalités financières
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Les tarifs des prestations et formations sont exprimés en euros hors taxes (ou nets de taxes selon le régime de TVA applicable mentionné sur le devis ou la convention). Ils sont fixés de manière forfaitaire (par session, journée, heure ou programme complet).
              </p>
              <p>
                Sauf exception prévue dans la convention, le prix des prestations ne comprend pas les frais directs engagés par le Client ou les stagiaires : frais de déplacement, de transport, d&apos;hébergement, de repas ou d&apos;achat de matériels/logiciels tiers.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm space-y-3">
                <h4 className="font-bold text-[#1A1A1A] text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6500]" />
                  Conditions de règlement &amp; Acomptes
                </h4>
                <p className="text-sm text-[#1A1A1A]/75">
                  Sauf disposition contraire spécifiée dans la convention :
                </p>
                <ul className="list-disc list-inside text-sm text-[#1A1A1A]/75 space-y-1 pl-2">
                  <li>Un acompte minimal de <strong className="text-[#1A1A1A]">30 %</strong> peut être exigé à la signature de la convention ou confirmation de la commande.</li>
                  <li>Le solde est payable à réception de facture ou à l&apos;issue de la formation, ou selon l&apos;échéancier convenu (ou prise en charge OPCO/France Travail validée).</li>
                  <li>Les factures sont payables à 30 jours date de facture, par virement bancaire sécurisé.</li>
                </ul>
              </div>
              <p className="text-sm text-[#1A1A1A]/70">
                Tout retard de paiement donnera lieu au calcul d&apos;intérêts de retard applicables dès le premier jour suivant la date d&apos;échéance, ainsi qu&apos;à une indemnité forfaitaire pour frais de recouvrement de <strong className="text-[#1A1A1A]">40 €</strong> conformément aux articles L441-6 et L441-10 du Code de commerce.
              </p>
            </div>
          </div>

          {/* 05. ANNULATION ET REPORT */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">05 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Annulation et report
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 mb-6">
              Toute demande d&apos;annulation ou de report doit être formulée par écrit (par email à <span className="font-mono font-bold text-[#FF6500]">contact@clicandprogress.fr</span>). Les conditions applicables sont les suivantes :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm">
                <span className="inline-block px-3 py-1 rounded-lg bg-[#FF6500]/10 text-[#FF6500] font-mono text-xs font-bold mb-3">
                  + de 15 jours
                </span>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">Annulation anticipée</h3>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Annulation ou report formulé à plus de 15 jours calendaires avant le début de la prestation : <strong className="text-green-600 font-bold">Sans frais</strong> (remboursement intégral de l&apos;acompte s&apos;il a été versé).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm">
                <span className="inline-block px-3 py-1 rounded-lg bg-[#1A1A1A] text-white font-mono text-xs font-bold mb-3">
                  Jusqu&apos;à 48h
                </span>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">Report de session</h3>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Report possible jusqu&apos;à 48h avant la prestation : <strong className="text-[#1A1A1A] font-bold">Sans frais</strong>, sauf si des frais logistiques non remboursables (déplacements, location de salle) ont déjà été engagés.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm">
                <span className="inline-block px-3 py-1 rounded-lg bg-red-500/10 text-red-600 font-mono text-xs font-bold mb-3">
                  - de 48h
                </span>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">Annulation tardive</h3>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Annulation ou absence non justifiée à moins de 48 heures du début de la formation : facturation forfaitaire de <strong className="text-red-600 font-bold">50 %</strong> du montant total prévu (au titre du dédit contractuel).
                </p>
              </div>
            </div>
          </div>

          {/* 06. ENGAGEMENTS ET RESPONSABILITÉ DE CLIC&PROGRESS */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">06 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Engagements &amp; responsabilité de Clic&amp;Progress
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Les prestations de formation et d&apos;accompagnement dispensées par Clic&amp;Progress mettent à sa charge une <strong className="text-[#1A1A1A] font-bold">obligation de moyens</strong>. Clic&amp;Progress s&apos;engage à fournir les moyens pédagogiques, techniques et humains adéquats, et à apporter tous les soins nécessaires à la qualité de ses interventions.
              </p>
              <p>
                Dans les séances collectives ou ateliers en direct (présentiel ou distanciel), l&apos;intérêt général pédagogique du groupe prime sur l&apos;intérêt particulier d&apos;un participant. Le formateur est libre d&apos;organiser les temps de parole pour assurer le dynamisme et l&apos;atteinte des objectifs pédagogiques de l&apos;ensemble du groupe.
              </p>
              <p>
                Clic&amp;Progress ne pourra être tenu pour responsable des interruptions de service liées aux réseaux de télécommunication (internet, serveurs de visioconférence tiers) ou des problèmes techniques matériels propres au Client.
              </p>
              <p>
                En aucun cas, la responsabilité de Clic&amp;Progress ne pourra être engagée au titre de dommages indirects ou immatériels, tels que la perte de chiffre d&apos;affaires, de bénéfice, d&apos;exploitation ou de chance. Si la responsabilité de Clic&amp;Progress était retenue pour une faute prouvée, l&apos;indemnisation globale serait formellement plafonnée au montant effectif payé par le Client pour la prestation concernée.
              </p>
            </div>
          </div>

          {/* 07. ENGAGEMENTS ET RESPONSABILITÉ DU CLIENT */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">07 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Engagements &amp; responsabilité du Client
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Le Client (ainsi que les stagiaires/apprenants inscrits) s&apos;engage à participer activement au bon déroulement de la formation, en respectant les horaires, les consignes pédagogiques, et en faisant preuve de courtoisie envers le formateur et les autres participants.
              </p>
              <p>
                Le Client s&apos;engage à :
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#1A1A1A]/75 bg-white p-6 rounded-2xl border border-[#E8E5DF]">
                <li>Fournir les informations et les prérequis techniques/matériels nécessaires aux sessions en ligne ou en salle.</li>
                <li>Respecter scrupuleusement la réglementation en vigueur, les règles d&apos;assiduité et d&apos;émargement (indispensables en cas de financement OPCO/Qualiopi).</li>
                <li>Ne pas diffuser, enregistrer ou partager sans autorisation les supports de cours ou les coordonnées des autres participants.</li>
                <li>S&apos;interdire tout propos incitant à la haine, diffamatoire, discriminatoire ou contraire aux bonnes mœurs lors des sessions et échanges.</li>
              </ul>
            </div>
          </div>

          {/* 08. SOUS-TRAITANCE ET EXTERNALISATION */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">08 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Sous-traitance &amp; Marque blanche
              </h2>
            </div>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
              Soufiyan / Clic&amp;Progress intervient régulièrement en qualité de sous-traitant ou expert en marque blanche pour le compte d&apos;organismes de formation (OF) partenaires. Dans ce cadre :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E8E5DF]">
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1">Confidentialité &amp; Loyauté</h4>
                <p className="text-sm text-[#1A1A1A]/70">Respect strict des exigences de neutralité et de non-sollicitation directe des clients finaux de l&apos;organisme donneur d&apos;ordre.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E8E5DF]">
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1">Conformité Qualiopi</h4>
                <p className="text-sm text-[#1A1A1A]/70">Respect scrupuleux du référentiel qualité (évaluation des acquis, émargements, conformité pédagogique) selon le cahier des charges de l&apos;OF.</p>
              </div>
            </div>
          </div>

          {/* 09. PROPRIÉTÉ INTELLECTUELLE */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">09 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Propriété intellectuelle des supports
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                L&apos;intégralité des contenus, supports pédagogiques, diaporamas, vidéos, cas pratiques, codes sources, prompts IA et outils remis lors des formations par Clic&amp;Progress sont protégés par le Code de la propriété intellectuelle et le droit d&apos;auteur.
              </p>
              <p>
                Le Client et les apprenants bénéficient uniquement d&apos;un droit d&apos;usage personnel, non exclusif et non cessible des supports de cours remis dans le cadre de leur apprentissage.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] shadow-sm text-sm text-[#1A1A1A]/80">
                <strong className="text-red-600 font-bold block mb-1">Restrictions strictes :</strong> Il est formellement interdit de reproduire, modifier, distribuer, revendre, sous-licencier ou exploiter commercialement tout ou partie des modules et supports pédagogiques de Clic&amp;Progress sans autorisation écrite expresse.
              </div>
            </div>
          </div>

          {/* 10. DONNÉES PERSONNELLES & CONFIDENTIALITÉ */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">10 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Données personnelles (RGPD) &amp; Droit à l&apos;image
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Clic&amp;Progress collecte et traite les données personnelles nécessaires à l&apos;inscription, au suivi pédagogique et à la gestion administrative des formations (émargements, attestations) dans le strict respect de notre <Link href="/politique-de-confidentialite" className="text-[#FF6500] font-bold hover:underline">Politique de Confidentialité</Link> et du RGPD (UE 2016/679).
              </p>
              <p>
                Chaque partie s&apos;engage au secret professionnel et à la plus stricte confidentialité sur les informations techniques, stratégiques ou organisationnelles auxquelles elle aurait accès durant les échanges et les missions.
              </p>
              <p className="text-sm text-[#1A1A1A]/70">
                <strong className="text-[#1A1A1A]">Enregistrements &amp; Visioconférences :</strong> Dans le cadre de certaines sessions en direct ou d&apos;entraînements pratiques, des enregistrements peuvent être réalisés à des fins purement pédagogiques pour les participants de la session. Tout apprenant peut s&apos;opposer à la captation de son image en désactivant sa caméra si cela n&apos;entrave pas la validation des acquis.
              </p>
            </div>
          </div>

          {/* 11. DROIT APPLICABLE ET LITIGES */}
          <div className="bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-[#E8E5DF] pb-5">
              <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">11 —</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Droit applicable &amp; Attribution de juridiction
              </h2>
            </div>
            <div className="space-y-4 text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Les présentes Conditions Générales de Vente et d&apos;Utilisation sont régies par le <strong className="text-[#1A1A1A]">droit français</strong>.
              </p>
              <p>
                En cas de différend ou de contestation relatif à l&apos;interprétation ou à l&apos;exécution des présentes CGVU, les parties s&apos;efforceront en premier lieu de rechercher une solution amiable. À défaut d&apos;accord amiable dans un délai de un (1) mois, le litige sera porté devant les tribunaux compétents du ressort de <strong className="text-[#1A1A1A]">Clermont-Ferrand</strong>.
              </p>
            </div>
          </div>

          {/* 12. CONTACT & COORDONNÉES */}
          <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
            <div
              className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(circle at 80% 80%, rgba(255,101,0,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/15 pb-5">
                <span className="font-mono text-xs font-extrabold text-[#FF6500] tracking-widest uppercase">12 —</span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                >
                  Contact &amp; Assistance
                </h2>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                Pour toute question relative aux présentes Conditions Générales de Vente et d&apos;Utilisation ou pour obtenir un devis personnalisé :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#2E2E2E]/80 p-5 rounded-2xl border border-white/10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 block mb-1.5">
                    Email officiel
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
