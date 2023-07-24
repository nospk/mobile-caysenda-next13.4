import type { CartCategory, CartProduct, CartVariant } from "@/types/cart";

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
      product.quantity < product.conditionDefault ? order_error++ : null;
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
export const selectCheckActiveCart = (categories: CartCategory[]): number => {
  let active = 0;
  let catogeryNotActive = false;
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
      if (active == 0) catogeryNotActive = true;
    });
  });
  if (active == 2 && catogeryNotActive) active = 1;
  return active;
};

/**
 *
 * @param category
 * @returns number
 *
 * 0 is NotActive
 * 1 is HaftFull
 * 2 is ActiveFull
 */
export const selectCheckActiveCategory = (category: CartCategory): number => {
  let active = 0;
  let productNotActive = false;
  category.products.map((product) => {
    let activeProduct = 0;
    product.variants.map((variant) => {
      activeProduct =
        variant.selected && active != 1
          ? 2
          : (!variant.selected && active != 0) ||
            (variant.selected && active == 1)
          ? 1
          : 0;
      if (activeProduct == 0 && !productNotActive) productNotActive = true;
    });

    active =
      activeProduct == 2 && (active == 0 || active == 2) && !productNotActive
        ? 2
        : activeProduct == 2 && active == 0 && productNotActive
        ? 1
        : activeProduct == 0 && active == 0
        ? 0
        : 1;
  });
  return active;
};

/**
 *
 * @param category
 * @returns number
 *
 * 0 is NotActive
 * 1 is HaftFull
 * 2 is ActiveFull
 */
export const selectCheckActiveDeleteCategory = (category: CartCategory): number => {
  let active = 0;
  let productNotActive = false;
  category.products.map((product) => {
    let activeProduct = 0;
    product.variants.map((variant) => {
      activeProduct =
        variant.selectedDelete && active != 1
          ? 2
          : (!variant.selectedDelete && active != 0) ||
            (variant.selectedDelete && active == 1)
          ? 1
          : 0;
      if (activeProduct == 0 && !productNotActive) productNotActive = true;
    });

    active =
      activeProduct == 2 && (active == 0 || active == 2) && !productNotActive
        ? 2
        : activeProduct == 2 && active == 0 && productNotActive
        ? 1
        : activeProduct == 0 && active == 0
        ? 0
        : 1;
  });
  return active;
};

/**
 * @param category
 * @returns number
 */
const findConditionIndex = (
  conditions: (number | null)[],
  quantity: number
) => {
  for (let index = 0; index < conditions.length; index++) {
    if (conditions[index] != null && quantity <= conditions[index]!) {
      return index;
    }
  }
  return 0;
};

/**
 * @param category
 * @returns number
 */
export const selectBillCategory = (category: CartCategory): number => {
  let money = 0;
  category.products.map((product) => {
    const retail = product.retail;
    const conditions = [
      product.condition1,
      product.condition2,
      product.condition3,
      product.condition4,
    ];
    product.variants.map((variant) => {
      if (!variant.selected) return;
      if (retail) {
        money += Number(variant.price) * Number(variant.quantity);
      } else {
        let indexPrice = findConditionIndex(conditions, variant.quantity);
        const listPrice = [
          variant.vip1,
          variant.vip2,
          variant.vip3,
          variant.vip4,
        ];
        const priceActive = listPrice[indexPrice];
        money += Number(priceActive) * Number(variant.quantity);
      }
    });
  });
  return money;
};

/**
 * @param categories
 * @returns number
 */
export const selectBillTotal = (categories: CartCategory[]): number => {
  let money = 0;
  for (let index = 0; index < categories.length; index++) {
    money += categories[index].amount;
  }
  return money;
};
