import { ProductCart } from "./ProductCart";
import { ActiveFull, HaftFull, NotActive } from "../Checked/Checked";
import { convertMoney } from "@/lib/formatPrice";
import type { CartCategory } from "@/types/cart";
import { selectCheckActiveCategory } from "@/redux/features/cart/cart.selector";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getActiveCategory } from "@/redux/features/cart/cart.action";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import React from "react";
interface Props {
  category: CartCategory;
}
const Catogery = ({ category }: Props) => {
  const router = useRouter();
  // Check active button
  const dispatch = useAppDispatch();
  const checkActive = category ? selectCheckActiveCategory(category) : 0;

  return (
    <div className={styles.catogerycart_wrapper}>
      <div className={styles.catogerycart}>
        <div className={styles.catogerycart_main}>
          <div className={styles.catogerycart_info}>
            <div
              onClick={() => {
                dispatch(
                  getActiveCategory({
                    active: category.active,
                    catId: category.id,
                  })
                );
              }}
              className={styles.catogerycart_checked_wrapper}
            >
              {checkActive == 0 ? (
                <NotActive />
              ) : checkActive == 1 ? (
                <HaftFull />
              ) : (
                <ActiveFull />
              )}
              <div className={styles.checked_padding}></div>
            </div>
            <div className={styles.catogerycart_title}>
              <span className={styles.catogerycart_name}>{category.name}</span>
              {">"}
              <span className={styles.catogerycart_pricecondition}>
                Tối thiểu: {convertMoney(category.condition) + "đ"}
              </span>
              {">>"}
              <span className={styles.catogerycart_pricenow}>
                Hiện tại: {convertMoney(category.bill) + "đ"}
              </span>
            </div>
            <span
              onClick={() => {
                router.push(`/${category.slug}`);
              }}
              className={styles.catogerycart_button_buymore}
            >
              Đặt Thêm
            </span>
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
