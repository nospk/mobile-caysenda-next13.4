import { GoSearch } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./NavBar.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className={styles.sticky_out_wrapper}>
      <div className={styles.back}>
        <button type="button" className={styles.button_back}>
          <Link href="/account">
            <IoIosArrowBack size={22} />
          </Link>
        </button>
      </div>
      <div className={styles.input}>
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
