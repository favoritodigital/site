import { ComponentProps } from 'react'

import Image from 'next/legacy/image'

import { twMerge } from 'tailwind-merge'

interface StateSelectionProps extends Pick<ComponentProps<'div'>, 'className'> {
  active: boolean
  handleClick: () => void
  label: string
}

export const StateSelection = ({ active, handleClick, label, className }: StateSelectionProps) => {
  console.log('className', className)
  return (
    <div
      onClick={handleClick}
      className={twMerge('flex w-fit cursor-pointer items-center gap-4 p-2', className || '')}
    >
      {active ? (
        <Image
          src='/assets/icons/location-actived.svg'
          alt='Localização selecionada'
          height={50}
          width={50}
        />
      ) : (
        <Image
          src='/assets/icons/location-disabled.svg'
          alt='Localização não selecionada'
          height={50}
          width={50}
        />
      )}
      <span
        data-active={active}
        className='z-10 ml-[-1.7rem] select-none rounded-full border-2 bg-white px-4 py-1 text-sm data-[active=true]:border-none data-[active=true]:bg-gradient-to-tr data-[active=true]:from-primaryDark-400 data-[active=true]:to-primaryLight-400 data-[active=true]:px-[calc(1rem+2px)] data-[active=true]:py-[calc(0.25rem+2px)] data-[active=true]:text-white'
      >
        {label}
      </span>
    </div>
  )
}
