"use client";
import { useEffect, type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";

import styles from "./Dialog.module.css";
import { useDialog } from "./Provider";

/**
 * How To Use
 *
 * import {useDialog} from '@/components/Dialog/Provider'
 *
 * const { dialog, setDialog } = useDialog();
 *
 * dialog with message:string and time:number
 * default time is 3s
 *
 * setDialog with {type:"DIALOG", dialog:{time:(timeout), message:(The message)}}
 */
const Dialog: FC = () => {
  const { dialog } = useDialog();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (dialog.message.length > 0) {
      handleOpenModal();
      setTimeout(handleCloseModal, dialog.time || 3000);
    }
  }, [dialog]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <span className="text-white font-bold">{dialog.message}</span>
      </Modal>
    </>
  );
};

export default Dialog;
