"use client";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import { BiBarcodeReader } from "react-icons/bi";
import styles from "./StickySearch.module.css";

const StickySearch: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.sticky_out_wrapper}>
      <div className={styles.sticky_wrapper}>
        <span className={styles.search_wapper_icon}>
          <BiBarcodeReader className={styles.search_icon} />
        </span>
        <span
          className={styles.search_text}
          onClick={() => router.push(`/search`)}
        >
          Tìm Theo Tên Sản Phẩm
        </span>
        <button
          className={styles.search_button}
          onClick={() => router.push(`/search`)}
        >
          Tìm
        </button>
      </div>
    </div>
  );
};

export default StickySearch;
