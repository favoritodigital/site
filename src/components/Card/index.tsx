import Image from 'next/legacy/image'

import { Balloon } from '../Balloon'

interface CardProps {
  icon: string
  title: string
  description: string
  background?: 'white' | 'background'
  size?: 'sm' | 'md' | 'lg'
}

export const Card = ({
  icon,
  title,
  description,
  background = 'white',
  size = 'sm',
}: CardProps) => {
  return (
    <div
      data-background={background}
      data-size={size}
      className='flex h-72 w-64 flex-col gap-6 rounded-2xl bg-background-400 p-6 data-[size=md]:h-64 data-[size=sm]:h-56 data-[background=white]:bg-white'
    >
      <Balloon
        variant='bl'
        color={background === 'white' ? 'background' : 'white'}
        size='14'
        className='flex items-center justify-center'
        icon
      >
        <Image src={icon} alt={title} width={26} height={26} />
      </Balloon>
      <h3 className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
        {title}
        <span className='font-normal text-black'> {description}</span>
      </h3>
    </div>
  )
}
