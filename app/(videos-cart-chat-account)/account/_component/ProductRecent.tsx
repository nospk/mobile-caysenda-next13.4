"use client";
import { Icon } from "@/components/Icon";
import { FcPaid } from "react-icons/fc";
import AccountService from "@/services/Account.service";
import { useEffect, useState } from "react";
import { ProductDetail } from "@/types/Product";
export default function ProductRecent() {
  let [data, setData] = useState<ProductDetail[]>([]);
  useEffect(() => {
    let products = AccountService.GetProductRecent();
    setData(products);
  }, []);
  return (
    <div className="relative flex items-center justify-center rounded-lg bg-white py-3 pl-2 pr-4">
      <FcPaid className="h-[40px] w-[40px] justify-start" />
      <span className="text-base font-semibold"> Sản Phẩm Quan Tâm</span>
      <div className="grow"></div>
      <div className="z-10">
        {data.length > 0 && (
          <Icon
            className="h-[45px] w-[45px] rounded-full border-2 border-green-500"
            src={data[0].thumbnail}
            alt="products of interest"
            isCricle={true}
          />
        )}
      </div>
      <div className="ml-[-10px]">
        {data.length > 1 && (
          <Icon
            className="h-[45px] w-[45px] rounded-full border-2 border-green-500"
            src={data[1].thumbnail}
            alt="products of interest"
            isCricle={true}
          />
        )}
      </div>
      <div className="absolute bottom-3 right-0 z-20 ">
        <span className="rounded-full bg-green-500 px-2 py-0.5 text-sm text-white">{data.length}</span>
      </div>
    </div>
  );
}
