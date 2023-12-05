"use client";
import AccountService from "@/services/Account.service";
import { useEffect, useState } from "react";
import { T_ProductRelated } from "@/types/ProductRelated";
import FlexTwoColView from "@/components/FlexTwoColView";
export default function ProductRelated() {
  let [productData, setProductData] = useState<T_ProductRelated[]>([]);
  useEffect(() => {
    let products = AccountService.GetProductRecent();
    setProductData(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="relative flex font-bold h-3">
        <div className="absolute right-[52%]">Quan Tâm</div>
        <div className=""></div>
        <div className="absolute left-[52%]">Gợi Ý</div>
      </div>
      {productData.length > 0 && <FlexTwoColView data={productData} maxPage={1} requestData={{}} />}
    </>
  );
}
