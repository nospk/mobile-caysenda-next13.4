import FlexTwoColView from '@/components/FlexTwoColView';

import ProductService from '@/services/Product.service';
import KeyWordService from '@/services/KeyWord.service';
import BannerService from '@/services/Banner.service';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
	description:
		'Nomi chuyên cung cấp sỉ các mặt hàng cây sen đá, xương rồng, Chậu Trồng Cây, phụ kiện tiểu cảnh, phụ kiện mô hình, cây giả, hoa giả, đồ trang trí derco đẹp, giá rẻ nhất thị trường.',
};
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
			<Suspense fallback={<Loading />}>
				<FlexTwoColView data={products} banners={banners} keyWords={keyWords} />
			</Suspense>
		</>
	);
}

// export default function Page() {
// 	return <></>;
// }
