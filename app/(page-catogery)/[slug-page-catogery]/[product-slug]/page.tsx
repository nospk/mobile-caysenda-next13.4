import Carousel from '@/components/ProductDetail/Carousel';
import Price from '@/components/ProductDetail/Price';
import Info from '@/components/ProductDetail/Info'
import Detail from '@/components/ProductDetail/Detail';
import Gallery from '@/components/ProductDetail/Gallery';
import AddToCart from '@/components/ProductDetail/AddToCart';
import styles from './styles.module.css'
export default function Page() {
	const ProductDetailRetail = {
		retail: true,
		price:[{money: '25000', condition: '6'}, {money: '22000', condition: '720-7199'}, {money: '22000', condition: '7200'}],			
		unit: 'cái'
	}
	return (
		<>
			<Carousel />
			<div className={styles.wrapper}>
			{ProductDetailRetail.retail ? <Price unit={ProductDetailRetail.unit} price={ProductDetailRetail.price}/> : null}
			<Info />
			</div>
			<Detail />
			<Gallery />
			<AddToCart />
		</>
	);
}
