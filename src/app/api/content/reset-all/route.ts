import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "content.json");

export async function POST() {
  try {
    // Overwrite the content.json file with an empty object
    await fs.writeFile(DATA_FILE, JSON.stringify({}, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to reset content" }, { status: 500 });
  }
}
