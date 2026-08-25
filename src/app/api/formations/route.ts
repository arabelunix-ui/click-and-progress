import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

const BLOB_FILENAME = "formations.json";

// Default initial data mapping to what we had in FormationsList
const INITIAL_DATA = [
  { id: 1, slug: "tp-employe-commercial", level: "N3", titre: "TP Employé Commercial", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 2, slug: "tp-conseiller-de-vente", level: "N3", titre: "TP Conseiller de Vente", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 3, slug: "tp-assistant-manager-unite-marchande", level: "N4", titre: "TP Assistant Manager d'Unité Marchande", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 4, slug: "tp-manager-unite-marchande", level: "N5", titre: "TP Manager d'Unité Marchande", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 5, slug: "tp-conseiller-commercial", level: "N4", titre: "TP Conseiller Commercial", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 6, slug: "tp-negociateur-technico-commercial", level: "N5", titre: "TP Négociateur Technico-Commercial", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 7, slug: "bachelor-management-gestion-entreprises", level: "N6", titre: "Bachelor Management & Gestion des Entreprises", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
  { id: 8, slug: "bachelor-responsable-developpement-commercial", level: "N6", titre: "Bachelor Responsable du Développement Commercial", categorie: "Commerce", duree: "1 an", public: "Tous", statut: "Actif", inscrits: 0 },
];

async function getRemoteData() {
  try {
    const { blobs } = await list({ prefix: BLOB_FILENAME });
    const blob = blobs.find(b => b.pathname === BLOB_FILENAME);
    
    if (blob) {
      const response = await fetch(blob.url, { cache: "no-store" });
      return await response.json();
    }
  } catch (e) {
    console.error("Error reading from Vercel Blob:", e);
  }
  return INITIAL_DATA;
}

async function saveRemoteData(data: any) {
  await put(BLOB_FILENAME, JSON.stringify(data, null, 2), { 
    access: "public", 
    addRandomSuffix: false 
  });
}

export async function GET() {
  try {
    const data = await getRemoteData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(INITIAL_DATA, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newFormation = await request.json();
    const data = await getRemoteData();

    // Auto generate slug if not provided
    if (!newFormation.slug && newFormation.titre) {
      newFormation.slug = newFormation.titre
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }

    if (newFormation.id) {
      // Update
      const index = data.findIndex((f: any) => f.id === newFormation.id);
      if (index >= 0) {
        data[index] = { ...data[index], ...newFormation };
      } else {
        data.push(newFormation);
      }
    } else {
      // Create
      newFormation.id = Date.now();
      data.push(newFormation);
    }

    await saveRemoteData(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save formation" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    let data = await getRemoteData();
    
    data = data.filter((f: any) => f.id !== id);

    await saveRemoteData(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete formation" }, { status: 500 });
  }
}
