import { verify } from 'libs/jwt'
import { cookies } from 'next/headers'
import { User } from 'services/users'

const api_key = process.env.API_ROUTES_API_KEY

export function auth(req) {
  try {
    const { searchParams } = new URL(req.url)
    const key = searchParams.get('api_key')

    if (!key || key !== api_key) throw Error('Unauthorized')
  } catch (error) {
    throw Error(error)
  }
}

export async function authSession() {
  try {
    const store = cookies()
    const token = store.get('auth_token')
    const user = verify(token.value)
    if (!token) throw Error('Unauthorized')
    return await User.byId(user.id)
  } catch (error) {
    throw Error(error)
  }
}
