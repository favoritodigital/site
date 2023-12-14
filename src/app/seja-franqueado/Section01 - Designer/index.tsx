import Image from 'next/legacy/image'
import Link from 'next/link'

import { KnowMore } from '@/components/KnowMore'

export const Section01 = () => {
  return (
    <section className='relative h-screen max-h-[51rem] overflow-x-hidden bg-background-400'>
      <div className='absolute left-[-6rem] top-[-5.3rem] z-10 h-screen max-h-[56.3rem] w-[60%] rounded-b-[50%]  bg-white'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-6 p-10 pl-32'>
          <h1 className='max-w-md text-3xl'>
            {`Você tem a oportunidade de `}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
              conectar pessoas aos seus novos lugares favoritos
            </span>
            {' e faturar alto por isso.'}
          </h1>
          <h2 className='w-full max-w-md text-left text-2xl font-semibold'>
            Parece bom? E é mesmo!
          </h2>
          <p className='max-w-md text-lg'>
            Nossos licenciados são muito bem remunerados por assumir a responsabilidade de
            apresentar ao público a melhor experiência do seu dia e ajudar a melhorar o movimento de
            centenas de estabelecimentos.
          </p>
          <div className='flex w-full max-w-md justify-start'>
            <Link
              href='#form'
              className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
            >
              Quero saber mais!
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute right-[-6rem] top-0 h-screen max-h-[48rem] w-[60%]'>
        <div className='flex h-full w-full flex-col gap-6'>
          <Image
            src='/assets/images/franchisee.png'
            alt='Homem vestido com traje social segurando um iPad em mãos'
            objectFit='cover'
            layout='fill'
            className='rounded-b-[50%]'
          />
        </div>
      </div>
      <div className='absolute bottom-40 right-[40%] z-20 h-32 w-32 translate-x-[-50%]'>
        <KnowMore />
      </div>
    </section>
  )
}
