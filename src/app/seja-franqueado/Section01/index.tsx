import Image from 'next/legacy/image'
import Link from 'next/link'

import { Balloon } from '@/components/Balloon'
import { KnowMore } from '@/components/KnowMore'

export const Section01 = () => {
  return (
    <section className='flex items-center justify-center bg-background-400 pb-16 pt-32 sm:pt-36'>
      <div className='flex w-full max-w-7xl grid-cols-2 px-10 sm:px-20 lg:grid lg:h-[40rem]'>
        <div className='relative flex h-full w-full flex-col items-center justify-center rounded-3xl bg-white p-10 lg:rounded-e-none'>
          <div className='flex flex-col gap-6'>
            <h1 className='max-w-md text-2xl md:text-3xl'>
              Você tem a oportunidade de{' '}
              <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
                conectar pessoas aos seus novos locais favoritos
              </span>{' '}
              e faturar alto por isso.
            </h1>
            <h2 className='text-1xl max-w-md font-semibold md:text-2xl'>Parece bom? E é mesmo!</h2>
            <p className='text-md max-w-md md:text-lg'>
              Nossos licenciados são muito bem remunerados por assumir a responsabilidade de
              apresentar ao público a melhor experiência do seu dia e ajudar a melhorar o movimento
              de centenas de estabelecimentos.
            </p>
            <Link
              href='#form'
              className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
            >
              Quero saber mais!
            </Link>
          </div>
          <div className='absolute bottom-[-5rem] right-[50%] z-10 h-24 w-24 translate-x-[50%] sm:bottom-[-7rem] sm:h-32 sm:w-32 lg:bottom-[-4rem] lg:right-[-4rem] lg:translate-x-0'>
            <KnowMore className='h-24 w-24 lg:h-32 lg:w-32' />
          </div>
          <div className='absolute left-[-3rem] top-[-3rem] hidden flex-col gap-2 sm:flex'>
            <div className='flex gap-2'>
              <Balloon variant='br' color='secondary' size='20' />
              <Balloon variant='bl' color='outlineTertiary' size='20' />
            </div>
            <div className='flex'>
              <Balloon variant='tr' color='outlineTertiary' size='20' />
            </div>
          </div>
          <div className='absolute right-[-2rem] top-[-2rem] flex flex-col gap-2 sm:hidden'>
            <div className='flex gap-2'>
              <Balloon variant='br' color='outlinePrimaryLight' size='16' />
              <Balloon variant='bl' color='secondary' size='16' />
            </div>
            <div className='flex justify-end'>
              <Balloon variant='tl' color='gradient' size='16' />
            </div>
          </div>
        </div>
        <div className='relative hidden h-full w-full flex-col gap-6 lg:flex'>
          <Image
            src='/assets/images/franchisee.jpg'
            alt='Freelancer feliz com tablet e laptop em uma cafeteria'
            objectFit='cover'
            layout='fill'
            className='rounded-e-3xl'
          />
          <div className='absolute bottom-[-3.5rem] right-[-3.5rem] flex flex-col gap-2'>
            <div className='flex justify-end gap-2'>
              <Balloon variant='bl' color='gradient' size='20' />
            </div>
            <div className='flex gap-2'>
              <Balloon variant='tr' color='secondary' size='20' />
              <Balloon variant='tl' color='outlinePrimaryLight' size='20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
