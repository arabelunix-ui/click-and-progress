import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export const dynamic = 'force-dynamic';

const BLOB_FILENAME = "content.json";

async function getRemoteData() {
  try {
    const { blobs } = await list({ prefix: BLOB_FILENAME });
    // Find the exact match or use the first one if we used addRandomSuffix: false
    const blob = blobs.find(b => b.pathname === BLOB_FILENAME);
    
    if (blob) {
      const response = await fetch(blob.url, { cache: "no-store" });
      return await response.json();
    }
  } catch (e) {
    console.error("Error reading from Vercel Blob:", e);
  }
  return {};
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
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { key, value } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    const data = await getRemoteData();
    data[key] = value;
    await saveRemoteData(data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to update content:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { key } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    const data = await getRemoteData();
    delete data[key];
    await saveRemoteData(data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to delete content:", error);
    return NextResponse.json({ error: "Failed to delete content" }, { status: 500 });
  }
}
