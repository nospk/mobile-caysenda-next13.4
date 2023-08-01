"use client";
import styles from "./styles.module.css";
import { convertMoney } from "@/lib/formatPrice";
import { ActiveFull, HaftFull, NotActive } from "../Checked/Checked";
import Header from "./Header";
import Warning from "./Warning";
import CatogeryCart from "./CatogeryCart";
import { useState, type FC, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import {
  getCart,
  getActiveTotal,
  getDeleteTotal,
} from "@/redux/features/cart/cart.action";
import {
  selectErrorOrder,
  selectCheckActiveCart,
} from "@/redux/features/cart/cart.selector";
import type { Cart } from "@/types/cart";

interface Props {
  address: string;
}
const Cart: FC<Props> = (props) => {
  // Check button remove
  const [isRemove, setIsRemove] = useState<boolean>(false);

  // InitialState Address
  const [address, setAddress] = useState<string>(props.address);

  //Initial cart
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer.data);
  const error = useAppSelector((state) => state.cartReducer.error);
  // const fee_delivery = useAppSelector(
  //   (state) => state.cartReducer.fee_delivery
  // );
  const order_error = cart.categories ? selectErrorOrder(cart.categories) : 0;
  const checkActive = cart.categories
    ? selectCheckActiveCart(cart.categories, isRemove)
    : 0;

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

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header
          address={address}
          isRemove={isRemove}
          setIsRemove={setIsRemove}
        />
        <div className={styles.content_wrapper}>
          <div className={styles.content_box}>
            <div className={styles.content_box_wrapper}>
              <div className={styles.catogerycart_overlay}>
                <Warning />
                {cart.categories && cart.categories.length > 0 ? (
                  cart.categories.map((category) => (
                    <CatogeryCart
                      key={category.name}
                      category={category}
                      isRemove={isRemove}
                    />
                  ))
                ) : (
                  <div className="flex h-[300px] flex-col items-center justify-center text-center">
                    <span>Không có đơn hàng</span>
                    <a
                      href="/"
                      className="mt-1 rounded-full bg-[#FF603D] p-2 text-white"
                    >
                      Mua sắm ngay
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer_wapper}>
            {!isRemove && order_error > 0 ? (
              <span className={styles.footer_error}>
                Có {order_error} sản phẩm chưa đặt đủ số lượng hàng tối thiểu
              </span>
            ) : null}

            <div className={styles.footer_main}>
              <div
                onClick={() =>
                  dispatch(
                    getActiveTotal({
                      active: checkActive != 0 ? false : true,
                      isRemove: isRemove,
                    })
                  )
                }
                className={styles.footer_checked_wapper}
              >
                {checkActive == 0 ? (
                  <NotActive />
                ) : checkActive == 1 ? (
                  <HaftFull />
                ) : (
                  <ActiveFull />
                )}
                <span className={styles.footer_checked_text}>Tất Cả</span>
              </div>
              {isRemove ? (
                <div className={styles.footer_remove}>
                  <div
                    onClick={() => {
                      dispatch(getDeleteTotal()).then(() =>
                        dispatch(
                          getActiveTotal({ active: false, isRemove: false })
                        )
                      );
                    }}
                    className={styles.footer_remove_button}
                  >
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
                          {convertMoney(cart.bill ? cart.bill : 0)}
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
