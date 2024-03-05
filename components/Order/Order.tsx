"use client";
import { FC, Key, useEffect, useState } from "react";
import NewOrder from "./NewOrder";
import CompleteOrder from "./CompleteOrder";
import AdditionOrder from "./AdditionOrder";
import ShippingOrder from "./ShippingOrder";
import { OrderType } from "types/order";
import StatusOrder from "@/components/Order/StatusOrder";
import OrderService from "@/services/Order.service";
import { ResponseMessage } from "@/types/Response";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
import { FaClipboardList } from "react-icons/fa";
import styles from "./Order.module.css";
import ChangeAddressModal from "./ChangeAddressModal";
const OrderComponents: FC<{ List_Order: OrderType[]; type: string }> = ({ List_Order, type }) => {
  const [orders, setOrders] = useState<OrderType[]>(List_Order);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderChangeAddress, setOrderChangeAddress] = useState<{
    id: number;
    full_address: string;
    address: string;
    province: string;
    dictrict: string;
    ward: string;
  }>({
    id: 0,
    full_address: "",
    address: "",
    province: "",
    dictrict: "",
    ward: "",
  });
  const dispatch = useAppDispatch();

  const refersh: () => void = async () => {
    const data = (await OrderService.getOrder(type)) as unknown as OrderType[];
    setOrders(data);
  };
  const handleCancelOrder: (id: number) => Promise<void> = async (id) => {
    const result: ResponseMessage = await OrderService.cancelOrder(id);
    dispatch(openDialog({ message: result.message }));
    if (result.success) refersh();
    else return;
  };
  const handleChangeAddress: (
    id: number,
    full_address: string,
    address: string,
    province: string,
    dictrict: string,
    ward: string
  ) => Promise<void> = async (id, full_address, address, province, dictrict, ward) => {
    setOrderChangeAddress({
      id: id,
      full_address: full_address,
      address: address,
      province: province,
      dictrict: dictrict,
      ward: ward,
    });
    setIsOpen(!isOpen);
    return;
  };

  const handleAddressOrder: (order_id: number, address_id: number) => Promise<void> = async (order_id, address_id) => {
    const result: ResponseMessage = await OrderService.changeAddressOrder(order_id, address_id);
    dispatch(openDialog({ message: result.message }));
    if (result.success) {
      setIsOpen(false);
      refersh();
    } else return;
  };
  // Refersh when change type order
  useEffect(() => {
    refersh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <>
      <div className="mx-2 pb-8 pt-4">
        <ul>
          {orders.map((_Order: any, index: Key) => (
            <li key={index + "_" + _Order.id}>
              {_Order.status == StatusOrder.NewOrder && (
                <NewOrder
                  _Prop={_Order}
                  handleCancelOrder={handleCancelOrder}
                  handleChangeAddress={handleChangeAddress}
                />
              )}
              {_Order.status == StatusOrder.CompleteOrder && <CompleteOrder _Prop={_Order} />}
              {_Order.status == StatusOrder.ShippingOrder && <ShippingOrder _Prop={_Order} />}
              {_Order.status == StatusOrder.AdditionOrder && (
                <AdditionOrder _Prop={_Order} handleCancelOrder={handleCancelOrder} />
              )}
            </li>
          ))}

          {orders.length == 0 && (
            <div className="flex flex-col items-center text-center">
              <FaClipboardList className="h-10 w-10" />
              Chưa có đơn hàng
            </div>
          )}
        </ul>
      </div>
      <div className={styles.more}>
        <span className={styles.text}>Có thể bạn cũng thích</span>
      </div>
      <ChangeAddressModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        orderChangeAddress={orderChangeAddress}
        handleAddressOrder={handleAddressOrder}
      />
    </>
  );
};

export default OrderComponents;
