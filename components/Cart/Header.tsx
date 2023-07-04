import { AiOutlineEnvironment, AiOutlineRight } from "react-icons/ai";
import styles from "./styles.module.css";
import SelectAddressModal from "../SelectAddressModal/SelectAddressModal";
interface Props {
  address: string
  remove: boolean;
  changeRemove: () => void;
}
const Header: React.FC<Props> = ({address, remove, changeRemove }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wapper}>
        <div className={styles.address}>
          <span className={styles.address_title}>Địa chỉ</span>
          <div className={styles.address_content}>
            <AiOutlineEnvironment className={styles.address_icon_place} />
            <div className={styles.address_box}>
              <SelectAddressModal>
                <span className={styles.address_detail}>
                  {address}
                </span>
              </SelectAddressModal>

              <AiOutlineRight className={styles.address_icon_arrow} />
            </div>
          </div>
        </div>
        <div className={styles.remove_button} onClick={changeRemove}>
          {remove ? (
            <span className={styles.remove_text}>Hoàn Tất</span>
          ) : (
            <span className={styles.remove_text}>Xóa</span>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
