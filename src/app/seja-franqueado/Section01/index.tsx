import Image from 'next/legacy/image'
import Link from 'next/link'

import { KnowMore } from '@/components/KnowMore'

export const Section01 = () => {
  return (
    <section className='relative h-screen max-h-[51rem] overflow-x-hidden bg-background-400'>
      <div className='absolute left-[-8.3rem] top-[-5.3rem] z-10 h-screen max-h-[56.3rem] w-screen max-w-[56.3rem] rounded-b-full rounded-tl-full bg-white'>
        <div className='absolute bottom-60 right-40 flex flex-col gap-6'>
          <h1 className='max-w-md text-3xl'>
            {`Você tem a oportunidade de `}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
              conectar pessoas aos seus novos lugares favoritos
            </span>
            {' e faturar alto por isso.'}
          </h1>
          <h2 className='max-w-md text-2xl font-semibold'>Parece bom? E é mesmo!</h2>
          <p className='max-w-md text-lg'>
            Nossos licenciados são muito bem remunerados por assumir a responsabilidade de
            apresentar ao público a melhor experiência do seu dia e ajudar a melhorar o movimento de
            centenas de estabelecimentos.
          </p>
          <Link
            href='#form'
            className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
          >
            Quero saber mais!
          </Link>
        </div>
        <div className='absolute bottom-40 right-[-3rem] z-20 h-32 w-32'>
          <KnowMore />
        </div>
      </div>
      <div className='absolute right-[-2rem] top-0 h-screen max-h-[48rem] w-screen max-w-[48rem]'>
        <div className='flex h-full w-full flex-col gap-6'>
          <Image
            src='/assets/images/franchisee.png'
            alt='Homem vestido com traje social segurando um iPad em mãos'
            objectFit='cover'
            layout='fill'
            className='rounded-b-full'
          />
        </div>
      </div>
    </section>
  )
}
