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
export const selectCheckActiveCart = (categories: CartCategory[], isRemove: boolean): number => {
  let active = 0;
  if(isRemove){
    let catogeryNotActive = false;
    categories.map((category) => {
      category.products.map((product) => {
        product.variants.map((variant) => {
          active =
            variant.selectedDelete && active != 1
              ? 2
              : (!variant.selectedDelete && active != 0) ||
                (variant.selectedDelete && active == 1)
              ? 1
              : 0;
        });
        if (active == 0) catogeryNotActive = true;
      });
    });
    if (active == 2 && catogeryNotActive) active = 1;
  }else{
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
  }
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
  let productActive = false;
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
      if (activeProduct != 0 && !productActive) productActive = true;
      if (activeProduct == 0 && !productNotActive) productNotActive = true;
    });
    
    active =
      activeProduct == 2 && (active == 0 || active == 2) && !productNotActive
        ? 2
        : activeProduct == 2 && active == 0 && productNotActive
        ? 1
        : activeProduct == 0 && active == 0 && !productActive
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
export const selectCheckActiveDeleteCategory = (
  category: CartCategory
): number => {
  let active = 0;
  let productNotActive = false;
  let productActive = false;
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
      if (activeProduct != 0 && !productActive) productActive = true;
      if (activeProduct == 0 && !productNotActive) productNotActive = true;
    });
    
    active =
      activeProduct == 2 && (active == 0 || active == 2) && !productNotActive
        ? 2
        : activeProduct == 2 && active == 0 && productNotActive
        ? 1
        : activeProduct == 0 && active == 0 && !productActive
        ? 0
        : 1;
  });
  return active;
};

const findConditionIndex = (
  conditions: (number | null)[],
  quantity: number
) => {
  let index = 0;
  for (let i = 0; i < conditions.length; i++) {
    if (quantity > conditions[i]!) {
      index = i;
    }
  }
  return index;
};

/**
 * @param category
 * @returns number
 */
export const selectBillCategory = (
  category: CartCategory
): { moneyActive: number; moneyTotal: number } => {
  let moneyTotal = 0;
  let moneyActive = 0;
  category.products.map((product) => {
    const retail = product.retail;
    const conditions = [
      product.condition1,
      product.condition2,
      product.condition3,
      product.condition4,
    ];
    product.variants.map((variant) => {
      if (product.quantity < product.conditionDefault) return;
      if (retail) {
        moneyActive += variant.selected
          ? Number(variant.price) * Number(variant.quantity)
          : 0;
        moneyTotal += Number(variant.price) * Number(variant.quantity);
      } else {
        let indexPrice = findConditionIndex(conditions, product.quantity);
        const listPrice = [
          variant.vip1,
          variant.vip2,
          variant.vip3,
          variant.vip4,
        ];
        const priceActive = listPrice[indexPrice];
        moneyActive += variant.selected
          ? Number(priceActive) * Number(variant.quantity)
          : 0;
        moneyTotal += Number(priceActive) * Number(variant.quantity);
      }
    });
  });
  return { moneyActive, moneyTotal };
};

/**
 * @param product
 * @returns number
 */
export const selectBillProduct = (product: CartProduct): number => {
  let money = 0;
  const conditions = [
    product.condition1,
    product.condition2,
    product.condition3,
    product.condition4,
  ];
  product.variants.map((variant) => {
    if (product.retail) {
      money += Number(variant.price) * Number(variant.quantity);
    } else {
      let indexPrice = findConditionIndex(conditions, product.quantity);
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
  return money;
};

/**
 * @param categories
 * @returns number
 */
export const selectBillTotal = (categories: CartCategory[]): number => {
  let money = 0;
  for (let index = 0; index < categories.length; index++) {
    money += categories[index].amountActive;
  }
  return money;
};
