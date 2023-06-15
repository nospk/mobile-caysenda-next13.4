import { combineReducers } from 'redux';
import counterReducer from "./test/counterSlice";
import { userApi } from "./test/userApi";
import cartReducer from "./services/cart";
const reducers = combineReducers({
    counterReducer,
    cartReducer,
    [userApi.reducerPath]: userApi.reducer,
})
export default reducers;