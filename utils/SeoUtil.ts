export const convertPageInfoToMeta:any =  (pageInfo:any) => {
	return {
		title               :pageInfo.title,
		description         :pageInfo.description,
		generator           : pageInfo.title,
		applicationName     : pageInfo.title,
		referrer            : 'origin-when-cross-origin',
		keywords            : pageInfo.keyword ? pageInfo.keyword : pageInfo.description,
		authors             : [{ name: pageInfo.title }, { name: pageInfo.title, url: pageInfo.domain }],
		creator             : pageInfo.title,
		formatDetection: {
			email: pageInfo.email,
			address: pageInfo.address ,
			telephone: pageInfo.phoneNumber
		},
	}
}
