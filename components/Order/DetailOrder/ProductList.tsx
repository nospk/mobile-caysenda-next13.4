'use client'
import Link from "next/link"
import Image from "next/image";
import { Key } from "react"
import { OrderCategory, OrderProduct, OrderVariant } from '@/types/order'
export const OrderProductList = ({ props }: { props?: OrderProduct[] }) => {
    return (
        <ul>{
            props &&
            props.map((product: OrderProduct, index: Key) => (
                <li className="Sản Phẩm 1" key={index}>
                    <Link className="Tên Sản Phẩm" href={""}>
                        {product.name} {'>'}
                    </Link>
                    <ul className="grow ">
                        {product.variants && product.variants.map((value: OrderVariant, index: Key) => (
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
                        ))}
                    </ul>
                </li>
            ))
        }
        </ul >
    )
}
export default OrderProductList as unknown as ({ props }: { props: OrderProduct[] }) => JSX.Element;