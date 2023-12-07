import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'
import { Footer } from '@/src/components/footer'
import { Header } from '@/src/components/header'

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
        <Header />
        <div className='pb-10 pt-20'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
