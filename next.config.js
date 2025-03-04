/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'florenz-ramos.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 