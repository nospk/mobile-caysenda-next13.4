import { AiOutlineEnvironment, AiOutlineRight } from "react-icons/ai";
import styles from "./styles.module.css";
interface Props {
  remove: boolean;
  changeRemove: () => void;
}
const Header: React.FC<Props> = ({ remove, changeRemove }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wapper}>
        <div className={styles.address}>
          <span className={styles.address_title}>Địa chỉ</span>
          <div className={styles.address_content}>
            <AiOutlineEnvironment className={styles.address_icon_place} />
            <div className={styles.address_box}>
              <span className={styles.address_detail}>
                24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ
                Chí Minh
              </span>
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
