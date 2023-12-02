import { combineReducers } from "redux";
import dialogReducer from "./features/dialog/dialog.slice";
import cartReducer from "./features/cart/cart.slice";

const reducers = combineReducers({
  dialogReducer,
  cartReducer,
});
export default reducers;
