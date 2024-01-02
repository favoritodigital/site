/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://favorito.digital/',
        permanent: true,
      },
      {
        source: '/cadastre-seu-estabelecimento',
        destination: 'https://favorito.digital/cadastre-seu-estabelecimento',
        permanent: true,
      },
      {
        source: '/quem-somos',
        destination: 'https://favorito.digital/quem-somos',
        permanent: true,
      },
      {
        source: '/politica-de-privacidade',
        destination: 'https://favorito.digital/politica-de-privacidade',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
