// sign with credentials

import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req) {
  return NextResponse.json({ message: 'POST' })
}

// get current auth user
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req) {
  return NextResponse.json({ message: 'GET' })
}
