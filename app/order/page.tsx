'use client'
import React, { useState, useEffect } from "react";
import Order from "@/components/Order";
import {OrderType } from 'types/order'
import { getOrder } from "@/services/Order.service";

 async function OrderPage() {
  const listOrder = await getOrder();
  return (
    <Order List_Order = {listOrder}/>
  );
}

export default OrderPage;
