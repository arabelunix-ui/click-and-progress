import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('site_content')
      .select('key, value');

    if (error) {
      console.error("Supabase Error:", error.message);
      throw error;
    }

    const contentMap: Record<string, string> = {};
    if (data) {
      data.forEach(item => {
        contentMap[item.key] = item.value;
      });
    }

    return NextResponse.json(contentMap);
  } catch (error) {
    console.error("Error reading from Supabase:", error);
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { key, value } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    const supabase = await createClient();
    const { error } = await supabase
      .from('site_content')
      .upsert({ key, value }, { onConflict: 'key' });

    if (error) {
      console.error("Supabase Error:", error.message);
      throw error;
    }

    // Retourner les données mises à jour
    const { data: allData } = await supabase.from('site_content').select('key, value');
    const contentMap: Record<string, string> = {};
    if (allData) {
      allData.forEach(item => {
        contentMap[item.key] = item.value;
      });
    }

    return NextResponse.json({ success: true, data: contentMap });
  } catch (error) {
    console.error("Failed to update content in Supabase:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { key } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    const supabase = await createClient();
    const { error } = await supabase
      .from('site_content')
      .delete()
      .eq('key', key);

    if (error) {
      console.error("Supabase Error:", error.message);
      throw error;
    }

    // Retourner les données restantes
    const { data: allData } = await supabase.from('site_content').select('key, value');
    const contentMap: Record<string, string> = {};
    if (allData) {
      allData.forEach(item => {
        contentMap[item.key] = item.value;
      });
    }

    return NextResponse.json({ success: true, data: contentMap });
  } catch (error) {
    console.error("Failed to delete content from Supabase:", error);
    return NextResponse.json({ error: "Failed to delete content" }, { status: 500 });
  }
}
