/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'caysenda.vn', 'robohash.org']
  },
  rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/category',
      },
      {
        source: '/san-pham',
        destination: '/category',
      },
    ]
  }
}

module.exports = nextConfig
