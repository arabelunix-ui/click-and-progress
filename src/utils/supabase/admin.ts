import { NextResponse } from "next/server";
import { createClient } from "./server";

import { AUTHORIZED_EMAILS } from "./authorized-emails";

/**
 * À appeler au début de chaque route API qui MODIFIE des données.
 * Renvoie une réponse 401 si la personne n'est pas un administrateur connecté,
 * sinon null (la route peut continuer).
 */
export async function requireAdmin(): Promise<NextResponse | null> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !AUTHORIZED_EMAILS.includes(user.email ?? "")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    return null;
  } catch {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
}
