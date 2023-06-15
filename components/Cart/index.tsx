"use client";

import { convertMoney } from "@/lib/formatPrice";
import { addCart, reset } from "@/redux/services/cart";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "./Header";
import Warning from "./Warning";
import CatogeryCart from "./CatogeryCart";
import { useState } from "react";
export default function Cart() {
  const [isRemove, setIsRemoven] = useState(false);
  const changeRemove: () => void = () => {
    setIsRemoven(!isRemove);
  };
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header remove={isRemove} changeRemove={changeRemove} />
        <div className=" box-border flex h-[70vw] flex-1 flex-col overflow-x-hidden overflow-y-scroll overscroll-none p-[2.4vw] scrollbar-hide">
          <div className="box-border block flex-shrink-0">
            <div className="box-border flex flex-shrink-0 flex-col overflow-hidden">
              <div className="box-border flex flex-shrink-0 flex-col">
                <Warning />
                <CatogeryCart />
              </div>
            </div>
          </div>
        </div>
        <div className="box-border block flex-shrink-0 bg-[#fff]">
          <div className="box-border flex flex-shrink-0 flex-col content-start">
            <span className="box-border whitespace-pre-wrap bg-[#fff2e6] p-[2.4vw] text-[3.2vw] text-[#666]">
              Có {1} sản phẩm chưa đặt đủ số lượng hàng tối thiểu
            </span>
            <div className="flex flex-row items-center justify-between border-t border-solid border-[#e9e9e9] p-[2.66667vw]">
              <div className="relative ml-[-1.6vw] box-border flex flex-shrink-0 flex-row items-center py-[2.4vw] pl-[2.66667vw]">
                <div className="h-[5.33333vw] w-[5.33333vw] content-start items-center rounded-full border-[0.26667vw] border-[#ddd] transition"></div>
                <span className="ml-[2.13333vw] box-border block whitespace-pre-wrap text-[3.2vw] text-[#333]">
                  Tất Cả
                </span>
              </div>
              <div className="box-border flex flex-1 flex-row items-center justify-end">
                <div className="mx-[2.66667vw] box-border flex flex-1 flex-col">
                  <div className="flex flex-1 flex-row flex-wrap content-start items-baseline justify-end">
                    <div className="box-border flex flex-shrink-0 flex-row items-baseline text-[#FF4000]">
                      <span className="box-border block whitespace-pre-wrap text-[2.93333vw]">
                        Tổng Cộng:{" "}
                      </span>
                      <span className="box-border block whitespace-pre-wrap text-[3.73333vw] font-bold">
                        {convertMoney(16000) + "K"}
                      </span>
                      <span className="ml-[0.66667vw]">đ</span>
                    </div>
                  </div>
                </div>
                <div className="box-border flex flex-shrink-0 flex-col">
                  <div className="min-w-[26.66667vw] rounded-full bg-[#ff602d] bg-gradient-to-r to-[#ff4000] px-[4vw] py-[2.93333vw] text-[3.73333vw] leading-[3.73333vw] text-white">
                    <a href="/checkout">
                      <span>Mua Hàng</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
