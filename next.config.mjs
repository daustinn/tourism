/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    REALTIME_DATABASE_URL: process.env.REALTIME_DATABASE_URL,
    API_ROUTES_API_KEY: process.env.API_ROUTES_API_KEY,
    APP_PASSWORD_SECRET_KEY: process.env.APP_PASSWORD_SECRET_KEY,
    APP_SECRET_JWT: process.env.APP_SECRET_JWT
  }
}

export default nextConfig
