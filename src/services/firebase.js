import 'server-only'

import { initializeApp } from 'firebase/app'
import { getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  projectId: 'tourism-c1e7b',
  clientEmail: 'firebase-adminsdk-hslby@tourism-c1e7b.iam.gserviceaccount.com',
  privateKey:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpia4aDfEfd3VL\niboI/J+AbLzipF8AHZSheOfkDB5sCg+v6glJOZEuExiZSoVEA9mkyvaC9+6kTk7H\nOViDabJN8oDrW6TxkJTcj9+iaokz2Ax8P6c9Hlb1ojzDuhycRubc6iXXw1+XvVzm\nsVyDDByw7lI5Y/TiujGJBi1tF8DQ4LRaRqJ0Bx3U8YQ2ZIT8GBMgTrWSArmGwD2h\nVuFL+ONDzB3gbVBrT2JA6WGhbtZ6Mfe6d3/RX6xP3Ltzn69GfGsOYlQRy+N959Te\nxl0ZQ3lVLq8qj4yuczhzHBNGvWXnj+PHpL9jb6fJjfaHiGuBhrgBdx1GGZM6um/E\nLddzWA+1AgMBAAECggEAEyB9E6PshuYJhejnI+HqVckOw0wTirYLoW78THJgkURO\nUkSnYQs9WZMedJbfc5WynYCncI2rrv5FrXzHA2ZujxQznrnzYSx0WvDhZFe8HGz8\ntZzRz5enbGVuEQ/jb+8g1x4UgGPimkIrI7yxSPiaGQz+GkrwYw7qDUE06UijgH0W\nJynaQ3kEdS+pGSwZyiDumvcA3k00GSC7z4sH3+3PSKwCVF8kAvXf5KmZJfUOrlzb\nI7ytrAklfuq64AaAIn64P5Ec8WkTQv8fN4ogJYsONBcWGYDX8RilDSph5PF5TZB+\n4tVkrMNqHFNxkk42Pi2GXCrTu61uxKURWuMMr4VwIQKBgQDl8+fnEgmYFTMpTbU6\nQ/h8AU/742lZcdrWUcuO0DrvrPklsdRtYM0z52A4I1d1vNh5QXKKnC9J0Nlo9Ov1\ndZTGsndb6yXlxTad9GYQTZyohobvXfrZUh7glTEi9xSa2Obdys5XgNbUcztKqgPS\n/eNbAkKUGGjgXkc3g6JNlVs81QKBgQC8veGwxJkSjGam2EQh5gA/ZYCxEUQTBgFJ\nWf0iM6qFKmyNVkS82PLM1s4dBHNeXuT8F+xRRhd6/7yRJYYljFrNF71aIrfMkge0\nxIDOKWFITm7j6tgUnMmTDeH4FOPTtAfZ5DXWY+5k4PsaQTmMAppnLaWIwRHLYXsE\nzXwVzAN3YQKBgQDJT5QvyKy5haW6fRsxHRxGg2egXuB1u6UXh5grOMS/2rBrfZk5\nAEvlKqQjwVzp6B+jV9aM3lrPxpTuu6xuwTc0FD1GLUCKPPKpqbJIh4mkR9GNcLsQ\n0kHR3wqbT6+sOEM03D10gYiRiSfZH6olZrtJi1r6B7yY4DB8uzK1tRGg2QKBgF08\nF17w3wTQomzM7GsqaPjoNThC5TPYhY4si+T3TMbXfCQdd3sqWFZjzhF7f1og2lDF\nqJFFZJf3+Lhipu+pc7lYfssl11GQ2YmsgExXGJ1VUWX5PqCACvs/ol6gQyLzDeXO\n2+F6H+tpT+FaUwkcyBUr8VequBWVo+VtdFx4GUZBAoGAVwJkPq6nckI+uR5O+YFz\nwe4b6dCjA0yBrwX/2hV3WaAxmApxcoo8k1ljx63kgMFNyA9hc0A32ibg3TnltC8y\nY0S14XA1ccBhSdlWwpDRlzAc/BQd11A71gpym58dksqP1KzEw1mC6+6P3ddoe5Ha\nO//zp4z8BQhPxsXioX0AKOk=\n-----END PRIVATE KEY-----\n'
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }

// import { cookies } from 'next/headers'

// import { initializeApp, getApps, cert } from 'firebase-admin/app'
// import { getAuth } from 'firebase-admin/auth'

// export const firebaseApp =
//   getApps().find((it) => it.name === 'firebase-admin-app') ||
//   initializeApp(
//     {
//       credential: cert(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT)
//     },
//     'firebase-admin-app'
//   )
// export const auth = getAuth(firebaseApp)

// export async function isUserAuthenticated(session = undefined) {
//   const _session = session ?? (await getSession())
//   if (!_session) return false

//   try {
//     const isRevoked = !(await auth.verifySessionCookie(_session, true))
//     return !isRevoked
//   } catch (error) {
//     console.log(error)
//     return false
//   }
// }

// export async function getCurrentUser() {
//   const session = await getSession()

//   if (!(await isUserAuthenticated(session))) {
//     return null
//   }

//   const decodedIdToken = await auth.verifySessionCookie(session)
//   const currentUser = await auth.getUser(decodedIdToken.uid)

//   return currentUser
// }

// async function getSession() {
//   try {
//     return cookies().get('__session')?.value
//   } catch (error) {
//     return undefined
//   }
// }

// export async function createSessionCookie(idToken, sessionCookieOptions) {
//   return auth.createSessionCookie(idToken, sessionCookieOptions)
// }

// export async function revokeAllSessions(session) {
//   const decodedIdToken = await auth.verifySessionCookie(session)

//   return await auth.revokeRefreshTokens(decodedIdToken.sub)
// }
