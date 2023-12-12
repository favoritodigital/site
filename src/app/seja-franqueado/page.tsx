import { Metadata } from 'next'
import Image from 'next/legacy/image'

import { Balloon } from '@/components/Balloon'
import { StoreButton } from '@/components/StoreButton'
import { KnowMore } from '@components/KnowMore'

export const metadata: Metadata = {
  title: 'Seja Franqueado | Favorito',
}

export default function FranchiseeLandingPage() {
  return (
    <div>
      <section className='relative h-screen max-h-[51rem] overflow-x-hidden bg-background-400'>
        <div className='absolute left-[-8.3rem] top-[-5.3rem] z-10 h-screen max-h-[56.3rem] w-screen max-w-[56.3rem] rounded-b-full rounded-tl-full bg-white'>
          <div className='absolute bottom-60 right-40 flex flex-col gap-6'>
            <h1 className='max-w-md text-3xl'>
              {`Você tem a oportunidade de `}
              <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
                conectar pessoas aos seus novos lugares favoritos
              </span>
              {' e faturar alto por isso.'}
            </h1>
            <h2 className='max-w-md text-2xl font-semibold'>Parece bom? E é mesmo!</h2>
            <p className='max-w-md text-lg'>
              Nossos licenciados são muito bem remunerados por assumir a responsabilidade de
              apresentar ao público a melhor experiência do seu dia e ajudar a melhorar o movimento
              de centenas de estabelecimentos.
            </p>
            <button className='w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'>
              Quero saber mais!
            </button>
          </div>
          <div className='absolute bottom-40 right-[-3rem] z-20 h-32 w-32'>
            <KnowMore />
          </div>
        </div>
        <div className='absolute right-[-2rem] top-0 h-screen max-h-[48rem] w-screen max-w-[48rem]'>
          <div className='flex h-full w-full flex-col gap-6'>
            <Image
              src='/assets/images/franchisee.png'
              alt='Homem vestido com traje social segurando um iPad em mãos'
              objectFit='cover'
              layout='fill'
              className='rounded-b-full'
            />
          </div>
        </div>
      </section>
      <section className='flex w-full flex-col gap-6 bg-background-400 p-10'>
        <h2 className='text-center text-3xl'>
          {`Fature alto com um `}
          <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-semibold text-transparent'>
            negócio inovador
          </span>
        </h2>
        <p className='mx-auto max-w-3xl text-center text-lg'>
          Seja dono do aplicativo Favorito e tenha a chance de faturar mais de{' '}
          <strong>R$ 20 mil reais por mês</strong> vendendo a nossa solução! Assista o vídeo abaixo
          para entender:
        </p>
        <iframe
          className='mx-auto h-[26rem] w-full max-w-[48rem] rounded-md'
          src='https://www.youtube.com/embed/6E2NXaYui_s'
        />
        <button className='mx-auto w-fit rounded-lg bg-tertiary-400 p-2 text-white hover:bg-gradient-to-tr hover:from-primaryDark-400 hover:to-primaryLight-400'>
          Quero conhecer melhor agora
        </button>
      </section>
      <section className='flex flex-col items-center'>
        <div className='mx-10 mt-10 flex max-w-6xl grid-cols-2 flex-col gap-10 md:mx-20 md:mt-20 lg:grid'>
          <div className='flex h-full items-center'>
            <div className='flex w-full grid-cols-[3.5rem_1fr] flex-col items-center gap-10 md:grid md:items-start'>
              <Balloon variant='full' color='primaryLight' size='14'>
                <span className='flex h-full w-full items-center justify-center text-3xl text-white'>
                  1
                </span>
              </Balloon>
              <div className='flex h-full max-w-md flex-col gap-8'>
                <h3 className='text-3xl'>Como funciona?</h3>
                <div className='flex flex-col gap-4'>
                  <p>
                    Nossos licenciados cadastram e atualizam as informações dos estabelecimentos de
                    acordo com as características de cada local.
                  </p>
                  <p>
                    Com poucos toques, os usuários filtram os melhores locais de acordo com os seus
                    interesses e gostos pessoais.
                  </p>
                </div>
                <strong className='text-lg'>Baixe o app e conheça!</strong>
                <div className='flex gap-4'>
                  <StoreButton store='ios' />
                  <StoreButton store='android' />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 flex w-full justify-center lg:mt-0'>
            <div className='relative w-fit lg:mt-0'>
              <Balloon variant='bl' size='image' className='relative'>
                <Image
                  src='/assets/images/howWorks.png'
                  alt='Homem mostrando o aplicativo Favorito em um iPad'
                  objectFit='contain'
                  layout='fill'
                />
              </Balloon>
              <div className='absolute right-[-2rem] top-[-1.5rem] flex flex-col gap-2 sm:right-[-1.5rem] sm:top-[-1rem] md:right-[-3.5rem] md:top-[-3rem]'>
                <div className='flex gap-2'>
                  <Balloon
                    variant='br'
                    color='outlinePrimaryLight'
                    className='h-16 w-16 md:h-28 md:w-28'
                  />
                  <Balloon variant='bl' color='secondary' className='h-16 w-16 md:h-28 md:w-28' />
                </div>
                <div className='flex justify-end'>
                  <Balloon variant='tl' color='gradient' className='h-16 w-16 md:h-28 md:w-28' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='m-10 flex max-w-6xl grid-cols-2 flex-col gap-10 md:m-20 lg:grid'>
          <div className='flex h-full items-center'>
            <div className='flex w-full grid-cols-[3.5rem_1fr] flex-col items-center gap-10 md:grid md:items-start'>
              <Balloon variant='full' color='primaryLight' size='14'>
                <span className='flex h-full w-full items-center justify-center text-3xl text-white'>
                  2
                </span>
              </Balloon>
              <div className='flex h-full max-w-md flex-col gap-6'>
                <h3 className='max-w-sm text-3xl'>Seus ganhos na velocidade da sua dedicação</h3>
                <p>
                  Criamos uma estrutura que valoriza o seu esforço e fazemos questão de firmar esse
                  compromisso com você desde o início!
                </p>
                <strong className='text-lg'>Com a Favorito você:</strong>
                <div className='flex flex-col gap-3'>
                  <div className='grid grid-cols-[1rem_1fr] gap-4'>
                    <Image
                      src='/assets/icons/check.svg'
                      alt='Icone de check'
                      width={16}
                      height={16}
                    />
                    <p>
                      Recebe 70% da comissão, todos os meses, enquanto o estabelecimento estiver
                      ativo conosco;
                    </p>
                  </div>
                  <div className='grid grid-cols-[1rem_1fr] gap-4'>
                    <Image
                      src='/assets/icons/check.svg'
                      alt='Icone de check'
                      width={16}
                      height={16}
                    />
                    <p>Pode faturar mais de R$ 8.000,00 por mês após 6 meses de operação;</p>
                  </div>
                  <div className='grid grid-cols-[1rem_1fr] gap-4'>
                    <Image
                      src='/assets/icons/check.svg'
                      alt='Icone de check'
                      width={16}
                      height={16}
                    />
                    <p>Consegue o retorno do seu investimento ainda no primeiro ano!</p>
                  </div>
                </div>
                <p>
                  Tudo isso só depende de você e você não fará isso sozinho. Estamos ao seu lado em
                  todas as etapas, do treinamento à prospecção, com o auxílio necessário em cada
                  momento.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-10 flex w-full justify-center'>
            <div className='relative w-fit lg:mt-0'>
              <Balloon variant='br' size='image' className='relative'>
                <Image
                  src='/assets/images/yourEarnings.png'
                  alt='Homem vendos os seus ganhos na tela do celular'
                  objectFit='contain'
                  layout='fill'
                />
              </Balloon>
              <Balloon
                variant='br'
                color='secondary'
                className='absolute left-[-2rem] top-[-1.5rem] h-16 w-[8rem] md:left-[-4rem] md:top-[-2.5rem] md:h-24 md:w-[11.5rem]'
              >
                <div className='flex h-full items-center justify-center'>
                  <div className='relative flex h-full w-full items-center justify-center'>
                    <Image
                      src='/assets/icons/bar-chart.svg'
                      alt='Icone de gráfico de barras'
                      width={40}
                      height={40}
                    />
                    <div className='absolute right-[3.8rem] top-[-0.2rem] md:right-[5.6rem] md:top-[0.5rem]'>
                      <Image
                        src='/assets/icons/money.svg'
                        alt='Icone de dinheiro'
                        width={55}
                        height={55}
                      />
                    </div>
                  </div>
                </div>
              </Balloon>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
