import API from "@/lib/api";
import type { Cart } from "@/types/cart";
import getBaseUrl from "@/lib/getBaseUrl";

const getCart = async () => {
  const cart = {
    user_id: 123,
    categories: [],
    note: "",
  } as Cart;

  return cart;
};

const CartService = {
  getCart,
};
export default CartService;
