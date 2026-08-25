import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "content.json");

// Helper to ensure the file and directory exist
async function ensureFileExists() {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      // File doesn't exist, create it with empty object
      await fs.writeFile(DATA_FILE, JSON.stringify({}, null, 2));
    }
  } catch (error) {
    console.error("Error ensuring file exists:", error);
  }
}

export async function GET() {
  try {
    await ensureFileExists();
    const fileContents = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureFileExists();
    const { key, value } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Read current data
    const fileContents = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(fileContents);

    // Update
    data[key] = value;

    // Write back
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to update content:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await ensureFileExists();
    const { key } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Read current data
    const fileContents = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(fileContents);

    // Delete the key
    delete data[key];

    // Write back
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to delete content:", error);
    return NextResponse.json({ error: "Failed to delete content" }, { status: 500 });
  }
}
