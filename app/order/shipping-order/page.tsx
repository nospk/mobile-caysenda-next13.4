import React from "react";
import Order from "@/components/Order";
import {OrderType } from 'types/order'
import { getOrder } from "@/services/Order.service";
import StatusOrder from '@/components/Order/StatusOrder'
async function ShippingOrderPage() {
  const listOrder = await getOrder(StatusOrder.ShippingOrder);
  return (
    <Order List_Order = {listOrder}/>
  );
}

export default ShippingOrderPage;

