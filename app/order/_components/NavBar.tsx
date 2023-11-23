import { GoSearch } from "react-icons/go";
import { IoArrowBackSharp } from "react-icons/io5";
import styles from "./NavBar.module.css";
import Link from "next/link";
export default function Page() {
  return (
    <div className={styles.sticky_out_wrapper}>
      <div className={styles.back}>
        <span className={styles.wapper_back}>
          <Link href="/account">
            <IoArrowBackSharp className={styles.back_icon} />
          </Link>
        </span>
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
