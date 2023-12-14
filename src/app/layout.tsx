import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'

import { FacebookPixelScript } from '@/utils/FacebookPixelScript'
import { GoogleAnalyticsScript } from '@utils/GoogleAnalyticsScript'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { CookiesMessage } from '@/components/CookiesMessage'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import { CookiesProvider } from '@/contexts/CookiesContext'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Favorito: sua melhor experiência',
  description: 'Descubra seu novo local Favorito!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <CookiesProvider>
          <Header />
          <div>{children}</div>
          <Footer />
          <GoogleAnalyticsScript />
          <FacebookPixelScript />
          <Analytics />
          <SpeedInsights />
          <WhatsAppButton />
          <CookiesMessage />
        </CookiesProvider>
      </body>
    </html>
  )
}
