import { NextResponse } from 'next/server'

// sign up with credentials
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req) {
  return NextResponse.json({ message: 'CREATE USER WITH CREDENTIAl' })
}
