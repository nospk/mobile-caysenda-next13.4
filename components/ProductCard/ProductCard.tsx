import type { FC } from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import numberToString from "@/lib/formatNumberPrice";
import type { Product } from "@/types/product";
type ProductCard = Product & {
  priority?: boolean;
};

const ProductCard: FC<ProductCard> = (props) => {
  const shimmer = `
<svg width="800" height="800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="#333" />
  <rect id="r" width="800" height="800" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-800" to="800" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return (
    <div className={styles.product_card}>
      <div className={styles.image_product}>
        <Image
          className={styles.image_square}
          src={props.image}
          alt={props.name}
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
          priority={props.priority ? true : false}
        />
      </div>
      <div className={styles.info_product}>
        <span className={styles.name_product}>{props.name}</span>
        <span className={styles.price_product}>
          {numberToString(props.price)}đ
        </span>
        <div className={styles.sold}>
          <span className="float-left">Đã bán:</span>
          <span className="float-right">
            {props.sold} {props.unit ? props.unit : ""}
          </span>
        </div>
        <button className={styles.add_cart}>Thêm Giỏ Hàng</button>
      </div>
    </div>
  );
};

export default ProductCard;
