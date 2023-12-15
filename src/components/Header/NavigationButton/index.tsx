import Link from 'next/link'

import { tv, type VariantProps } from 'tailwind-variants'

const navigationButtonVariants = tv({
  base: 'px-4 py-2',
  variants: {
    variant: {
      desktop: 'rounded-lg bg-transparent',
      mobile: 'text-white',
    },
    active: {
      true: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'desktop',
  },
})

const activeMarkerVariants = tv({
  base: '',
  variants: {
    variant: {
      desktop:
        'absolute bottom-[-0.25rem] left-1/2 h-2 w-2 -translate-x-1/2 transform rounded-full bg-primaryLight-400',
      mobile: 'border-b-4',
    },
    active: {
      true: 'border-white',
      false: 'border-transparent bg-transparent',
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
  const variantStyles = navigationButtonVariants({ variant, active })

  const activeMarkerStyles = activeMarkerVariants({ variant, active })

  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Link href={href} className={variantStyles} onClick={onClick}>
        {label}
        <div className={activeMarkerStyles} />
      </Link>
    </div>
  )
}
