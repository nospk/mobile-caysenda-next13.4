"use client";
import { AiOutlineRight } from "react-icons/ai";
import Header from "./Header";
import ListOrder from "./ListOrder";
import { ListDelivery } from "@/types/Delivery";
import { useState, type FC, useEffect, useMemo } from "react";
import { CheckOut } from "@/types/checkout";
import { convertMoney } from "@/lib/formatPrice";
import styles from "./styles.module.css";
import Payment from "./Payment";
interface Props {
  listDelivery: ListDelivery[];
  activeDelivery: ListDelivery;
  data: CheckOut;
}
const CheckOut: FC<Props> = ({ listDelivery, activeDelivery, data }) => {
  // InitialState Address
  const [address, setAddress] = useState<ListDelivery>(activeDelivery);
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.content}>
          <Header
            listDelivery={listDelivery}
            activeAddress={address}
            setAddress={setAddress}
          />
          <div className={styles.order}>
            <ListOrder data={data} />
            <div className={styles.total}>
              <div className={styles.total_content}>
                <div className={styles.total_title}>Chi Tiết Thanh Toán</div>
                <div className="box-border">
                  <div className={styles.total_list}>
                    <label className={styles.total_label}>
                      Hình Thức Thanh Toán
                    </label>
                    <Payment />
                  </div>
                  <div className={styles.total_list}>
                    <label className={styles.total_label}>
                      Tổng Tiền Phí Vận Chuyển
                    </label>
                    <div className={styles.total_list_value}>
                      <span className={styles.total_payment}>
                        {convertMoney(Number(data.fee))}
                        <span className={styles.currency}>đ</span>
                      </span>
                      <AiOutlineRight className={styles.icon_arrow_right} />
                    </div>
                  </div>
                  <div className={styles.total_list}>
                    <label className={styles.total_label}>
                      Tổng Tiền Hàng
                      <span className={styles.total_type}>
                        {data.variantActive} Loại {data.totalQuantity} Cái
                      </span>
                    </label>
                    <div className={styles.total_list_value}>
                      <span className={styles.total_price}>
                        {convertMoney(Number(data.amount))}
                        <span className={styles.currency}>đ</span>
                      </span>
                    </div>
                  </div>

                  <div className={styles.total_list}>
                    <label className={styles.total_label}>
                      Tổng Thanh Toán
                    </label>
                    <div className={styles.total_list_value}>
                      <span className={styles.total_price}>
                        {convertMoney(Number(data.fee) + Number(data.amount))}
                        <span className={styles.currency}>đ</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.total_list}>
                    <label className={styles.total_label}>Ghi Chú</label>
                    <div className={styles.total_list_value}>
                      <input
                        className={styles.total_note}
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
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_content}>
            <div className={styles.footer_left}>
              <label>
                <span className={styles.footer_text}>
                  Đã bao gồm phí vận chuyển
                </span>
                {"Tổng Cộng "}
              </label>
              <span className={styles.footer_price}>
                {convertMoney(Number(data.fee) + Number(data.amount))}
                <span className={styles.currency_lg}>đ</span>
              </span>
            </div>
            <div className={styles.footer_right}>
              <div className={styles.footer_confirm}>
                <button className={styles.footer_button}>Xác Nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
