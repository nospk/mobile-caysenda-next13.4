import {
  get,
  reset,
  update,
  activeVariant,
  activeProduct,
  activeCategory,
  activeTotal,
  removeVariant,
} from "./cart.slice";

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
  quantityProduct,
  condition,
}: {
  categoryId: number;
  productId: number;
  variantId: number;
  quantityNew: number;
  quantityOld: number;
  quantityProduct: number;
  condition: number;
}) => {
  return update({
    categoryId,
    productId,
    variantId,
    quantityNew,
    quantityOld,
    quantityProduct,
    condition,
  });
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
  return activeVariant({
    active,
    categoryId,
    productId,
    variantId,
  });
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

export const getActiveTotal = ({ active }: { active: boolean }) => {
  return activeTotal({ active });
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
