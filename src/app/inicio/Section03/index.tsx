'use client'

import { useState } from 'react'

import Image from 'next/legacy/image'
import Link from 'next/link'

import { cities, states } from '@utils/cities'

import { StateSelection } from '@components/StateSelection'

export const Section03 = () => {
  const [active, setActive] = useState('SC')

  const handleSelectState = (state: string) => {
    setActive(state)
  }

  return (
    <section className='flex justify-center bg-white px-10 pb-16 xl:pt-16'>
      <div className='flex w-full max-w-7xl flex-col justify-center gap-10 lg:flex-row'>
        <div className='flex flex-col items-center sm:grid sm:grid-cols-[22rem_1fr] md:grid-cols-[32rem_1fr]'>
          <div className='relative ml-[-2rem] h-screen max-h-[30rem] w-[18rem] md:w-[32rem]'>
            <Image
              src='/assets/images/map.svg'
              alt='Mapa de estados onde o Favorito está disponível'
              objectFit='contain'
              layout='fill'
            />
            {states.map(state => (
              <StateSelection
                key={state.state}
                active={active === state.state}
                handleClick={() => handleSelectState(state.state)}
                label={state.label}
                className={state.className}
              />
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {cities.map(state => (
              <ul
                key={state.state}
                data-active={active === state.state}
                className='flex cursor-pointer list-disc flex-col justify-center gap-2 rounded-3xl border-2 border-gray-300 px-10 py-4 opacity-50 data-[active=true]:border-none data-[active=true]:bg-gradient-to-tr data-[active=true]:from-primaryDark-400 data-[active=true]:to-primaryLight-400 data-[active=true]:px-[calc(2.5rem+2px)] data-[active=true]:py-[calc(1rem+2px)] data-[active=true]:text-white data-[active=true]:opacity-100'
                onClick={() => handleSelectState(state.state)}
              >
                {state.cities.map(city => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='flex w-full flex-col justify-center gap-6 lg:max-w-[25rem]'>
          <h2 className='w-full text-center text-2xl lg:text-left lg:text-3xl'>
            Já pensou em faturar mais de{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text text-center font-semibold text-transparent'>
              R$ 15.000,00
            </span>{' '}
            todos os meses, com um time dedicado para te ajudar a ter sucesso?
          </h2>
          <p className='text-center lg:text-left lg:text-lg'>
            Conheça nosso modelo de negócio inovador e leve o Favorito para a sua cidade!
          </p>
          <p className='text-center lg:text-left lg:text-lg'>
            Está buscando uma oportunidade de empreender com baixo risco? Estamos aqui para te
            apoiar nessa jornada!
          </p>
          <div className='flex w-full justify-center lg:justify-start'>
            <Link
              href='#'
              className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
            >
              Quero saber mais!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
