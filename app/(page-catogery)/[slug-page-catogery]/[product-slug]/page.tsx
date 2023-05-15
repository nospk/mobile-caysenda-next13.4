import Carousel from '@/components/ProductDetail/Carousel';
import Price from '@/components/ProductDetail/Price';
import Info from '@/components/ProductDetail/Info';
import Gallery from '@/components/ProductDetail/Gallery';
import AddToCart from '@/components/ProductDetail/AddToCart';
export default function Page() {
	return (
		<>
			<Carousel />
			<Price />
			<Info />
			<Gallery />
			<AddToCart />
		</>
	);
}
