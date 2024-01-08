import { Metadata } from 'next'

import { Section01 } from './Section01'
import { Section02 } from './Section02'
import { Section03 } from './Section03'
import { Section04 } from './Section04'
import { Section05 } from './Section05'
import { Section06 } from './Section06'

export const metadata: Metadata = {
  title: 'Cadastre seu Estabelecimento | Favorito',
}

export default function EstablishmentLandingPage() {
  return (
    <>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </>
  )
}
