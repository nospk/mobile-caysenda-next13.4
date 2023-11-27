import { type FC, useState, useEffect } from "react";
import styles from "./OrderMenu.module.css";

import Link from "next/link";
import {
  AiOutlineAccountBook,
  AiOutlineCarryOut,
  AiOutlineClockCircle,
  AiOutlineTransaction,
  AiOutlineCreditCard,
} from "react-icons/ai";

const OrderMenu: FC = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu_item}>
          <Link href="/order?type=new">
            <div className={styles.menu_icon}>
              <AiOutlineCreditCard size={30} />
            </div>
            <span>Đơn Mới</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link href="/order?type=shipping">
            <div className={styles.menu_icon}>
              <AiOutlineTransaction size={30} />
            </div>
            <span>Đang Vận Chuyển</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link href="/order?type=addition">
            <div className={styles.menu_icon}>
              <AiOutlineClockCircle size={30} />
            </div>
            <span>Chờ Bổ Sung</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link href="/order?type=complete">
            <div className={styles.menu_icon}>
              <AiOutlineCarryOut size={30} />
            </div>
            <span>Hoàn Thành</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link href="/order?type=all">
            <div className={styles.menu_icon}>
              <AiOutlineAccountBook size={30} />
            </div>
            <span>Toàn bộ</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderMenu;
