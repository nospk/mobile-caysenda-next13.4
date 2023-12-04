"use client";
import React from "react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { OrderType } from "@/types/order";
import { convertMoney } from "@/lib/formatPrice";
import { FaChevronRight } from "react-icons/fa";
const CompleteOrder = ({ _Prop }: { _Prop: OrderType }) => {
  const data = _Prop as OrderType;
  const [isShow, setIsShow] = React.useState<boolean>(false);
  return (
    <div className="mb-4 rounded-lg bg-white px-2 py-[2.4vw]">
      <div className="flex items-center">
        <div className="flex grow">
          <div className="text-base font-bold">Hóa đơn {data.id}</div>
          <div className="flex content-center items-center justify-center text-[#999999]">
            <FaChevronRight />
          </div>
        </div>
        <div className="flex-none text-sm text-red-500">Hoàn Thành</div>
      </div>

      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            src={data.order_detail[0].thumbnail}
            width={100}
            height={100}
            alt="product_img"
            className="rounded-lg"
            priority={true}
          />
        </div>
        <div className="grow ">
          <div className="flex justify-between">
            <h3 className="flex-none">{data.order_detail[0].product_name}</h3>
            <div className="">{convertMoney(data.order_detail[0].price)} đ</div>
          </div>
          <div className="flex justify-between">
            <h4>{data.order_detail[0].variant_name}</h4>
            <div className="">x{data.order_detail[0].quantity}</div>
          </div>
          <div className="mt-3">
            <h4 className="text-sm text-orange-600">Đã Giao Hàng Ngày {"15/07/2023"}</h4>
          </div>
        </div>
      </div>
      {data.order_detail.length > 1 &&
        isShow &&
        data.order_detail.map((item, index) => {
          if (index > 0)
            return (
              <div className="flex pt-2">
                <div className="pr-2">
                  <Image
                    src={item.thumbnail}
                    width={100}
                    height={100}
                    alt="product_img"
                    className="rounded-lg"
                    priority={true}
                  />
                </div>
                <div className="grow ">
                  <div className="flex justify-between">
                    <h3 className="flex-none">{item.product_name}</h3>
                    <div className="">{convertMoney(item.price)} đ</div>
                  </div>
                  <div className="flex justify-between">
                    <h4>{item.variant_name}</h4>
                    <div className="">x{item.quantity}</div>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm text-orange-600">Đã Giao Hàng Ngày {"15/07/2023"}</h4>
                  </div>
                </div>
              </div>
            );
        })}
      <div className="my-2 flex items-center rounded-lg border-2 bg-[#FAFAFA] p-1 ">
        <CiDeliveryTruck className="h-7 w-7" />
        <span className="truncate pl-1">{data.full_address}</span>
      </div>
      <div className="flex flex-row justify-between pt-2 text-[#999999]">
        <span>Tổng cộng {data.order_detail.length} mã hàng</span>
        <span>Phí Ship: {convertMoney(data.ship)} đ</span>
      </div>
      <div className="flex justify-end">
        <span className="font-bold">Tổng Bill: {convertMoney(data.order_amount)} đ</span>
      </div>
      <div className="flex items-center justify-between py-2 text-xs">
        {data.order_detail.length == 1 && <div></div>}
        {data.order_detail.length > 1 && !isShow && (
          <span onClick={() => setIsShow(!isShow)} className="text-[#999999]">
            Chi Tiết Đơn Hàng
          </span>
        )}
        {data.order_detail.length > 1 && isShow && (
          <span onClick={() => setIsShow(!isShow)} className="text-[#999999]">
            Ẩn Chi Tiết
          </span>
        )}
      </div>
    </div>
  );
};

export default CompleteOrder;
