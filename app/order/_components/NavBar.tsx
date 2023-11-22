import { GoSearch } from "react-icons/go";
import { BiBarcodeReader } from "react-icons/bi";
import styles from "./NavBar.module.css";
export default function Page() {
  return (
    <div className={styles.sticky_out_wrapper}>
      <div className={styles.sticky_wrapper}>
        <span className={styles.search_wapper_icon}>
          <GoSearch className={styles.search_icon} />
        </span>
        <div className={styles.search_text}>
          <input className={styles.search_input} placeholder="Tìm theo tên sản phẩm" />
        </div>
      </div>
    </div>
  );
}
