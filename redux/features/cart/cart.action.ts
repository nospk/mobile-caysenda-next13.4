import {
  get,
  reset,
  update,
  activeVariant,
  activeProduct,
  activeCategory,
  removeVariant,
  removeProduct,
  deleteTotal,
  activeTotal,
} from "./cart.slice";

import type { Cart } from "@/types/cart";
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
  quantityNew,
  quantityOld,
  condition,
}: {
  categoryId: number;
  productId: number;
  variantId: number;
  quantityNew: number;
  quantityOld: number;
  condition: number;
}) => {
  return update({
    categoryId,
    productId,
    variantId,
    quantityNew,
    quantityOld,
    condition,
  });
};

export const getActiveVariant = ({
  active,
  categoryId,
  productId,
  variantId,
  isRemove,
}: {
  active: boolean;
  categoryId: number;
  productId: number;
  variantId: number;
  isRemove: boolean;
}) => {
  return activeVariant({
    active,
    categoryId,
    productId,
    variantId,
    isRemove,
  });
};

export const getActiveProduct = ({
  active,
  categoryId,
  productId,
  isRemove,
}: {
  active: boolean;
  categoryId: number;
  productId: number;
  isRemove: boolean;
}) => {
  return activeProduct({ active, categoryId, productId, isRemove });
};

export const getActiveCategory = ({
  active,
  categoryId,
  isRemove,
}: {
  active: boolean;
  categoryId: number;
  isRemove: boolean;
}) => {
  return activeCategory({ active, categoryId, isRemove });
};

export const getRemoveVariant = ({
  categoryId,
  productId,
  variantId,
}: {
  categoryId: number;
  productId: number;
  variantId: number;
}) => {
  return removeVariant({
    categoryId,
    productId,
    variantId,
  });
};

export const getRemoveProduct = ({
  categoryId,
  productId,
}: {
  categoryId: number;
  productId: number;
}) => {
  return removeProduct({
    categoryId,
    productId,
  });
};

export const getActiveTotal = ({
  active,
  isRemove,
}: {
  active: boolean;
  isRemove: boolean;
}) => {
  return activeTotal({ active, isRemove });
};

export const getDeleteTotal = () => {
  return deleteTotal({});
};
