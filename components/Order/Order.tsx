'use client';
import { FC } from 'react';
import { ActiveFull, HaftFull, NotActive } from '@/components/Checked/Checked'
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import NewOrder from './NewOrder/NewOrder';

type Order =  {
    OrderId : string;
    Product : string;
    status  : string;
    
} 
const Order: FC = () => {
    return (
        <>
            <div className="bg-white pt-4">
                <ul className='List_Order'>
                    <li className='Order'>
                        <NewOrder />
                    </li> <li className='Order'>
                        <NewOrder />
                    </li> <li className='Order'>
                        <NewOrder />
                    </li> <li className='Order'>
                        <NewOrder />
                    </li>
                </ul>
            </div>
        </>
    )
};
export default Order;