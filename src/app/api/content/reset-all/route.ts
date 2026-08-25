import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const BLOB_FILENAME = "content.json";

export async function POST() {
  try {
    // Overwrite the blob with an empty object
    await put(BLOB_FILENAME, JSON.stringify({}, null, 2), { 
      access: "public", 
      addRandomSuffix: false 
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to reset content" }, { status: 500 });
  }
}
