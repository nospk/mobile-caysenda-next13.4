"use client";
import { useEffect, useState } from "react";
import styles from "./FlexTwoColView.module.css";
import ProductCard from "@/components/ProductCard";
import ProductService from "@/services/Product.service";
import type { Product } from "@/types/product";
import type { Banner } from "@/types/banner";
import type { KeyWord } from "@/types/keyword";
import type { Video } from "@/types/video";
import BannerCard from "@/components/BannerCard";
import KeyWordCard from "@/components/KeyWordCard";
import React from "react";
import useScroll from "@/components/hook/useScroll";
import VideoCard from "../VideoCard";
import {ProductListParamType} from "@/services/types/ProductRequestType";

type View = Banner | KeyWord | Product | Video;
interface Props {
  banners?: Banner;
  keyWords?: KeyWord;
  data: Product[] | Video[];
  maxPage:number;
  requestData:ProductListParamType;
}

const renderView = (data: View[]) => {
	let view = data.map((item: View, index: number) => {
		if (item.type === "banner")
			return <BannerCard key="banner" banner={item.data} />;
		if (item.type === "product")
			return (
				<ProductCard
					key={item.data.name + index}
					name={item.data.name}
					price={item.data.price}
					sold={item.data.sold}
					image={item.data.image}
					unit={item.data.unit}
					product={item.data.product}
					link={item.data.link}
					priority={index == 0 ? true : false}
					productid={item.data.id}
					retail={item.data.retail}
				/>
			);
		if (item.type === "keyword")
		return <KeyWordCard key="keyword" keywords={item.data} />;
		if (item.type === "video")
		return (
			<VideoCard
			key={index}
			name="Kẹo dẻo"
			detail="Kẹo dẻo mềm thơm ngon"
			image="https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800"
			id="349938442291"
			/>
		);
	});
	return view;
};
const FlexTwoColView = function FlexTwoColView({banners, keyWords, data,maxPage, requestData}: Props) {
	let listLeft: any = data.slice(0, 4);
	let listRight: any = data.slice(4, 8);
	const [isLoanding, setIsLoading] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(1);

	if (banners) listLeft.unshift(banners);
	if (keyWords) listRight.splice(3, 0, keyWords);

	const [dataLeft, setListLeft] = useState<{ type: any; data: any }[]>(listLeft);
	const [dataRight, setListRight] = useState<{ type: any; data: any }[]>(listRight);

	const loadData: boolean = useScroll();
	const fetchData = async () => {
		setIsLoading(true);

		try {
			let nextPage = currentPage + 1;

			if (nextPage <= maxPage) {
				requestData.page = nextPage;

				const res = await ProductService.getProductList(requestData);
				let newListLeft = res.slice(0,res.length / 2);
				let newListRight = res.slice(res.length / 2, res.length);

				setListLeft((prevData) => [...prevData, ...newListLeft]);
				setListRight((prevData) => [...prevData, ...newListRight]);
				console.log(currentPage, maxPage)
				setCurrentPage(nextPage);
			}

		} catch (error) {
			console.error("Error fetching data:", error);
		}

		setIsLoading(false);
	};
	useEffect(() => {
		if (!isLoanding && loadData) {
			fetchData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadData]);

	const viewLeft = renderView(dataLeft);
	const viewRight = renderView(dataRight);
	return (
		<>
		<div className={styles.flex2col}>
			<div className="flex-1">{viewLeft}</div>
			<div className="flex-1">{viewRight}</div>
		</div>
		</>
	);
};
/**
 * Flex chia 2 cột

 */
export default FlexTwoColView as unknown as (props: Props) => JSX.Element;
