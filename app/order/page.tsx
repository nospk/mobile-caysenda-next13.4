import React from "react";
import Order from "@/components/Order";
import {OrderType } from 'types/order'
const listOrder: OrderType[] = [
  {
      OrderId : '1',
      Product : '1',
      status : 'new',
      category: []
  },{
      OrderId : '1',
      Product : '1',
      status : 'new',
      category: []
  },{
      OrderId : '1',
      Product : '1',
      status : 'new',
      category: []
  },
  {
      OrderId : '1',
      Product : '1',
      status : 'complete',
      category: []
  },
  {
      OrderId : '1',
      Product : '1',
      status : 'shipping',
      category:[]
  }
]
function OrderPage() {
  return (
    <Order List_Order = {listOrder}/>
  );
}

export default OrderPage;
