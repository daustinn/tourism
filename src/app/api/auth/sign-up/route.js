import { sign } from 'libs/jwt'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { User } from 'services/users'
import { hashPassword } from 'utils/bcrypt'
import { z } from 'zod'

// sign up with credentials
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req) {
  try {
    const form = validate.safeParse(await req.json())
    if (!form.success) throw new Error(form.error.message)
    const { password, email, name, profile } = form.data

    const readUser = await User.get({ email })
    if (readUser) throw new Error('user_already_exists')

    const hashedPassword = await hashPassword(password)

    const number = Math.floor(Math.random() * 4) + 1

    const userData = {
      email,
      password: hashedPassword,
      name,
      profile: profile ?? `/default-profiles/${number}.png`
    }

    const newUser = await User.create(userData)

    const token = sign({
      email: newUser.email,
      id: newUser.id,
      profile: newUser.profile
    })

    const store = cookies(req)
    store.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    })

    return NextResponse.json({ user: newUser, token })
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
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3),
  profile: z.string().optional().nullable()
})
