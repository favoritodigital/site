import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | Favorito',
}

export default function TermsOfUse() {
  return (
    <div className='flex flex-col items-center text-justify'>
      <div className='flex max-w-4xl flex-col gap-3 px-10 pb-20 pt-32'>
        <h1 className='mb-7 text-center text-3xl font-bold'>Termos de Uso</h1>
        <p>
          Você sabia que cerca de 97% (noventa e sete por cento) das pessoas não leem termos de uso
          e políticas de privacidade, segundo pesquisa da <i>Stanford University</i> ?
        </p>
        <p>
          Sabemos que é tentador pular estes Termos de Uso, mas é importante estabelecer o que você
          pode esperar de nós ao utilizar o <i>app</i> <b>Favorito</b> e o que esperamos de você.
        </p>
        <p>
          Estes “Termos de Uso” ou “Termos” ajudam a definir a relação do <b>Favorito</b> com você.
        </p>
        <p>Por exemplo, estes Termos incluem as seguintes seções:</p>
        <ol className='mb-3 list-decimal'>
          <li className='mb-3 ml-12'>
            <b>O que você pode esperar de nós</b>, que descreve o modo como fornecemos e
            desenvolvemos nosso trabalho.
          </li>
          <li className='mb-3 ml-12'>
            <b>O que esperamos de você</b>, que estabelece certas regras para você usar nosso
            aplicativo.
          </li>
          <li className='ml-12'>
            <b>Em caso de problemas ou discordâncias</b>, que descreve outros direitos legais que
            você tem e o que esperar caso estes Termos sejam violados.
          </li>
        </ol>
        <p>
          Compreender estes Termos é importante porque, para baixar ou usar o aplicativo, você
          precisa aceitá-los. Portanto, certifique-se de lê-los com atenção antes de usar o
          aplicativo.
        </p>
        <p>
          Além destes Termos, também publicamos uma{' '}
          <a href='/politica-de-privacidade' target='_blank' rel='noreferrer'>
            <b>Política de Privacidade</b>
          </a>
          . Recomendamos que você a leia também, para entender melhor como pode gerir seus dados
          pessoais.
        </p>
        <h3 className='mb-1 mt-7 text-lg font-bold'>Seu relacionamento com o Favorito</h3>
        <p>
          Estes Termos ajudam a definir o relacionamento entre você e o Favorito. De modo geral,
          permitimos que você utilize nosso aplicativo se concordar em seguir estes Termos, que
          refletem o modo como o Favorito funciona.
        </p>
        <p>
          Quando falamos de “Favorito”, “nós”, “nosso” ou “nossa”, estamos nos referindo a MM Tech
          Ltda, pessoa jurídica de direito privado, sociedade limitada registrada na Junta Comercial
          do Estado de Santa Catarina (“Jucesc”), inscrita no Cadastro Nacional da Pessoa Jurídica
          (“CNPJ”) sob o n.º 46.230.468/0001-73, com sede na Rua Pascoal Meller, 73, Universitário,
          88805-380, Criciúma, SC.
        </p>
        <h2 className='mb-1 mt-7 text-xl font-bold'>1. O que você pode esperar de nós</h2>
        <p>
          Somos uma plataforma que deseja proporcionar a você, usuário, momentos de alegria,
          diversão e lazer em diversos estabelecimentos.
        </p>
        <p>
          O serviço da plataforma Favorito consiste em conectar, através do aplicativo, as pessoas
          (usuários) aos estabelecimentos cadastrados, por meio da visualização online das ofertas
          e/ou opções diferenciadas de entretenimento/atendimento do estabelecimento para um
          determinado dia.
        </p>
        <h3 className='mb-1 mt-7 text-lg font-bold'>1.1. Como funciona</h3>
        <p>
          Após baixar o aplicativo, você pode acessá-lo através do seu cadastro ou como convidado.
          Ao entrar no aplicativo, você terá acesso a diversas funcionalidades, como visualizar os
          melhores bares, pubs e restaurantes em uma única plataforma, combinar filtros, verificar
          as principais informações do estabelecimento, explorar locais próximos no mapa e descobrir
          eventos na região.
        </p>
        <p>
          O cadastro serve para que você possa usufruir de maiores benefícios e funcionalidades.
        </p>
        <p>
          Cabe a você, usuário do <i>app</i>, visualizar o estabelecimento na nossa plataforma e
          decidir se vai ou não aproveitá-la.
        </p>
        <p>
          Para proporcionar uma melhor experiência, recomendamos que utilize nossos filtros para
          encontrar os locais de acordo com suas preferências. Por exemplo, é possível filtrar
          estabelecimentos que aceitam animais de estimação, possuem espaço kids, oferecem música ao
          vivo, disponibilizam wi-fi, estacionamento, mesas ao ar livre, entre outras opções.
        </p>
        <p>
          Você pode também compartilhar sua localização conosco ou selecionar sua área de interesse
          para visualizar os estabelecimentos mais próximos a você.
        </p>
        <p>
          Essas funcionalidades são disponibilizadas com o intuito de facilitar a busca e
          personalizar sua experiência no aplicativo.
        </p>
        <p>
          Nós não nos responsabilizamos pelas ofertas e promoções dos estabelecimentos, bem como
          pelos produtos e serviços oferecidos por eles. Nossa atuação se limita apenas a fornecer
          informações sobre os estabelecimentos a você.
        </p>
        <p>
          Você reconhece que ao utilizar o aplicativo, é de sua inteira responsabilidade avaliar e
          decidir pela utilização dos serviços e produtos dos estabelecimentos e prestadores de
          serviços.
        </p>
        <p>
          Quaisquer problemas decorrentes dessa utilização devem ser tratados diretamente com os
          estabelecimentos e prestadores de serviços.
        </p>
        <p>
          O aplicativo Favorito é completamente gratuito para os usuários e não requer nenhum
          pagamento para o seu uso.
        </p>
        <h3 className='mb-1 mt-7 text-lg font-bold'>1.2. Promoções e ofertas</h3>
        <p>
          Quando quiser, o Favorito veiculará em sua plataforma promoções e ofertas, com ou sem
          restrições próprias, a serem veiculadas conforme o interesse da empresa. Sua participação
          em quaisquer promoções implica na aceitação das regras próprias delas.
        </p>
        <h2 className='mb-1 mt-7 text-xl font-bold'>2. O que esperamos de você</h2>
        <p>
          Você deve cumprir com suas responsabilidades definidas nestes Termos e em eventuais termos
          adicionais.
        </p>
        <p>Essas são algumas dessas responsabilidades:</p>
        <ul>
          <li className='mb-3 ml-12 list-disc'>
            Você deve ter pelo menos 18 (dezoito) anos de idade para concordar e aceitar os Termos
            de Uso. Se você for menor de 18 anos, só poderá usar um Site ou Serviço na presença e
            com a aprovação de um dos pais ou responsável legal;
          </li>
          <li className='mb-3 ml-12 list-disc'>
            Todas as comunicações do Favorito diretamente com você serão feitas através das
            informações fornecidas no cadastro, por isso é muito importante que você forneça os
            dados corretos e os mantenha atualizados;
          </li>
          <li className='mb-3 ml-12 list-disc'>
            Manter seus dados seguros é muito importante para nós, mas para isso precisamos de sua
            colaboração: crie uma senha forte (com maiúsculas, minúsculas, números e caracteres
            especiais). Além disso, você deve mudá-la periodicamente e não compartilhá-la com
            ninguém;
          </li>
          <li className='mb-3 ml-12 list-disc'>
            Qualquer violação ao disposto nos Termos de Uso garantirá ao Favorito o direito de
            adotar as medidas que julgar necessárias, podendo vedar o acesso do usuário;
          </li>
          <li className='ml-12 list-disc'>
            Você não pode tentar ou incentivar terceiros a driblar, reverter à engenharia,
            decodificar, decompilar, desmontar ou fraudar ou interferir de qualquer forma com
            aspectos da Plataforma.
          </li>
        </ul>
        <h2 className='mb-4 mt-7 text-xl font-bold'>3. Em caso de problemas ou discordâncias</h2>
        <p>
          Por lei, você tem direito a resolução de problemas se algo der errado. Estes Termos não
          limitam nem retiram nenhum desses direitos.
        </p>
        <h3 className='mb-1 mt-7 text-lg font-bold'>
          3.1. Gerenciamento de solicitações pelos seus dados
        </h3>
        <p>
          O respeito pela privacidade e segurança dos seus dados é fundamental na nossa abordagem
          para responder às solicitações de dados. Quando recebemos solicitações de divulgação de
          dados, nossa equipe as analisa para garantir que satisfaçam os requisitos legais e as
          políticas de privacidade do Favorito. O Favorito trata dados de acordo com as leis do
          Brasil, em especial a Lei Geral de Proteção de Dados. Para ver mais informações sobre as
          solicitações de divulgação de dados que o Favorito recebe e como respondemos a essas
          solicitações, consulte nossa{' '}
          <a href='/politica-de-privacidade' target='_blank' rel='noreferrer'>
            <b>Política de Privacidade</b>
          </a>
        </p>
        <h3 className='mb-1 mt-7 text-lg font-bold'>3.2. Disposições gerais</h3>
        <p>
          O Favorito reserva o direito de alterar os Termos de Uso aqui estipuladas a seu critério,
          podendo alterar, adicionar, modificar ou remover partes.
        </p>
        <p>
          É obrigação do usuário, periodicamente, inteirar-se dos Termos de Uso e da{' '}
          <a href='/politica-de-privacidade' target='_blank' rel='noreferrer'>
            <b>Política de Privacidade</b>
          </a>
          , a fim de acompanhar e opinar acerca das modificações. A continuação do uso de sua conta
          na Plataforma constituirá a sua aceitação às alterações e aos novos Termos de Uso.
        </p>
        <h3 className='mb-1 mt-7 text-lg font-bold'>
          3.3. Soluções de disputas, legislação aplicável e tribunais
        </h3>
        <p>
          As leis do Brasil vão reger todas as disputas que surgirem com relação a qualquer um
          destes Termos, de termos adicionais ou qualquer serviço relacionado, mesmo se houver
          conflito nas regras das leis. Essas disputas serão resolvidas exclusivamente na Justiça
          Federal ou Estadual de Criciúma, Santa Catarina, Brasil.
        </p>
        <div className='py-4'>
          <p>
            <b>
              <i>Favorito</i>
            </b>
          </p>
          <p>
            <i>MM Tech Ltda</i>
          </p>
          <p>
            <i>CNPJ: 46.230.468/0001-73</i>
          </p>
          <p>
            <i>Rua Pascoal Meller, 73, Universitário, 88805-380, Criciúma, SC</i>
          </p>
        </div>
        <p>
          <b>Estes Termos entraram em vigor em agosto de 2023.</b>
        </p>
      </div>
    </div>
  )
}
