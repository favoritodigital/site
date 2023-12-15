import { Balloon } from '@components/Balloon'
import { Card } from '@components/Card'

export const Section04 = () => {
  return (
    <section className='bg-gradient-to-tr from-primaryDark-10 to-primaryLight-10 p-10 pb-14'>
      <div className='flex w-full justify-center pb-10'>
        <div className='flex grid-cols-[3.5rem_1fr] flex-col items-center gap-10 text-center md:grid'>
          <Balloon variant='full' color='gradient' size='14'>
            <span className='flex h-full w-full items-center justify-center text-3xl text-white'>
              3
            </span>
          </Balloon>
          <h3 className='text-3xl'>
            Além disso, o{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
              Favorito
            </span>{' '}
            tem muitas vantagens!
          </h3>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-full max-w-4xl '>
          <div className='flex w-full grid-cols-2 flex-col place-items-center gap-8 md:grid lg:grid-cols-3'>
            <Card
              icon='/assets/icons/smartphone-emoji.svg'
              title='Somos digitais:'
              description='você não precisa ir ao escritório ou ter funcionários;'
            />
            <Card
              icon='/assets/icons/light-bulb-emoji.svg'
              title='Somos inovadores:'
              description='igual ao Favorito, não tem!'
            />
            <Card
              icon='/assets/icons/hands-raised-emoji.svg'
              title='Somos livres:'
              description='você trabalha da onde quiser, no seu horário, com total liberdade;'
            />
            <Card
              icon='/assets/icons/monocle-emoji.svg'
              title='Somos exigentes:'
              description='oferecemos treinamento individualizado e suporte contínuo para você focar no que importa;'
            />
            <Card
              icon='/assets/icons/diamon-emoji.svg'
              title='Somos exclusivos:'
              description='na sua região, só você. Garantimos a exclusividade territorial;'
            />
            <Card
              icon='/assets/icons/heart-emoji.svg'
              title='Somos acessíveis:'
              description='você pode ser um Favorito a partir de R$ 25.000,00!'
            />
          </div>
        </div>
      </div>
      {/* <div className='flex flex-col gap-6 pb-5 pt-20'>
        <h2 className='text-center text-3xl'>
          Nossos depoimentos{' '}
          <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
            Favoritos
          </span>
        </h2>
        <iframe
          className='mx-auto h-[26rem] w-full max-w-[48rem] rounded-md'
          src='https://www.youtube.com/embed/6E2NXaYui_s'
          allowFullScreen
          title='Video de apresentação da Favorito'
        />
      </div> */}
      <div id='form' />
    </section>
  )
}
