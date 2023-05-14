import type { FC } from "react";
import { Icon, IconWithLabel } from "@/components/Icon";
import styles from "./Footer.module.css";
import Link from "next/link";
const Footer: FC = () => {
  return (
    <>
      <div className={styles.footer}>
        <Link href="/" scroll={true}>
          <div className={styles.tab_item}>
            <Icon src="/iconHome.png" alt="Home" className={styles.img_home} />
          </div>
        </Link>
        <Link href="/video" scroll={true}>
          <div className={styles.tab_item}>
            <IconWithLabel
              src="/iconVideos.png"
              alt="Camera"
              className={styles.img_menu}
            >
              <span className={styles.text_menu}>Videos SP</span>
            </IconWithLabel>
          </div>
        </Link>
        <Link href="/chat" scroll={true}>
          <div className={styles.tab_item}>
            <IconWithLabel
              src="/iconChat.png"
              alt="Message"
              className={styles.img_menu}
            >
              <span className={styles.text_menu}>Nhắn Tin</span>
            </IconWithLabel>
          </div>
        </Link>
        <Link href="/cart">
          <div className={styles.tab_item}>
            <IconWithLabel
              src="/iconCart.png"
              alt="Cart"
              className={styles.img_menu}
            >
              <span className={styles.text_menu}>Giỏ Hàng</span>
            </IconWithLabel>
          </div>
        </Link>
        <Link href="/account">
          <div className={styles.tab_item}>
            <IconWithLabel
              src="/iconPerson.png"
              alt="Account"
              className={styles.img_menu}
            >
              <span className={styles.text_menu}>Cá Nhân</span>
            </IconWithLabel>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Footer;
