import React from "react";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";
const ButtonClose = React.memo(function ButtonClose({
  handleCloseModal,
}: {
  handleCloseModal: any;
}) {
  return (
    <div onClick={handleCloseModal} className={styles.button_close}>
      <AiOutlineClose className={styles.icon_close} />
    </div>
  );
});
export default ButtonClose;
