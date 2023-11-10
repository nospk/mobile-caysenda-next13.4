import FlexTwoColView from '@/components/FlexTwoColView';
import ProductService from "@/services/Product.service";
import BannerService from "@/services/Banner.service";
import KeyWordService from "@/services/KeyWord.service";
import {ProductListParamType} from "@/services/types/ProductRequestType";

export const revalidate = 3600

export const Wrapper = async () => {
	let requestData:ProductListParamType = {}
	let data = await ProductService.getProductList({selectType:"@SELECT", ...requestData});
	let page = await ProductService.getProductList({selectType:"@COUNT", ...requestData});

	const getBanner = await BannerService.getBannerCardData();
	const getKeyWords = await KeyWordService.getKeyWordCardData({orderBy : 'RAND', limit: '10'});
	return <FlexTwoColView data={data} maxPage={page.totalPages} requestData={requestData} banners={getBanner} keyWords={getKeyWords} />;
};
export default Wrapper;
