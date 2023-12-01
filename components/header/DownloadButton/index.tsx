import { useState } from 'react'
import { isMobile } from 'react-device-detect'

import Image from 'next/image'

import { APP_STORE_URL, GOOGLE_PLAY_URL, ONE_LINK_URL } from '@/repositories/constants'

export const DownloadButton = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    if (!isMobile) setShowMenu(!showMenu)

    if (isMobile) {
      window.open(ONE_LINK_URL, '_blank')
    }
  }

  return (
    <div
      className={`rounded-lg text-white font-bold bg-gradient-to-r from-other-100 to-other-50 flex items-center w-40 relative h-10 cursor-pointer overflow-hidden ${
        !showMenu && 'px-4 py-2'
      }`}
      onClick={handleClick}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div
        className={`absolute flex flex-row w-[200%] transition-all duration-200 ${
          showMenu ? 'right-[-100%]' : 'right-0'
        }`}
      >
        <div className='flex justify-between w-full'>
          <a
            href={APP_STORE_URL}
            target='_blank'
            rel='noreferrer'
            className='flex-initial w-1/2 text-center hover:bg-white hover:bg-opacity-20 py-2 rounded-l-lg group'
          >
            <p className='group-hover:scale-110'>IOS</p>
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            target='_blank'
            rel='noreferrer'
            className='flex-initial w-1/2 text-center hover:bg-white hover:bg-opacity-20 py-2 rounded-r-lg group'
          >
            <p className='group-hover:scale-110'>Android</p>
          </a>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Image
            src='/assets/icons/download.svg'
            alt='download'
            className='mr-2'
            width='16'
            height='16'
          />
          Baixe o App
        </div>
      </div>
    </div>
  )
}
