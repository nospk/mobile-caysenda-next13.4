import React from 'react'
import {OrderType} from '@/types/order'
import OrderService from '@/services/Order.service'
export const updateOrder = async (props: any) => {
    return await OrderService.updateOrder(props);
};
export const getOrder = (status: any) => {
    return OrderService.getOrder(status);
};
export const removeOrder = (id: string) => {
    return OrderService.delOrder(id);
}
