'use client';
import { FC, Key } from 'react';
import { ActiveFull, HaftFull, NotActive } from '@/components/Checked/Checked';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import NewOrder from './NewOrder/NewOrder';
import CompleteOrder from './CompleteOrder';
import { OrderType } from 'types/order';
import StatusOrder from './StatusOrder';
const OrderComponents: FC<{ List_Order: OrderType[] }> = ({ List_Order }) => {
  return (
    <>
      <div className="bg-white py-4">
        <ul className="List_Order">
          {List_Order.map((_Order: OrderType, index) => (
            <li key={index}>
              {_Order.status == StatusOrder.NewOrder && <NewOrder />}
              {_Order.status == StatusOrder.CompleteOrder && <CompleteOrder />}
              {_Order.status == StatusOrder.ShippingOrder && <NewOrder />}
              {_Order.status == StatusOrder.AdditionOrder && <NewOrder />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrderComponents;