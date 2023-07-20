import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type {
  Cart,
  CartCategory,
  CartProduct,
  CartVariant,
} from "@/types/cart";
import CartService from "@/services/Cart.service";
import type { Fee_Delivery } from "@/types/fee_delivery";
import {
  selectBillCategory,
  selectBillTotal,
} from "@/redux/features/cart/cart.selector";

const initialState = {
  data: {} as Cart,
  error: null as string | null | undefined,
  fee_delivery: null as Fee_Delivery | null,
};

/**
 * Function update
 * categoryId, productId, variantId is id tracking in cart
 */
export const update = createAsyncThunk(
  "cart/update",
  async ({
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
    if (quantityNew < 1) throw "Số lượng không thể nhỏ hơn 1";
    if (
      quantityOld > quantityNew &&
      Number(quantityProduct) + (Number(quantityNew) - Number(quantityOld)) <
        condition
    )
      throw "Không được đặt số lượng nhỏ hơn điều kiện";
    const result = await CartService.updateCart(
      categoryId,
      productId,
      variantId,
      quantityNew
    );
    if (result.success == true)
      return { categoryId, productId, variantId, quantityNew };
    else throw result.message;
  }
);

/**
 * Function get data cart
 *
 */
export const get = createAsyncThunk("cart/get", async () => {
  const result = await CartService.getCart();
  return result;
});

/**
 * Function activeVariant
 * categoryId, productId, variantId is id tracking in cart
 */
export const activeVariant = createAsyncThunk(
  "cart/activeVariant",
  async ({
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
    const result = await CartService.activeVariant(
      active,
      categoryId,
      productId,
      variantId
    );
    if (result.success == true)
      return { active, categoryId, productId, variantId };
    else throw result.message;
  }
);

/**
 * Function activeProduct
 * categoryId, productId is id tracking in cart
 */
export const activeProduct = createAsyncThunk(
  "cart/activeProduct",
  async ({
    active,
    categoryId,
    productId,
  }: {
    active: boolean;
    categoryId: number;
    productId: number;
  }) => {
    const result = await CartService.activeProduct(
      active,
      categoryId,
      productId
    );
    if (result.success == true) return { active, categoryId, productId };
    else throw result.message;
  }
);

/**
 * Function activeCategory
 * categoryId, productId is id tracking in cart
 */
export const activeCategory = createAsyncThunk(
  "cart/activeCategory",
  async ({ active, categoryId }: { active: boolean; categoryId: number }) => {
    const result = await CartService.activeCategory(active, categoryId);
    if (result.success == true) return { active, categoryId };
    else throw result.message;
  }
);

/**
 * Function activeTotal
 * categoryId, productId is id tracking in cart
 */
export const activeTotal = createAsyncThunk(
  "cart/activeTotal",
  async ({ active }: { active: boolean }) => {
    const result = await CartService.activeTotal(active);
    if (result.success == true) return { active };
    else throw result.message;
  }
);

/**
 * Function activeVariant
 * categoryId, productId, variantId is id tracking in cart
 */
export const removeVariant = createAsyncThunk(
  "cart/removeVariant",
  async ({
    categoryId,
    productId,
    variantId,
  }: {
    categoryId: number;
    productId: number;
    variantId: number;
  }) => {
    const result = await CartService.removeVariant(
      categoryId,
      productId,
      variantId
    );
    if (result.success == true) return { categoryId, productId, variantId };
    else throw result.message;
  }
);

const findIndexCategory = (
  categories: CartCategory[],
  categoryId: number
): number => {
  let index = categories.findIndex((category) => {
    return category.categoryId == categoryId;
  });
  return index;
};

const findIndexProduct = (
  products: CartProduct[],
  productId: number
): number => {
  let index = products.findIndex((product) => {
    return product.productId == productId;
  });
  return index;
};

const findIndexVariant = (
  variants: CartVariant[],
  variantId: number
): number => {
  let index = variants.findIndex((variant) => {
    return variant.variantId == variantId;
  });
  return index;
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get cart
      .addCase(get.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      //update cart
      .addCase(update.pending, (state) => {
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        const { categoryId, productId, variantId, quantityNew } =
          action.payload;
        //Find index
        let indexCategory = findIndexCategory(
          state.data.categories,
          categoryId
        );
        let indexProduct = findIndexProduct(
          state.data.categories[indexCategory].products,
          productId
        );
        let indexVariant = findIndexVariant(
          state.data.categories[indexCategory].products[indexProduct].variants,
          variantId
        );
        //Set quantity for variant
        state.data.categories[indexCategory].products[indexProduct].variants[
          indexVariant
        ].quantity = quantityNew;
        //Set quantity for product
        let quantityProduct = state.data.categories[indexCategory].products[
          indexProduct
        ].variants.reduce(
          (quantity, variant) => quantity + variant.quantity,
          0
        );
        state.data.categories[indexCategory].products[indexProduct].quantity =
          quantityProduct;
        //Finaly calculator
        const amount = selectBillCategory(state.data.categories[indexCategory]);
        state.data.categories[indexCategory].amount = amount;
        const bill = selectBillTotal(state.data.categories);
        state.data.bill = bill;
      })
      .addCase(update.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // active variant
      .addCase(activeVariant.pending, (state) => {
        state.error = null;
      })
      .addCase(activeVariant.fulfilled, (state, action) => {
        const { categoryId, productId, variantId, active } = action.payload;
        let indexCategory = findIndexCategory(
          state.data.categories,
          categoryId
        );
        let indexProduct = findIndexProduct(
          state.data.categories[indexCategory].products,
          productId
        );
        let indexVariant = findIndexVariant(
          state.data.categories[indexCategory].products[indexProduct].variants,
          variantId
        );
        //set selected for varaint
        state.data.categories[indexCategory].products[indexProduct].variants[
          indexVariant
        ].selected = active;
        //check active Product
        let checkProduct = state.data.categories[indexCategory].products[
          indexProduct
        ].variants.filter((variant) => variant.selected == true);
        state.data.categories[indexCategory].products[indexProduct].active =
          checkProduct.length == 0 ? false : true;
        //check active Category
        let checkCategory = state.data.categories[
          indexCategory
        ].products.filter((product) => product.active == true);
        state.data.categories[indexCategory].active =
          checkCategory.length == 0 ? false : true;

        //Finaly calculator
        const amount = selectBillCategory(state.data.categories[indexCategory]);
        state.data.categories[indexCategory].amount = amount;
        const bill = selectBillTotal(state.data.categories);
        state.data.bill = bill;
      })
      .addCase(activeVariant.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // active product
      .addCase(activeProduct.pending, (state) => {
        state.error = null;
      })
      .addCase(activeProduct.fulfilled, (state, action) => {
        const { categoryId, productId, active } = action.payload;
        let indexCategory = findIndexCategory(
          state.data.categories,
          categoryId
        );
        let indexProduct = findIndexProduct(
          state.data.categories[indexCategory].products,
          productId
        );
        //check active Variant
        const variantCount =
          state.data.categories[indexCategory].products[indexProduct].variants
            .length;
        if (
          state.data.categories[indexCategory].products[indexProduct].retail
        ) {
          for (let index = 0; index < variantCount; index++) {
            state.data.categories[indexCategory].products[
              indexProduct
            ].variants[index].selected = active;
          }
        } else {
          for (let index = 0; index < variantCount; index++) {
            if (
              state.data.categories[indexCategory].products[indexProduct]
                .quantity <
              state.data.categories[indexCategory].products[indexProduct]
                .conditionDefault
            ) {
              state.data.categories[indexCategory].products[
                indexProduct
              ].variants[index].selected = false;
            } else {
              state.data.categories[indexCategory].products[
                indexProduct
              ].variants[index].selected = active;
            }
          }
        }
        //check active Product
        let checkProduct = state.data.categories[indexCategory].products[
          indexProduct
        ].variants.filter((variant) => variant.selected == true);
        state.data.categories[indexCategory].products[indexProduct].active =
          checkProduct.length == 0 ? false : true;
        //check active Category
        let checkCategory = state.data.categories[
          indexCategory
        ].products.filter((product) => product.active == true);
        state.data.categories[indexCategory].active =
          checkCategory.length == 0 ? false : true;

        //Finaly calculator
        const amount = selectBillCategory(state.data.categories[indexCategory]);
        state.data.categories[indexCategory].amount = amount;
        const bill = selectBillTotal(state.data.categories);
        state.data.bill = bill;
      })
      .addCase(activeProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // active catogery
      .addCase(activeCategory.pending, (state) => {
        state.error = null;
      })
      .addCase(activeCategory.fulfilled, (state, action) => {
        const { categoryId, active } = action.payload;
        let indexCategory = findIndexCategory(
          state.data.categories,
          categoryId
        );
        //check active Variant
        state.data.categories[indexCategory].products.map(
          (product, indexProduct) => {
            const variantCount =
              state.data.categories[indexCategory].products[indexProduct]
                .variants.length;
            if (
              state.data.categories[indexCategory].products[indexProduct].retail
            ) {
              for (let index = 0; index < variantCount; index++) {
                state.data.categories[indexCategory].products[
                  indexProduct
                ].variants[index].selected = active;
              }
            } else {
              for (let index = 0; index < variantCount; index++) {
                if (
                  state.data.categories[indexCategory].products[indexProduct]
                    .quantity <
                  state.data.categories[indexCategory].products[indexProduct]
                    .conditionDefault
                ) {
                  state.data.categories[indexCategory].products[
                    indexProduct
                  ].variants[index].selected = false;
                } else {
                  state.data.categories[indexCategory].products[
                    indexProduct
                  ].variants[index].selected = active;
                }
              }
            }
            //check active Product
            let checkProduct = state.data.categories[indexCategory].products[
              indexProduct
            ].variants.filter((variant) => variant.selected == true);
            state.data.categories[indexCategory].products[indexProduct].active =
              checkProduct.length == 0 ? false : true;
          }
        );

        //check active Category
        let checkCategory = state.data.categories[
          indexCategory
        ].products.filter((product) => product.active == true);
        state.data.categories[indexCategory].active =
          checkCategory.length == 0 ? false : true;

        //Finaly calculator
        const amount = selectBillCategory(state.data.categories[indexCategory]);
        state.data.categories[indexCategory].amount = amount;
        const bill = selectBillTotal(state.data.categories);
        state.data.bill = bill;
      })
      .addCase(activeCategory.rejected, (state, action) => {
        state.error = action.error.message;
      })
      //active Total
      .addCase(activeTotal.pending, (state) => {
        state.error = null;
      })
      .addCase(activeTotal.fulfilled, (state, action) => {
        const { active } = action.payload;
        state.data.categories.map((category, indexCategory) => {
          //check active Variant
          state.data.categories[indexCategory].products.map(
            (product, indexProduct) => {
              const variantCount =
                state.data.categories[indexCategory].products[indexProduct]
                  .variants.length;
              if (
                state.data.categories[indexCategory].products[indexProduct]
                  .retail
              ) {
                for (let index = 0; index < variantCount; index++) {
                  state.data.categories[indexCategory].products[
                    indexProduct
                  ].variants[index].selected = active;
                }
              } else {
                for (let index = 0; index < variantCount; index++) {
                  if (
                    state.data.categories[indexCategory].products[indexProduct]
                      .quantity <
                    state.data.categories[indexCategory].products[indexProduct]
                      .conditionDefault
                  ) {
                    state.data.categories[indexCategory].products[
                      indexProduct
                    ].variants[index].selected = false;
                  } else {
                    state.data.categories[indexCategory].products[
                      indexProduct
                    ].variants[index].selected = active;
                  }
                }
              }
              //check active Product
              let checkProduct = state.data.categories[indexCategory].products[
                indexProduct
              ].variants.filter((variant) => variant.selected == true);
              state.data.categories[indexCategory].products[
                indexProduct
              ].active = checkProduct.length == 0 ? false : true;
            }
          );

          //check active Category
          let checkCategory = state.data.categories[
            indexCategory
          ].products.filter((product) => product.active == true);
          state.data.categories[indexCategory].active =
            checkCategory.length == 0 ? false : true;

          //Finaly calculator
          const amount = selectBillCategory(
            state.data.categories[indexCategory]
          );
          state.data.categories[indexCategory].amount = amount;
          const bill = selectBillTotal(state.data.categories);
          state.data.bill = bill;
        });
      })
      .addCase(activeTotal.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // remove variant
      .addCase(removeVariant.pending, (state) => {
        state.error = null;
      })
      .addCase(removeVariant.fulfilled, (state, action) => {
        const { categoryId, productId, variantId } = action.payload;
        let indexCategory = findIndexCategory(
          state.data.categories,
          categoryId
        );
        let indexProduct = findIndexProduct(
          state.data.categories[indexCategory].products,
          productId
        );
        let indexVariant = findIndexVariant(
          state.data.categories[indexCategory].products[indexProduct].variants,
          variantId
        );
        let quantityVariant =
          state.data.categories[indexCategory].products[indexProduct].variants[
            indexVariant
          ].quantity;
        //remove varaint
        state.data.categories[indexCategory].products[indexProduct].variants =
          state.data.categories[indexCategory].products[
            indexProduct
          ].variants.filter((variant) => variant.variantId != variantId);
        if (
          state.data.categories[indexCategory].products[indexProduct].variants
            .length == 0
        ) {
          state.data.categories[indexCategory].products = state.data.categories[
            indexCategory
          ].products.filter((product) => product.productId != productId);
        } else {
          state.data.categories[indexCategory].products[
            indexProduct
          ].quantity -= quantityVariant;
        }
        if (state.data.categories[indexCategory].products.length == 0) {
          state.data.categories = state.data.categories.filter(
            (category) => category.categoryId != categoryId
          );
        } else {
          //Finaly calculator
          const amount = selectBillCategory(
            state.data.categories[indexCategory]
          );
          state.data.categories[indexCategory].amount = amount;
          const bill = selectBillTotal(state.data.categories);
          state.data.bill = bill;
        }
      })
      .addCase(removeVariant.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { reset } = cart.actions;
export default cart.reducer;
