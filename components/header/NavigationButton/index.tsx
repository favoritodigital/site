import Link from 'next/link'

interface NavigationButtonProps {
  href: string
  label: string
  active: boolean
}

export const NavigationButton = ({ active = false, href, label }: NavigationButtonProps) => {
  return (
    <div className='relative flex flex-col justify-center items-center'>
      <Link href={href} className={`bg-white rounded-lg px-4 py-2 ${active && 'font-bold'}`}>
        {label}
      </Link>
      {active && <div className='absolute bottom-[-0.25rem] h-2 w-2 bg-primary-400 rounded-full' />}
    </div>
  )
}
