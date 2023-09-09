import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";
import Image from "next/image";
import { OrderType } from "@/types/order";
const ShippingOrderCompornent = ({_Prop}:{_Prop?: OrderType}) => {
    return (
        <div className="px-2 mb-2 border-b-2 rounded-lg bg-white">
            <div className='flex '>
                <div className="flex grow">
                    <div className="text-xl pr-2">
                        {'Mã Đơn Hàng'}
                    </div>
                    <div className="flex-none">{'>'}</div>
                </div>
                <div className="flex-none text-red-500">Đang Vận Chuyển</div>
            </div>
            <ul className="Sản Phẩm">
                <li className="Sản Phẩm 1">
                    <Link className="Tên Sản Phẩm" href={""}>
                        {'Tên Sản Phẩm'} {'>'}
                    </Link>
                    <div className="flex">
                        <div className="avatar pr-2">
                            <Image src={'https://caysenda.vn/resources/upload/17892827873_102253868.jpg'} width={100} height={100} alt='product_img' className='rounded-lg' />
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
            <div className="bg-[#FAFAFA] flex border-2 rounded-lg my-2 p-2">
                <CiDeliveryTruck size={18} />
                <span className="pl-2">{'Tình Trạng Vận Chuyển'}</span>
            </div>
            <div className="shipping_state/all_Money">
                <div className="flex justify-between phiship/tongtien">
                    <div className="">không biết</div>
                    <div className="justify-items-end">
                        <div className="pr-2">phí ship (VND): {'30.000'}</div>
                        <div className="pr-2">tổng tiền (VND): {'3.000.000'}</div>
                    </div>
                </div>

            </div>
            <div className="button event flex justify-start py-2">
                <Link href={""} >
                    <span className="text-orange-600">
                        Chi Tiết Đơn Hàng
                    </span>
                </Link>
                
            </div>
            <div className="button event flex justify-end py-2">
                <button className="border-2 rounded-full mx-1 border-orange-600 px-2.5 py-2.5">
                    <span>Tra Cứu DH</span>
                </button>
            </div>
        </div>
    );
};
export default ShippingOrderCompornent;