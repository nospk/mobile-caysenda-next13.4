import {Banner} from "@/types/banner";
import ApiDefinition from "@/services/ApiDefinition";
import API from "@/lib/api";
import {CategoryNavType} from '../types/WebSettingType'
export const getCategoryNav = async () => {
	let requestParams:any = {};
	let data:CategoryNavType[] = [];

	requestParams["FUNC_CD"]    = ApiDefinition.SETTING.WEBSITE.FUNC_CD;
	requestParams["CODE"]       = 'NAVCATEGORY';

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (res.status === "ok") {
		data = JSON.parse(res.results[0].VALUE)
	}

	return data;
}
