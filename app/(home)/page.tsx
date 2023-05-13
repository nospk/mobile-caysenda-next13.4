import FlexTwoColView from '@/components/FlexTwoColView';
import { Suspense } from 'react';
import ProductService from '@/services/Product.service';
import KeyWordService from '@/services/KeyWord.service';
import BannerService from '@/services/Banner.service';

//export const dynamic = 'force-dynamic';

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
			<Suspense>
				<FlexTwoColView data={products} banners={banners} keyWords={keyWords} />
			</Suspense>
		</>
	);
}

// export default function Page() {
// 	return <></>;
// }
