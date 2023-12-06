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
      className='relative flex h-10 w-40 cursor-pointer items-center overflow-hidden rounded-lg bg-gradient-to-tr from-primaryDark-85 to-primaryLight-400 font-bold text-white'
      onClick={handleClick}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div
        data-showmenu={showMenu}
        className='absolute flex w-[200%] flex-row transition-all duration-200 data-[showmenu=false]:right-0 data-[showmenu=true]:right-[-100%]'
      >
        <div className='flex w-full justify-between'>
          <a
            href={APP_STORE_URL}
            target='_blank'
            rel='noreferrer'
            className='group w-1/2 flex-initial rounded-l-lg py-2 text-center hover:bg-white hover:bg-opacity-20'
          >
            <p className='group-hover:scale-110'>iOS</p>
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            target='_blank'
            rel='noreferrer'
            className='group w-1/2 flex-initial rounded-r-lg py-2 text-center hover:bg-white hover:bg-opacity-20'
          >
            <p className='group-hover:scale-110'>Android</p>
          </a>
        </div>
        <div className='flex w-full items-center justify-center'>
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
