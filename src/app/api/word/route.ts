import { NextResponse } from "next/server";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000";

export async function GET() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/word`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch word from FastAPI");
    }

    const word = await response.json();
    return NextResponse.json({ data: word });
  } catch (error) {
    console.error("Error fetching word:", error);
    return NextResponse.json(
      { error: "Failed to fetch word" },
      { status: 500 }
    );
  }
}
