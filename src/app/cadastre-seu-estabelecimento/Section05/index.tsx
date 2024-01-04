export const Section05 = () => {
  return (
    <section className='flex w-full flex-col bg-background-400 py-10'>
      <div className='flex w-full justify-center p-10'>
        <div className='flex w-full max-w-6xl flex-col items-center gap-10 bg-background-400 lg:flex-row lg:gap-20'>
          <h2 className='text-center text-3xl'>
            Já viu o que falam{` `}
            <span className='bg-gradient-to-tr from-primaryDark-400 to-primaryLight-400 bg-clip-text font-black text-transparent '>
              sobre nós
            </span>
            ?
          </h2>
          <iframe
            className='mx-auto h-[26rem] w-full max-w-[48rem] rounded-md'
            src='https://www.youtube.com/embed/0lt0gWfoLMI'
            allowFullScreen
            title='Video de depoimento de estabelecimentos sobre o Favorito'
          />
        </div>
      </div>
      <div id='form' />
    </section>
  )
}
