import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const store = cookies(req)
    store.delete('auth_token')
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 400
      }
    )
  }
}
