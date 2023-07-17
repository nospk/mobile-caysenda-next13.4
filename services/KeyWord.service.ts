import API from '@/lib/api'
import type { KeyWord } from '@/types/keyword'
import getBaseUrl from '@/lib/getBaseUrl'
import ApiDefinition from "@/services/ApiDefinition";

const getKeyWordTopData = async () => {
	const keywords = {
		type: 'keyword',
		data: ['Áo Nữ', 'Thời trang nam nữ', 'ốp điện thoại', 'Quần áo trẻ 1']
	} as KeyWord

	return keywords
}
const getKeyWordCardData = async ({orderBy, limit}: any) => {
	const keywords:KeyWord = {
		type: 'keyword',
		data: []
	};

	let requestParams:any = {};
	requestParams["FUNC_CD"] = ApiDefinition.KEYWORD.RAND.FUNC_CD;

	if (orderBy) {
		requestParams[ApiDefinition.KEYWORD.RAND.PARAMS.PARAM1] = orderBy;
	}

	if (limit) {
		requestParams[ApiDefinition.KEYWORD.RAND.PARAMS.PARAM2] = limit;
	}

	let res = await API.GET({
		path: '/api/rest/dataaccess',
		data: requestParams
	});

	if (res.status === "ok") {
		keywords.data = res.results.map((data:any) => {
			return data.KEYWORD;
		});
	}

	return keywords
}
const KeyWordService = {
	getKeyWordTopData,
	getKeyWordCardData
}
export default KeyWordService
