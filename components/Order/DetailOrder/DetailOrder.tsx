'use client'
import { Key, useEffect } from 'react';
import React from 'react';
import Image from "next/image";
import { OrderProductList } from './ProductList';
import Link from "next/link";
import styles from './styles.module.css'
import { OrderCategory, OrderProduct, OrderVariant } from '@/types/order'


function DetailOrder({ props, children  }: { props?: OrderCategory[], children : React.ReactNode }) {

    let orderlist = props?.map((OrderCategory: OrderCategory, index: Key) => {
        {
            OrderCategory && <OrderProductList props={OrderCategory.products} />
        }
    })

    useEffect(
        () => {

        }, []
    )
    return (
        <ul className="Sản Phẩm m-1">
            {children}
        </ul>
    );
}

export default DetailOrder;
