import { ProductCart } from "./ProductCart";
import { ActiveFull, HaftFull, NotActive } from "./Checked";
import { convertMoney } from "@/lib/formatPrice";
import type { CartCategory } from "@/types/cart";
import styles from "./styles.module.css";
import React from "react";
interface Props {
  category: CartCategory;
}
const Catogery = ({ category }: Props) => {
  return (
    <div className={styles.catogerycart_wrapper}>
      <div className={styles.catogerycart}>
        <div className={styles.catogerycart_main}>
          <div className={styles.catogerycart_info}>
            <div className={styles.catogerycart_checked_wrapper}>
              <NotActive />
              <div className={styles.checked_padding}></div>
            </div>
            <div className={styles.catogerycart_title}>
              <span className={styles.catogerycart_name}>{category.name}</span>
              {">"}
              <span className={styles.catogerycart_pricecondition}>
                Tối thiểu: {convertMoney(category.condition) + "K"}
              </span>
              {">>"}
              <span className={styles.catogerycart_pricenow}>
                Hiện tại: {convertMoney(category.bill) + "K"}
              </span>
            </div>
            <span className={styles.catogerycart_button_buymore}>Đặt Thêm</span>
          </div>
          <div className={styles.catogerycart_error}>
            {category.condition < category.bill ? (
              <span>Chưa đạt mức tối thiểu của danh mục này</span>
            ) : null}
          </div>
        </div>
        {category.products.map((product) => (
          <ProductCart
            key={product.name}
            catId={category.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Catogery);
