import Modal from "@/components/Modal";
import { useState, useEffect, type FC } from "react";
import React from "react";
import styles from "./styles.module.css";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
const Payment: FC = () => {
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
      <div className={styles.payment_modal} onClick={handleOpenModal}>
        <span className={styles.payment_modal_text}>CK trước 10%</span>
        <AiOutlineRight className={styles.icon_arrow_right} />
      </div>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper_payment}>
          <a className={styles.close} onClick={handleCloseModal}>
            <AiOutlineClose />
          </a>
          <div className={styles.title_payment}>Hình Thức Thanh Toán</div>
          <div className={styles.modal_payment_content}>
            <div className={styles.modal_payment_main}>
              Thanh Toán Trước 10% Đơn hàng
            </div>
            <div>
              <span>Số còn lại thanh toán khi nhận hàng</span>
              <br />
              <span> (Được kiểm tra hàng trước khi nhận)</span>
            </div>
            <div className={styles.modal_payment_margin}>
              <span>Thời gian giao hàng dự kiến </span>
              <span className={styles.modal_payment_delivery}>
                5 tới 7 ngày{" "}
              </span>
              <span>(không tính Thứ 7 và Chủ Nhật)</span>
            </div>
            <div className={styles.modal_payment_margin}>
              Thanh toán chuyển khoản qua số tài khoản sau:
              <br />
              <span className={styles.modal_payment_list}>
                - Tên:Nguyễn Thanh Bình
              </span>
              <br />
              <span className={styles.modal_payment_list}>
                - Số tài khoản: 0421000506707
              </span>
              <br />
              <span className={styles.modal_payment_list}>
                - Ngân hàng Vietcombank - Chi nhánh Hùng Vương
              </span>
              <br />
              Thanh toán qua ví điện tử MOMO:
              <br />
              <span className={styles.modal_payment_list}>
                - Tên: Nguyễn Thanh Bình
              </span>
              <br />
              <span className={styles.modal_payment_list}>
                - Số điện thoại MOMO: 0961216330
              </span>
              <br />
            </div>
          </div>
          <footer className={styles.modal_payment_footer}>
            <div
              onClick={handleCloseModal}
              className={styles.modal_payment_button}
            >
              Xác Nhận
            </div>
          </footer>
        </div>
      </Modal>
    </>
  );
};
export default React.memo(Payment);
