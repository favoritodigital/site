export const Section02 = () => {
  return (
    <section className='flex w-full flex-col gap-6 bg-background-400 p-10'>
      <h2 className='text-center text-3xl'>
        <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-black text-transparent '>
          Tenha destaque
        </span>
        {` `}na gastronomia e lazer local
      </h2>
      <p className='mx-auto max-w-3xl text-center text-lg'>
        Se você tem um bar, pub, restaurante, até mesmo um evento, o aplicativo Favorito foi criado
        para te trazer benefícios exclusivos! Assista o vídeo abaixo para entender:
      </p>
      <iframe
        className='mx-auto h-[26rem] w-full max-w-[48rem] rounded-md'
        src='https://www.youtube.com/embed/-p6tSfUjP3o'
        allowFullScreen
        title='Video de principais benefícios do Favorito'
      />
    </section>
  )
}
