import { useState } from 'react'
import { isMobile } from 'react-device-detect'

import Image from 'next/image'

import { ONE_LINK_URL } from '@/repositories/constants'

export const ButtonDownload = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    if (!isMobile) setShowMenu(!showMenu)

    if (isMobile) {
      window.open(ONE_LINK_URL, '_blank')
    }
  }

  return (
    <button
      className='rounded-lg px-4 py-2 text-white font-bold bg-gradient-to-r from-other-100 to-other-50 flex items-center w-36'
      onClick={handleClick}
    >
      {!showMenu ? (
        <>
          <Image
            src='/assets/icons/download.svg'
            alt='download'
            className='mr-2'
            width='16'
            height='16'
          />
          Baixe o App
        </>
      ) : (
        <div className='flex justify-between w-full'>
          <span className='flex-initial w-1/2 '>IOS</span>
          <span className='flex-initial w-1/2'>Android</span>
        </div>
      )}
    </button>
  )
}
