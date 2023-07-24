export interface Cart {
  categories: CartCategory[];
  bill: number;
  note: string;
}

export interface CartCategory {
  name: string;
  slug: string;
  condition: number;
  amount: number;
  products: CartProduct[];
  categoryId: number;
  active: boolean;
  selectedDelete: boolean
}

export interface CartProduct {
  productId: number;
  name: string;
  sku: string;
  slug: string;
  conditionDefault: number;
  condition1: number | null;
  condition2: number | null;
  condition3: number | null;
  condition4: number | null;
  price1: number | null;
  price2: number | null;
  price3: number | null;
  price4: number | null;
  thumbnail: string;
  retail: boolean;
  quantity: number;
  amount: number;
  active: boolean;
  unit: string;
  variants: CartVariant[];
  selectedDelete: boolean
}

export interface CartVariant {
  name: string;
  thumbnail: string;
  sku: string;
  price: number;
  quantity: number;
  vip1: number;
  vip2: number;
  vip3: number;
  vip4: number;
  selected: boolean;
  variantId: number;
  selectedDelete: boolean
}
