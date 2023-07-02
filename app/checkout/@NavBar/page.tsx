"use client";
import styles from "./styles.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.sticky_out_wrapper}>
      <div className={styles.sticky_wrapper}>
        <span className={styles.wapper_back}>
          <MdArrowBackIosNew
            className={styles.back}
            onClick={() => router.push('/cart')}
          />
        </span>
        <span className={styles.title}>Xác Nhận Đơn Hàng</span>
      </div>
    </div>
  );
}
