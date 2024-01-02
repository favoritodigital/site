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
