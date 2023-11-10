import LayoutProduct from "@/components/Layouts/ProductDefault";
import Loading from "@/components/Loading";
import FlexTwoColView from "@/components/FlexTwoColView/FlexTwoColView";
import {Suspense} from "react";
import {ProductListParamType} from "@/services/types/ProductRequestType";
import ProductService from "@/services/Product.service";
import {getPageInfo} from "@/services/Web.service";
import {convertPageInfoToMeta} from "@/utils/SeoUtil";

export const dynamic = 'force-dynamic';
export async function generateMetadata({ params , searchParams}:any) {
	let pageData = await getPageInfo(searchParams.slug);
	return convertPageInfoToMeta(pageData);
}

export default async function Page({searchParams}:any) {
	let requestData:ProductListParamType = {}
	console.log(searchParams)
	requestData.catSlug = searchParams.slug;
	let data = await ProductService.getProductList({selectType:"@SELECT", ...requestData});
	let page = await ProductService.getProductList({selectType:"@COUNT", ...requestData});

	return(
		<LayoutProduct title={data[0]?.data.catName}>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView
					data={data}
					maxPage={page.totalPages}
					requestData={requestData}
				/>
			</Suspense>
		</LayoutProduct>
	)
}
