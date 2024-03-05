"use client";
import AccountService from "@/services/Account.service";
import { useEffect, useState } from "react";
import { T_ProductRelated } from "@/types/ProductRelated";
import FlexTwoColView from "@/components/FlexTwoColView";
import styles from "./ProductRelated.module.css";
export default function ProductRelated() {
  let [typeActive, setTypeActive] = useState<"related" | "suggest">("related");
  let [productData, setProductData] = useState<T_ProductRelated[]>([]);
  const changActive: (title: "related" | "suggest") => void = (title) => {
    if (title != typeActive) setTypeActive(title);
  };

  useEffect(() => {
    if (typeActive == "related") {
      let products = AccountService.GetProductRecent();
      setProductData(products);
    } else {
      let products = AccountService.GetProductSuggest();
      setProductData(products);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeActive]);
  return (
    <>
      <div className="relative flex h-3 font-bold">
        <div
          className={`${styles.title_right} ${typeActive == "related" ? styles.title_active : null} `}
          onClick={() => {
            changActive("related");
          }}
        >
          Quan Tâm
        </div>
        <div className=""></div>
        <div
          className={`${styles.title_left} ${typeActive == "suggest" ? styles.title_active : null}`}
          onClick={() => {
            changActive("suggest");
          }}
        >
          Gợi Ý
        </div>
      </div>
      {productData.length > 0 && <FlexTwoColView data={productData} maxPage={1} requestData={{}} />}
    </>
  );
}
