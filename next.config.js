/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com', 'source.unsplash.com', 'caysenda.vn', 'robohash.org', 'nomi.com.vn']
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
			{
				source: '/tim-kiem',
				destination: '/search',
			},


			{
				source: '/:catSlug/:slug',
				destination: '/product',
			},
		]
	},
}

module.exports = nextConfig

