import jwt from 'jsonwebtoken'
const SECRET = process.env.APP_SECRET_JWT

export const sign = (payload) => jwt.sign(payload, SECRET, { expiresIn: '30d' })

export const verify = (token) => {
  try {
    return jwt.verify(token, SECRET)
  } catch (error) {
    return null
  }
}
