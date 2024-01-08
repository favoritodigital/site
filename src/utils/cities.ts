import { ComponentProps } from 'react'

interface StatesProps extends Pick<ComponentProps<'div'>, 'className'> {
  state: string
  label: string
}

export const states = [
  {
    state: 'PR',
    label: 'Paraná',
    className: 'top-20 md:top-16 md:right-36 right-8 absolute',
  },
  {
    state: 'SC',
    label: 'Santa Catarina',
    className: 'top-[10.5rem] md:top-40 right-[-4rem] md:right-0 absolute',
  },
  {
    state: 'RS',
    label: 'Rio Grande do Sul',
    className: 'top-[17rem] md:top-72 right-0 md:right-20 absolute',
  },
] as StatesProps[]

interface CitiesProps {
  state: string
  cities: string[]
}

export const cities = [
  {
    state: 'PR',
    cities: ['Cascavel'],
  },
  {
    state: 'SC',
    cities: [
      'Balneário Camboriú',
      'Blumenau',
      'Cricíuma e região',
      'Florianópolis e região',
      'Jaraguá do Sul e região',
      'Joinville',
    ],
  },
  {
    state: 'RS',
    cities: ['Lajeado e região', 'Porto Alegre e região'],
  },
] as CitiesProps[]
