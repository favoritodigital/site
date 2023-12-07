import { Metadata } from 'next'
import Image from 'next/legacy/image'

export const metadata: Metadata = {
  title: 'Seja Franqueado | Favorito',
}

export default function FranchiseeLandingPage() {
  return (
    <div>
      <section className='relative h-screen max-h-[51rem] bg-background-400'>
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
              apresentar ao público a melhor experiência do seu dia e ajudar a melhorar o movimento
              de centenas de estabelecimentos.
            </p>
            <button className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:opacity-95'>
              Quero saber mais!
            </button>
          </div>
        </div>
        <div className='absolute right-[-8.3rem] top-[-5.3rem] h-screen max-h-[56.3rem] w-screen max-w-[56.3rem]'>
          <div className='flex h-full w-full flex-col gap-6'>
            <Image
              src='/assets/images/franchisee.png'
              alt='Homem vestido com traje social segurando um iPad em mãos'
              objectFit='cover'
              layout='fill'
              className='rounded-b-full rounded-tr-full'
            />
          </div>
        </div>
      </section>
    </div>
  )
}
