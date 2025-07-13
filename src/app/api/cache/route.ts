import { NextResponse } from "next/server"

export async function GET() {
  const r = await fetch("https://dog.ceo/api/breeds/image/random")
  const data = await r.json()
  return NextResponse.json(data)
}