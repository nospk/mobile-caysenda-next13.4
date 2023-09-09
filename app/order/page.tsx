'use client'
import React, { useState, useEffect } from "react";
import Order from "@/components/Order";
import { OrderType } from 'types/order'
import OrderService from "@/services/Order.service";

async function OrderPage() {
  // const listOrder = await OrderService.getOrder(undefined);
  const [listOrder, setListOrder] =  useState<OrderType[]>([]);
  
  useEffect( () => {
    const fetchData = async () => {
      const result = await OrderService.getOrder(undefined);
      setListOrder(result as unknown  as OrderType[]);
    }
    fetchData()
  },[listOrder])
  return (
    <Order List_Order={listOrder} />
  );
}

export default OrderPage;
