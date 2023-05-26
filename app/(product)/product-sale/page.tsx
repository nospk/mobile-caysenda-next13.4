import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';

import BannerService from '@/services/Banner.service';
import KeyWordService from '@/services/KeyWord.service';
import ProductService from '@/services/Product.service';

import Loading from '@/components/Loading';
import { Suspense } from 'react';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Sản Phẩm Giảm Giá',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
	const productsData = ProductService.getProductData();
	const keyWordsData = KeyWordService.getKeyWordCardData();
	const bannersData = BannerService.getBannerCardData();
	const [products, banners, keyWords] = await Promise.all([
		productsData,
		bannersData,
		keyWordsData,
	]);

	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView
					data={products}
					banners={banners}
					keyWords={keyWords}

				/>
			</Suspense>
		</>
	);
}
