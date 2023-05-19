//import FlexTwoColView from '@/components/FlexTwoColView';

import ProductService from '@/services/Product.service';
import KeyWordService from '@/services/KeyWord.service';
import BannerService from '@/services/Banner.service';
import Loading from '@/components/Loading';
import Wapper from './wrapper'
import { Suspense } from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
	description:
		'Nomi chuyên cung cấp sỉ các mặt hàng cây sen đá, xương rồng, Chậu Trồng Cây, phụ kiện tiểu cảnh, phụ kiện mô hình, cây giả, hoa giả, đồ trang trí derco đẹp, giá rẻ nhất thị trường.',
};
import getBaseUrl from '@/lib/getBaseUrl'
export const dynamic = 'force-dynamic';

export default async function Page() {

	return (
		<>
			<Suspense fallback={<Loading />}>
				{/* @ts-expect-error Async Server Component */}
				<Wapper data={fetch(`${getBaseUrl}/api/product`)} keyWords={KeyWordService.getKeyWordCardData()} banners={BannerService.getBannerCardData()} />
			</Suspense>
		</>
	);
}

// export default function Page() {
// 	return <></>;
// }
