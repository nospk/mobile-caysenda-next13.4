import { ProductQuickViewType, QuickViewType } from '@/components/AddToCartModal/types/QuickViewType';
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
	//console.log(requestParams)
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

const getQuickview = async (requetsData:ProductDetailParamType, retail?: boolean) => {
	const data = await getDetail(requetsData);
	let returnData:QuickViewType = {
		product: {
			condition: data.conditiondefault,
			condition1: data.condition1,
			condition2: data.condition2,
			price: data.price[0].money,
			price1: data.price[1].money,
			price2: data.price[2].money,
			unit: data.unit,
			thumbnail: data.thumbnail,
			pricemin: data.pricewholesale.min,
			pricemax: data.pricewholesale.max
		},
		variants: []
	}

	let variants = [];
	if (data.variant_group && data.variant_group.length > 0) {
		data.variant_group.forEach((group:any) => {
			let variantRes = {
				name: group.name,
				image: group.thumbnail ? "https://caysenda.vn" + group.thumbnail : "",
				stock: 0,
				order: 0,
				orderPrice: 0,
				sku: group.skuGroup,
				variants: []
			}
			let chilrenList = data.variants.filter((variant:any) => variant.parent === group.skuGroup).map((variant:any) => {
				return {
					id: variant.id,
					name: variant.name,
					sku: variant.sku,
					stock: variant.stock,
					price: variant.price,
					order: 0,
				}
			});

			variantRes.variants = chilrenList;
			variantRes.stock = chilrenList.reduce((res:any, item:any) => (res + item.stock), 0);
			variants.push(variantRes);
		})
	} else {
		variants = data.variants.map((variant:any) => {
			return {
				name: variant.name,
				image: variant.thumbnail,
				stock: variant.stock,
				order: 0,
				orderPrice: 0,
				sku: variant.sku,
				variants: [
					{
						id: variant.id,
						name: variant.name,
						sku: variant.sku,
						stock: variant.stock,
						price: variant.price,
						order: 0,
					}
				]
			}
		});
	}

	returnData.variants = variants;
	return returnData;
}

const getTop3Product = async () => {
	let data = [];
	let requestParams:any = {};
	requestParams["FUNC_CD"] = ApiDefinition.PRODUCT.TOP3PRODUCT.FUNC_CD;

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (res.status === "ok") {
		data = res.results;
	}
	

	return data;
}

const getTop10Product = async () => {
	let data = [];
	let requestParams:any = {};
	requestParams["FUNC_CD"] = ApiDefinition.PRODUCT.TOP10PRODUCT.FUNC_CD;

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});
	//console.log(res);
	if (res.status === "ok") {
		data = res.results;
	}

	return data;
}

const ProductService = {
	getProductList,
	getDetail,
	getQuickview,
	getTop3Product,
	getTop10Product
}
export default ProductService;
