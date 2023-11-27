import { HTMLAttributes } from 'react'

import clsx from 'clsx'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export const Button = ({ active = false, children, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-white rounded-lg px-4 py-2',
        active && 'text-white font-bold bg-gradient-to-r from-other-100 to-other-50',
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}
