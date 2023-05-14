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
import useScroll from '@/components/hook/useScroll';
import VideoCard from '../VideoCard';
type Video = { type: 'video'; data: {} };
type View = Banner | KeyWord | Product | Video;
interface Props {
	banners?: Banner;
	keyWords?: KeyWord;
	data: Product[] | Video[];
}
const renderView = (data: View[]) => {
	let view = data.map((item: View, index: number) => {
		if (item.type === 'banner') return <BannerCard key="banner" banner={item.data} />;
		if (item.type === 'product')
			return (
				<ProductCard
					key={item.data.name}
					name={item.data.name}
					price={item.data.price}
					sold={item.data.sold}
					image={item.data.image}
					unit={item.data.unit}
					product={item.data.product}
					link={item.data.link}
					priority={index == 0 ? true : false}
				/>
			);
		if (item.type === 'keyword') return <KeyWordCard key="keyword" keywords={item.data} />;
		if (item.type === 'video')
			return (
				<VideoCard
					key={index}
					name="Kẹo dẻo"
					detail="Kẹo dẻo mềm thơm ngon"
					image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
					id="349938442291"
				/>
			);
	});
	return view;
};
const FlexTwoColView = function FlexTwoColView({
	banners,
	keyWords,
	data,
}: {
	banners?: Banner[];
	keyWords?: KeyWord[];
	data: Product[] | Video[];
}) {
	let listLeft: any = data.slice(0, 4);
	let listRight: any = data.slice(4, 8);
	if (banners) listLeft.unshift(banners);
	if (keyWords) listRight.splice(3, 0, keyWords);
	const [isLoanding, setIsLoading] = useState<boolean>(false);
	const [dataLeft, setListLeft] = useState<{ type: any; data: any }[]>(listLeft);
	const [dataRight, setListRight] = useState<{ type: any; data: any }[]>(listRight);

	const loadData = useScroll();
	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/api/product`, {
				cache: 'no-store',
			});
			const newData = await response.json();
			let listLeft = newData.slice(10, 15);
			let listRight = newData.slice(15, 20);
			// Xử lý dữ liệu mới từ API
			setListLeft((prevData) => [...prevData, ...listLeft]);
			setListRight((prevData) => [...prevData, ...listRight]);
		} catch (error) {
			console.error('Error fetching data:', error);
		}

		setIsLoading(false);
	};
	useEffect(() => {
		if (!isLoanding && loadData) {
			console.log('loading');
			fetchData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadData]);
	const viewLeft = renderView(dataLeft);
	const viewRight = renderView(dataRight);
	return (
		<div className={styles.flex2col}>
			<div className="flex-1">{viewLeft}</div>
			<div className="flex-1">{viewRight}</div>
		</div>
	);
};
/**
 * Flex chia 2 cột

 */
export default FlexTwoColView as unknown as (props: Props) => JSX.Element;
