'use client';
import { useEffect, useState, useCallback } from 'react';
import styles from './FlexTwoColView.module.css';
import ProductCard from '@/components/ProductCard';

import type { Product } from '@/types/product';
import type { Banner } from '@/types/banner';
import type { KeyWord } from '@/types/keyword';
import BannerCard from '@/components/BannerCard';
import KeyWordCard from '@/components/KeyWordCard';
import React from 'react';

interface Props {
	banners?: Banner[];
	keyWords?: KeyWord;
	data: Product[] | unknown;
}

const FlexTwoColView = function FlexTwoColView({
	banners,
	keyWords,
	data,
}: {
	banners?: Banner[];
	keyWords?: KeyWord;
	data: Product[];
}) {
	let listLeft = data.slice(0, 4);
	let listRight = data.slice(4, 8);
	const [render, setRender] = useState<boolean>(false);
	const [dataLeft, setListLeft] = useState<Product[]>(listLeft);
	const [dataRight, setListRight] = useState<Product[]>(listRight);
	const [banner, setBanner] = useState<Banner[]>(banners ? banners : []);
	const [keyWord, setKeyWord] = useState<KeyWord>(keyWords ? keyWords : []);
	const [check, setCheck] = useState<boolean>(false);
	// const listslideBanner = props.banners
	// 	? props.banners.map((banner: string) => {
	// 			return {
	// 				src: banner,
	// 				alt: 'Slide Card',
	// 				link: '',
	// 			};
	// 	  })
	// 	: [];

	//const bannerCard = <BannerCard key="banner" banner={listslideBanner} />;
	//const keyWordCard = <KeyWordCard key="keyword" keywords={keyWords} />;

	// useEffect(() => {
	// 	if (render) {
	// 		let left2 = props.data.slice(10, 15);
	// 		let right2 = props.data.slice(15, 20);
	// 		setListLeft2(left2);
	// 		setListRight2(right2);
	// 		setRender(false);
	// 	}
	// }, []);
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		console.log(listLeft2);
	// 		setListLeft((state) => [...state, ...listLeft2] as Data[]);
	// 		setListRight((state) => [...state, ...listRight2] as Data[]);
	// 	}, 5000);
	// 	return () => clearTimeout(timer);
	// }, [listLeft2, listRight2]);

	const handleNavigation = useCallback((e: Event) => {
		const window = e.currentTarget as Window;
		if (window.scrollY == 0 || !window.scrollY) {
			setRender(false);
		}
		if (window.scrollY > 200 && check == false) {
			setRender(true);
		}
		console.log(window.scrollY, render);
	}, []);

	// useEffect(() => {
	// 	getData().then((products) => {
	// 		const productsLefts = products.slice(5, 10);
	// 		const productsRights = products.slice(15, 20);
	// 		setListLeft((state) => [...state, ...productsLefts] as Data[]);
	// 		setListRight((state) => [...state, ...productsRights] as Data[]);
	// 	});
	// }, [change]);

	useEffect(() => {
		window.addEventListener('scroll', (event: Event) => handleNavigation(event));

		return () => {
			window.removeEventListener('scroll', (event: Event) => handleNavigation(event));
		};
	}, [handleNavigation]);
	return (
		<div className={styles.flex2col}>
			<div className="flex-1">
				{dataLeft.map((data: Product, index: number) => {
					if (index == 0 && banner.length > 0) {
						return (
							<React.Fragment key="col1">
								<BannerCard key="banner" banner={banner} />
								<ProductCard
									key={data.name}
									name={data.name}
									price={data.price}
									sold={data.sold}
									image={data.image}
									unit={data.unit}
									data={data.data}
									link={data.link}
									priority={index == 0 ? true : false}
								/>
							</React.Fragment>
						);
					}
					return (
						<ProductCard
							key={data.name}
							name={data.name}
							price={data.price}
							sold={data.sold}
							image={data.image}
							unit={data.unit}
							data={data.data}
							link={data.link}
							priority={index == 0 ? true : false}
						/>
					);
				})}
			</div>
			<div className="flex-1">
				{dataRight.map((data: Product, index: number) => {
					if (index == 3 && keyWord.length > 0) {
						return (
							<React.Fragment key="col2">
								<KeyWordCard key="keyword" keywords={keyWord} />
								<ProductCard
									key={data.name}
									name={data.name}
									price={data.price}
									sold={data.sold}
									image={data.image}
									unit={data.unit}
									data={data.data}
									link={data.link}
								/>
							</React.Fragment>
						);
					}
					return (
						<ProductCard
							key={data.name}
							name={data.name}
							price={data.price}
							sold={data.sold}
							image={data.image}
							unit={data.unit}
							data={data.data}
							link={data.link}
							priority={index == 0 ? true : false}
						/>
					);
				})}
			</div>
		</div>
	);
};
/**
 * Flex chia 2 cột

 */
export default FlexTwoColView as unknown as (props: Props) => JSX.Element;
