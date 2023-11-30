import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'

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
      <body className={lato.className}>{children}</body>
    </html>
  )
}