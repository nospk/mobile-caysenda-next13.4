import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "@/types/cart";
import CartService from "@/services/Cart.service";
import type { Fee_Delivery } from "@/types/fee_delivery";

const initialState = {
  data: {} as Cart,
  loading: false as boolean,
  error: null as string | null | undefined,
  fee_delivery: null as Fee_Delivery | null,
};

/**
 * Function update
 * catId, productId, variantId is id tracking in cart
 */
export const update = createAsyncThunk(
  "cart/update",
  async ({
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
    if (quantity < 1) throw "Kiểm tra lại số lượng";
    const result = await CartService.updateCart(
      catId,
      productId,
      variantId,
      quantity
    );
    return result;
  }
);

/**
 * Function fee-delivery
 * catId, productId, variantId is id tracking in cart
 */
export const fee_delivery = createAsyncThunk("cart/fee_delivery", async () => {
  const result = await CartService.getFeeAndDelivery();

  return result;
});

/**
 * Function fee-delivery
 * catId, productId, variantId is id tracking in cart
 */
export const get = createAsyncThunk("cart/get", async () => {
  const result = await CartService.getCart();
  return result;
});

/**
 * Function activeVariant
 * catId, productId, variantId is id tracking in cart
 */
export const activeVariant = createAsyncThunk(
  "cart/activeVariant",
  async ({
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
    const result = await CartService.activeVariant(
      active,
      catId,
      productId,
      variantId
    );
    return result;
  }
);

/**
 * Function activeProduct
 * catId, productId is id tracking in cart
 */
export const activeProduct = createAsyncThunk(
  "cart/activeProduct",
  async ({
    active,
    catId,
    productId,
  }: {
    active: boolean;
    catId: number;
    productId: number;
  }) => {
    const result = await CartService.activeProduct(active, catId, productId);
    return result;
  }
);

/**
 * Function activeCategory
 * catId, productId is id tracking in cart
 */
export const activeCategory = createAsyncThunk(
  "cart/activeCategory",
  async ({ active, catId }: { active: boolean; catId: number }) => {
    const result = await CartService.activeCategory(active, catId);
    return result;
  }
);

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    activeVariant: () => {},
    activeProduct: () => {},
    activeCatoger: () => {},
  },
  extraReducers: (builder) => {
    builder
      //get fee-delivery
      .addCase(fee_delivery.fulfilled, (state, action) => {
        state.fee_delivery = action.payload;
      })
      //get cart
      .addCase(get.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      //update cart
      // Chưa handle việc update cart bị lỗi, cái này Hoàng vào làm api thì check rồi thêm nhé
      .addCase(update.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        const { response, catId } = action.payload;
        let indexCategory = state.data.categories.findIndex((category) => {
          return category.id == catId;
        });
        let indexProduct = state.data.categories[
          indexCategory
        ].products.findIndex((product) => {
          return product.id == response.cartProductList[0].id;
        });
        state.data.categories[indexCategory].products[indexProduct] =
          response.cartProductList[0];
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // active variant
      .addCase(activeVariant.fulfilled, (state, action) => {
        const { response, catId } = action.payload;
        let indexCategory = state.data.categories.findIndex((category) => {
          return category.id == catId;
        });
        if (response.activeCategory == false) {
          state.data.categories[indexCategory].products.map((product) => {
            product.active = false;
            product.variants.map((variant) => {
              variant.selected = false;
            });
          });
        } else {
          if (response.cartProductList)
            state.data.categories[indexCategory].products =
              response.cartProductList;
        }
      })
      // active product
      .addCase(activeProduct.fulfilled, (state, action) => {
        const { response, catId } = action.payload;
        let indexCategory = state.data.categories.findIndex((category) => {
          return category.id == catId;
        });
        if (response.activeCategory == false) {
          state.data.categories[indexCategory].products.map((product) => {
            product.active = false;
            product.variants.map((variant) => {
              variant.selected = false;
            });
          });
        } else {
          if (response.cartProductList)
            state.data.categories[indexCategory].products =
              response.cartProductList;
        }
      })
      // active catogery
      .addCase(activeCategory.fulfilled, (state, action) => {
        const { response, catId } = action.payload;
        let indexCategory = state.data.categories.findIndex((category) => {
          return category.id == catId;
        });
        if (response.activeCategory == false) {
          state.data.categories[indexCategory].active = false
          state.data.categories[indexCategory].products.map((product) => {
            product.active = false;
            product.variants.map((variant) => {
              variant.selected = false;
            });
          });
        } else {
          state.data.categories[indexCategory].active = true
          state.data.categories[indexCategory].products.map((product) => {
            product.active = true;
            product.variants.map((variant) => {
              variant.selected = true;
            });
          });
        }
      });
  },
});

export const { reset } = cart.actions;
export default cart.reducer;
