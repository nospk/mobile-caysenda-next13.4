import React, { Suspense } from "react";
import Order from "@/components/Order";
import { OrderType } from "types/order";
import OrderService from "@/services/Order.service";
import ProductService from "@/services/Product.service";
import { ProductListParamType } from "@/services/types/ProductRequestType";
import Loading from "@/components/Loading";
import FlexTwoColView from "@/components/FlexTwoColView";

export const dynamic = "force-dynamic";
export default async function Page({ searchParams }: any) {
  const dataOrder = (await OrderService.getOrder(searchParams.type)) as unknown as OrderType[];

  //Get Last Category When User Buy
  let requestData: ProductListParamType = {};
  requestData.catSlug = "chau-da-giac";
  let dataCategory = await ProductService.getProductList({ selectType: "@SELECT", ...requestData });
  let page = await ProductService.getProductList({ selectType: "@COUNT", ...requestData });
  return (
    <>
      <Order List_Order={dataOrder} type={searchParams.type} />
      <Suspense fallback={<Loading />}>
        <FlexTwoColView data={dataCategory} maxPage={page.totalPages} requestData={requestData} />
      </Suspense>
    </>
  );
}
