'use client'

import React, { memo, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { DownloadButton } from './DownloadButton'
import { MobileMenuButton } from './MobileMenuButton'
import { NavigationButton } from './NavigationButton'

export enum BadgePages {
  home = '/',
  beFranchisee = '/seja-franqueado',
  registerEstablishment = '/cadastre-seu-estabelecimento',
}

export const Header = memo(() => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMobileMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`flex h-20 items-center justify-between p-5 backdrop-blur bg-white bg-opacity-40 fixed w-screen z-20 ${
        !isMenuOpen && 'shadow-sm'
      }`}
    >
      <Image
        src='/assets/favorito.png'
        alt='favorito - a sua melhor experiência'
        width='165'
        height='40'
      />
      <div className='items-center gap-2 lg:flex hidden'>
        <NavigationButton
          active={pathname === BadgePages.home}
          href={BadgePages.home}
          label='Início'
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
      <MobileMenuButton active={isMenuOpen} onClick={handleMobileMenuClick} />
      <div
        className={`absolute top-0 right-0 w-screen bg-gradient-to-r from-other-200 to-other-100 z-30 lg:hidden transition-height duration-300 ease-in-out ${
          isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <div className='p-5'>
          <Image
            src='/assets/favorito-white.png'
            alt='favorito - a sua melhor experiência'
            width='165'
            height='40'
            className={`transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {isMenuOpen && (
          <div className='flex flex-col justify-center items-start w-full h-full pb-40 px-5 gap-5'>
            <NavigationButton
              active={pathname === BadgePages.home}
              href={BadgePages.home}
              label='Início'
              variant='mobile'
              onClick={handleMobileMenuClick}
            />
            <NavigationButton
              active={pathname === BadgePages.beFranchisee}
              href={BadgePages.beFranchisee}
              label='Seja um Franqueado'
              variant='mobile'
              onClick={handleMobileMenuClick}
            />
            <NavigationButton
              active={pathname === BadgePages.registerEstablishment}
              href={BadgePages.registerEstablishment}
              label='Cadastre seu Estabelecimento'
              variant='mobile'
              onClick={handleMobileMenuClick}
            />
          </div>
        )}
      </div>
    </div>
  )
})
