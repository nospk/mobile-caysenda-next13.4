import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';

import ProductService from '@/services/Product.service';
import Loading from '@/components/Loading';
import { Suspense } from 'react';


import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sản Phẩm Phân Loại',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
	const products = await ProductService.getProductData();

	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView data={products} />
			</Suspense>
		</>
	);
}
