'use client'
import Link from "next/link"
import Image from "next/image";
import { Key } from "react"
import { OrderCategory, OrderProduct, OrderVariant } from '@/types/order'
import {variantsList} from './variantsList'
export const OrderProductList = ({ props }: { props?: OrderProduct[] }) => {
    return (
        <>{
            props &&
            props.map((product: OrderProduct, index: Key) => {
                <li className="Sản Phẩm 1">
                    <Link className="Tên Sản Phẩm" href={""}>
                        {product.name} {'>'}
                    </Link>
                    <div className="flex  m-2">
                        <div className="avatar pr-2">
                            <Image src={product.thumbnail}
                                width={100}
                                height={100}
                                alt='product_img'
                                className='rounded-lg' />
                        </div>
                        <div className="grow ">
                            
                        </div>
                    </div>
                </li>
            })
        }
        </>
    )
}
export default OrderProductList;