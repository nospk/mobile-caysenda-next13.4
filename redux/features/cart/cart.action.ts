import { get, fee_delivery, reset, update, activeVariant } from "./cart.slice";

// Action creators thủ công
export const resetCart = () => {
  return reset();
};
export const getCart = () => {
  return get();
};
export const getFeeDelivery = () => {
  return fee_delivery();
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

export const getActiveVariant = ({
  active,
  catId,
  productId,
  variantId,
}: {
  active: boolean;
  catId: number;
  productId: number;
  variantId: number;
}) => {
  return activeVariant({ active, catId, productId, variantId });
};
