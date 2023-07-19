/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com', 'source.unsplash.com', 'caysenda.vn', 'robohash.org']
	},
	rewrites() {
		return [
			{
				source: '/tim-kiem',
				destination: '/search',
			},
			{
				source: '/:slug',
				destination: '/category',
			},
			{
				source: '/san-pham',
				destination: '/category',
			},
			{
				source: '/:catSlug/:slug',
				destination: '/product',
			},
		]
	},
}

module.exports = nextConfig
