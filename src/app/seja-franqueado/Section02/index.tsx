import Link from 'next/link'

export const Section02 = () => {
  return (
    <section className='flex w-full flex-col gap-6 bg-background-400 p-10'>
      <h2 className='text-center text-3xl'>
        {`Fature alto com um `}
        <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-black text-transparent '>
          negócio inovador
        </span>
      </h2>
      <p className='mx-auto max-w-3xl text-center text-lg'>
        Seja dono do aplicativo Favorito e tenha a chance de faturar mais de{' '}
        <span className='font-bold'>R$ 15 mil reais por mês</span> vendendo a nossa solução! Assista
        o vídeo abaixo para entender:
      </p>
      <iframe
        className='mx-auto h-[26rem] w-full max-w-[48rem] rounded-md'
        src='https://www.youtube.com/embed/6E2NXaYui_s'
        allowFullScreen
        title='Video de apresentação da Favorito'
      />
      <Link
        href='/seja-franqueado#form'
        className='mx-auto w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'
      >
        Quero conhecer melhor agora
      </Link>
    </section>
  )
}
