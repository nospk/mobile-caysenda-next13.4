import {CategoryNavType} from "@/types/WebSettingType";
import ApiDefinition from "@/services/ApiDefinition";
import API from "@/lib/api";

export const getPageInfo = async (slug:string) => {
	let requestParams:any = {};
	let data:any = {};

	requestParams["FUNC_CD"]    = ApiDefinition.WEBSITE.GETPAGEINFO.FUNC_CD;
	requestParams["SLUG"]       = slug ? slug : '';

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (res.status === "ok") {
		data = res.results[0]
	}
	return data;
}
