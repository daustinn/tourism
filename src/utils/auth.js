import { verify } from 'libs/jwt'
import { cookies } from 'next/headers'

export const getServerSession = async () => {
  const store = cookies()
  const token = store.get('auth_token')
  if (!token) return null
  return verify(token.value)
}
