import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';

import ProductService from '@/services/Product.service';
import Loading from '@/components/Loading';
import { Suspense } from 'react';


import { Metadata } from 'next';
import {ProductListParamType} from "@/services/types/ProductRequestType";

export const metadata: Metadata = {
	title: 'Sản Phẩm Phân Loại',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
	let requestData:ProductListParamType = {}
	let data = await ProductService.getProductList({selectType:"@SELECT", ...requestData});
	let page = await ProductService.getProductList({selectType:"@COUNT", ...requestData});

	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView data={data} maxPage={page.totalPages} requestData={requestData}/>
			</Suspense>
		</>
	);
}
