import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EditableText from "@/components/EditableText";

/* ── Données centralisées des articles ── */
const ARTICLES = [
  {
    slug: "ia-generative-equipes-operationnelles",
    number: "01",
    category: "IA & Productivité",
    date: "Juin 2026",
    readTime: "4 min de lecture",
    title: "Comment l'IA générative transforme le quotidien des équipes opérationnelles",
    intro:
      "Découvrez pourquoi l'intégration de ChatGPT et Claude au travail ne nécessite aucun bagage technique pour faire gagner 5h par semaine à vos collaborateurs tout en renforçant leur créativité.",
    highlight: "Enjeux : Automatisation douce · Gain de temps · Zéro code",
    content: [
      {
        heading: "L'IA générative : une révolution sans code",
        body: "Contrairement à ce qu'on imagine souvent, l'IA générative n'est pas réservée aux ingénieurs. Des outils comme ChatGPT, Claude ou Mistral sont accessibles à tout collaborateur capable d'écrire un email. Le vrai levier, c'est l'apprentissage du \"prompting\" — l'art de poser les bonnes questions à la machine.",
      },
      {
        heading: "5 cas d'usage concrets pour vos équipes",
        body: "Rédaction et reformulation de documents internes, synthèse de réunions, réponses aux emails répétitifs, création de supports de présentation et analyse de données tabulaires simples : ces cinq usages représentent en moyenne 40% du temps de travail des collaborateurs opérationnels.",
      },
      {
        heading: "Comment Clic&Progress accompagne ce virage",
        body: "Nos formations d'une journée permettent à une équipe entière de passer de zéro à autonome sur les outils IA. Pas de théorie abstraite : on travaille directement sur vos vrais documents, vos vrais emails, vos vrais enjeux. L'ancrage est immédiat.",
      },
      {
        heading: "Les résultats mesurés chez nos clients",
        body: "Après six mois, nos partenaires observent un gain moyen de 4h à 6h par semaine et par collaborateur formé, une réduction significative des erreurs de rédaction et — surprise — une montée en engagement des équipes qui reprennent confiance en leur capacité d'adaptation.",
      },
    ],
  },
  {
    slug: "reussir-transition-professionnelle",
    number: "02",
    category: "Reconversion & Mindset",
    date: "Mai 2026",
    readTime: "6 min de lecture",
    title: "Franchir le cap : réussir sa transition professionnelle sans perdre confiance",
    intro:
      "Les 4 étapes psychologiques et méthodologiques pour donner un nouvel élan à son parcours de carrière, surmonter le syndrome de l'imposteur et s'adapter aux nouveaux métiers.",
    highlight: "Méthode : Accompagnement sur mesure · Posture active",
    content: [
      {
        heading: "Étape 1 — Accepter le deuil de l'ancien poste",
        body: "Toute transition commence par une perte. Le premier travail est de reconnaître ce qu'on laisse derrière soi : une identité professionnelle, des repères, parfois un salaire ou un statut. Ce deuil, quand il est conscientisé, devient un carburant plutôt qu'un frein.",
      },
      {
        heading: "Étape 2 — Cartographier ses compétences transférables",
        body: "La plupart des personnes en reconversion sous-estiment massivement leur portefeuille de compétences. Un commercial aguerri possède des aptitudes à la persuasion, à la gestion de l'incertitude et à la lecture des besoins humains qui sont hautement valorisées dans des dizaines de nouveaux métiers.",
      },
      {
        heading: "Étape 3 — Tester avant de plonger",
        body: "La reconversion ne se fait pas en un saut. Elle se prépare par des missions freelance, des formations courtes, des immersions professionnelles. Cette phase de test permet de valider l'intérêt pour un nouveau domaine avant tout engagement irréversible.",
      },
      {
        heading: "Étape 4 — Ancrer la nouvelle identité",
        body: "La dernière étape est souvent négligée : se raconter à nouveau. Savoir présenter son parcours de reconversion comme une cohérence et non comme une rupture. C'est là que le travail de coaching prend tout son sens — transformer la trajectoire en récit.",
      },
    ],
  },
  {
    slug: "apprendre-en-faisant-ludopedagogie",
    number: "03",
    category: "Ludopédagogie",
    date: "Avril 2026",
    readTime: "5 min de lecture",
    title: "Pourquoi on apprend 5 fois mieux en faisant (le secret de la pratique)",
    intro:
      "Analyse comparative des formations descendantes classiques face aux ateliers actifs de mise en situation concrète. L'ancrage mémoriel expliqué par les neurosciences.",
    highlight: "Impact : +85% d'ancrage mémoriel · Ateliers terrain",
    content: [
      {
        heading: "Le problème des formations classiques",
        body: "La formation descendante — un formateur qui parle, des apprenants qui écoutent et prennent des notes — produit en moyenne 5% de rétention à 30 jours. C'est le chiffre issu des études de la pyramide de l'apprentissage. Autrement dit, 95% du contenu est perdu.",
      },
      {
        heading: "Ce que les neurosciences nous apprennent",
        body: "L'apprentissage durable se produit lorsque l'apprenant est acteur de sa propre découverte. Le cerveau encode l'information beaucoup plus profondément lorsqu'il est confronté à un défi, une erreur à corriger ou une situation à résoudre. C'est la base de la pédagogie active.",
      },
      {
        heading: "La ludopédagogie : jouer pour ancrer",
        body: "Le jeu active simultanément les dimensions émotionnelle, cognitive et relationnelle de l'apprentissage. Quand on rit d'une erreur dans un jeu de rôle, on s'en souvient. Quand on résout un problème en groupe dans une simulation, on intègre les réflexes pour de bon.",
      },
      {
        heading: "Notre méthode en chiffres",
        body: "Sur nos sessions basées sur la mise en situation et l'atelier pratique, nous mesurons systématiquement un ancrage à 30 jours supérieur à 70%. Contre 5 à 10% en formation classique. Ce n'est pas magique — c'est méthodologique.",
      },
    ],
  },
];

