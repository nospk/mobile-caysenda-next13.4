"use client";
import { useEffect, type FC, useState } from "react";

import Modal from "@/components/Modal";

import styles from "./Dialog.module.css";
//import { useDialog } from "./Provider";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeDialog } from "@/redux/features/dialog/dialog.slice";
/**
 * How To Use
 * openDialog({message: string, time: null||number})
 * 
 * 
 * default time is 3s
 *
 * 
 */
const Dialog: FC = () => {
  const { message, time } = useAppSelector((state) => state.dialogReducer);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    dispatch(closeDialog())
  };
  useEffect(() => {
    if (message.length > 0) {
      handleOpenModal();
      setTimeout(handleCloseModal, time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <span className="font-bold text-white">{message}</span>
      </Modal>
    </>
  );
};

export default Dialog;
