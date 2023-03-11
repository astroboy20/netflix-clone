/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://image.tmdb.org/', 'https://api.themoviedb.org/','https://api.themoviedb.org/3',"image.tmdb.org",'tmdb.org', 'themoviedb.org','localhost',"image.tmdb.org" ],
  },
}

module.exports = nextConfig
