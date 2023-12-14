import { Metadata } from 'next'

import { Section01 } from './Section01 Teste'
import { Section02 } from './Section02'
import { Section03 } from './Section03'
import { Section04 } from './Section04'
import { Section05 } from './Section05'

export const metadata: Metadata = {
  title: 'Seja Franqueado | Favorito',
}

export default function FranchiseeLandingPage() {
  return (
    <>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </>
  )
}
