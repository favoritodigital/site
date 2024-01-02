import { Children, ComponentProps, ReactNode, cloneElement, isValidElement } from 'react'

import Image from 'next/legacy/image'

import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const ballonVariants = tv({
  base: '',
  variants: {
    variant: {
      tl: 'rounded-b-full rounded-tr-full',
      tr: 'rounded-b-full rounded-tl-full',
      bl: 'rounded-t-full rounded-br-full',
      br: 'rounded-t-full rounded-bl-full',
      full: 'rounded-full',
    },
    color: {
      gradient: 'bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400',
      primaryLight: 'bg-primaryLight-400',
      primaryDark: 'bg-primaryDark-400',
      secondary: 'bg-secondary-400',
      tertiary: 'bg-tertiary-400',
      outlinePrimaryLight: 'border border-primaryLight-400',
      outlinePrimaryDark: 'border border-primaryDark-400',
      outlineSecondary: 'border border-secondary-400',
      outlineTertiary: 'border border-tertiary-400',
      background: 'bg-background-400',
      green: 'bg-green-500',
      white: 'bg-white',
    },
    size: {
      '32': 'h-32 w-32',
      '28': 'h-28 w-28',
      '24': 'h-24 w-24',
      '20': 'h-20 w-20',
      '16': 'h-16 w-16',
      '14': 'h-14 w-14',
      image: 'h-[17rem] w-[17rem] sm:h-[20rem] sm:w-[20rem] md:h-[27rem] md:w-[27rem]',
    },
  },
})

interface BallonProps
  extends Pick<ComponentProps<'div'>, 'className'>,
    VariantProps<typeof ballonVariants> {
  children?: ReactNode
  icon?: boolean
}

export const Balloon = ({
  children,
  variant,
  color,
  size,
  className,
  icon = false,
}: BallonProps) => {
  return (
    <div className={twMerge(ballonVariants({ variant, color, size }), className)}>
      {Children.map(children, child => {
        if (isValidElement(child) && child.type === Image && !icon) {
          return cloneElement(child, {
            ...child.props,
            className: ballonVariants({ variant, color, size }),
          })
        }
        return child
      })}
    </div>
  )
}
