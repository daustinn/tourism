import { verify } from 'libs/jwt'
import { cookies } from 'next/headers'
import { User } from 'services/users'

const apikey = process.env.API_ROUTES_API_KEY

export function auth(req) {
  try {
    const token = req.headers.get('authorization')?.split(' ')[1]
    if (!token || token !== apikey) throw Error('Unauthorized')
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
