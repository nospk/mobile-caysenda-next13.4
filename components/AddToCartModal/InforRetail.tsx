import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { convertMoney } from "@/lib/formatPrice";

const InforWholeSale = React.memo(function InforWholeSale({
  image,
  name,
  product,
}: {
  image: string;
  name: string;
  product: any;
}) {
  return (
    <div className={styles.img_price_wapper}>
      <div className={styles.img_product}>
        <Image
          className="rounded-xl"
          src={image}
          alt={name}
          sizes="50vw"
          fill
          object-fit={"contain"}
        />
      </div>
      <div className={styles.infor_retail}>
        <div className={styles.infor_retail_wrapper}>
          <span className={styles.retail_money_min}>
            {convertMoney(product.pricemin) + "K"}
            <span className={styles.span_price}>đ</span>
          </span>
          <span className={styles.retail_tilde}>~</span>
          <span className={styles.retail_money_max}>
            {convertMoney(product.pricemax) + "K"}
            <span className={styles.span_price}>đ</span>
          </span>
          <div className={styles.condtion_info}>
            {`≥${product.condition}`} {product.unit}
          </div>
        </div>
      </div>
    </div>
  );
});
export default InforWholeSale;
