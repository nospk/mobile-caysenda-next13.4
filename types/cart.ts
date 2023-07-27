export interface Cart {
  categories: CartCategory[];
  bill: number;
  note: string;
}

export interface CartCategory {
  name: string;
  slug: string;
  condition: number; // condtion price category
  amount: number;
  products: CartProduct[];
  categoryId: number;
  active: boolean;
  selectedDelete: boolean; // selectedDelete same active when new create
  amountActive: number; 
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
  priceDefault: number | null;
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
  selectedDelete: boolean; // selectedDelete same active when new create
}

export interface CartVariant {
  name: string;
  thumbnail: string;
  sku: string;
  price: number;
  quantity: number;
  vip1: number | null;
  vip2: number | null;
  vip3: number | null;
  vip4: number | null;
  selected: boolean;
  variantId: number;
  selectedDelete: boolean; // selectedDelete same selected when new create
}
