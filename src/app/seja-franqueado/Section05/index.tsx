import { Balloon } from '@/components/Balloon'
import { FranchiseeForm } from '@/components/FranchiseeForm'

export const Section05 = () => {
  return (
    <section className='relative'>
      <div className='flex w-full flex-col justify-center'>
        <h3 className='px-10 pt-10 text-center text-3xl'>
          Quer ser o{' '}
          <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
            Favorito
          </span>{' '}
          da sua cidade?
        </h3>
        <FranchiseeForm />
      </div>
      <div className='absolute left-0 top-0 hidden flex-col gap-2 lg:flex'>
        <div className='relative pb-10'>
          <div className='h-28 w-20 bg-secondary-400' />
          <Balloon variant='bl' color='secondary' size='20' className='absolute bottom-0 right-0' />
        </div>
        <Balloon variant='br' color='outlineTertiary' size='20' />
      </div>
      <div className='absolute bottom-0 right-0 hidden flex-col gap-2 lg:flex'>
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
