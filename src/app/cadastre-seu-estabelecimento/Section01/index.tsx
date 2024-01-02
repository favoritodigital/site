import Image from 'next/legacy/image'

import { KnowMore } from '@/components/KnowMore'
import { StoreButton } from '@/components/StoreButton'

export const Section01 = () => {
  return (
    <section className='relative flex flex-col items-center overflow-x-hidden bg-background-400 lg:block lg:h-screen lg:max-h-[38rem] xl:max-h-[51rem] 2xl:max-h-none'>
      <div className='relative left-[-10%] top-0 h-screen max-h-[26rem] w-[120%] bg-white sm:max-h-[36rem] lg:absolute lg:left-auto lg:right-[-3rem] lg:max-h-[33rem] lg:w-[60%] lg:bg-background-400 xl:max-h-[48rem] 2xl:max-h-[calc(100%-3rem)]'>
        <Image
          src='/assets/images/register-your-establishment.png'
          alt='Garçon feliz com um prato de comida em cada mão'
          objectFit='cover'
          layout='fill'
          className='rounded-b-[50%]'
        />
      </div>
      <div className='mb-16 w-[120%] translate-x-0 rounded-b-[50%] bg-white sm:mb-20 lg:absolute lg:left-[-6rem] lg:z-10 lg:h-full lg:w-[60%] lg:translate-x-0'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-6 p-10 lg:justify-center lg:pl-32 xl:pt-10'>
          <h1 className='w-full px-6 text-center text-xl sm:max-w-xl sm:p-0 md:max-w-2xl lg:max-w-md lg:text-left xl:text-3xl 2xl:max-w-2xl'>
            Já pensou em ser o lugar{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text text-center font-semibold text-transparent'>
              Favorito
            </span>{' '}
            dos nossos usuários?
          </h1>
          <h2 className='w-full px-6 text-center text-lg font-semibold sm:max-w-xl sm:p-0 md:max-w-2xl lg:max-w-md lg:text-left xl:text-2xl 2xl:max-w-2xl'>
            Estamos aqui para ser sua vitrine.
          </h2>
          <p className='w-full px-6 text-center text-sm sm:max-w-xl sm:p-0 md:max-w-2xl lg:max-w-md lg:text-left xl:text-lg 2xl:max-w-2xl'>
            Se você acredita que seu estabelecimento tem qualidades incríveis para atrair quem
            utiliza nosso app.
          </p>
          <div className='flex w-full max-w-md flex-col justify-center gap-5 pb-3 sm:pb-0 lg:justify-start 2xl:max-w-2xl'>
            <strong className='text-center text-lg lg:text-left'>Baixe seu app Favorito</strong>
            <div className='flex w-full flex-wrap justify-center gap-4 px-10 lg:justify-start lg:px-0'>
              <StoreButton store='ios' />
              <StoreButton store='android' />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-[50%] z-10 h-24 w-24 translate-x-[50%] lg:bottom-24 lg:h-32 lg:w-32 xl:bottom-32'>
        <KnowMore className='h-24 w-24 lg:h-32 lg:w-32' />
      </div>
    </section>
  )
}
