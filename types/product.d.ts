export interface Product {
	data: {
		image: string,
		name: string,
		price: number,
		sold: number,
		unit: string,
		link: string,
		product: object,
		id: number,
		retail: number
	}
	type: 'product'
}

export interface Variant {
	dimension			?: string,
	id					?: string,
	parent				?: string,
	price				?: string,
	sku					?: string,
	weight				?: string
}

export interface Price {
	money				?: number | null,
	condition			?: string | null
}

export interface PriceWholeSale {
	min					?: number | null,
	max					?: number | null
}

export interface ProductDetail {
	id					: number,
	name				: string,
	sku					: string,
	thumbnail			: string,
	conditiondefault	: number,
	condition1 			: number,
	condition2			: number,
	price				: Price[] | [],
	pricewholesale		: PriceWholeSale,
	unit				: string,
	quickviewGallery	: string[],
	retail				: boolean,
	description			: string,
	content				: string,
	unit				: string,
	KEYWORD				: string,
	gallery				: string[],
	sold				: number,
	category_id			: number,
	category_name		: string,
	category_slug		: string
}