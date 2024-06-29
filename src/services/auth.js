import { verifyPassword } from 'utils/bcrypt'
import { User } from './users'
import { sign } from 'libs/jwt'

class Auth {
  static async login({ email, password }) {
    const finded = await User.get({ email })
    if (!finded) throw new Error('user_not_found')
    const verified = await verifyPassword(password, finded.password)
    if (!verified) throw new Error('invalid_password')

    const token = sign({
      email: finded.email,
      id: finded.id,
      profile: finded.profile,
      name: finded.name
    })
    return {
      token,
      user: finded
    }
  }
}

export { Auth }
