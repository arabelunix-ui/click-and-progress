import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EditableText from "@/components/EditableText";

// Define some known formations for static generation if needed (optional)
const KNOWN_SLUGS = [
  "tp-employe-commercial",
  "tp-conseiller-de-vente",
  "tp-assistant-manager-unite-marchande",
  "tp-manager-unite-marchande",
  "tp-conseiller-commercial",
  "tp-negociateur-technico-commercial",
  "bachelor-management-gestion-entreprises",
  "bachelor-responsable-developpement-commercial"
];

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  // Format slug to readable string for basic title
  const title = params.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title} — Formations Clic&Progress`,
    description: `Détails de la formation ${title}`,
  };
}

export function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({
    slug,
  }));
}

export default async function FormationDetailsPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  
  // Format slug for initial display
  const initialTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
              <EditableText contentKey={`formation-${slug}-badge`} initialText="Détail de la formation" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-black italic uppercase text-[#1A1A1A]">
              <EditableText contentKey={`formation-${slug}-title`} initialText={initialTitle} />
            </h1>
          </div>

          <EditableText
            as="p"
            multiline
            contentKey={`formation-${slug}-intro`}
            className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed block"
            initialText="Cette formation est conçue pour vous apporter toutes les compétences nécessaires à la réussite de votre projet professionnel. Alliant théorie et pratique, elle s'adapte à vos enjeux réels."
          />

          <div className="bg-[#F9F8F6] p-8 sm:p-12 border-[3px] border-[#1A1A1A]" style={{ boxShadow: "8px 8px 0px 0px #FAD7C4" }}>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>
              <EditableText contentKey={`formation-${slug}-obj-title`} initialText="Objectifs pédagogiques" />
            </h2>
            <EditableText
              as="p"
              multiline
              contentKey={`formation-${slug}-obj-desc`}
              className="text-[#1A1A1A]/70 mb-10 leading-relaxed block"
              initialText="À l'issue de cette formation, vous serez capable de maîtriser les fondamentaux de la vente et de la relation client, de gérer des situations complexes avec assurance, et d'optimiser votre performance commerciale."
            />

            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>
              <EditableText contentKey={`formation-${slug}-public-title`} initialText="Public visé" />
            </h2>
            <EditableText
              as="p"
              multiline
              contentKey={`formation-${slug}-public-desc`}
              className="text-[#1A1A1A]/70 leading-relaxed block"
              initialText="Professionnels en reconversion, salariés cherchant à monter en compétences, ou toute personne motivée souhaitant exceller dans le domaine commercial."
            />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
