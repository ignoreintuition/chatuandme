import { NextResponse } from "next/server";
import { questions } from "./question";
export async function GET(request: Request) {
  const randomSeed = Math.floor(Math.random() * questions.length);
  return NextResponse.json(questions[randomSeed]);
}
