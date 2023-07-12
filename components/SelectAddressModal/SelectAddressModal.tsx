"use client";
import { type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import NewAddressModal from "@/components/NewAddressModal";
import { AiOutlineClose, AiOutlineEnvironment } from "react-icons/ai";
interface Props {
  children: React.ReactNode;
}
const SelectAddressModal: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const curentDelivery = {
    name: "Trần Đăng Huy Hoàng",
    phone: "0962773213",
    address:
      "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
  };
  const listDelivery = [
    {
      name: "Trần Đăng Huy Hoàng 1",
      phone: "0962773213",
      address:
        "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
    },
    {
      name: "Trần Đăng Huy Hoàng 2",
      phone: "0962773213",
      address:
        "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
    },
  ];
  return (
    <>
      <div className={styles.main} onClick={handleOpenModal}>
        {props.children}
      </div>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper}>
          <a className={styles.close} onClick={handleCloseModal}>
            <AiOutlineClose />
          </a>
          <div className={styles.title}>Địa Chỉ Giao Hàng</div>
          <div className={styles.delivery_to}>
            <div className={styles.sub_title}>Địa chỉ hiện tại</div>
            <div className={styles.current_delivery}>
              <AiOutlineEnvironment className={styles.icon} />
              <div className={styles.current_delivery_address}>
                <div className={styles.name_phone_box}>
                  <span className={styles.name}>{curentDelivery.name}</span>
                  <span className={styles.phone}>{curentDelivery.phone}</span>
                </div>
                <div className={styles.address}>{curentDelivery.address}</div>
              </div>
            </div>
            <div className={styles.sub_title}>Chọn địa chỉ nhận hàng</div>
            <div className={styles.other_delivery_list}>
              {listDelivery.map((item) => (
                <div key={item.name} className={styles.list_body}>
                  <div className={styles.list_body_inner}>
                    <div className={styles.list_body_content}>
                      <div className={styles.list_body_box}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.phone}>{item.phone}</span>
                      </div>
                      <div className={styles.address}>{item.address}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.footer}>
              <NewAddressModal >
                <button className={styles.button_create}>
                  Tạo Địa Chỉ Giao Hàng Mới
                </button>
              </NewAddressModal>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectAddressModal;
