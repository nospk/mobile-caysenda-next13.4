import { createSlice } from "@reduxjs/toolkit";
type Modal = {
  open: boolean;
  timeClose: number;
  type: "test" | "abc";
};
const initialState: Modal = {
  open: false,
  timeClose: 0,
  type: "test",
};
const ModalSlice = createSlice({
  name: "Modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      console.log('running')
      state.open = true;
      state.timeClose = action.payload.time ? action.payload.time : initialState.timeClose;
    },
    setModal: (state, action) => {
      state.type = action.payload.type;
    },
    closeModal: (state) => {
      return {
        ...state,
        open: false,
        timeClose: 10,
      };
    },
  },
});

export const { openModal, closeModal, setModal } = ModalSlice.actions;
export default ModalSlice.reducer;
