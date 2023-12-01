'use client'

import React from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { DownloadButton } from './DownloadButton'
import { NavigationButton } from './NavigationButton'

export enum BadgePages {
  home = '/',
  beFranchisee = '/seja-franqueado',
  registerEstablishment = '/cadastre-seu-estabelecimento',
}

export const Header = React.memo(() => {
  const pathname = usePathname()

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
      <div className='flex items-center gap-2'>
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
    </div>
  )
})
