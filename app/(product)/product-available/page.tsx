import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';

import ProductService from '@/services/Product.service';

export default async function Page() {
	const products = await ProductService.getProductData();

	return (
		<>
			<FlexTwoColView data={products} />
		</>
	);
}
