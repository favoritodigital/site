'use client'

import React, { useState } from 'react'

import Image from 'next/legacy/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { DownloadButton } from './DownloadButton'
import { MenuButton } from './MenuButton'
import { NavigationButton } from './NavigationButton'

enum PagesBadge {
  home = '/',
  franchiseeLandingPage = '/seja-franqueado',
  establishmentLandingPage = '/cadastre-seu-estabelecimento',
}

export const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      data-menuopen={isMenuOpen}
      className='fixed z-20 flex h-20 w-screen items-center justify-between bg-white bg-opacity-40 p-5 backdrop-blur
        data-[menuopen=false]:shadow-sm
      '
    >
      <Link className='relative flex h-full w-40' href='/'>
        <Image
          src='/assets/favorito.svg'
          alt='Favorito - sua melhor experiência'
          objectFit='contain'
          layout='fill'
        />
      </Link>
      <div className='hidden items-center gap-2 lg:flex'>
        <NavigationButton
          active={pathname === PagesBadge.home}
          href={PagesBadge.home}
          label='Início'
        />
        <NavigationButton
          active={pathname === PagesBadge.franchiseeLandingPage}
          href={PagesBadge.franchiseeLandingPage}
          label='Seja um Franqueado'
        />
        <NavigationButton
          active={pathname === PagesBadge.establishmentLandingPage}
          href={PagesBadge.establishmentLandingPage}
          label='Cadastre seu Estabelecimento'
        />
        <DownloadButton />
      </div>
      <MenuButton active={isMenuOpen} onClick={handleMenuClick} />
      <div
        data-menuopen={isMenuOpen}
        className='transition-height absolute right-0 top-0 z-30 h-0 w-screen bg-gradient-to-br from-primaryDark-85 to-primaryLight-85 duration-300 ease-in-out 
        data-[menuopen=true]:h-screen data-[menuopen=false]:opacity-0 lg:hidden'
      >
        {isMenuOpen && (
          <>
            <div className='p-5'>
              <Link
                data-menuopen={isMenuOpen}
                className='relative flex h-10 w-40 transition-opacity duration-300 data-[menuopen=false]:opacity-0'
                href='/'
                onClick={handleMenuClick}
              >
                <Image
                  src='/assets/favorito-white.svg'
                  alt='Favorito - sua melhor experiência'
                  objectFit='contain'
                  layout='fill'
                />
              </Link>
            </div>

            <div className='flex h-full w-full flex-col items-start justify-center gap-5 px-5 pb-40'>
              <NavigationButton
                active={pathname === PagesBadge.home}
                href={PagesBadge.home}
                label='Início'
                variant='mobile'
                onClick={handleMenuClick}
              />
              <NavigationButton
                active={pathname === PagesBadge.franchiseeLandingPage}
                href={PagesBadge.franchiseeLandingPage}
                label='Seja um Franqueado'
                variant='mobile'
                onClick={handleMenuClick}
              />
              <NavigationButton
                active={pathname === PagesBadge.establishmentLandingPage}
                href={PagesBadge.establishmentLandingPage}
                label='Cadastre seu Estabelecimento'
                variant='mobile'
                onClick={handleMenuClick}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
