'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {OrderType} from '@/types/order'
function NewOrder({_Prop}:{_Prop?: OrderType}) {
   const data = _Prop as OrderType;
    return (

        <div className="px-2 pb-2 border-b-2">
            <div className='flex '>
                <div className="flex grow">
                    <div className="text-xl pr-2">
                        {data.OrderId}
                    </div>
                    <div className="flex-none">{'>'}</div>
                </div>
                <div className="flex-none text-red-500">chờ thanh toán</div>
            </div>
            <ul className="Sản Phẩm m-1">
                <li className="Sản Phẩm 1">
                    <Link className="Tên Sản Phẩm" href={""}>
                        {'Tên Sản Phẩm'} {'>'}
                    </Link>
                    <div className="flex  m-2">
                        <div className="avatar pr-2">
                            <Image src={'https://caysenda.vn/resources/upload/17892827873_102253868.jpg'}
                                width={100}
                                height={100}
                                alt='product_img'
                                className='rounded-lg' />
                        </div>
                        <div className="grow ">
                            <div className="flex justify-between">
                                <h3 className="flex-none">{'Biến Thể'}</h3>
                                <div className="order-last">{'2.000.000'} VND</div>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="category_Name">
                                    {'Số Lượng'}
                                </h4>
                                <div className="">x{'100'}</div>
                            </div>
                        </div>
                    </div><div className="flex m-2">
                        <div className="avatar pr-2">
                            <Image src={'https://caysenda.vn/resources/upload/17892827873_102253868.jpg'}
                                width={100}
                                height={100}
                                alt='product_img'
                                className='rounded-lg' />
                        </div>
                        <div className="grow ">
                            <div className="flex justify-between">
                                <h3 className="flex-none">{'Biến Thể'}</h3>
                                <div className="order-last">{'2.000.000'} VND</div>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="category_Name">
                                    {'Số Lượng'}
                                </h4>
                                <div className="">x{'100'}</div>
                            </div>
                        </div>
                    </div><div className="flex m-2">
                        <div className="avatar pr-2">
                            <Image src={'https://caysenda.vn/resources/upload/17892827873_102253868.jpg'}
                                width={100}
                                height={100}
                                alt='product_img'
                                className='rounded-lg' />
                        </div>
                        <div className="grow ">
                            <div className="flex justify-between">
                                <h3 className="flex-none">{'Biến Thể'}</h3>
                                <div className="order-last">{'2.000.000'} VND</div>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="category_Name">
                                    {'Số Lượng'}
                                </h4>
                                <div className="">x{'100'}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="shipping_state/all_Money">
                <div className="flex justify-between m-3 phiship/tongtien ">
                    <div className="">không biết</div>
                    <div className="justify-items-end">
                        <div className="pr-2">phí ship (VND): {'30.000'}</div>
                        <div className="pr-2">tổng tiền (VND): {'3.000.000'}</div>
                        <div className="pr-2">thời gian giao hàng dự kiến</div>
                    </div>
                </div>

            </div>
            <div className="button event flex justify-end py-2">
                <button className="border-2 rounded-full mx-1 px-2.5 py-2.5">
                    <span>Hủy Đơn</span>
                </button>
                <button className="border-2 rounded-full mx-1 px-2.5 py-2.5">
                    <span>Đổi Địa Chỉ</span>
                </button>
                <button className="border-2 rounded-full mx-1 border-orange-600 px-2.5 py-2.5">
                    <span>Thanh Toán</span>
                </button>
            </div>
        </div>
    );
}

export default NewOrder;
