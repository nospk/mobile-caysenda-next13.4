export interface OrderType {
  id: number;
  status: string;
  order_amount: number;
  ship: number;
  full_address: string;
  address: string;
  dictrict: string;
  province: string;
  ward: string;
  order_detail: OrderDetailType[] | [];
}

export interface OrderDetailType {
  product_id: number;
  product_name: string;
  variant_name: string;
  thumbnail: string;
  price: number;
  quantity: number;
  variant_id: number;
}

export interface OrderProduct {
  productId: number;
  name: string;
  id: number;
  sku: string;
  slug: string;
  conditionDefault: number;
  condition1: number;
  condition2: number;
  condition3: number;
  condition4: number;
  priceDefault: number;
  price1: number;
  price2: number;
  price3: number;
  price4: number;
  thumbnail: string;
  categoryId: number;
  retail: boolean;
  quantity: number;
  range: number;
  amount: number;
  active: boolean;
  unit: string;
  variants: OrderVariant[];
}

export interface OrderVariant {
  name: string;
  thumbnail: string;
  id: number;
  sku: string;
  price: number;
  quantity: number;
  priceDefault: number;
  vip1: number;
  vip2: number;
  vip3: number;
  vip4: number;
  selected: boolean;
  variantId: number;
}
