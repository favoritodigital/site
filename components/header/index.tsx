'use client'

import React, { memo, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { DownloadButton } from './DownloadButton'
import { NavigationButton } from './NavigationButton'

export enum BadgePages {
  home = '/',
  beFranchisee = '/seja-franqueado',
  registerEstablishment = '/cadastre-seu-estabelecimento',
}

export const Header = memo(() => {
  const pathname = usePathname()
  const [isMenuOpen, handleIsMenuOpen] = useState(false)

  return (
    <div className='flex h-20 items-center justify-between p-5 shadow-sm  backdrop-blur bg-white bg-opacity-40 fixed w-screen z-50'>
      <div>
        <Image
          src='/assets/favorito.png'
          alt='favorito - a sua melhor experiência'
          width='165'
          height='40'
        />
      </div>
      <div className='items-center gap-2 lg:flex hidden'>
        <NavigationButton
          active={pathname === BadgePages.home}
          href={BadgePages.home}
          label='Home'
        />
        <NavigationButton
          active={pathname === BadgePages.beFranchisee}
          href={BadgePages.beFranchisee}
          label='Seja um Franqueado'
        />
        <NavigationButton
          active={pathname === BadgePages.registerEstablishment}
          href={BadgePages.registerEstablishment}
          label='Cadastre seu Estabelecimento'
        />
        <DownloadButton />
      </div>
      <button
        onClick={() => handleIsMenuOpen(!isMenuOpen)}
        className='flex flex-col justify-center items-center lg:hidden'
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
        />
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
        />
      </button>
    </div>
  )
})
