import { combineReducers } from 'redux';
import counterReducer from "./test/counterSlice";
import { userApi } from "./test/userApi";
import cartReducer from "./features/cart/cart.slice";
import removeCartReducer from "./features/removeCart/removeCart.slice";
const reducers = combineReducers({
    counterReducer,
    cartReducer,
    removeCartReducer,
    [userApi.reducerPath]: userApi.reducer,
})
export default reducers;