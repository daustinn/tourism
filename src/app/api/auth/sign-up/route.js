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

    const userData = {
      email,
      password: hashedPassword,
      name,
      profile
    }

    const newUser = await User.create(userData)

    return NextResponse.json({ user: newUser })
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
  profile: z.string().url()
})
