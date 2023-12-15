import Image from 'next/legacy/image'

import { Balloon } from '@/components/Balloon'
import { StoreButton } from '@/components/StoreButton'

export const Section03 = () => {
  return (
    <section className='mb-6 flex flex-col items-center'>
      <div className='mx-10 mt-10 flex max-w-6xl grid-cols-2 flex-col gap-10 md:mx-20 md:mt-20 lg:grid'>
        <div className='flex h-full items-center'>
          <div className='flex w-full grid-cols-[3.5rem_1fr] flex-col items-center gap-10 md:grid md:items-start'>
            <Balloon variant='full' color='gradient' size='14'>
              <span className='flex h-full w-full items-center justify-center text-3xl text-white'>
                1
              </span>
            </Balloon>
            <div className='flex h-full max-w-md flex-col gap-8'>
              <h3 className='pt-[0.6rem] text-3xl'>Como funciona?</h3>
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
              <div className='flex w-full justify-center gap-4 lg:justify-start'>
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
                src='/assets/images/howWorks.jpg'
                alt='Barista adulto medio e seu jovem colega de trabalho usando o touchpad enquanto trabalhava em um pub'
                objectFit='cover'
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
            <Balloon variant='full' color='gradient' size='14'>
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
                    Recebe 70% da comissão, todos os meses, enquanto o estabelecimento estiver ativo
                    conosco;
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
          <div className='relative h-fit w-fit lg:mt-0'>
            <Balloon variant='br' size='image' className='relative'>
              <Image
                src='/assets/images/yourEarnings.jpg'
                alt='Feliz empresario parado na janela do escritorio e lendo mensagem de texto no celular enquanto segura o laptop'
                objectFit='cover'
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
            <div className='absolute bottom-0 left-[-1.5rem] h-24 w-16 rounded-tl-[3rem] border border-tertiary-400 sm:left-[-2.5rem] sm:h-28 sm:w-20 md:h-36 md:w-24 md:rounded-tl-[4rem]' />
            <Balloon
              variant='tl'
              color='gradient'
              className='absolute bottom-[-2rem] left-6 h-16 w-16 sm:h-20 sm:w-20 md:left-10 md:h-24 md:w-24'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
