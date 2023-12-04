interface MobileMenuButtonProps {
  active: boolean
  onClick: () => void
}

export const MobileMenuButton = ({ active, onClick }: MobileMenuButtonProps) => {
  return (
    <button onClick={onClick} className='flex flex-col justify-center items-center z-50 lg:hidden'>
      <span
        className={`bg-${
          active ? 'white rotate-45 translate-y-1' : 'black -translate-y-0.5'
        } block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm`}
      />
      <span
        className={`bg-black block h-0.5 w-6 rounded-sm my-0.5 ${
          active ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`bg-${
          active ? 'white -rotate-45 -translate-y-1' : 'black translate-y-0.5'
        } block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm`}
      />
    </button>
  )
}
