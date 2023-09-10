import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { convertMoney } from "@/lib/formatPrice";
interface Props {
  image: string;
  name: string;
  activePrice: any;
  product: any;
}
const InforWholeSale = React.memo(function InforWholeSale({
  image,
  name,
  activePrice,
  product,
}: Props) {
  return (
    <div className={styles.img_price_wapper}>
      <div className={styles.img_product}>
        {image && (
          <Image
            className="rounded-xl"
            src={image}
            alt={name ? name : "Product Image"}
            sizes="50vw"
            fill
            object-fit={"contain"}
          />
        )}
      </div>
      <div className={styles.extend_info}>
        <div className={styles.margin_top}>
          <div
            className={`${styles.price_info} ${
              activePrice == 0 ? styles.price_active : ""
            } `}
          >
            {convertMoney(product.price)}
            <span className={styles.span_price}>đ</span>
          </div>
          <div className={styles.condtion_info}>
            {`${product.condition} ~ ${Number(product.condition1) - 1}`}{" "}
            {product.unit}
          </div>
        </div>
        <div className={styles.margin_top}>
          <div
            className={`${styles.price_info} ${
              activePrice == 1 ? styles.price_active : ""
            } `}
          >
            {convertMoney(product.price1)}
            <span className={styles.span_price}>đ</span>
          </div>
          <div className={styles.condtion_info}>
            {`${product.condition1} ~ ${Number(product.condition2) - 1}`}{" "}
            {product.unit}
          </div>
        </div>
        <div className={styles.margin_top}>
          <div
            className={`${styles.price_info} ${
              activePrice == 2 ? styles.price_active : ""
            } `}
          >
            {convertMoney(product.price2)}
            <span className={styles.span_price}>đ</span>
          </div>
          <div className={styles.condtion_info}>
            {`≥${product.condition2}`} {product.unit}
          </div>
        </div>
      </div>
    </div>
  );
});
export default InforWholeSale;
