import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST() {
  try {
    const supabase = await createClient();
    
    // Supprimer tous les enregistrements de la table
    const { error } = await supabase
      .from('site_content')
      .delete()
      .neq('key', ''); // Cheat pour tout supprimer

    if (error) {
      console.error("Supabase Reset Error:", error.message);
      throw error;
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to reset content in Supabase:", error);
    return NextResponse.json({ error: "Failed to reset content" }, { status: 500 });
  }
}
