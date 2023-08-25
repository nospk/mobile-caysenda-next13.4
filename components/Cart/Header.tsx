import { AiOutlineEnvironment, AiOutlineRight } from "react-icons/ai";
import styles from "./styles.module.css";
import SelectAddressModal from "../SelectAddressModal";
import React, { SetStateAction, Dispatch, useState } from "react";
import { ListDelivery } from "@/types/Delivery";
interface Props {
  isRemove: boolean;
  setIsRemove: Dispatch<SetStateAction<boolean>>;

  listDelivery: ListDelivery[];
}
const Header: React.FC<Props> = ({ isRemove, setIsRemove, listDelivery }) => {
  // InitialState Address
  const [address, setAddress] = useState<string>("Bấm để thêm địa chỉ giao hàng");

  return (
    <header className={styles.header}>
      <div className={styles.header_wapper}>
        <div className={styles.address}>
          <span className={styles.address_title}>Địa chỉ</span>
          <div className={styles.address_content}>
            <AiOutlineEnvironment className={styles.address_icon_place} />
            <div className={styles.address_box}>
              <SelectAddressModal
                address={address}
                className={styles.address_detail}
                setAddress={setAddress}
                listDelivery={listDelivery}
              />
              <AiOutlineRight className={styles.address_icon_arrow} />
            </div>
          </div>
        </div>
        <div
          className={styles.remove_button}
          onClick={() => setIsRemove(!isRemove)}
        >
          {isRemove ? (
            <span className={styles.remove_text_confirm}>Hoàn Tất</span>
          ) : (
            <span className={styles.remove_text}>Xóa</span>
          )}
        </div>
      </div>
    </header>
  );
};
export default React.memo(Header);
