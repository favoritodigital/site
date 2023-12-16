import Image from 'next/legacy/image'
import Link from 'next/link'

import { IconLink } from './IconLink'

import { PagesBadge } from '@utils/pagesBadge'

export const Footer = () => {
  return (
    <div className='flex grid-cols-3 flex-col place-items-center gap-10 bg-tertiary-400 py-6 text-white lg:grid lg:h-80 lg:p-0'>
      <div className='flex w-72 flex-col gap-2'>
        <Link className='relative h-12 w-52' href={PagesBadge.home}>
          <Image
            src='/assets/favorito.svg'
            alt='Favorito - encontre onde comer e beber'
            objectFit='contain'
            layout='fill'
          />
        </Link>
        <span className='pt-6 text-sm'>CNPJ 46.230.468/0001-73</span>
        <span className='text-sm'>
          &copy; {new Date().getFullYear()} Favorito. Todos direitos reservados.
        </span>
        <div className='flex items-end gap-1 text-sm'>
          <span>Desenvolvido por</span>
          <Link className='relative h-4 w-12' href='https://gondin.cc/' target='_blank'>
            <Image
              src='/assets/gondin.svg'
              alt='Gondin - consultoria criativa'
              objectFit='contain'
              layout='fill'
            />
          </Link>
        </div>
      </div>
      <div className='flex w-72 flex-col gap-2 text-lg'>
        <Link className='w-fit hover:text-primaryLight-400' href={PagesBadge.home}>
          Início
        </Link>
        <Link className='w-fit hover:text-primaryLight-400' href={PagesBadge.franchiseeLandingPage}>
          Seja um Franqueado
        </Link>
        <Link
          className='w-fit hover:text-primaryLight-400'
          href={PagesBadge.establishmentLandingPage}
        >
          Cadastre seu Estabelecimento
        </Link>
        <Link className='w-fit hover:text-primaryLight-400' href={PagesBadge.whoWeAre}>
          Quem Somos
        </Link>
      </div>
      <div className='flex w-72 flex-col gap-8'>
        <div className='flex gap-4'>
          <IconLink
            icon='/assets/icons/instagram.svg'
            href='https://www.instagram.com/favorito.digital'
            title='Instagram'
            target='_blank'
          />
          <IconLink
            icon='/assets/icons/tiktok.svg'
            href='https://www.tiktok.com/@favorito.digital'
            title='TikTok'
            target='_blank'
          />
          <IconLink
            icon='/assets/icons/youtube.svg'
            href='https://www.linkedin.com/company/favoritodigital'
            title='YouTube'
            target='_blank'
          />
          <IconLink
            icon='/assets/icons/github.svg'
            href='https://github.com/favoritodigital/site'
            title='GitHub'
            target='_blank'
          />
          <IconLink
            icon='/assets/icons/linkedin.svg'
            href='https://www.youtube.com/@favorito.digital'
            title='LinkedIn'
            target='_blank'
          />
        </div>
        <div className='flex flex-col gap-2 text-lg '>
          <Link
            className='w-fit hover:text-primaryLight-400'
            href={PagesBadge.termsOfUse}
            target='_blank'
          >
            Termos de Uso
          </Link>
          <Link
            className='w-fit hover:text-primaryLight-400'
            href={PagesBadge.privacyPolicy}
            target='_blank'
          >
            Política de Privacidade
          </Link>
        </div>
        <div className='flex gap-6'>
          <Link href='https://softville.org.br/' target='_blank'>
            <div className='relative h-20 w-32'>
              <Image
                src='/assets/softville.svg'
                alt='Softville - escola de negócios'
                objectFit='contain'
                layout='fill'
              />
            </div>
          </Link>
          <Link href='https://wow.ac/' target='_blank'>
            <div className='relative h-20 w-32'>
              <Image
                src='/assets/wow.svg'
                alt='WOW - Aceleradora de Startups'
                objectFit='contain'
                layout='fill'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
