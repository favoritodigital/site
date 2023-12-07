import { tv } from 'tailwind-variants'

interface MenuButtonProps {
  active: boolean
  onClick: () => void
}

const menuButtonVariants = tv({
  base: 'block h-0.5 w-6 rounded-sm bg-black transition-transform duration-300 ease-out',
  variants: {
    variant: {
      top: '-translate-y-0.5',
      bottom: 'translate-y-0.5',
    },
    active: {
      top: 'translate-y-0.5 rotate-45 bg-white',
      bottom: '-translate-y-1.5 -rotate-45 bg-white',
    },
  },
})

export const MenuButton = ({ active, onClick }: MenuButtonProps) => {
  return (
    <button onClick={onClick} className='z-50 flex flex-col items-center justify-center lg:hidden'>
      <span
        className={menuButtonVariants({ variant: 'top', active: active ? 'top' : undefined })}
      />
      <span
        data-active={active}
        className='my-0.5 block h-0.5 w-6 rounded-sm bg-black data-[active=true]:opacity-0'
      />
      <span
        className={menuButtonVariants({ variant: 'bottom', active: active ? 'bottom' : undefined })}
      />
    </button>
  )
}
