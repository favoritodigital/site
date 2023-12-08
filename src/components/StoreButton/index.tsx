import Image from 'next/image'

import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/repositories/constants'

interface StoreButtonProps {
  store?: 'android' | 'ios'
}

export const StoreButton = ({ store = 'android' }: StoreButtonProps) => {
  const icon = store === 'android' ? 'google-play' : 'app-store'
  return (
    <a
      className='flex w-fit gap-2 rounded-lg bg-tertiary-400 p-2 text-white hover:opacity-95'
      href={store === 'android' ? GOOGLE_PLAY_URL : APP_STORE_URL}
      target='_blank'
    >
      <Image src={`/assets/icons/${icon}.svg`} alt={`${icon} icon`} width={36} height={36} />
      <div className='flex flex-col'>
        <p className='text-xs'>Baixe na</p>
        <Image src={`/assets/text/${icon}.svg`} alt={`${icon} text`} width={90} height={24} />
      </div>
    </a>
  )
}
