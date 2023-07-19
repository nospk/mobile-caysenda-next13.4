'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
function NewOrder() {
    return (

        <div className="px-2 pb-2 border-b-2">
            <div className='flex '>
                <div className="flex grow">
                    <div className="text-xl pr-2">
                        {'Mã Đơn Hàng'}
                    </div>
                    <div className="flex-none">{'>'}</div>
                </div>
                <div className="flex-none text-red-500">chờ thanh toán</div>
            </div>
            <ul className="Sản Phẩm">
                <li className="Sản Phẩm 1">
                    <Link className="Tên Sản Phẩm" href={""}>
                        {'Tên Sản Phẩm'}
                    </Link>
                    <div className="flex">
                        <div className="avatar pr-2">
                            <Image src={'https://caysenda.vn/resources/upload/17892827873_102253868.jpg'} width={100} height={100} alt='product_img' />
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
                <div className="flex justify-between phiship/tongtien">
                    <div className="">không biết</div>
                    <div className="justify-items-end">
                        <div className="pr-2">phí ship: {'30.000'} VND</div>
                        <div className="pr-2">tổng tiền: {'3.000.000'} VND</div>
                        <div className="pr-2">thời gian giao hàng dự kiến</div>
                    </div>
                </div>
               
            </div>
            <div className="button event flex justify-end py-2">
                <button className="border-2 rounded-full mx-1">
                    <span className="mx-1 my-1">Hủy Đơn</span>
                </button>
                <button className="border-2 rounded-full mx-1">
                    <span className="mx-1 my-1">Đổi Địa Chỉ</span>
                </button>
                <button className="border-2 rounded-full mx-1 border-red-500">
                    <span className="mx-1 my-1">Thanh Toán</span>
                </button>
            </div>
        </div>
    );
}

export default NewOrder;
