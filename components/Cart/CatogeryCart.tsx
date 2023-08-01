import ProductCart from "./ProductCart";
import {
  ActiveFull,
  HaftFull,
  NotActive,
  DisableActive,
} from "../Checked/Checked";
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
import React, { useEffect, useMemo, useCallback } from "react";
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
  const canActiveCategory =
    category.amount >= category.condition ? true : false;
  const CheckActive = () => {
    if (!canActiveCategory && !isRemove) return <DisableActive />;
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
    //dont reactive when remove product change amountActive
    if (isRemove) return;
    if (category.active == true && category.amountActive < category.condition) {
      dispatch(
        getActiveCategory({
          active: false,
          categoryId: category.categoryId,
          isRemove: false,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category.amountActive]);
  const activeCategory = () => {
    if (!canActiveCategory && !isRemove) return;
    dispatch(
      getActiveCategory({
        active: !category.active,
        categoryId: category.categoryId,
        isRemove: isRemove,
      })
    );
  };
  return (
    <div className={styles.catogerycart_wrapper}>
      <div className={styles.catogerycart}>
        <div className={styles.catogerycart_main}>
          <div className={styles.catogerycart_info}>
            <div
              onClick={activeCategory}
              className={styles.catogerycart_checked_wrapper}
            >
              {CheckActive()}
              <div className={styles.checked_padding}></div>
            </div>
            <div className={styles.catogerycart_title}>
              <span className={styles.catogerycart_name}>{category.name}</span>
              {!isRemove ? (
                <>
                  {">"}
                  <span className={styles.catogerycart_pricecondition}>
                    Tối thiểu: {convertMoney(category.condition) + "đ"}
                  </span>
                  {">>"}
                  <span className={styles.catogerycart_pricenow}>
                    Hiện tại: {convertMoney(category.amountActive) + "đ"}
                  </span>
                </>
              ) : null}
            </div>
            {!isRemove ? (
              <span
                onClick={() => {
                  router.push(`/${category.slug}`);
                }}
                className={styles.catogerycart_button_buymore}
              >
                Đặt Thêm
              </span>
            ) : null}
          </div>
          <div className={styles.catogerycart_error}>
            {!isRemove && category.amountActive < category.condition ? (
              <span>Chưa đạt mức tối thiểu của danh mục này</span>
            ) : null}
          </div>
        </div>
        {category.products.map((product) => {
          return (
            <ProductCart
              key={product.productId}
              categoryId={category.categoryId}
              product={product}
              isRemove={isRemove}
              canActiveCategory={canActiveCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Catogery);
