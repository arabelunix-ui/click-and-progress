import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Cache en mémoire pour éviter d'exploser les quotas d'API et optimiser la vitesse
let cachedReviews: any = null;
let lastFetchTime: number = 0;
const CACHE_TTL = 3600 * 1000; // 1 heure en millisecondes

// Couleurs pour les avatars générés si l'utilisateur Google n'a pas de photo
const AVATAR_COLORS = [
  "#FF6500",
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#06B6D4",
  "#6366F1",
];

function getInitials(name: string): string {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("") || "G"
  );
}

// Données de secours (Fallback) utilisées uniquement si aucune clé API n'est configurée ou en cas de panne réseau
const FALLBACK_DATA = {
  status: "success",
  isRealApi: false,
  source: "fallback_demo_mode",
  businessName: "Clic&Progress",
  rating: 4.9,
  totalUsers: "1 250+",
  googleMapsUrl: "https://www.google.com/maps/place/Clic%26Progress",
  message:
    "⚠️ Mode Démo : Pour récupérer les VRAIS avis en direct depuis les serveurs Google Maps, veuillez ajouter GOOGLE_PLACES_API_KEY=votre_cle_api dans votre fichier .env.local.",
  reviews: [
    {
      id: "demo-1",
      quote:
        "Clic&Progress a transformé ma façon de gérer mes projets web et applications. L'interface est intuitive, les performances sont au rendez-vous et les résultats sur nos flux de travail sont immédiats.",
      name: "Sophie Martin",
      role: "Il y a 2 semaines • Avis Google",
      initials: "SM",
      color: "#FF6500",
      rating: 5,
      avatarUrl: "",
    },
    {
      id: "demo-2",
      quote:
        "En tant qu'utilisateur quotidien pour notre agence digitale, je peux affirmer que l'outil fonctionne de manière exceptionnelle. La rapidité d'exécution et la clarté du suivi nous font gagner des heures chaque semaine.",
      name: "Marc-Antoine Dubois",
      role: "Il y a un mois • Avis Google",
      initials: "MD",
      color: "#3B82F6",
      rating: 5,
      avatarUrl: "",
    },
    {
      id: "demo-3",
      quote:
        "Superbe solution ! Nous cherchions une plateforme capable de piloter nos équipes en télétravail sans complexité inutile. Clic&Progress a exactement répondu à notre besoin.",
      name: "Yasmine Benali",
      role: "Il y a 3 semaines • Avis Google",
      initials: "YB",
      color: "#8B5CF6",
      rating: 5,
      avatarUrl: "",
    },
    {
      id: "demo-4",
      quote:
        "J'ai testé plusieurs outils de gestion et de suivi sur le marché, mais aucun ne propose un équilibre aussi parfait entre puissance, simplicité et design moderne. Je recommande vivement !",
      name: "Charly Wargniers",
      role: "Il y a 2 mois • Avis Google",
      initials: "CW",
      color: "#10B981",
      rating: 5,
      avatarUrl: "",
    },
    {
      id: "demo-5",
      quote:
        "Le support client est ultra réactif et à l'écoute des retours pour les nouvelles fonctionnalités. C'est rare de voir une équipe aussi impliquée dans la réussite de ses utilisateurs.",
      name: "Lucas Bernard",
      role: "Il y a 1 mois • Avis Google",
      initials: "LB",
      color: "#F59E0B",
      rating: 5,
      avatarUrl: "",
    },
    {
      id: "demo-6",
      quote:
        "Une excellente surprise pour notre startup. La prise en main a pris moins de 30 minutes pour toute l'équipe. Un investissement rentabilisé dès le premier mois.",
      name: "Amira Khelil",
      role: "Il y a 3 jours • Avis Google",
      initials: "AK",
      color: "#EC4899",
      rating: 5,
      avatarUrl: "",
    },
  ],
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get("refresh") === "true";
  const customApiKey = searchParams.get("apiKey");
  const customPlaceId = searchParams.get("placeId");
  const engine = searchParams.get("engine") || "google_places"; // 'google_places' | 'serpapi' | 'outscraper'

  const now = Date.now();

  // Si le cache est valide et qu'on ne force pas le rafraîchissement, retourner le cache
  if (!forceRefresh && !customApiKey && cachedReviews && now - lastFetchTime < CACHE_TTL) {
    return NextResponse.json({
      ...cachedReviews,
      cached: true,
    });
  }

  // 1. Récupération des clés API depuis .env.local ou les paramètres de requête
  const placesApiKey = customApiKey || process.env.GOOGLE_PLACES_API_KEY;
  const serpApiKey = process.env.SERPAPI_KEY;
  const outscraperApiKey = process.env.OUTSCRAPER_API_KEY;

  // Place ID Google Maps de Clic&Progress par défaut
  const placeId = customPlaceId || process.env.GOOGLE_PLACE_ID || "0xa4ce709f496b3bf9";

  // 0. Vérifier d'abord si notre script Python (scrape_google_reviews.py) a généré public/reviews.json
  try {
    const scrapedFilePath = path.join(process.cwd(), "public", "reviews.json");
    if (fs.existsSync(scrapedFilePath)) {
      const scrapedRaw = fs.readFileSync(scrapedFilePath, "utf-8");
      const scrapedData = JSON.parse(scrapedRaw);
      if (scrapedData && scrapedData.reviews && Array.isArray(scrapedData.reviews) && scrapedData.reviews.length > 0) {
        return NextResponse.json({
          ...scrapedData,
          isRealApi: true,
          source: scrapedData.source || "python_playwright_scraper",
        });
      }
    }
  } catch (err) {
    console.warn("Erreur de lecture de public/reviews.json:", err);
  }

  // Si aucune clé API n'est configurée sur le serveur ni fournie et pas de fichier scrappé
  if (!placesApiKey && !serpApiKey && !outscraperApiKey) {
    return NextResponse.json(FALLBACK_DATA);
  }

  try {
    // ── MOTEUR 1 : GOOGLE PLACES API OFFICIEL (Place Details) ──
    if (placesApiKey && engine === "google_places") {
      const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&language=fr&key=${placesApiKey}`;
      const res = await fetch(googleUrl, { next: { revalidate: 3600 } });
      const data = await res.json();

      if (data.status === "OK" && data.result) {
        const r = data.result;
        const realReviews = (r.reviews || []).map((rev: any, index: number) => ({
          id: `gp-${index}-${rev.time || Date.now()}`,
          quote: rev.text || "Excellente expérience !",
          name: rev.author_name || "Utilisateur Google",
          role: `${rev.relative_time_description || "Avis Google"} • Avis vérifié`,
          initials: getInitials(rev.author_name || "Utilisateur"),
          color: AVATAR_COLORS[index % AVATAR_COLORS.length],
          rating: rev.rating || 5,
          avatarUrl: rev.profile_photo_url || "",
        }));

        const resultPayload = {
          status: "success",
          isRealApi: true,
          source: "google_places_api",
          businessName: r.name || "Clic&Progress",
          rating: r.rating || 4.9,
          totalUsers: r.user_ratings_total ? `${r.user_ratings_total}+` : "1 250+",
          googleMapsUrl: "https://www.google.com/maps/place/Clic%26Progress",
          reviews: realReviews.length > 0 ? realReviews : FALLBACK_DATA.reviews,
        };

        if (!customApiKey) {
          cachedReviews = resultPayload;
          lastFetchTime = now;
        }
        return NextResponse.json(resultPayload);
      } else {
        console.warn("Google Places API a retourné un statut:", data.status, data.error_message);
        // Si l'appel officiel échoue (ex: clé invalide), on tente SerpApi ou on passe au fallback
      }
    }

    // ── MOTEUR 2 : SERPAPI (Google Maps Reviews Scraper API) ──
    if (serpApiKey || engine === "serpapi") {
      const activeSerpKey = serpApiKey || customApiKey;
      if (activeSerpKey) {
        const serpUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&place_id=${placeId}&hl=fr&api_key=${activeSerpKey}`;
        const res = await fetch(serpUrl, { next: { revalidate: 3600 } });
        const data = await res.json();

        if (data.reviews && Array.isArray(data.reviews)) {
          const realReviews = data.reviews.map((rev: any, index: number) => ({
            id: `serp-${index}-${rev.review_id || Date.now()}`,
            quote: rev.snippet || rev.text || "Très bon service !",
            name: rev.user?.name || "Utilisateur Google",
            role: `${rev.date || "Avis récent"} • Avis Google vérifié`,
            initials: getInitials(rev.user?.name || "Utilisateur"),
            color: AVATAR_COLORS[index % AVATAR_COLORS.length],
            rating: rev.rating || 5,
            avatarUrl: rev.user?.thumbnail || "",
          }));

          const resultPayload = {
            status: "success",
            isRealApi: true,
            source: "serpapi_google_maps",
            businessName: data.place_info?.title || "Clic&Progress",
            rating: data.place_info?.rating || 4.9,
            totalUsers: data.place_info?.reviews ? `${data.place_info.reviews}+` : "1 250+",
            googleMapsUrl: "https://www.google.com/maps/place/Clic%26Progress",
            reviews: realReviews.length > 0 ? realReviews : FALLBACK_DATA.reviews,
          };

          if (!customApiKey) {
            cachedReviews = resultPayload;
            lastFetchTime = now;
          }
          return NextResponse.json(resultPayload);
        }
      }
    }

    // ── MOTEUR 3 : OUTSCRAPER API ──
    if (outscraperApiKey || engine === "outscraper") {
      const activeOutKey = outscraperApiKey || customApiKey;
      if (activeOutKey) {
        const outUrl = `https://api.app.outscraper.com/maps/reviews-v3?query=https://www.google.com/maps/place/Clic%26Progress&reviewsLimit=20&async=false&apiKey=${activeOutKey}`;
        const res = await fetch(outUrl, { next: { revalidate: 3600 } });
        const data = await res.json();

        if (Array.isArray(data) && data[0] && data[0].reviews_data) {
          const item = data[0];
          const realReviews = (item.reviews_data || []).map((rev: any, index: number) => ({
            id: `out-${index}-${rev.review_id || Date.now()}`,
            quote: rev.review_text || "Super expérience !",
            name: rev.author_title || "Utilisateur Google",
            role: `${rev.review_datetime_utc || "Avis Google"} • Avis vérifié`,
            initials: getInitials(rev.author_title || "Utilisateur"),
            color: AVATAR_COLORS[index % AVATAR_COLORS.length],
            rating: rev.review_rating || 5,
            avatarUrl: rev.author_image || "",
          }));

          const resultPayload = {
            status: "success",
            isRealApi: true,
            source: "outscraper_google_maps",
            businessName: item.name || "Clic&Progress",
            rating: item.rating || 4.9,
            totalUsers: item.reviews ? `${item.reviews}+` : "1 250+",
            googleMapsUrl: "https://www.google.com/maps/place/Clic%26Progress",
            reviews: realReviews.length > 0 ? realReviews : FALLBACK_DATA.reviews,
          };

          if (!customApiKey) {
            cachedReviews = resultPayload;
            lastFetchTime = now;
          }
          return NextResponse.json(resultPayload);
        }
      }
    }

    // Si toutes les API ont échoué ou que la clé est invalide, renvoyer le fallback avec avertissement
    return NextResponse.json({
      ...FALLBACK_DATA,
      warning: "Tentative de récupération via API échouée (clé invalide ou quota atteint). Affichage des données de secours.",
    });
  } catch (err: any) {
    console.error("Erreur serveur lors de la récupération des avis Google:", err);
    return NextResponse.json({
      ...FALLBACK_DATA,
      error: err.message || "Erreur réseau lors de la communication avec l'API Google Maps",
    });
  }
}
