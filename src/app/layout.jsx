import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/ui/components/header'
import { Footer } from '@/ui/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Descubre Ayacucho, Lugares Históricos y Naturales',
  description:
    'Descubre Ayacucho, Lugares Históricos y Naturales, Turismo, Viajes y más'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
