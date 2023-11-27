import { OrderType } from "@/types/order";
const countVaraint = (data: OrderType) => {
  let totalVariant = 0;
  data.category.forEach((category) => {
    category.products.forEach((product) => {
      totalVariant += product.variants.length;
    });
  });
  return totalVariant;
};

export { countVaraint };
