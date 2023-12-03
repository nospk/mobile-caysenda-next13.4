// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import {OrderType, OrderCategory,  OrderProduct} from '@/types/order'
// import OrderService from "@/services/Order.service";
// const initialState: OrderType[] =  [
// ]
// export const updateOrder = async (props: any) => {
//     return await OrderService.updateOrder(props);
// };
// export const getOrder = createAsyncThunk("order/get", async (status: any) => {
//     return await OrderService.getOrder(status);
// });
// export const removeOrder = (id: string) => {
//     return OrderService.delOrder(id);
// }

// const order = createSlice({
//     name: "",
//     initialState: initialState,
//     reducers: {
//         reset: () => initialState,
//     },
//     extraReducers: (builder) =>{
//         builder
//         .addCase(getOrder.fulfilled, (state : any, action) => {
            
//             state.data = action.payload;
//         })
//     }
// }) 
// export const { reset } = order.actions;
// export default order.reducer;