import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RemoveCart {
  isRemove: boolean;
  list: null;
}

const initialState = {
  isRemove: false,
} as RemoveCart;
export const removeCart = createSlice({
  name: "remove_cart",
  initialState,
  reducers: {
    setRemove: (state) => {
      state.isRemove = !state.isRemove;
    },
  },
});

export const { setRemove } = removeCart.actions;
export default removeCart.reducer;
