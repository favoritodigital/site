import { ComponentProps } from 'react'

import Image from 'next/image'

import { Balloon } from '../Balloon'

interface KnowMoreProps extends Pick<ComponentProps<'div'>, 'className'> {}

export const KnowMore = ({ className }: KnowMoreProps) => {
  return (
    <Balloon variant='tl' size='32' className={className} color='gradient'>
      <div className='flex h-full w-full flex-col items-center justify-center text-white'>
        <Image src='/assets/icons/scroll-down.svg' alt='scroll down icon' height={36} width={36} />
        <span className='text-sm lg:text-base'>Saiba mais</span>
      </div>
    </Balloon>
  )
}
