import { useState, type FC } from "react";
import React from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { convertMoney } from "@/lib/formatPrice";
import { CheckOut } from "@/types/Checkout";


interface Props {
  className?: string;
  money: number;
  data: CheckOut;
}
const convertWeightToKg = (weight: number): number => {
  return weight / 1000;
};
const Delivery: FC<Props> = (props) => {
  //set open - close
  const [isOpen, setIsOpen] = useState(false);
  //hanlde open - close
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className={props.className} onClick={handleOpenModal}>
        <span className={styles.total_payment}>
          {convertMoney(Number(props.money))}
          <span className={styles.currency}>đ</span>
        </span>
        <AiOutlineRight className={styles.icon_arrow_right} />
      </div>

      <Modal
        isOpen={isOpen}
        styleModal={styles.modal_full}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <header className={styles.delivery_hearder}>
          <h1>Phí Vận Chuyển</h1>
        </header>
        <div className={styles.delivery_main}>
          {props.data.categories.map((category) => {
            return (
              <div key={category.id}>
                <div className={styles.delivery_category}>
                  <h3>{category.name}</h3>
                </div>
                {category.products.map((product) => {
                  return (
                    <div key={product.id} className={styles.delivery_product}>
                      <div className={styles.delivery_image}>
                        <Image
                          className={styles.listOrder_image}
                          src={product.image}
                          alt="Product"
                          sizes="100vw"
                          width={0}
                          height={0}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className={styles.delivery_product_name}>
                        {product.name}
                        <div className={styles.delivery_product_type}>
                          <div className={styles.delivery_inline}>
                            Có {product.variants.length} Loại
                          </div>
                          <div className={styles.delivery_product_quantity}>
                            <label>Tổng số lượng: </label>
                            <span>{product.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className={styles.delivery_sum}>
            <div className={styles.delivery_result}>
              <span className={styles.delivery_result_label}>
                Phí Vận Chuyển:{" "}
              </span>
              {convertMoney(Number(props.data.fee))}
              <span className={styles.currency}>đ</span>
            </div>
            <div className={styles.delivery_info}>
              <ul>
                <li>
                  Tổng trọng lượng:{" "}
                  {convertWeightToKg(Number(props.data.totalWeight))} Kg
                </li>
                <li>Phí Vận Chuyển: Dưới 5Kg - Đồng Giá 30,000 đồng</li>
                <li>Với Mỗi Kg Tăng Thêm Cộng Thêm 6,0000 đồng/Kg</li>
              </ul>
            </div>
          </div>
        </div>
        <footer className={styles.delivery_footer}>
          <div className={styles.delivery_footer_wrapper}>
            <div className={styles.delivery_footer_sideleft}>
              <div className={styles.delivery_footer_textright}>
                <span className={styles.delivery_footer_text}>
                  <label className={styles.delivery_footer_label}>
                    Phí Vận Chuyển:{" "}
                  </label>
                  <span className={styles.delivery_footer_fee}>
                    {convertMoney(Number(props.money))}
                    <span className={styles.currency}>đ</span>
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.delivery_footer_sideright}>
              <button
                onClick={handleCloseModal}
                className={styles.delivery_button}
              >
                Xác Nhận
              </button>
            </div>
          </div>
        </footer>
      </Modal>
    </>
  );
};
export default React.memo(Delivery);
