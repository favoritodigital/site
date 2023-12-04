import Link from 'next/link'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const navigationButtonVariants = cva('', {
  variants: {
    variant: {
      desktop: 'bg-white rounded-lg px-4 py-2',
      mobile: 'px-4 py-2 text-white',
    },
  },
  defaultVariants: {
    variant: 'desktop',
  },
})

const activeMarkerVariants = cva('', {
  variants: {
    variant: {
      desktop:
        'absolute bottom-[-0.25rem] h-2 w-2 bg-primary-400 rounded-full left-1/2 transform -translate-x-1/2',
      mobile: 'border-b-4 border-white',
    },
  },
  defaultVariants: {
    variant: 'desktop',
  },
})

interface NavigationButtonProps extends VariantProps<typeof navigationButtonVariants> {
  href: string
  label: string
  active: boolean
  onClick?: () => void
}

export const NavigationButton = ({
  active = false,
  href,
  label,
  onClick,
  variant,
}: NavigationButtonProps) => {
  const variantStyles = cn(navigationButtonVariants({ variant }), active && 'font-bold')

  const activeMarkerStyles = cn(
    activeMarkerVariants({ variant }),
    !active && 'border-transparent bg-transparent',
  )

  return (
    <div className='relative flex flex-col justify-center items-center'>
      <Link href={href} className={variantStyles} onClick={onClick}>
        {label}
        <div className={activeMarkerStyles} />
      </Link>
    </div>
  )
}
