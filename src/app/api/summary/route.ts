import { NextResponse } from "next/server";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000";

export async function GET() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/summary`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch summary from FastAPI");
    }

    const summary = await response.json();
    return NextResponse.json(summary);
  } catch (error) {
    console.error("Error fetching summary:", error);
    return NextResponse.json(
      { error: "Failed to fetch summary" },
      { status: 500 }
    );
  }
}
