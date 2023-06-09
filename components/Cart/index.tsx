"use client";

import { convertMoney } from "@/lib/formatPrice";
import { add, reset } from "@/redux/features/cart/cart.slice";
import { ActiveFull, HaftFull, NotActive } from "./Checked";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "./Header";
import Warning from "./Warning";
import CatogeryCart from "./CatogeryCart";
import { useState, type FC, useEffect } from "react";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { getCart } from "@/redux/features/cart/cart.action";
import type { Cart } from "@/types/cart";
interface Props {
  address: string;
  cart: Cart;
}
const Cart: FC<Props> = (props) => {
  const [address, setAddress] = useState<string>(props.address);
  const dispatch = useAppDispatch();

  //Initial cart
  const cart = useAppSelector((state) => state.cartReducer.data);
  const error = useAppSelector((state) => state.cartReducer.error);
  
  //Use for show error when update cart
  useEffect(() => {
    if (error) dispatch(openDialog({ message: error }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  //Get cart first load
  useEffect(() => {
    dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isRemove = useAppSelector((state) => state.removeCartReducer.isRemove);
  const totalMoney = 13090001;
  const order_error = 1;
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header address={address} />
        <div className={styles.content_wrapper}>
          <div className={styles.content_box}>
            <div className={styles.content_box_wrapper}>
              <div className={styles.catogerycart_overlay}>
                <Warning />
                {cart.categories
                  ? cart.categories.map((category) => (
                      <CatogeryCart key={category.name} category={category} />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer_wapper}>
            <span className={styles.footer_error}>
              Có {order_error} sản phẩm chưa đặt đủ số lượng hàng tối thiểu
            </span>
            <div className={styles.footer_main}>
              <div className={styles.footer_checked_wapper}>
                <HaftFull />
                <span className={styles.footer_checked_text}>Tất Cả</span>
              </div>
              {isRemove ? (
                <div className={styles.footer_remove}>
                  <div className={styles.footer_remove_button}>
                    <span className={styles.footer_remove_text}>Xóa Bỏ</span>
                  </div>
                </div>
              ) : (
                <div className={styles.footer_tottaly}>
                  <div className={styles.footer_tottaly_wrapper}>
                    <div className={styles.footer_tottaly_flex}>
                      <div className={styles.footer_tottaly_content}>
                        <span className={styles.footer_tottaly_text}>
                          Tổng Cộng:{" "}
                        </span>
                        <span className={styles.footer_tottaly_money}>
                          {convertMoney(totalMoney) + "K"}
                        </span>
                        <span className={styles.footer_tottaly_currency}>
                          đ
                        </span>
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
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Cart;
