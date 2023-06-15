import Carousel from '@/components/Product/Carousel';
import PriceRetail from '@/components/Product/PriceRetail';
import PriceWholeSale from '@/components/Product/PriceWholeSale';
import Info from '@/components/Product/Info';
import Detail from '@/components/Product/Detail';
import Gallery from '@/components/Product/Gallery';
import AddToCart from '@/components/Product/AddToCart';
import styles from './styles.module.css';
export default function Page() {
	const ProductDetail = {
		name: 'ZCT-1',
		retail: true,
		conditiondefault: '6',
		condition1: '720',
		condition2: '7200',
		price: [
			{ money: '25000', condition: '6' },
			{ money: '22000', condition: '720-7199' },
			{ money: '19400', condition: '≥7200' },
		],
		pricewholesale: { min: '1900', max: '6700' },
		unit: 'Cái',
		quickviewGallery: [
			'https://caysenda.vn/resources/upload/17892827873_102253868.jpg',
			'https://caysenda.vn/resources/upload/17892854272_102253868.jpg',
			'https://caysenda.vn/resources/upload/17892863213_102253868.jpg',
			'https://caysenda.vn/resources/upload/17892872215_102253868.jpg',
		],
	};
	return (
		<>
			<Carousel images={ProductDetail.quickviewGallery} name={ProductDetail.name}/>
			<div className={styles.wrapper}>
				{ProductDetail.retail ? (
					<PriceRetail
						unit={ProductDetail.unit}
						name={ProductDetail.name}
						price={ProductDetail.price}
					/>
				) : (
					<PriceWholeSale
						unit={ProductDetail.unit}
						price={ProductDetail.pricewholesale}
						condition="30"
					/>
				)}
				<Info />
			</div>
			<Detail />
			<Gallery />
			<AddToCart retail={ProductDetail.retail}/>
		</>
	);
}
