import Image from 'next/legacy/image'

import { Balloon } from '../Balloon'

interface CardProps {
  icon: string
  title: string
  description: string
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className='flex h-56 w-64 flex-col gap-6 rounded-2xl bg-white p-6'>
      <Balloon
        variant='bl'
        color='background'
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

export default Card
