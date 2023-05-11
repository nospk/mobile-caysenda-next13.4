import type { FC } from 'react';
import OfferBar from '@/components/OfferBar';
import ProductBar from '@/components/ProductBar';
const ProductView: FC = () => {
	const offers = [
		{
			src: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			alt: 'Product Hot 1',
			productName: 'Quần Áo 1',
			url: '/product/quanao1',
		},
		{
			src: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			alt: 'Product Hot 2',
			productName: 'Quần Áo 2',
			url: '/product/quanao2',
		},
		{
			src: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			alt: 'Product Hot 3',
			productName: 'Quần Áo 3',
			url: '/product/quanao3',
		},
	];
	const products = [
		{
			name: 'Quần dài 1',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/1',
			id: 'abc1'
		},
		{
			name: 'Quần dài 2',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/2',
			id: 'abc2'
		},
		{
			name: 'Quần dài 3',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/3',
			id: 'abc3'
		},
		{
			name: 'Quần dài 4',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/4',
			id: 'abc4'
		},
		{
			name: 'Quần dài 5',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/5',
			id: 'abc5'
		},
		{
			name: 'Quần dài 6',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/6',
			id: 'abc6'
		},
		{
			name: 'Quần dài 7',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/7',
			id: 'abc7'
		},
		{
			name: 'Quần dài 8',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/8',
			id: 'abc8'
		},
		{
			name: 'Quần dài 9',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/9',
			id: 'abc9'
		},
		{
			name: 'Quần dài 10',
			sold: 123123,
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/10',
			id: 'abc10'
		},
	];
	const listProducts = products.map((product, index)=>(
		<ProductBar key={product.id} name={product.name} sold={product.sold} image={product.image} index={index} link={product.link} id={product.id}/>
	))
	return (
		<>
			<div className="py-3 text-lg font-semibold">
				<span>Sản Phẩm Nổi Bật</span>
			</div>
			<OfferBar offers={offers} />
			<div className="py-3 text-lg font-semibold text-red-700">
				<span>Sản Phẩm Hot Của Trang</span>
			</div>
			<div className="flex flex-col gap-4 shadow-xl rounded-xl mb-3 p-2 ring-1 ring-black ring-opacity-5">
				{listProducts}
			</div>
		</>
	);
};
export default ProductView;
