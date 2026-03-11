import listings from "@/data/listing";

export async function GET() {
  try {
    return Response.json(listings);
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
