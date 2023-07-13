import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "@/types/cart";
import CartService from "@/services/Cart.service";

const initialState = {
  data: {} as Cart,
  loading: false as boolean,
  error: null as string | null | undefined,
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

export const get = createAsyncThunk("cart/get", async () => {
  const result = await CartService.getCart();
  return result;
});

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    add: (state) => {
      state.data.categories = [];
    },
    changeInput: (state) => {},
    activeVariant: () => {},
    activeProduct: () => {},
    activeCatoger: () => {},
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(get.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(update.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //update
      .addCase(update.fulfilled, (state, action) => {
        const { respone, catId } = action.payload;
        let indexCategory = state.data.categories.findIndex((category) => {
          return category.id == catId;
        });
        let indexProduct = state.data.categories[
          indexCategory
        ].products.findIndex((product) => {
          return product.id == respone.cartProductList[0].id;
        });
        state.data.categories[indexCategory].products[indexProduct] =
          respone.cartProductList[0];
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      //
  },
});

export const { add, reset } = cart.actions;
export default cart.reducer;
