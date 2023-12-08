import Image from 'next/image'

export const KnowMore = () => {
  return (
    <div className='h-32 w-32 rounded-b-full rounded-tr-full bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 text-white'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <Image src='/assets/icons/scroll-down.svg' alt='scroll down icon' height={36} width={36} />
        <span>Saiba mais</span>
      </div>
    </div>
  )
}
