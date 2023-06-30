"use client";

import { convertMoney } from "@/lib/formatPrice";
import { addCart, reset } from "@/redux/services/cart";
import { ActiveFull, HaftFull, NotActive } from "./Checked";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "./Header";
import Warning from "./Warning";
import CatogeryCart from "./CatogeryCart";
import { useState, useEffect } from "react";
import useOutsideListener from "@/components/hook/useOutsideListener";
export default function Cart() {
  const [isRemove, setIsRemoven] = useState(false);
  const changeRemove: () => void = () => {
    setIsRemoven(!isRemove);
  };
  const [activeRef, setActiveRef] = useOutsideListener();
  const handleOutside = (event) => {
    console.log(activeRef.current, event.target);
    if (!activeRef.current) {
      setActiveRef(event.target);
    } else if (activeRef.current.contains(event.target as Node)) {
      console.log("1");
    } else {
      activeRef.current.changCSS();
    }
  };
  useEffect(() => {
    document.addEventListener("touchstart", handleOutside);
  });
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header remove={isRemove} changeRemove={changeRemove} />
        <div className={styles.content_wrapper}>
          <div className={styles.content_box}>
            <div className={styles.content_box_wrapper}>
              <div className={styles.catogerycart_overlay}>
                <Warning />
                <CatogeryCart activeRef={activeRef} />
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer_wapper}>
            <span className={styles.footer_error}>
              Có {1} sản phẩm chưa đặt đủ số lượng hàng tối thiểu
            </span>
            <div className={styles.footer_main}>
              <div className={styles.footer_checked_wapper}>
                <HaftFull />
                <span className={styles.footer_checked_text}>Tất Cả</span>
              </div>
              <div className={styles.footer_tottaly}>
                <div className={styles.footer_tottaly_wrapper}>
                  <div className={styles.footer_tottaly_flex}>
                    <div className={styles.footer_tottaly_content}>
                      <span className={styles.footer_tottaly_text}>
                        Tổng Cộng:{" "}
                      </span>
                      <span className={styles.footer_tottaly_money}>
                        {convertMoney(16000) + "K"}
                      </span>
                      <span className={styles.footer_tottaly_currency}>đ</span>
                    </div>
                  </div>
                </div>
                <div className={styles.checkout_button}>
                  <div className={styles.checkout_button_text}>
                    <a href="/checkout">
                      <span>Mua Hàng</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
