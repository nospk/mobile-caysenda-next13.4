'use client'
import { Key, useEffect, useState } from 'react';
import React from 'react';
import Image from "next/image";
import { OrderProductList } from './ProductList';
import Link from "next/link";
import styles from './styles.module.css'
import { OrderCategory, OrderProduct, OrderVariant, DetailOrderType } from '@/types/order'

function DetailOrder({ props, isdetail }: { props: OrderCategory[] | OrderProduct , isdetail: boolean}) {
    const [data, setData] = useState<OrderCategory[]>();
    const [product, setProduct] = useState<OrderProduct>();
    useEffect(
        () => {
            if (Array.isArray(props)) {
                setData(props as OrderCategory[]);
            } 
            else {
                setProduct(props as OrderProduct);
            }
        }, [data, props]
    )
    return (
        <ul className="Sản Phẩm m-1">
            <div>
                {!isdetail && product && product.variants && product.variants.map((value: OrderVariant, index: Key) => (
                    <li key={index}>
                        <div className="flex  m-2">
                            <div className="avatar pr-2">
                                <Image src={value.thumbnail}
                                    width={100}
                                    height={100}
                                    alt='product_img'
                                    className='rounded-lg' />
                            </div>
                            <div className="grow">
                                <div className="flex justify-between">
                                    <h3 className="flex-none">{value.name}</h3>
                                    <div className="order-last">{value.price} VND</div>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="category_Name">
                                        {'Số Lượng'}
                                    </h4>
                                    <div className="">x{value.quantity}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))
                }
            </div>
            {isdetail && data && data.map((OrderCategory: OrderCategory, index: Key) => (
                <li key={index}>
                    {OrderCategory && <OrderProductList props={OrderCategory.products} />}
                </li>
            ))}
        </ul>
    );
}

export default DetailOrder;
