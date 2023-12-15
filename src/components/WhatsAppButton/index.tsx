import React from 'react'

import Image from 'next/legacy/image'
import Link from 'next/link'

import { Balloon } from '../Balloon'

export const WhatsAppButton = () => {
  return (
    <Link
      className='b-tr fixed bottom-4 right-4 hover:scale-110'
      href='https://api.whatsapp.com/send?phone=5547997536595'
      target='_blank'
    >
      <Balloon
        variant='tl'
        size='14'
        color='green'
        icon
        className='flex items-center justify-center'
      >
        <Image src='/assets/icons/whatsapp.svg' alt='WhatsApp icon' height={32} width={32} />
      </Balloon>
    </Link>
  )
}
