import React from "react";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import FormationsPage from "@/app/formations/page";
import FormationDetailsPage from "@/app/formations/[slug]/page";
import BlogPage from "@/app/blog/page";
import BlogDetailsPage from "@/app/blog/[slug]/page";
import EditToolbar from "@/components/admin/EditToolbar";

// Define an interface for the Next 15 page props with Promise
interface EditPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function AdminEditPage(props: EditPageProps) {
  const params = await props.params;
  const slugArray = params.slug || [];
  
  // Basic router to reuse public pages inside the admin context
  
  // Home page: /admin/edit
  if (slugArray.length === 0) {
    return (
      <div className="relative pb-24">
        <EditToolbar pageName="Page d'accueil" />
        <HomePage />
      </div>
    );
  }

  // About page: /admin/edit/about
  if (slugArray[0] === "about") {
    return (
      <div className="relative pb-24">
        <EditToolbar pageName="À propos" />
        <AboutPage />
      </div>
    );
  }

  // Formations list page: /admin/edit/formations
  if (slugArray[0] === "formations" && slugArray.length === 1) {
    return (
      <div className="relative pb-24">
        <EditToolbar pageName="Formations" />
        <FormationsPage />
      </div>
    );
  }

  // Formation details page: /admin/edit/formations/[slug]
  if (slugArray[0] === "formations" && slugArray.length === 2) {
    const formationSlug = slugArray[1];
    return (
      <div className="relative pb-24">
        <EditToolbar pageName={`Détails : ${formationSlug}`} />
        <FormationDetailsPage params={Promise.resolve({ slug: formationSlug })} />
      </div>
    );
  }

  // Blog list page: /admin/edit/blog
  if (slugArray[0] === "blog" && slugArray.length === 1) {
    return (
      <div className="relative pb-24">
        <EditToolbar pageName="Blog" />
        <BlogPage />
      </div>
    );
  }

  // Blog details page: /admin/edit/blog/[slug]
  if (slugArray[0] === "blog" && slugArray.length === 2) {
    const blogSlug = slugArray[1];
    return (
      <div className="relative pb-24">
        <EditToolbar pageName={`Article : ${blogSlug}`} />
        <BlogDetailsPage params={Promise.resolve({ slug: blogSlug })} />
      </div>
    );
  }

  return (
    <div className="p-20 text-center text-white">
      <h1 className="text-2xl font-bold">Page non trouvée dans l'éditeur</h1>
    </div>
  );
}
