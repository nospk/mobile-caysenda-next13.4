import { get, reset, update, activeVariant, activeProduct, activeCategory } from "./cart.slice";

// Action creators thủ công
export const resetCart = () => {
  return reset();
};
export const getCart = () => {
  return get();
};

export const updateCart = ({
  categoryId,
  productId,
  variantId,
  quantity,
}: {
  categoryId: number;
  productId: number;
  variantId: number;
  quantity: number;
}) => {
  return update({ categoryId, productId, variantId, quantity });
};

export const getActiveVariant = ({
  active,
  categoryId,
  productId,
  variantId,
}: {
  active: boolean;
  categoryId: number;
  productId: number;
  variantId: number;
}) => {
  return activeVariant({ active, categoryId, productId, variantId });
};

export const getActiveProduct = ({
  active,
  categoryId,
  productId,
}: {
  active: boolean;
  categoryId: number;
  productId: number;
}) => {
  return activeProduct({ active, categoryId, productId });
};

export const getActiveCategory = ({
  active,
  categoryId,
}: {
  active: boolean;
  categoryId: number;
}) => {
  return activeCategory({ active, categoryId });
};