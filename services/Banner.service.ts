import API from '@/lib/api'
import type { Banner } from '@/types/banner'
import getBaseUrl from '@/lib/getBaseUrl'
import ApiDefinition from "@/services/ApiDefinition";

const getBannerCardData = async () => {
	let requestParams:any = {};
	let data:Banner = {
		type:'banner',
		data:[]
	}

	requestParams["FUNC_CD"] = ApiDefinition.SETTING.BANNER.FUNC_CD;

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (res.status === "ok") {
		data.data = res.results;
	}

	return data;
}
const BannerService = {
	getBannerCardData
}
export default BannerService
