import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'

import { FacebookPixelScript } from '@/utils/FacebookPixelScript'
import { GoogleAnalyticsScript } from '@utils/GoogleAnalyticsScript'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { CookiesMessage } from '@components/CookiesMessage'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { WhatsAppButton } from '@components/WhatsAppButton'

import { CookiesProvider } from '@contexts/CookiesContext'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const title = 'Encontre onde comer e beber | Favorito'
const description =
  'Descubra o melhor da gastronomia e lazer com o Favorito! Encontre a programação de bares e restaurantes, personalize sua busca, aproveite ofertas e curta cada momento.'

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Favorito',
  keywords: [
    'onde sair',
    'onde comer',
    'comer fora',
    'onde beber',
    'bares',
    'restaurantes',
    'favorito',
    'evento',
    'promoção',
    'desconto',
    'happy hour',
    'franquia',
    'franquia digital',
  ],
  openGraph: {
    title,
    description,
    locale: 'pt_BR',
    type: 'website',
    url: 'https://lp.favorito.digital/', // TODO retirar o lp.
    siteName: 'Favorito',
    images: 'https://lp.favorito.digital/favorito.png', // TODO retirar o lp.
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: 'https://lp.favorito.digital/favorito.png', // TODO retirar o lp.
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
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
