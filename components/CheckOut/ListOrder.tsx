import Image from "next/image";
import { CheckOut } from "@/types/CheckOut";
import { type FC } from "react";
import React from "react";
import { convertMoney } from "@/lib/formatPrice";
import styles from "./styles.module.css";
interface Props {
  data: CheckOut;
}
const ListOrder: FC<Props> = ({ data }) => {
  return (
    <>
      {data.categories.map((category) => {
        return (
          <div key={category.id} className={styles.listOrder}>
            <article className={styles.listOrder_wrapper}>
              <div className={styles.listOrder_category}>
                <h3 className={styles.listOrder_category_name}>
                  {category.name}
                </h3>
              </div>
              <div className={styles.listOrder_product}>
                {category.products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className={styles.listOrder_product_wrapper}
                    >
                      <div className={styles.listOrder_product_content}>
                        <div className={styles.listOrder_product_image}>
                          <Image
                            className={styles.listOrder_image}
                            src={product.image}
                            alt="Product"
                            sizes="100vw"
                            width={0}
                            height={0}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className={styles.listOrder_product_name}>
                          <div className={styles.listOrder_product_text}>
                            {product.name}
                          </div>
                        </div>
                      </div>
                      <ul className="box-border">
                        {product.variants.map((variant) => {
                          return (
                            <li key={variant.id}>
                              <div className={styles.listOrder_variant}>
                                <div
                                  className={styles.listOrder_variant_content}
                                >
                                  <div className="box-border">
                                    <span
                                      className={styles.listOrder_variant_name}
                                    >
                                      {variant.name}
                                    </span>
                                  </div>
                                  <span
                                    className={styles.listOrder_variant_price}
                                  >
                                    <span className="box-border">
                                      {convertMoney(Number(variant.price))}
                                      <span className={styles.currency}>đ</span>
                                    </span>
                                  </span>
                                  <span
                                    className={styles.listOrder_variant_total}
                                  >
                                    {`Tổng: `}
                                    <span className="box-border">
                                      {convertMoney(
                                        Number(variant.price) *
                                          Number(variant.quantity)
                                      )}
                                      <span className={styles.currency}>đ</span>
                                    </span>
                                  </span>
                                </div>
                                <div
                                  className={styles.listOrder_variant_quantity}
                                >
                                  <div
                                    className={
                                      styles.listOrder_variant_quantity_wrapper
                                    }
                                  >
                                    <span
                                      className={
                                        styles.listOrder_variant_quantity_mutil
                                      }
                                    >
                                      {"× "}
                                      <em
                                        className={
                                          styles.listOrder_variant_quantity_number
                                        }
                                      >
                                        {Number(variant.quantity)}
                                      </em>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(ListOrder);
