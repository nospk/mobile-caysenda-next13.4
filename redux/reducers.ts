import { combineReducers } from 'redux';
import counterReducer from "./test/counterSlice";
import { userApi } from "./test/userApi";
const reducers = combineReducers({
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
})
export default reducers;