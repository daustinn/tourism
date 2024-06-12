import { NextResponse } from 'next/server'

// sign in with credentials
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req) {
  return NextResponse.json({ message: 'SIGN AUTH WITH CREDENTIAl' })
}
