"use client";
import AccountService from "@/services/Account.service";
import { useEffect, useState } from "react";
import { ProductDetail } from "@/types/product";
export default function ProductRelated() {
  let [data, setData] = useState<ProductDetail[]>([]);
  useEffect(() => {
    let products = AccountService.GetProductRecent();
    setData(products);
  }, []);
  return (
    <div className="relative flex flex-row items-center justify-center space-x-3 font-bold">
        <div>Quan Tâm</div>
        <div>Gợi Ý</div>
    </div>
  );
}
