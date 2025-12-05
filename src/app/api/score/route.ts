import { NextResponse } from "next/server";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000";

export async function POST(request: Request) {
  const { word_id, sentence } = await request.json();

  if (!word_id || !sentence) {
    return NextResponse.json(
      { error: "Missing word_id or sentence in request body" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${FASTAPI_URL}/api/validate-sentence`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word_id, sentence }),
    });

    if (!response.ok) {
      throw new Error("Failed to validate sentence");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error validating sentence:", error);
    return NextResponse.json(
      { error: "Failed to validate sentence" },
      { status: 500 }
    );
  }
}
