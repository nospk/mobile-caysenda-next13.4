'use client';
import { FC, Key } from 'react';
import { ActiveFull, HaftFull, NotActive } from '@/components/Checked/Checked';
import Image from 'next/image';
import NewOrder from './NewOrder';
import CompleteOrder from './CompleteOrder';
import AdditionOrder from './AdditionOrder';
import ShippingOrder from './ShippingOrder';
import { OrderType } from 'types/order';
import StatusOrder from './StatusOrder';
const OrderComponents  = ({ List_Order } : {List_Order: OrderType[]}) => {
  
  return (
    <>
      <div className="py-2">
        <ul className="List_Order">
          { List_Order.map((_Order: any, index: Key) => (
            <li key={index}>
              {_Order.status == StatusOrder.NewOrder && <NewOrder _Prop = {_Order} />}
              {_Order.status == StatusOrder.CompleteOrder && <CompleteOrder _Prop = {_Order}/>}
              {_Order.status == StatusOrder.ShippingOrder && <ShippingOrder _Prop = {_Order}/>}
              {_Order.status == StatusOrder.AdditionOrder && <AdditionOrder _Prop = {_Order}/>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrderComponents;