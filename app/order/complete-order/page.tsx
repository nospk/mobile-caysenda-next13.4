import React from "react";
import Order from "@/components/Order";
import {OrderType } from 'types/order'
import { getOrder } from "@/services/Order.service";
import StatusOrder from '@/components/Order/StatusOrder'
async function CompleteOrderPage() {
  const listOrder = await getOrder(StatusOrder.CompleteOrder);
  return (
    <Order List_Order = {listOrder}/>
  );
}

export default CompleteOrderPage;

