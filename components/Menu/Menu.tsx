import { type FC } from "react";
import styles from "./Menu.module.css";
import { IconWithLabel } from "@/components/Icon";
import CategoryModal from "@/components/CategoryModal";
import Link from "next/link";
import {CategoryNavType} from "@/types/WebSettingType";

const Menu: FC<{ showCategory: boolean, nav:CategoryNavType[] }> = ({ showCategory,nav }) => {
  return (
    <>
      <div className={styles.menu}>
        {showCategory && (
          <CategoryModal nav={nav}>
            <IconWithLabel
              src="/iconCategory.png"
              alt="category"
              className={styles.menu_icon}
            >
              <span className={styles.menu_text}>Danh Mục</span>
            </IconWithLabel>
          </CategoryModal>
        )}
        <Link href="/product-sale">
          <div className={styles.menu_item}>
            <IconWithLabel
              src="/iconProductSale.png"
              alt="sale"
              className={styles.menu_icon}
            >
              <span className={styles.menu_text}>Sale</span>
            </IconWithLabel>
          </div>
        </Link>
        <Link href="/product-new">
          <div className={styles.menu_item}>
            <IconWithLabel
              src="/iconProductNews.png"
              alt="News"
              className={styles.menu_icon}
            >
              <span className={styles.menu_text}>SP Mới</span>
            </IconWithLabel>
          </div>
        </Link>
        <Link href="/product-hot">
          <div className={styles.menu_item}>
            <IconWithLabel
              src="/iconProductHot.png"
              alt="Hot"
              className={styles.menu_icon}
            >
              <span className={styles.menu_text}>SP Hot</span>
            </IconWithLabel>
          </div>
        </Link>
        {process.env.NEXT_PUBLIC_PRODUCT_AVAILABLE && (
          <Link href="/product-available">
            <div className={styles.menu_item}>
              <IconWithLabel
                src="/iconProductAvailable.png"
                alt="ProductAvailable"
                className={styles.menu_icon}
              >
                <span className={styles.menu_text}>Phân Loại</span>
              </IconWithLabel>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Menu;
