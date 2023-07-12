import API from '@/lib/api'
import ApiDefinition from "@/services/ApiDefinition";
import {ProductDetailParamType, ProductListParamType} from "@/services/types/ProductRequestType";

const getProductList = async (params:ProductListParamType) => {
	let limit:number = 20;
	let offset:number = 0;
	let requestParams:any = {};

	if (params.page && params.page > 0) {
		offset = (params.page - 1) * limit;
	}

	requestParams["FUNC_CD"] = ApiDefinition.PRODUCT.PRODUCTLIST.FUNC_CD;
	// params
	requestParams[ApiDefinition.PRODUCT.PRODUCTLIST.PARAMS.PARAM1]	= params.catId ? params.catId:'';
	requestParams[ApiDefinition.PRODUCT.PRODUCTLIST.PARAMS.PARAM2]	= params.catSlug ? params.catSlug:'';
	requestParams[ApiDefinition.PRODUCT.PRODUCTLIST.PARAMS.PARAM5]	= limit;
	requestParams[ApiDefinition.PRODUCT.PRODUCTLIST.PARAMS.PARAM4]	= offset;
	requestParams[ApiDefinition.PRODUCT.PRODUCTLIST.PARAMS.PARAM3]	= params.selectType ? params.selectType : '';
	requestParams[ApiDefinition.PRODUCT.PRODUCTLIST.PARAMS.PARAM6]	= params.randFlag ? params.randFlag : '';

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (params.selectType === "@COUNT") {
		if (res.status === "ok") {
			return {
				count:res.results[0].COUNT,
				totalPages: Math.ceil((res.results[0].COUNT / limit))
			}
		}
	}

	if (res.status === "ok") {
		return res.results.map((data:any) => {
			return {
				type: "product",
				data: data
			}
		});
	}

	return [];
}

const getDetail = async ({productId,slug}:ProductDetailParamType) => {
	let data = null;
	let requestParams:any = {};
	requestParams["FUNC_CD"] = ApiDefinition.PRODUCT.PRODUCTDETAIL.FUNC_CD;
	// params
	requestParams[ApiDefinition.PRODUCT.PRODUCTDETAIL.PARAMS.PARAM1]	= productId ? productId :'';
	requestParams[ApiDefinition.PRODUCT.PRODUCTDETAIL.PARAMS.PARAM2]	= slug ? slug :'';

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (res.status === "ok") {
		data = res.results[0];

		let gallery = JSON.parse(data.quickviewGallery);
		data.quickviewGallery = gallery ? gallery.map((image:string) => "https://caysenda.vn" + image) : [];
	}

	return data;
}

const ProductService = {
	getProductList,
	getDetail
}
export default ProductService;
