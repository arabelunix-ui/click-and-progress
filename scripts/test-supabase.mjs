import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

// Charger manuellement .env.local
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    if (line.trim() && !line.startsWith("#") && line.includes("=")) {
      const [key, ...valParts] = line.split("=");
      const val = valParts.join("=").replace(/^["']|["']$/g, "").trim();
      process.env[key.trim()] = val;
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("=== VÉRIFICATION CONNEXION SUPABASE ===");
console.log("URL Supabase détectée :", url);
console.log("Clé Anon détectée     :", key && key !== "votre_cle_anon_public_supabase_ici" ? `${key.slice(0, 10)}...` : "[PLACEHOLDER NON REMPLACÉ : votre_cle_anon_public_supabase_ici]");

if (!url || !key || key === "votre_cle_anon_public_supabase_ici") {
  console.log("\n❌ ERREUR : La clé Supabase 'anon' n'a pas encore été renseignée dans .env.local !");
  console.log("Veuillez copier votre clé publique depuis le Dashboard Supabase (Settings -> API) et l'ajouter dans .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);

async function testConnection() {
  try {
    console.log("\n⏳ Test de ping vers l'API REST Supabase...");
    // Tenter une requête basique (ex: vérifier la session ou lister une table fictive pour vérifier la réponse réseau/auth)
    const { data, error, status, statusText } = await supabase.from("_test_connection_ping").select("*").limit(1);

    // Si le statut est 200 (table existante ou vide) ou 404/PGRST204 (table introuvable mais API authentifiée et fonctionnelle)
    if (status === 200 || status === 404 || (error && (error.code === "PGRST204" || error.code === "42P01"))) {
      console.log("✅ SUCCÈS : Connexion établie avec succès aux serveurs Supabase !");
      console.log(`Statut HTTP : ${status} (${statusText || "OK"})`);
      console.log("L'API Supabase a répondu correctement et votre clé est valide.");
    } else if (error && status === 401) {
      console.log("❌ ERREUR D'AUTHENTIFICATION (401) : La clé 'anon' fournie ne semble pas valide pour ce projet.");
      console.log("Détail de l'erreur :", error.message);
    } else {
      console.log("ℹ️ Réponse reçue de Supabase :");
      console.log("Statut :", status);
      console.log("Erreur éventuelle :", error);
      console.log("Données :", data);
    }
  } catch (err) {
    console.log("❌ ERREUR RÉSEAU CRITIQUE :");
    console.error(err.message || err);
  }
}

testConnection();
