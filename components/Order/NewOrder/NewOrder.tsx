'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { OrderType, DetailOrderType } from '@/types/order'
import DetailOrder from '@/components/Order/DetailOrder'
import { current } from "@reduxjs/toolkit";

function NewOrder({ _Prop }: { _Prop: OrderType }) {
    const data = _Prop as OrderType;
    const [isdetail, setIsdetail] = useState(false);
    const [req, setReq] = useState(0);
    const [detail, setDetail] = useState<DetailOrderType>({
        OrderId: _Prop.OrderId,
        Product: _Prop.Product,
        category: _Prop.category,
        isdetail: isdetail,
    })
    return (

        <div className="px-2 mb-2 border-b-2 rounded-lg bg-white ">
            <div className='flex py-2'>
                <div className="flex grow">
                    <div className="text-xl pr-2">
                        {_Prop.OrderId}
                    </div>
                    <div className="flex-none">{'>'}</div>
                </div>
                <div className="flex-none text-red-500">chờ thanh toán</div>
            </div>
            <DetailOrder props={isdetail?_Prop.Product : _Prop.category} isdetail= {isdetail} />
            <div className="shipping_state/all_Money">
                <div className="flex justify-between m-3 phiship/tongtien ">
                    <button type="submit" className="" onClick = {e => (setIsdetail((bool)=>!bool))}>chi tiết đơn hàng</button>
                    <div className="justify-items-end">
                        <div className="pr-2">phí ship (VND): {'30000'}</div>
                        <div className="pr-2">tổng tiền (VND): {_Prop.totalPrice}</div>
                        <div className="pr-2">thời gian giao hàng dự kiến</div>
                    </div>
                </div>

            </div>
            <div className="button event flex justify-end py-2">
                <button className="border-2 rounded-full mx-1 px-2 py-2">
                    <span>Hủy Đơn</span>
                </button>
                <button className="border-2 rounded-full mx-1 px-2 py-2">
                    <span>Đổi Địa Chỉ</span>
                </button>
                <button className="border-2 rounded-full mx-1 border-orange-600 px-2 py-2">
                    <span>Thanh Toán</span>
                </button>
            </div>
        </div>
    );
}

export default NewOrder;
