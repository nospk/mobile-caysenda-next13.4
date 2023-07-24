import ProductCart from "./ProductCart";
import { ActiveFull, HaftFull, NotActive } from "../Checked/Checked";
import { convertMoney } from "@/lib/formatPrice";
import type { CartCategory } from "@/types/cart";
import {
  selectCheckActiveCategory,
  selectCheckActiveDeleteCategory,
} from "@/redux/features/cart/cart.selector";
import { useAppDispatch } from "@/redux/hooks";
import { getActiveCategory } from "@/redux/features/cart/cart.action";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import React, { useEffect } from "react";
interface Props {
  category: CartCategory;
  isRemove: boolean;
}
const Catogery = ({ category, isRemove }: Props) => {
  const router = useRouter();
  // Check active button
  const dispatch = useAppDispatch();
  const checkActiveSelect = category ? selectCheckActiveCategory(category) : 0;
  const checkActiveDelete = category
    ? selectCheckActiveDeleteCategory(category)
    : 0;
  const CheckActive = () => {
    if (!isRemove) {
      return checkActiveSelect == 0 ? (
        <NotActive />
      ) : checkActiveSelect == 1 ? (
        <HaftFull />
      ) : (
        <ActiveFull />
      );
    } else {
      return checkActiveDelete == 0 ? (
        <NotActive />
      ) : checkActiveDelete == 1 ? (
        <HaftFull />
      ) : (
        <ActiveFull />
      );
    }
  };
  useEffect(() => {
    if (category.amount < category.condition) {
      dispatch(
        getActiveCategory({
          active: false,
          categoryId: category.categoryId,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category.amount]);
  return (
    <div className={styles.catogerycart_wrapper}>
      <div className={styles.catogerycart}>
        <div className={styles.catogerycart_main}>
          <div className={styles.catogerycart_info}>
            <div
              onClick={() => {
                dispatch(
                  getActiveCategory({
                    active: !category.active,
                    categoryId: category.categoryId,
                  })
                );
              }}
              className={styles.catogerycart_checked_wrapper}
            >
              {CheckActive()}
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
                Hiện tại: {convertMoney(category.amount) + "đ"}
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
            {category.amount < category.condition ? (
              <span>Chưa đạt mức tối thiểu của danh mục này</span>
            ) : null}
          </div>
        </div>
        {category.products.map((product) => (
          <ProductCart
            key={product.productId}
            categoryId={category.categoryId}
            categoryAmount={category.amount}
            categoryCondtion={category.condition}
            product={product}
            isRemove={isRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Catogery);
