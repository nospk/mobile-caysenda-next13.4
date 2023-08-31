export interface OrderType {
    OrderId: string;
    Product: any;
    status: string;
    price?: number;
    category?: CartCategory[];
  }
  
  export interface CartCategory {
    name: string; 
    slug: string;
    condition: number;
    amount: number;
    products: CartProduct[];
    bill: number;
    id: number;
  }
  
  export interface CartProduct {
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
    variants: CartVariant[];
  }
  
  export interface CartVariant {
    name: string;
    thumbnail: string;
    id:number;
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
  