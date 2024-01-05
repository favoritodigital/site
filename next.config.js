/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inicio',
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
        source: '/termos-de-uso',
        destination: 'https://favorito.digital/termos-de-uso',
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
