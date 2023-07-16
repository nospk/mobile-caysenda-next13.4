export interface ProductListParamType {
	catId			?: string | undefined,
	catSlug			?: string | undefined,
	page			?: number | undefined,
	selectType		?: string | undefined,
	randFlag		?: string | undefined
}

export interface ProductDetailParamType {
	productId		?: number | undefined,
	slug			?: string | undefined
}