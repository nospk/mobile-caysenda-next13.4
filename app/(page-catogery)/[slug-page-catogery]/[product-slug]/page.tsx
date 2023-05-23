import Carousel from '@/components/ProductDetail/Carousel';
import PriceRetail from '@/components/ProductDetail/PriceRetail';
import PriceWholeSale from '@/components/ProductDetail/PriceWholeSale';
import Info from '@/components/ProductDetail/Info';
import Detail from '@/components/ProductDetail/Detail';
import Gallery from '@/components/ProductDetail/Gallery';
import AddToCart from '@/components/ProductDetail/AddToCart';
import styles from './styles.module.css';
export default function Page() {
	const ProductDetailRetail = {
		name: 'ZCT-1',
		retail: true,
		conditiondefault: '6',
		condition1: '720',
		condition2: '7200',
		price: [
			{ money: '25000', condition: '6' },
			{ money: '22000', condition: '720-7199' },
			{ money: '19400', condition: '7200' },
		],
		pricewholesale: { min: '1900', max: '6700' },
		unit: 'cái',
		quickviewGallery: [
			'https://caysenda.vn/resources/upload/17892827873_102253868.jpg',
			'https://caysenda.vn/resources/upload/17892854272_102253868.jpg',
			'https://caysenda.vn/resources/upload/17892863213_102253868.jpg',
			'https://caysenda.vn/resources/upload/17892872215_102253868.jpg',
		],
	};
	return (
		<>
			<Carousel images={ProductDetailRetail.quickviewGallery} name={ProductDetailRetail.name}/>
			<div className={styles.wrapper}>
				{ProductDetailRetail.retail ? (
					<PriceRetail
						unit={ProductDetailRetail.unit}
						name={ProductDetailRetail.name}
						price={ProductDetailRetail.price}
					/>
				) : (
					<PriceWholeSale
						unit={ProductDetailRetail.unit}
						price={ProductDetailRetail.pricewholesale}
						condition="30"
					/>
				)}
				<Info />
			</div>
			<Detail />
			<Gallery />
			<AddToCart />
		</>
	);
}
