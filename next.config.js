/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_POKEMON_IMG_HOST
      }
    ]
  }
}

module.exports = nextConfig
