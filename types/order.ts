import {ListDelivery} from './Delivery'
export interface DetailOrderType {
  OrderId: string;
  Product?: OrderProduct;
  category?: OrderCategory[];
  isdetail: boolean;
}
export interface OrderType {
    OrderId: string;
    Product?: OrderProduct | any;
    status: string;
    totalPrice?: number;
    Deliveryfee?: number;
    Delivery?: ListDelivery[];
    category?: OrderCategory[];
  }
  
  export interface OrderCategory {
    name: string; 
    slug: string;
    condition: number;
    amount: number;
    products: OrderProduct[];
    bill: number;
    id: number;
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
  