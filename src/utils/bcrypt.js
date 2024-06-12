import bcrypt from 'bcrypt'

const saltRounds = 10

export async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(
    password + process.env.APP_PASSWORD_SECRET_KEY,
    saltRounds
  )
  return hashedPassword
}

export async function verifyPassword(password, hashedPassword) {
  const r = await bcrypt.compare(
    password + process.env.APP_PASSWORD_SECRET_KEY,
    hashedPassword
  )
  return r
}
