import { combineReducers } from 'redux';


import cartReducer from "./features/cart/cart.slice";
import removeCartReducer from "./features/removeCart/removeCart.slice";
const reducers = combineReducers({

    cartReducer,
    removeCartReducer,

})
export default reducers;