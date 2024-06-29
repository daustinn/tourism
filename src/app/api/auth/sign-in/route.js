import { NextResponse } from 'next/server'
import { Auth } from 'services/auth'
import { z } from 'zod'
import { cookies } from 'next/headers'

// sign in with credentials
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req) {
  try {
    const form = validate.safeParse(await req.json())
    if (!form.success) throw new Error('invalid_form')
    const { email, password } = form.data

    const sucess = await Auth.login({
      email,
      password
    })

    const store = cookies(req)
    const token = sucess.token
    store.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    })

    return NextResponse.json(sucess)
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 400
      }
    )
  }
}

const validate = z.object({
  email: z.string(),
  password: z.string()
})
