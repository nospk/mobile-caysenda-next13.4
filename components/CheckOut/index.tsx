"use client";
import { AiOutlineRight } from "react-icons/ai";
import Header from "./Header";
import ListOrder from "./ListOrder";
import { ListDelivery } from "@/types/Delivery";
import { useState, type FC, useEffect, useMemo } from "react";
import Payment from "./Payment";
interface Props {
  listDelivery: ListDelivery[];
  activeDelivery: ListDelivery;
}
const CheckOut: FC<Props> = ({ listDelivery, activeDelivery }) => {
  // InitialState Address
  const [address, setAddress] = useState<ListDelivery>(activeDelivery);
  return (
    <div>
      <div className="absolute bottom-auto top-[8vw] h-[calc(100dvh-17.5vw)] w-full overflow-auto ">
        <div className="absolute left-0 right-0 top-0">
          <Header
            listDelivery={listDelivery}
            activeAddress={address}
            setAddress={setAddress}
          />
          <div className="block overflow-hidden">
            <ListOrder />
            <div className="box-border bg-white">
              <div className="mb-[1.666667vw] px-[1.666667vw] py-[2.333333vw] text-[#222]">
                <div className="text-[3.666667vw] font-medium ">
                  Chi Tiết Thanh Toán
                </div>
                <div className="box-border">
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[3.466667vw]">
                      Hình Thức Thanh Toán
                    </label>
                    <Payment />
                  </div>
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[3.466667vw]">
                      Tổng Tiền Phí Vận Chuyển
                    </label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <span className="box-border text-[3.466667vw] text-[#222]">
                        60K
                        <span className="ml-[0.333333vw] text-[2.666667vw]">
                          đ
                        </span>
                      </span>
                      <AiOutlineRight className="ml-[0.666667vw] h-[2vw] w-[2vw] text-[#999]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[3.466667vw] ">
                      Tổng Tiền Hàng
                      <span className="ml-[1vw] text-[2.8666667vw] text-[#999]">
                        2 Loại 5 Cái
                      </span>
                    </label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <span className="box-border text-[3.466667vw] ">
                        90K
                        <span className="ml-[0.333333vw] text-[2.666667vw]">
                          đ
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[3.466667vw]">Tổng Thanh Toán</label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <span className="box-border text-[3.466667vw] ">
                        190K
                        <span className="ml-[0.333333vw] text-[2.666667vw]">
                          đ
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[3.466667vw]">Ghi Chú</label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <input
                        className="flex-1 pl-[1.333333vw] text-right text-[3.466667vw] outline-0"
                        maxLength={500}
                        placeholder="Lưu Ý Cho Người Bán"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[9.5vw] w-full bg-white">
        <div className="box-border p-[1.666667vw]">
          <div className="flex flex-row items-center">
            <div className="mr-[1.666667vw] flex-shrink-0 grow text-right text-[3.466667vw] ">
              <label>
                <span className="mr-[1vw] text-[2.666667vw] text-[#999]">
                  Đã bao gồm phí vận chuyển
                </span>
                {"Tổng Cộng "}
              </label>
              <span className="box-border text-[4vw] font-medium text-[#FF4000]">
                190K<span className="ml-[0.333333vw] text-[3.666667vw]">đ</span>
              </span>
            </div>
            <div className="flex-initial">
              <div className="flex">
                <button className="h-[6.1666667vw] w-[18.6666667vw] flex-1 rounded-full bg-[#ff4000] text-[3.4666667vw] font-medium leading-[6.1666667vw] text-white">
                  Xác Nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
