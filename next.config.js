/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://image.tmdb.org/', 'https://api.themoviedb.org/','https://api.themoviedb.org/3'],
  },
}

module.exports = nextConfig
