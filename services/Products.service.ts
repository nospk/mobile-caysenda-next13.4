import API from "@/lib/api";
import type { Product } from "@/types/product";
import getBaseUrl from "@/lib/getBaseUrl";

const getListProduct = async () => {
  let products: Product[] = await API.GETOTHER({
    path: `${getBaseUrl() + "/api/product"}`,
  });
  return products;
};
const ProductService = {
  getListProduct,
};
export default ProductService;
