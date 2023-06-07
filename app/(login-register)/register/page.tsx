
import ProductService from '@/services/Product.service';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import Register from '@/components/Account/Register'

import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export default async function Page() {
	const products = await ProductService.getProductData();

	return (
		<>
			<Suspense fallback={<Loading />}>
                <Register/>
			</Suspense>
		</>
	);
}
