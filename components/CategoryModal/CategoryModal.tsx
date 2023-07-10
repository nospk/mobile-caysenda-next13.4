"use client";
import {type FC, useEffect} from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import { IconWithLabel } from "@/components/Icon";
import styles from "./CategoryModal.module.css";
import {CategoryNavType} from "@/types/WebSettingType";
import Link from "next/link";
import {useRouter} from "next/navigation";
interface Props {
  children: React.ReactNode;
  nav:CategoryNavType[]
}
const CategoryModal: FC<Props> = ({ children,nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
      if (isOpen) {
          document.body.classList.add("overflow-hidden");
      } else {
          document.body.classList.remove("overflow-hidden");
      }
  }, [isOpen])

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const gotoCategory = (href:string) => {
      router.push(href);
      setIsOpen(false);
  }

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
        <div className="grid grid-cols-4 gap-2.5">
          {nav.map((category,index) => {
            return (
                <div className={styles.wrap_item} onClick={() => gotoCategory(category.href)} key={index}>
                    <IconWithLabel
                        src={category.icon ? 'https://caysenda.vn' + category.icon: 'https://caysenda.vn/resources/upload/chau-trong-cay.jpg'}
                        alt={category.name}
                        className={styles.category_item}
                        isCricle={true}
                    >
                        <span className={styles.category_name}>{category.name}</span>
                    </IconWithLabel>
                </div>
            )
          })}
        </div>
      </Modal>
    </>
  );
};
export default CategoryModal;
