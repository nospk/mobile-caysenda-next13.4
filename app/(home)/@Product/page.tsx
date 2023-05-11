'use client';
import FlexTwoColView from '@/components/FlexTwoColView';
import Loading from '@/components/Loading';
import { Suspense, useCallback, useEffect, useState } from 'react';
import ProductService from '@/services/Product.service';
import KeyWordService from '@/services/KeyWord.service';
import BannerService from '@/services/Banner.service';
import ProductCard from '@/components/ProductCard';

import type { Product } from '@/types/product';
import BannerCard from '@/components/BannerCard';
import KeyWordCard from '@/components/KeyWordCard';
//export const dynamic = 'force-dynamic';

export default function Page() {
	const [count, setCount] = useState<number>(1);
	const [listLeft, setlistLeft] = useState<[] | React.ReactNode[]>([]);
	const [listRight, setlistRight] = useState<[] | React.ReactNode[]>([]);
	//const productsData = ProductService.getProductData();
	// const keyWordsCardData = KeyWordService.getKeyWordCardData();
	// const bannersCardData = BannerService.getBannerCardData();

	// const [products, bannersCard, keyWordsCard] = await Promise.all([
	// 	productsData,
	// 	bannersCardData,
	// 	keyWordsCardData,
	// ]);

	// const listslideBanner = bannersCard.map((banner: string) => {
	// 	return {
	// 		src: banner,
	// 		alt: 'Slide Card',
	// 		link: '',
	// 	};
	// });

	// const bannerCard = <BannerCard key="banner" banner={listslideBanner} />;
	// const keyWordCard = <KeyWordCard key="keyword" keywords={keyWordsCard} />;
	const [change, setChange] = useState<boolean>(false);
	
	const handleNavigation = useCallback((e: Event, change: boolean) => {
		const window = e.currentTarget as Window;

		if (window.scrollY > 200 && change == false) {
			setCount(3);
			setChange(true);
		}
	}, []);

	useEffect(() => {
		fetch('http://localhost:3000/api/product')
			.then((res) => {
				return res.json();
			})
			.then((products) => {
				const productsLefts = products.slice(Number(0 * count),Number(2 * count));
				const productsRights = products.slice(Number(3 * count), Number(5 * count));
				let listLeft = productsLefts.map((product: Product, index: number) => (
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
				let listRight = productsRights.map((product: Product, index: number) => (
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
				setlistLeft((prevState) => [...prevState, listLeft]);
				setlistRight((prevState) => [...prevState, listRight]);
			});
	}, [change]);
	useEffect(() => {
		window.addEventListener('scroll', (event: Event) => handleNavigation(event, change));

		return () => {
			window.removeEventListener('scroll', (event: Event) => handleNavigation(event, change));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleNavigation]);
	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView
					//keywordCard={keyWordCard}
					//bannerCard={bannerCard}
					listLeft={listLeft}
					listRight={listRight}
				/>
			</Suspense>
		</>
	);
}
