"use client";
import { type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import { IconWithLabel } from "@/components/Icon";
import styles from "./CategoryModal.module.css";
interface Props {
  children: React.ReactNode;
}
const MenuModal: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <div className={styles.menu_item} onClick={handleOpenModal}>
        {children}
      </div>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <span className="font-bold">Danh Mục Sản Phẩm</span>
        <div className="grid grid-cols-6 gap-2.5">
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
          <div className="flex flex-col">
            <IconWithLabel
              src="/iconProductNews.png"
              alt="category"
              className={styles.menu_item}
              isCricle={true}
            >
              <span>Test Menu</span>
            </IconWithLabel>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default MenuModal;
