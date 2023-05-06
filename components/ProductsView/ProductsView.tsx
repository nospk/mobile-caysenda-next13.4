import type { FC } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchCardCol from '@/components/SearchCard';
import SliderCard from '@/components/SliderCard';
import type { Product } from '@/types/product';
import styles from './ProductsView.module.css';
interface typeBanner {
	src: string;
	alt: string;
	link: string;
}
[];
interface typeProduct {
	key: string;
	name: string;
	price: number;
	sold: number;
	image: string;
}
const ProductView: FC<{
	slideBanners: any;
	productsLefts: Product[];
	productsRights: Product[];
}> = ({ slideBanners, productsLefts, productsRights }) => {
	const listslideBanner = slideBanners.map((slideBanner: any) => {
		return {
			src: slideBanner,
			alt: 'banner',
			link: '/product',
		};
	});
	const listLeft = productsLefts.map((product: Product, index: number) => (
		<ProductCard
			key={product.name}
			name={product.name}
			price={product.price}
			sold={product.sold}
			image={product.image}
			unit={product.unit}
			data={product.data}
			link={product.link}
			priority={index == 0 ? true : false}
		/>
	));
	const listRight = productsRights.map((product: Product, index: number) => (
		<ProductCard
			key={product.name}
			name={product.name}
			price={product.price}
			sold={product.sold}
			image={product.image}
			unit={product.unit}
			data={product.data}
			link={product.link}
			priority={index < 2 ? true : false}
		/>
	));
	listLeft.unshift(<SliderCard key={30} banner={listslideBanner} />);
	// prettier-ignore
	listRight.splice(3, 0,<SearchCardCol key={31} keywords={["Quần Áo", "Đồ trẻ em", "Túi xách", "Quần jean", "Áo Thun", "Túi xách hình con thỏ", "Tai nghe bluetooth", "Điện thoại Iphone"]}/>)

	return (
		<>
			<div className={styles.products}>
				<div className="flex-1">{listLeft}</div>
				<div className="flex-1">{listRight}</div>
			</div>
		</>
	);
};
export default ProductView;
