'use client'

import { useContext } from 'react'

import Image from 'next/legacy/image'
import Link from 'next/link'

import { PagesBadge } from '@/utils/pagesBadge'

import { CookiesContext } from '@contexts/CookiesContext'

export const CookiesMessage = () => {
  const { cookiesIsEnabled, setCookiesIsEnabled } = useContext(CookiesContext)

  return (
    !cookiesIsEnabled && (
      <div className='fixed bottom-4 left-4 right-4 z-50 max-w-sm rounded-3xl border-2 border-border-50 bg-white p-5'>
        <div className='pb-5'>
          <p>
            Utilizamos cookies para que você tenha a melhor experiência em nosso site. Para saber
            mais acesse nossa página de{' '}
            <Link
              href={PagesBadge.privacyPolicy}
              className='font-bold underline hover:text-primaryLight-400'
              target='_blank'
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>

        <div className='flex items-end justify-between'>
          <button
            onClick={setCookiesIsEnabled}
            className='rounded-xl bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 px-3 py-1 font-bold text-white hover:bg-tertiary-400 hover:from-inherit hover:to-inherit'
          >
            Entendi
          </button>
          <Image src='/assets/icons/cookie.svg' alt='close icon' height={32} width={32} />
        </div>
      </div>
    )
  )
}
