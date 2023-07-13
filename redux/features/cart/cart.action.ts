import { add, get, reset, update } from "./cart.slice";

// Action creators thủ công
export const addNewCart = () => {
  return add();
};

export const resetCart = () => {
  return reset();
};
export const getCart = () => {
  return get();
};
export const updateCart = ({
  catId,
  productId,
  variantId,
  quantity,
}: {
  catId: number;
  productId: number;
  variantId: number;
  quantity: number;
}) => {
  return update({ catId, productId, variantId, quantity });
};
