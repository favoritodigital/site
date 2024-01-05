import Image from 'next/legacy/image'

export const Section02 = () => {
  return (
    <section className='flex justify-center bg-background-400 px-10 py-16'>
      <div className='flex w-full max-w-7xl flex-col justify-center gap-10 md:flex-row'>
        <div className='relative h-screen max-h-80 w-full md:max-h-[30rem] md:max-w-lg'>
          <Image
            src='/assets/images/app.svg'
            alt='Celular com o app aberto'
            objectFit='contain'
            layout='fill'
          />
        </div>
        <div className='flex w-full flex-col justify-center gap-6 md:max-w-[22.5rem]'>
          <h2 className='w-full text-center text-2xl md:text-left lg:text-3xl'>
            Conectamos pessoas aos seus novos locais favoritos, gerando experiências memoráveis em
            poucos{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text text-center font-semibold text-transparent'>
              toques
            </span>{' '}
            .
          </h2>
          <p className='text-center md:text-left lg:text-lg'>
            Seja no primeiro café do dia, em um almoço de família, no happy hour do trabalho, ou um
            jantar a dois, o <strong>Favorito</strong> está ao seu lado para acabar com a dúvida na
            hora de sair e escolher a melhor opção!
          </p>
          <p className='text-center md:text-left lg:text-lg'>
            <strong>Você sabia?</strong> Faça um post marcando o{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text text-center font-semibold text-transparent'>
              @favorito.digital
            </span>{' '}
            e concorra a brindes 🥂
          </p>
        </div>
      </div>
    </section>
  )
}
