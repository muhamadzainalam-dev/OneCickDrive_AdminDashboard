import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const id = params.id;
    const data = await request.json();

    // On Vercel, we can't persist to SQLite.
    // The Dashboard already updates state on the client side.
    // Just return the updated object so the UI reflects the change.
    return NextResponse.json({ id: Number(id), ...data });
  } catch (err) {
    console.error("Update error:", err);
    return NextResponse.json(
      { error: "Failed to update listing" },
      { status: 500 },
    );
  }
}
