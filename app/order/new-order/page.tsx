'use client'
import React, { useEffect, useState } from "react";
import Order from "@/components/Order";
import { OrderType } from 'types/order'
import OrderService from "@/services/Order.service";
import StatusOrder from '@/components/Order/StatusOrder'
const Page = () => {
    const [listOrder, setListOrder] = useState<OrderType[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await OrderService.getOrder(StatusOrder.NewOrder)
        setListOrder(result as unknown as OrderType[]);
      }
      fetchData()
    }, [listOrder])
    return (
      <Order List_Order={listOrder} />
    );
  }
  
  export default Page;