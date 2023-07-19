import API from '@/lib/api'
import type { KeyWord } from '@/types/keyword'
import getBaseUrl from '@/lib/getBaseUrl'
import ApiDefinition from "@/services/ApiDefinition";

const getHistory = () => {
	let data = localStorage.getItem('history')

	if (data) {
		try {
			return JSON.parse(data);
		} catch(e) {
			return [];
		}
	}

	return [];
}

const setHistory = (text:string) => {
	let data = getHistory();

	if (!data.includes(text)) {
		if (data.length < 10) {
			data = [text, ...data];

		} else {
			data = [text,...data.slice(0, 9)];
		}
	}

	localStorage.setItem('history', JSON.stringify(data));
}

const removeHistory = () => {
	localStorage.removeItem('history');
}

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
	getKeyWordCardData,
	historyService: {
		getData: getHistory,
		add: setHistory,
		remove: removeHistory
	}
}
export default KeyWordService
