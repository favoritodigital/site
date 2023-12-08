import Image from 'next/image'

import { Balloon } from '../Balloon'

export const KnowMore = () => {
  return (
    <Balloon variant='tl' size={32} color='gradient'>
      <div className='flex h-full w-full flex-col items-center justify-center text-white'>
        <Image src='/assets/icons/scroll-down.svg' alt='scroll down icon' height={36} width={36} />
        <span>Saiba mais</span>
      </div>
    </Balloon>
  )
}
