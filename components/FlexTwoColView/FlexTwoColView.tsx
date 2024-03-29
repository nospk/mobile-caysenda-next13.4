"use client";
import { useEffect, useState } from "react";
import styles from "./FlexTwoColView.module.css";
import ProductCard from "@/components/ProductCard";
import ProductService from "@/services/Product.service";
import type { Product } from "@/types/Product";
import type { T_ProductRelated } from "@/types/ProductRelated";
import type { T_ProductSuggest } from "@/types/ProductSuggest";
import type { Banner } from "@/types/banner";
import type { KeyWord } from "@/types/keyword";
import type { Video } from "@/types/video";
import BannerCard from "@/components/BannerCard";
import KeyWordCard from "@/components/KeyWordCard";
import ProductRelatedCard from "@/components/ProductRelatedCard";
import React from "react";
import useScroll from "@/components/hook/useScroll";
import VideoCard from "../VideoCard";
import { ProductListParamType } from "@/services/types/ProductRequestType";
import { convertNameToURL } from "@/lib/common";
type T_Data = Banner | KeyWord | Product | Video | T_ProductRelated | T_ProductSuggest;
interface Props {
  banners?: Banner;
  keyWords?: KeyWord;
  data: Product[] | Video[] | T_ProductRelated[] | T_ProductSuggest[];
  maxPage: number;
  requestData: ProductListParamType;
}

const renderView = (data: T_Data[]) => {
  let view = data.map((item: T_Data, index: number) => {
    if (item.type === "banner") return <BannerCard key="banner" banner={item.data} />;
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
    if (item.type === "keyword") return <KeyWordCard key="keyword" keywords={item.data} />;
    if (item.type === "video")
      return <VideoCard key={index} name={item.name} detail={item.detail} image={item.thumbnail} id={item.productId} />;
    if (item.type === "product-recent")
      return (
        <ProductRelatedCard
          key={item.name + index}
          name={item.name}
          price={item.price[0].money}
          sold={item.sold}
          image={item.thumbnail}
          unit={item.unit}
          link={`${"\\" + item.category_slug + "\\" + convertNameToURL(item.name)}`}
        />
      );
    if (item.type === "product-suggest")
      return (
        <ProductRelatedCard
          key={item.name + index}
          name={item.name}
          price={item.price[0].money}
          sold={item.sold}
          image={item.thumbnail}
          unit={item.unit}
          link={`${"\\" + item.category_slug + "\\" + convertNameToURL(item.name)}`}
        />
      );
  });
  return view;
};
const FlexTwoColView = function FlexTwoColView({ banners, keyWords, data, maxPage, requestData }: Props) {
  let listLeft: any = data.slice(0, Math.round(data.length / 2));
  let listRight: any = data.slice(Math.round(data.length / 2), data.length);
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
        let newListLeft = res.slice(0, Math.round(res.length / 2));
        let newListRight = res.slice(Math.round(res.length / 2), res.length);

        setListLeft((prevData) => [...prevData, ...newListLeft]);
        setListRight((prevData) => [...prevData, ...newListRight]);
        //console.log(currentPage, maxPage);
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
        <div className={styles.divide}>{viewLeft}</div>
        <div className={styles.divide}>{viewRight}</div>
      </div>
      <div className={styles.end}>
        <span className={styles.text}>--- Không còn sản phẩm để hiển thị ---</span>
      </div>
    </>
  );
};
/**
 * Flex chia 2 cột

 */
export default FlexTwoColView as unknown as (props: Props) => JSX.Element;
