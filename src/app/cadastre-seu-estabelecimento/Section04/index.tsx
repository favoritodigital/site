import Image from 'next/legacy/image'
import Link from 'next/link'

import { Balloon } from '@/components/Balloon'

export const Section04 = () => {
  return (
    <section className='mb-6 flex flex-col items-center'>
      <div className='mx-10 mb-10 flex max-w-6xl grid-cols-2 flex-col gap-10 md:mx-20 md:mb-20 lg:grid'>
        <div className='flex h-full items-center'>
          <div className='flex w-full grid-cols-[3.5rem_1fr] flex-col items-center gap-10 md:grid md:items-start'>
            <Balloon variant='full' color='gradient' size='14'>
              <span className='flex h-full w-full items-center justify-center text-3xl text-white'>
                2
              </span>
            </Balloon>
            <div className='flex h-full max-w-lg flex-col gap-6'>
              <h3 className='max-w-md text-3xl'>Fazemos o melhor por você e para você!</h3>
              <p>
                Nossa equipe é responsável por inserir todas as informações do seu estabelecimento.
                Você não precisa se preocupar com nada. Além disso, também disponibilizamos:
              </p>
              <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-[1rem_1fr] gap-4'>
                  <Image
                    src='/assets/icons/check.svg'
                    alt='Icone de check'
                    width={16}
                    height={16}
                  />
                  <p>Relatórios mensais com indicadores relevantes;</p>
                </div>
                <div className='grid grid-cols-[1rem_1fr] gap-4'>
                  <Image
                    src='/assets/icons/check.svg'
                    alt='Icone de check'
                    width={16}
                    height={16}
                  />
                  <p>Banner destaque dentro do app (sob consulta);</p>
                </div>
                <div className='grid grid-cols-[1rem_1fr] gap-4'>
                  <Image
                    src='/assets/icons/check.svg'
                    alt='Icone de check'
                    width={16}
                    height={16}
                  />
                  <p>Notificações personalizadas (sob consulta).</p>
                </div>
                <Link
                  href='#form'
                  className='mt-5 w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
                >
                  Conheça o app
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 flex w-full justify-center'>
          <div className='relative h-fit w-fit lg:mt-0'>
            <Balloon variant='br' size='image' className='relative'>
              <Image
                src='/assets/images/better-for-you.png'
                alt='Mulher multitarefa: falando ao telefone enquanto utiliza um tablet.'
                objectFit='cover'
                layout='fill'
              />
            </Balloon>
            <Balloon
              variant='br'
              color='gradient'
              className='absolute left-[-2rem] top-[-1.5rem] h-16 w-[8rem] md:left-[-4rem] md:top-[-2.5rem] md:h-24 md:w-[11.5rem]'
            >
              <div className='flex h-full w-full items-center justify-center'>
                <div className='max-w-12 md:max-w-16 relative h-full max-h-12 w-full md:max-h-16'>
                  <Image
                    src='/assets/icons/hands.svg'
                    alt='Icone de gráfico de barras'
                    objectFit='contain'
                    layout='fill'
                  />
                </div>
              </div>
            </Balloon>
            <div className='absolute bottom-0 right-0 flex translate-x-[50%] translate-y-[25%] flex-col gap-2'>
              <Balloon
                variant='bl'
                color='outlineTertiary'
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24'
              />
              <Balloon
                variant='tl'
                color='gradient'
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
