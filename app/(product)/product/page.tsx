import Carousel from '@/components/Product/Carousel';
import PriceRetail from '@/components/Product/PriceRetail';
import PriceWholeSale from '@/components/Product/PriceWholeSale';
import Info from '@/components/Product/Info';
import Detail from '@/components/Product/Detail';
import Gallery from '@/components/Product/Gallery';
import AddToCart from '@/components/Product/AddToCart';
import styles from './styles.module.css';
import ProductService from '@/services/Product.service';
import { ProductDetail } from '@/types/product';

export const dynamic = 'force-dynamic';
export default async function Page({searchParams}:any) {
	const data:ProductDetail = await ProductService.getDetail({slug:searchParams.slug})
	return (
		<>
			<Carousel images={data.quickviewGallery} name={data.name}/>
			<div className={styles.wrapper}>
				{!data.retail ? (
					<PriceRetail
						unit={data.unit}
						name={data.name}
						price={data.price}
					/>
				) : (
					<PriceWholeSale
						unit={data.unit}
						price={data.pricewholesale}
						condition= {data.conditiondefault}
					/>
				)}
				<Info product={data}/>
			</div>
			<Detail product={data}/>
			<Gallery content={data.content}/>
			<AddToCart retail={data.retail} productId={data.id} category_slug={data.category_slug}/>
		</>
	);
}
