"use client";
import { useEffect, type FC, useState } from "react";

import styles from "./ModalPopup.module.css";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openModal, setModal, closeModal } from "@/redux/features/modal/modal.slice";

const ModalPopup: FC = () => {
  const { open, type, timeClose } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  console.log("render");
  return (
    <>
      {open && (
        <div className={styles.modalOverlay} onDrag={handleCloseModal} onClick={handleCloseModal}>
          <div onClick={(e) => e.stopPropagation()}>
            {type == "test" && <div className="absolute flex w-full top-1/2 justify-center text-center bg-white"> whatever your string </div>}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;
