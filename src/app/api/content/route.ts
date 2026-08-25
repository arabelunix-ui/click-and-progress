import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export const dynamic = 'force-dynamic';

async function getRemoteData() {
  try {
    const { blobs } = await list({ prefix: "content-" });
    if (blobs.length > 0) {
      // Sort by uploadedAt descending
      blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
      const latestBlob = blobs[0];
      const response = await fetch(`${latestBlob.url}?t=${Date.now()}`, { cache: "no-store" });
      return await response.json();
    }
  } catch (e) {
    console.error("Error reading from Vercel Blob:", e);
  }
  return {};
}

async function saveRemoteData(data: any) {
  const timestamp = Date.now();
  const filename = `content-${timestamp}.json`;
  
  // Upload the new file
  await put(filename, JSON.stringify(data, null, 2), { 
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
