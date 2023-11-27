import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";
import Image from "next/image";
import { OrderType } from "@/types/order";
import { FaChevronRight } from "react-icons/fa";
import { convertMoney } from "@/lib/formatPrice";
import { countVaraint } from "@/lib/common";
const AdditionOrder = ({
  _Prop,
  handleCancelOrder,
}: {
  _Prop?: OrderType;
  handleCancelOrder: (id: string) => Promise<void>;
}) => {
  const data = _Prop as OrderType;
  const total = countVaraint(data);
  return (
    <div className="mb-4 rounded-lg bg-white px-2 py-[2.4vw]">
      <div className="flex items-center ">
        <div className="flex grow">
          <div className="text-base font-bold">Hóa đơn {data.orderId}</div>
          <div className="flex content-center items-center justify-center text-[#999999]">
            <FaChevronRight />
          </div>
        </div>
        <div className="flex-none text-sm text-red-500">Chờ Bổ Sung</div>
      </div>
      <div className="flex">
        <div className="pr-2">
          <Image
            src={data.category[0].products[0].variants[0].thumbnail}
            width={100}
            height={100}
            alt="product_img"
            className="rounded-lg"
            priority={true}
          />
        </div>
        <div className="grow ">
          <div className="flex justify-between">
            <h3 className="flex-none">{data.category[0].products[0].name}</h3>
            <div className="">{convertMoney(data.category[0].products[0].price1)} đ</div>
          </div>
          <div className="flex justify-between">
            <h4 className="category_Name">{data.category[0].products[0].variants[0].name}</h4>
            <div className="">x{data.category[0].products[0].variants[0].quantity}</div>
          </div>
          <div className="mt-3">
            <h4 className="text-sm text-orange-600">Đã giao trước hàng ngày {"15/05/2023"}</h4>
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center rounded-lg border-2 bg-[#FAFAFA] p-1 ">
        <CiDeliveryTruck className="h-7 w-7" />
        <span className="truncate pl-1">{data.address}</span>
      </div>
      <div className="flex flex-row justify-between pt-2 text-[#999999]">
        <span>Tổng cộng {total} mã hàng</span>
        <span>Phí Ship: {convertMoney(data.fee)} đ</span>
      </div>
      <div className="flex justify-end">
        <span className="font-bold">Tổng Bill: {convertMoney(data.totalPrice)} đ</span>
      </div>
      <div className="flex items-center justify-between py-2 text-xs">
        <Link href={`/order/id?=${data.orderId}`}>
          <span className="text-[#999999]">Chi Tiết Đơn Hàng</span>
        </Link>
        <div className="flex justify-end py-2 text-sm">
          <button onClick={() => handleCancelOrder(data.orderId)} className="mr-1 rounded-full border-2 px-1 py-1">
            <span>Hủy Đơn</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdditionOrder;
