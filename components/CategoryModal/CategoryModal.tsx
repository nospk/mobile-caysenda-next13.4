"use client"
import { FC, ReactNode } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import {IconCricle} from "@/components/Icon";
import styles from '@/components/CategoryModal/CategoryModal.module.css'
interface Props {
    children: ReactNode;
}
const MenuModal: FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => { 
        setIsOpen(true);
        document.body.classList.add('overflow-hidden');
    };
    const handleCloseModal = () => {
        setIsOpen(false)
        document.body.classList.remove('overflow-hidden');
    };
    return (
        <>
            <div  className={styles.menu_item} onClick={handleOpenModal}>{children}</div>
            <Modal isOpen={isOpen} styleModal={styles.modal} styleModalOverlay={styles.modalOverlay} onClose={handleCloseModal}>
                <span className="font-bold">Danh Mục Sản Phẩm</span>
                <div className="grid grid-cols-5">
                    <div className={styles.image_cricle}>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div className={styles.image_cricle}>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div className={styles.image_cricle}>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <IconCricle src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default MenuModal


