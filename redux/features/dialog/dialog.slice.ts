import { createSlice } from "@reduxjs/toolkit";
type Dialog = {
  message: string;
  time: number;
};
const initialState: Dialog = {
  message: "",
  time: 3000,
};
const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialState,
  reducers: {
    openDialog: (state, action) => {
      state.message = action.payload.message;
      state.time = action.payload.time ? action.payload.time : state.time;
    },
    closeDialog: (state) => {
        state.message = "";
        state.time = 3000
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
