import { combineReducers } from "redux";
import dialogReducer from "./features/dialog/dialog.slice";
import modalReducer from "./features/modal/modal.slice";
import cartReducer from "./features/cart/cart.slice";

const reducers = combineReducers({
  dialogReducer,
  cartReducer,
  modalReducer,
});
export default reducers;
