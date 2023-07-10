import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';

import BannerService from '@/services/Banner.service';
import KeyWordService from '@/services/KeyWord.service';
import ProductService from '@/services/Product.service';

import Loading from '@/components/Loading';
import { Suspense } from 'react';

import { Metadata } from 'next';
import {ProductListParamType} from "@/services/types/ProductRequestType";
export const metadata: Metadata = {
	title: 'Sản Phẩm Giảm Giá',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
	const requestData:ProductListParamType = {}
	const data = await ProductService.getProductList({selectType:"@SELECT", ...requestData});
	const page = await ProductService.getProductList({selectType:"@COUNT", ...requestData});


	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView
					data={data}
					maxPage={page.totalPages}
					requestData={requestData}
				/>
			</Suspense>
		</>
	);
}
