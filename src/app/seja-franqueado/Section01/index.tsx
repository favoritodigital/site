import Image from 'next/legacy/image'
import Link from 'next/link'

import { KnowMore } from '@/components/KnowMore'

export const Section01 = () => {
  return (
    <section className='relative flex flex-col items-center overflow-x-hidden bg-background-400 lg:block lg:h-screen lg:max-h-[38rem] xl:max-h-[51rem] 2xl:max-h-none'>
      <div className='relative left-[-10%] top-0 h-screen max-h-[26rem] w-[120%] bg-white sm:max-h-[36rem] lg:absolute lg:left-auto lg:right-[-6rem] lg:max-h-[33rem] lg:w-[60%] lg:bg-background-400 xl:max-h-[48rem] 2xl:max-h-[calc(100%-3rem)]'>
        <Image
          src='/assets/images/franchisee.jpg'
          alt='Freelancer feliz com tablet e laptop em uma cafeteria'
          objectFit='cover'
          layout='fill'
          className='rounded-b-[50%]'
        />
      </div>
      <div className='mb-16 w-[120%] translate-x-0 rounded-b-[50%] bg-white sm:mb-20 lg:absolute lg:left-[-6rem] lg:z-10 lg:h-full lg:w-[60%] lg:translate-x-0'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-6 p-10 lg:justify-center lg:pl-32 xl:pt-10'>
          <h1 className='w-full px-6 text-center text-xl sm:max-w-xl sm:p-0 md:max-w-2xl lg:max-w-md lg:text-left xl:text-3xl 2xl:max-w-2xl'>
            {`Você tem a oportunidade de `}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text text-center font-semibold text-transparent'>
              conectar pessoas aos seus novos lugares favoritos
            </span>
            {' e faturar alto por isso.'}
          </h1>
          <h2 className='w-full px-6 text-center text-lg font-semibold sm:max-w-xl sm:p-0 md:max-w-2xl lg:max-w-md lg:text-left xl:text-2xl 2xl:max-w-2xl'>
            Parece bom? E é mesmo!
          </h2>
          <p className='w-full px-6 text-center text-sm sm:max-w-xl sm:p-0 md:max-w-2xl lg:max-w-md lg:text-left xl:text-lg 2xl:max-w-2xl'>
            Nossos licenciados são muito bem remunerados por assumir a responsabilidade de
            apresentar ao público a melhor experiência do seu dia e ajudar a melhorar o movimento de
            centenas de estabelecimentos.
          </p>
          <div className='flex w-full max-w-md justify-center pb-3 sm:pb-0 lg:justify-start 2xl:max-w-2xl'>
            <Link
              href='#form'
              className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
            >
              Quero saber mais!
            </Link>
          </div>
        </div>
        <div className='absolute bottom-[-4rem] right-[50%] z-20 h-24 w-24 translate-x-[75%] sm:bottom-[-4.5rem] lg:bottom-40 lg:right-[-2rem] lg:h-32 lg:w-32 lg:translate-x-[50%] 2xl:right-16'>
          <KnowMore className='h-24 w-24 lg:h-32 lg:w-32' />
        </div>
      </div>
    </section>
  )
}