/* ── Metadata dynamique ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} — Clic&Progress`,
    description: article.intro,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ARTICLE ── */}
      <div className="relative overflow-hidden bg-[#F9F8F6] border-b border-[#E8E5DF]">
        {/* Glow ambiance subtil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 60% 50%, rgba(255,101,0,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#FF6500] transition-colors mb-10"
          >
            <span>←</span> Retour aux articles
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#FF6500]/10 font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider">
              <EditableText initialText={article.category} contentKey={`blog-art-${slug}-cat`} />
            </span>
            <span className="text-xs text-[#1A1A1A]/40 font-mono"><EditableText initialText={article.date} contentKey={`blog-art-${slug}-date`} /></span>
            <span className="text-xs text-[#1A1A1A]/40 font-mono">· <EditableText initialText={article.readTime} contentKey={`blog-art-${slug}-time`} /></span>
          </div>

          {/* Number + Title */}
          <div className="flex items-start gap-5 mb-8">
            <span className="font-mono text-5xl sm:text-7xl font-black text-[#FF6500]/15 leading-none shrink-0 select-none">
              {article.number}
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              <EditableText initialText={article.title} contentKey={`blog-art-${slug}-title`} />
            </h1>
          </div>

          {/* Intro */}
          <EditableText
            as="p"
            multiline
            initialText={article.intro}
            contentKey={`blog-art-${slug}-intro`}
            className="text-lg sm:text-xl text-[#1A1A1A]/65 leading-relaxed border-l-2 border-[#FF6500] pl-5 block"
          />

          {/* Highlight */}
          <div className="mt-6 inline-block px-4 py-2 rounded-xl bg-white border border-[#E8E5DF] text-xs font-mono text-[#1A1A1A]/60 shadow-sm">
            💡 <EditableText initialText={article.highlight} contentKey={`blog-art-${slug}-highlight`} />
          </div>
        </div>
      </div>

      {/* ── CONTENU ARTICLE ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {article.content.map((section, i) => (
          <div key={i}>
            {/* Séparateur avec numéro */}
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-sm font-black text-[#FF6500]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 h-px bg-[#E8E5DF]" />
            </div>
            <h2
              className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 pl-8"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              <EditableText initialText={section.heading} contentKey={`blog-art-${slug}-sec-${i}-heading`} />
            </h2>
            <EditableText
              as="p"
              multiline
              initialText={section.body}
              contentKey={`blog-art-${slug}-sec-${i}-body`}
              className="text-base sm:text-lg text-[#1A1A1A]/60 leading-relaxed pl-8 block"
            />
          </div>
        ))}
      </div>

      {/* ── CTA BAS DE PAGE ── */}
      <div className="bg-[#1A1A1A] mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FF6500] mb-4">
            <EditableText initialText="Passons à l'action" contentKey="blog-det-cta-badge" />
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            <EditableText initialText="Envie d'aller plus loin avec Clic&Progress ?" contentKey="blog-det-cta-title" />
          </h2>
          <EditableText
            as="p"
            multiline
            initialText="Chaque article est tiré de cas réels vécus en formation. Échangeons sur ce que nous pouvons faire ensemble."
            contentKey="blog-det-cta-desc"
            className="text-white/50 mb-8 max-w-lg mx-auto block"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white font-bold uppercase tracking-widest text-xs transition-all shadow-[0_4px_24px_rgba(255,101,0,0.4)]"
            >
              <span><EditableText initialText="Échanger sur votre projet" contentKey="blog-det-cta-btn" /></span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/blog"
              className="text-sm text-white/40 hover:text-white/70 transition-colors font-mono"
            >
              ← Voir tous les articles
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

