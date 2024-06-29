import './globals.css'
import { Header } from 'ui/components/header'
import { Footer } from 'ui/components/footer'
import { SetServerSession } from './set-server-session'
import { Suspense } from 'react'

export const metadata = {
  title: 'Descubre Ayacucho, Lugares Históricos y Naturales',
  description:
    'Descubre Ayacucho, Lugares Históricos y Naturales, Turismo, Viajes y más',
  icons: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex font-sans flex-col min-h-svh">
        <Header />
        <Suspense fallback={<></>}>
          <SetServerSession />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  )
}
