import Image from 'next/image'
import Link from 'next/link'

import { Balloon } from '@/components/Balloon'
import { FranchiseeForm } from '@/components/FranchiseeForm'

export const Section06 = () => {
  return (
    <section className='relative'>
      <div className='flex w-full justify-center'>
        <div className='flex flex-col gap-6 p-10 md:px-40'>
          <h3 className='text-center text-3xl'>
            Quer ser o{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
              Favorito
            </span>{' '}
            da sua cidade?
          </h3>
          <FranchiseeForm />
          <div className='w-full px-8'>
            <div className='flex w-full flex-col items-center justify-center gap-2 rounded-md bg-green-100 p-10'>
              <h4 className='text-center text-lg font-bold text-tertiary-400 lg:text-2xl'>
                Também podemos te atender pelo WhatsApp!
              </h4>
              <p className='text-sm font-bold lg:text-base'>É só clicar no botão abaixo.</p>
              <Link
                href='https://wa.me/5547997536595?text=Ol%C3%A1%20Favorito!%20J%C3%A1%20verifiquei%20as%20informa%C3%A7%C3%B5es%20no%20site%20de%20voc%C3%AAs%2C%20por%C3%A9m%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20antes%20de%20cadastrar%20o%20meu%20estabelecimento'
                className='mt-2 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 lg:text-base'
                target='_blank'
              >
                <Image
                  src='/assets/icons/whatsapp.svg'
                  alt='WhatsApp icon'
                  height={24}
                  width={24}
                />
                Falar pelo WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 top-0 hidden flex-col gap-2 md:flex'>
        <div className='relative pb-10'>
          <div className='h-28 w-20 bg-secondary-400' />
          <Balloon variant='bl' color='secondary' size='20' className='absolute bottom-0 right-0' />
        </div>
        <Balloon variant='br' color='outlineTertiary' size='20' />
      </div>
      <div className='absolute bottom-0 right-0 hidden flex-col gap-2 md:flex'>
        <div className='flex gap-2'>
          <Balloon variant='br' color='secondary' size='20' />
          <Balloon variant='bl' color='outlineTertiary' size='20' />
        </div>
        <div className='flex gap-2'>
          <Balloon variant='tr' color='outlineTertiary' size='20' />
          <div className='relative pt-10'>
            <Balloon
              variant='tl'
              color='primaryLight'
              size='20'
              className='absolute right-0 top-0'
            />
            <div className='h-20 w-20  bg-primaryLight-400' />
          </div>
        </div>
      </div>
    </section>
  )
}
