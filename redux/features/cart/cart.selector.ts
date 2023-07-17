import type { CartCategory } from "@/types/cart";

/**
 *
 * @param categories
 * @returns order_error
 *
 */
export const selectErrorOrder = (categories: CartCategory[]): number => {
  let order_error = 0;
  categories.map((category) => {
    category.products.map((product) => {
      const condition = product.condition1;
      product.variants.map((variant) => {
        variant.quantity < condition ? order_error++ : null;
      });
    });
  });
  return order_error;
};

/**
 *
 * @param categories
 * @returns number
 *
 * 0 is NotActive
 * 1 is HaftFull
 * 2 is ActiveFull
 */
export const selectCheckActive = (categories: CartCategory[]): number => {
  let active = 0;
  categories.map((category) => {
    category.products.map((product) => {
      product.variants.map((variant) => {
        active =
          variant.selected && active != 1
            ? 2
            : (!variant.selected && active != 0) ||
              (variant.selected && active == 1)
            ? 1
            : 0;
      });
    });
  });
  return active;
};
