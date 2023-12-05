export interface CheckOut {
  categories: {
    name: string;
    id: string;
    products: {
      name: string;
      image: string;
      id: string;
      quantity: number;
      variants: [
        {
          name: string;
          id: string;
          price: number;
          quantity: number;
          weight: number;
        }
      ];
    }[];
  }[];
  totalQuantity: number;
  totalWeight: number;
  variantActive: number;
  amount: number;
  fee: number;
}
