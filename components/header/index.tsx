'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

import { Button } from './Button'

export enum BadgePages {
  home = '/',
  beFranchisee = '/seja-franqueado',
  registerEstablishment = '/cadastre-seu-estabelecimento',
}

export const Header = React.memo(() => {
  const router = useRouter()
  const pathname = usePathname()

  const onRouteChange = (route: string) => {
    router.push(route)
  }

  return (
    <div className='flex h-20 items-center justify-between p-5 shadow-sm  backdrop-blur bg-white bg-opacity-40 fixed w-screen'>
      <div>
        <Image
          src='/assets/favorito.png'
          alt='favorito - a sua melhor experiência'
          width='165'
          height='40'
        />
      </div>
      <div className='flex items-center gap-2'>
        <Button
          active={pathname === BadgePages.home}
          onClick={() => onRouteChange(BadgePages.home)}
        >
          Home
        </Button>
        <Button
          active={pathname === BadgePages.beFranchisee}
          onClick={() => onRouteChange(BadgePages.beFranchisee)}
        >
          Seja um Franqueado
        </Button>
        <Button
          active={pathname === BadgePages.registerEstablishment}
          onClick={() => onRouteChange(BadgePages.registerEstablishment)}
        >
          Cadastre seu Estabelecimento
        </Button>
      </div>
    </div>
  )
})
