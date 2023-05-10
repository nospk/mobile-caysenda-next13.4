import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';

import Loading from '@/components/Loading';
import ProductCard from '@/components/ProductCard';
import ProductService from '@/services/Product.service';
import { Product } from '@/types/product';
import { Suspense } from 'react';



export default async function Page() {
	const products = await ProductService.getProductData();
	const productsLefts = products.slice(0, 10);
	const productsRights = products.slice(10);
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

	return (
		<>	
			<Suspense fallback={<Loading />}>
				<FlexTwoColView listLeft={listLeft} listRight={listRight} />
			</Suspense>
		</>
	);
}
