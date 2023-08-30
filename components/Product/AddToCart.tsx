import { AiOutlineEye, AiOutlineMessage } from "react-icons/ai";
import WholeSaleModal from "@/components/AddToCartModal/WholeSaleModal";
import RetailModal from "@/components/AddToCartModal/RetailModal";
import Button from "@/components/Button";
import Link from "next/link";
import styles from "./AddToCart.module.css";
interface Props {
  retail: boolean;
  productId: number;
  category_slug: string;
}

export default function AddToCart({ retail, productId, category_slug }: Props) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.content}>
          <Link href={`/${category_slug}`}>
            <div className={styles.button}>
              <AiOutlineEye className={styles.icon} />
              <span className={styles.text}>Xem Thêm</span>
            </div>
          </Link>

          <Button
            type="button"
            className={styles.button}
            title="Nhắn tin qua Zalo"
            aria-pressed="false"
            linkgo="https://zalo.me/0947620336"
          >
            <AiOutlineMessage className={styles.icon} />
            <span className={styles.text}>Nhắn Tin</span>
          </Button>
        </div>

        <div className={styles.add}>
          {retail ? (
            <RetailModal productId={productId} />
          ) : (
            <WholeSaleModal productId={productId} />
          )}
        </div>
      </div>
    </>
  );
}
