import Menu from '@/components/Menu';
import KeyWord from '@/components/KeyWord';
import StickSearch from '@/components/StickSearch';
import styles from './page.module.css';
import FlexTwoColView from '@/components/FlexTwoColView';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import ProductService from '@/services/Product.service';
import KeyWordService from '@/services/KeyWord.service';
import BannerService from '@/services/Banner.service';
import ProductCard from '@/components/ProductCard';

import type { Product } from '@/types/product';
import BannerCard from '@/components/BannerCard';
import KeyWordCard from '@/components/KeyWordCard';
//export const dynamic = 'force-dynamic';
import TemplateHome from '@/components/Layouts/home';
export default async function Page() {
	const productsData = ProductService.getProductData();
	const keyWordsTopData = KeyWordService.getKeyWordTopData();
	const keyWordsCardData = KeyWordService.getKeyWordCardData();
	const bannersCardData = BannerService.getBannerCardData();

	const [products, keyWordsTop, bannersCard, keyWordsCard] = await Promise.all([
		productsData,
		keyWordsTopData,
		bannersCardData,
		keyWordsCardData,
	]);
	let keyWordTopCard = keyWordsTop.map((keyword: string) => (
		<KeyWord key={keyword} keyword={keyword} />
	));

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
	return (
		<>
			<TemplateHome>
				<StickSearch />
				<div className={styles.search_history}>{keyWordTopCard}</div>
				<Menu showCategory={true} />
				{/* Show Products */}
				<Suspense fallback={<Loading />}>
					<FlexTwoColView
						keywordCard={keyWordCard}
						bannerCard={bannerCard}
						listLeft={listLeft}
						listRight={listRight}
					/>
				</Suspense>
			</TemplateHome>
		</>
	);
}
