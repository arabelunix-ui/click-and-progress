import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "À propos de moi — Soufiyan · Clic&Progress",
  description:
    "Découvrez Soufiyan, formateur indépendant basé à Clermont-Ferrand, fondateur de Clic&Progress. Reconversion, IA, commerce et soft skills — une pédagogie vivante et directement applicable.",
};

const VALEURS = [
  {
    num: "01",
    titre: "Authenticité",
    texte:
      "Je ne vends pas des formations. Je partage des méthodes que j'ai testées, appliquées et perfectionnées dans des contextes réels — parfois difficiles.",
  },
  {
    num: "02",
    titre: "Pratique avant tout",
    texte:
      "Chaque session contient plus d'ateliers que de slides. On apprend en faisant, en se trompant, en recommençant — et c'est là que les réflexes s'installent vraiment.",
  },
  {
    num: "03",
    titre: "Respect du rythme",
    texte:
      "Certains avancent vite, d'autres ont besoin de temps. J'adapte le rythme à chaque groupe sans jamais sacrifier la profondeur pour la vitesse.",
  },
  {
    num: "04",
    titre: "Résultats mesurables",
    texte:
      "À la fin de chaque intervention, on évalue les acquis ensemble — pas avec un QCM, mais avec des situations réelles où chacun démontre ce qu'il sait faire.",
  },
];

const PARCOURS = [
  { annee: "2024 – Auj.", titre: "Fondateur · Clic&Progress", detail: "Formations sur-mesure IA, soft skills & reconversion pour PME, grands groupes et particuliers." },
  { annee: "2021 – 2024", titre: "Formateur & Consultant indépendant", detail: "Accompagnement de transitions professionnelles et formation en techniques de vente pour plusieurs organismes certifiés." },
  { annee: "2018 – 2021", titre: "Responsable commercial · Secteur B2B", detail: "Management d'une équipe de 8 commerciaux, développement de comptes stratégiques et formation interne des nouveaux entrants." },
  { annee: "2015 – 2018", titre: "Chargé de formation · Organisme national", detail: "Conception et animation de modules pédagogiques pour des publics en reconversion et demandeurs d'emploi." },
];

