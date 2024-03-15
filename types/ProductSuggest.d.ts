export type T_ProductSuggest = {
  thumbnail: string;
  category_slug: string;
  name: string;
  price: [
    {
      money: number;
      condition: number;
    }
  ];
  sold: number;
  unit: string;
  link: string;
  type: "product-suggest";
};
