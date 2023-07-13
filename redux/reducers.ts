import { combineReducers } from 'redux';
import dialogReducer from "./features/dialog/dialog.slice";

import cartReducer from "./features/cart/cart.slice";
import removeCartReducer from "./features/removeCart/removeCart.slice";
const reducers = combineReducers({
    dialogReducer,
    cartReducer,
    removeCartReducer,

})
export default reducers;