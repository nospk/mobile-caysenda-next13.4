export interface ProductQuickViewType {
	price: number,
	price1: number,
	price2: number,
	condition: number,
	condition1: number,
	condition2: number,
	unit: string,
	thumbnail: string,
	pricemin: number,
	pricemax: number
}

export interface VariantQuickViewType {
	name: string,
	thumbnail: string,
	stock: number,
	order: number,
	sku: string,
	parent: string
}

export interface QuickViewType {
	product : ProductQuickViewType,
	variants: VariantQuickViewType[]
}