const CHIFFRES = [
  { valeur: "600+", label: "Apprenants formés" },
  { valeur: "12+", label: "Secteurs d'activité" },
  { valeur: "4.9/5", label: "Satisfaction moyenne" },
  { valeur: "48h", label: "Délai de réponse max." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />

      {/* ══ HERO — PRÉSENTATION PURE SANS BOUTONS ══ */}
      <section className="relative bg-[#F9F8F6] border-b border-[#E8E5DF] overflow-hidden">
        <div
          className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,101,0,0.07) 0%, transparent 65%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Texte de description */}
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-4 block">
              <span className="w-5 h-px bg-[#FF6500]" />
              À propos de moi
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Bonjour, je suis{" "}
              <span className="text-[#FF6500]">Soufiyan</span>
            </h1>
            <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-6 max-w-xl font-normal">
              Formateur indépendant basé à Clermont-Ferrand, j&apos;aide les équipes et les
              individus à progresser là où ça compte vraiment — pas dans des salles de cours
              théoriques, mais dans la réalité concrète de leur travail et de leurs ambitions.
            </p>
            <p className="text-sm text-[#1A1A1A]/55 leading-relaxed max-w-xl font-sans">
              Ma philosophie repose sur une pédagogie vivante, active et exigeante, conçue pour générer des réflexes durables dès le premier jour.
            </p>
          </div>

          {/* Photo de portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[420px] sm:w-[380px] sm:h-[460px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF6500]/10 to-transparent border border-[#FF6500]/20 translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#E8E5DF] shadow-2xl">
                <Image
                  src="/portrait-hero.png"
                  alt="Soufiyan — Clic&Progress"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#E8E5DF]">
                <p className="text-xs font-mono uppercase tracking-widest text-[#FF6500] font-bold">Clermont-Ferrand</p>
                <p className="text-sm font-semibold text-[#1A1A1A] mt-0.5">France entière · Visio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHIFFRES CLÉS ══ */}
      <section className="border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#E8E5DF]">
            {CHIFFRES.map((c) => (
              <div key={c.label} className="px-8 py-12 text-center">
                <p
                  className="text-4xl sm:text-5xl font-black text-[#FF6500] mb-2"
                  style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                >
                  {c.valeur}
                </p>
                <p className="text-sm text-[#1A1A1A]/50 font-medium">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MON HISTOIRE ══ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Texte descriptif */}
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
                Mon histoire
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8 leading-tight"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                Ce qui m&apos;a amené à créer Clic&amp;Progress
              </h2>
              <div className="space-y-5 text-[#1A1A1A]/60 text-[15px] leading-relaxed">
                <p>
                  J&apos;ai passé des années à observer des formations qui ne servaient à rien.
                  Des présentations PowerPoint interminables, des théories déconnectées du terrain,
                  des apprenants qui repartaient avec un classeur… et aucun réflexe nouveau.
                </p>
                <p>
                  Moi-même formé dans ce système, j&apos;ai décidé de faire autrement quand j&apos;ai
                  commencé à former des équipes commerciales. À chaque session, je remplaçais
                  un slide par un atelier. Et les résultats ont été immédiatement différents.
                </p>
                <p>
                  Clic&amp;Progress est né de cette conviction simple : <strong className="text-[#1A1A1A] font-semibold">on apprend en faisant</strong>.
                  Pas en écoutant. Pas en prenant des notes. En mettant les mains dans le cambouis
                  — dans un cadre bienveillant, rigoureux et adapté à la réalité de chaque équipe.
                </p>
              </div>
            </div>

            {/* Vidéo LinkedIn portrait */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E5DF] shadow-md bg-white w-full flex justify-center">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7349094815520694272?compact=1"
                height="399"
                width="504"
                frameBorder="0"
                allowFullScreen
                title="Soufiyan — Portrait LinkedIn"
                className="w-full max-w-[504px]"
                style={{ minHeight: 399 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section className="py-20 sm:py-28 bg-[#F9F8F6] border-y border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
              Ce qui me guide
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Mes valeurs pédagogiques
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALEURS.map((v) => (
              <div
                key={v.num}
                className="bg-white rounded-2xl p-7 border border-[#E8E5DF] hover:border-[#FF6500]/30 hover:shadow-[0_8px_32px_rgba(255,101,0,0.08)] transition-all duration-300 group"
              >
                <span className="font-mono text-4xl font-black text-[#FF6500]/15 group-hover:text-[#FF6500]/25 transition-colors block mb-5 leading-none">
                  {v.num}
                </span>
                <h3
                  className="text-lg font-bold text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                >
                  {v.titre}
                </h3>
                <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARCOURS ══ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
              Parcours
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Mon chemin jusqu&apos;ici
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#E8E5DF]" />
            <div className="space-y-10">
              {PARCOURS.map((p, i) => (
                <div key={i} className="flex gap-8 relative">
                  <div className="relative flex-shrink-0 mt-1">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 ${i === 0 ? "bg-[#FF6500] border-[#FF6500]" : "bg-white border-[#C8C5BB]"}`} />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF6500] block mb-1.5">
                      {p.annee}
                    </span>
                    <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{p.titre}</h3>
                    <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDÉO DE PRÉSENTATION ══ */}
      <section className="py-20 sm:py-28 bg-[#F9F8F6] border-t border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
              En vidéo
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Découvrez Clic&amp;Progress en action
            </h2>
          </div>
        </div>
        <VideoSection />
      </section>

      {/* ══ CLÔTURE DESCRIPTIVE SANS BOUTON ══ */}
      <section className="bg-[#1A1A1A] py-16 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
            Philosophie
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Une approche authentique et humaine
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Je mets mon expérience et ma passion de la transmission au service de votre évolution professionnelle, dans une démarche directe, concrète et profondément bienveillante.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
