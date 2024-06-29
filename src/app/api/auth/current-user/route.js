import { NextResponse } from 'next/server'

// sign in with credentials
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req) {
  try {
    const token = req.cookies.auth_token
    return NextResponse.json(token)
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 400
      }
    )
  }
}
