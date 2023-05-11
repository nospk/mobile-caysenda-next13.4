import FlexTwoColView from '@/components/FlexTwoColView';
import { Suspense } from 'react';
import ProductService from '@/services/Product.service';
import KeyWordService from '@/services/KeyWord.service';
import BannerService from '@/services/Banner.service';
import ProductCard from '@/components/ProductCard';

import type { Product } from '@/types/product';
import BannerCard from '@/components/BannerCard';
import KeyWordCard from '@/components/KeyWordCard';
//export const dynamic = 'force-dynamic';

export default async function Page() {
	const productsData = ProductService.getProductData();
	const keyWordsCardData = KeyWordService.getKeyWordCardData();
	const bannersCardData = BannerService.getBannerCardData();

	const [products, bannersCard, keyWordsCard] = await Promise.all([
		productsData,
		bannersCardData,
		keyWordsCardData,
	]);

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

	const listslideBanner = bannersCard.map((banner: string) => {
		return {
			src: banner,
			alt: 'Slide Card',
			link: '',
		};
	});

	const bannerCard = <BannerCard key="banner" banner={listslideBanner} />;
	const keyWordCard = <KeyWordCard key="keyword" keywords={keyWordsCard} />;
	listLeft.unshift(bannerCard);
	// prettier-ignore
	listRight.splice(3, 0, keyWordCard)
	return (
		<>
			<FlexTwoColView listLeft={listLeft} listRight={listRight} />
		</>
	);
}

// export default function Page() {
// 	return <></>;
// }
