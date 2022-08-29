/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom'
  },
  experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
