import Image from 'next/legacy/image'
import Link, { LinkProps } from 'next/link'

interface IconLinkProps extends LinkProps {
  icon: string
  title: string
  target?: '_blank'
}

export const IconLink = ({ icon, title, target, ...props }: IconLinkProps) => {
  return (
    <Link title={title} target={target} {...props}>
      <div className='relative h-10 w-10 hover:scale-110'>
        <Image src={icon} alt={`${title} - icon`} layout='fill' objectFit='contain' className='' />
      </div>
    </Link>
  )
}
