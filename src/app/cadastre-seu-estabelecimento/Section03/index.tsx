import { Balloon } from '@components/Balloon'
import { Card } from '@components/Card'

export const Section03 = () => {
  return (
    <section className='bg-white p-10 pb-14'>
      <div className='flex w-full justify-center pb-10'>
        <div className='flex grid-cols-[3.5rem_1fr] flex-col items-center gap-10 text-center md:grid'>
          <Balloon variant='full' color='gradient' size='14'>
            <span className='flex h-full w-full items-center justify-center text-3xl text-white'>
              1
            </span>
          </Balloon>
          <h3 className='text-3xl'>
            Por que somos o{' '}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
              melhor app
            </span>{' '}
            para você?
          </h3>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-full max-w-xl lg:max-w-4xl'>
          <div className='flex w-full grid-cols-2 flex-col place-items-center gap-8 md:grid lg:grid-cols-3'>
            <Card
              icon='/assets/icons/clock-emoji.svg'
              title='Economia de tempo:'
              description='todo o gerenciamento do seu perfil e cadastro das informações é feita pelo nosso time;'
              background='background'
              size='md'
            />
            <Card
              icon='/assets/icons/magnifying-glass-emoji.svg'
              title='Filtros relevantes:'
              description='tenha seu estabelecimento encontrado por quem valoriza o que você tem a oferecer;'
              background='background'
              size='md'
            />
            <Card
              icon='/assets/icons/heart-emoji.svg'
              title='Relacionamento e conexão: '
              description='seu público ainda mais perto de você;'
              background='background'
              size='md'
            />
            <Card
              icon='/assets/icons/bed-emoji.svg'
              title='Visibilidade:'
              description='temos parcerias com hotéis e enviamos notificações diariamente para estimular os usuários;'
              background='background'
              size='md'
            />
            <Card
              icon='/assets/icons/target-emoji.svg'
              title='Marketing Favorito:'
              description='nenhuma ação de marketing é tão acessível quanto o nosso aplicativo;'
              background='background'
              size='md'
            />
            <Card
              icon='/assets/icons/star-emoji.svg'
              title='Sempre com novidades:'
              description='somos únicos e atualizamos nosso aplicativo o tempo todo, garantindo a melhor experiência sempre!'
              background='background'
              size='md'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
