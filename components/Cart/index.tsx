"use client";

import { convertMoney } from "@/lib/formatPrice";
import { addCart, reset } from "@/redux/features/cart/cart.slice";
import { ActiveFull, HaftFull, NotActive } from "./Checked";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "./Header";
import Warning from "./Warning";
import CatogeryCart from "./CatogeryCart";
import { useState, useEffect } from "react";
export default function Cart() {
  //Setting for delete button active change css
  const [isRemove, setIsRemoven] = useState(false);
  const changeRemove: () => void = () => {
    setIsRemoven(!isRemove);
  };

  //Get cart
  const cart = useAppSelector((state) => state.cartReducer);

  //Get address
  const address='24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh'

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header remove={isRemove} changeRemove={changeRemove} address={address} />
        <div className={styles.content_wrapper}>
          <div className={styles.content_box}>
            <div className={styles.content_box_wrapper}>
              <div className={styles.catogerycart_overlay}>
                <Warning />
                {cart.categories
                  ? cart.categories.map((category) => (<CatogeryCart key={category.name} category={category}/>))
                  : null}
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
