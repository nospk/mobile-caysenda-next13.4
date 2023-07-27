import { convertMoney } from "@/lib/formatPrice";
import { ActiveFull, NotActive, DisableActive } from "../Checked/Checked";
import { useState, useRef } from "react";
import { useOnActionOutside } from "@/components/hook/useOnActionOutside";
import styles from "./styles.module.css";
import type { CartVariant } from "@/types/cart";
import Image from "next/image";
import React, { useMemo } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  updateCart,
  getActiveVariant,
  getRemoveVariant,
} from "@/redux/features/cart/cart.action";

interface Prop {
  variant: CartVariant;
  categoryId: number;
  productId: number;
  unit: string;
  condition: number;
  isRemove: boolean;
  price: number;
  canActiveProduct: boolean;
  canActiveCategory: boolean;
}
const VariantCart = ({
  variant,
  categoryId,
  productId,
  condition,
  unit,
  isRemove,
  price,
  canActiveProduct,
  canActiveCategory,
}: Prop) => {
  /** Data config */
  const { selected, name, thumbnail, quantity, variantId, selectedDelete } =
    variant;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const ref = useRef(null);

  const dispatch = useAppDispatch();
  const variantAmount = Number(price) * Number(quantity);
  const activeVariant = () => {
    if (!canActiveProduct || !canActiveCategory) {
      return;
    }
    dispatch(
      getActiveVariant({
        active: !selected,
        categoryId: categoryId,
        productId: productId,
        variantId: variantId,
      })
    );
  };
  const checkActive = useMemo(() => {
    if (!canActiveCategory || !canActiveProduct) return <DisableActive />;
    if (!isRemove) {
      return selected ? <ActiveFull /> : <NotActive />;
    } else {
      return selectedDelete ? <ActiveFull /> : <NotActive />;
    }
  }, [isRemove, selected, selectedDelete, canActiveCategory, canActiveProduct]);
  const memoizedImage = useMemo(() => {
    return (
      <Image
        className="rounded-lg"
        src={thumbnail}
        alt="test"
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }, [thumbnail]);

  /**CSS Config */
  // const handleClickOutside = () => {
  //   setCssTouch({ css: touchPosition[0], level: 0 });
  //   setdirection("left");
  // };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //useOnActionOutside(ref, handleClickOutside, "mousedown");
  const widthDivHidden = 18;
  const touchPosition = [
    "",
    "-translate-x-[1vw]",
    "-translate-x-[2vw]",
    "-translate-x-[3vw]",
    "-translate-x-[4vw]",
    "-translate-x-[5vw]",
    "-translate-x-[6vw]",
    "-translate-x-[7vw]",
    "-translate-x-[8vw]",
    "-translate-x-[9vw]",
    "-translate-x-[10vw]",
    "-translate-x-[11vw]",
    "-translate-x-[12vw]",
    "-translate-x-[13vw]",
    "-translate-x-[14vw]",
    "-translate-x-[15vw]",
    "-translate-x-[16vw]",
    "-translate-x-[17vw]",
    "-translate-x-[18vw]",
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [touchStart, setTouchStart] = useState<number>(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cssTouch, setCssTouch] = useState({ css: touchPosition[0], level: 0 });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [direction, setdirection] = useState<"left" | "right">("left");

  //Get Start postion
  const TouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const startTouch = e.touches[0].clientX;
    setTouchStart(startTouch);
  };

  const TouchHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isRemove) {
      //Cal width will touch with div element with 1vw
      //But i think need visual more long touch
      const widthWillTouch = (window.screen.width / 100) * widthDivHidden * 3;
      //Get touch postion when move
      const nowTouch = e.touches[0].clientX;
      const levlel = widthWillTouch / widthDivHidden;

      //main
      if (direction == "left") {
        if (touchStart - nowTouch > 0) {
          const postion = Math.round((touchStart - nowTouch) / levlel);
          if (touchStart - nowTouch > widthWillTouch)
            setCssTouch({ css: touchPosition[18], level: 18 });
          else setCssTouch({ css: touchPosition[postion], level: postion });
        } else {
          setCssTouch({ css: touchPosition[0], level: 0 });
        }
      } else {
        if (nowTouch - touchStart > 0) {
          const postion =
            touchPosition.length -
            Math.round((nowTouch - touchStart) / levlel) -
            1;
          if (nowTouch - touchStart > widthWillTouch)
            setCssTouch({ css: touchPosition[0], level: 0 });
          else setCssTouch({ css: touchPosition[postion], level: postion });
        } else {
          setCssTouch({ css: touchPosition[18], level: 18 });
        }
      }
    }
  };

  //When div position doesn't reach the end then calculate
  const TouchEnd = () => {
    if (direction == "left") {
      if (cssTouch.level > 7) {
        setCssTouch({ css: touchPosition[18], level: 18 });
        setdirection("right");
      } else setCssTouch({ css: touchPosition[0], level: 0 });
    } else {
      if (cssTouch.level < 14) {
        setCssTouch({ css: touchPosition[0], level: 0 });
        setdirection("left");
      } else setCssTouch({ css: touchPosition[18], level: 18 });
    }
  };
  return (
    <>
      <div className={styles.variant_cart_wrapper}>
        <div
          //ref={ref}
          onTouchStart={(e) => TouchStart(e)}
          onTouchMove={(e) => TouchHandle(e)}
          onTouchEnd={TouchEnd}
          className={styles.variant_cart}
        >
          <div className={`${styles.variant_cart_padding} ${cssTouch.css}`}>
            <div className={styles.variant_cart_content}>
              <div
                className={styles.variant_cart_select}
                onClick={activeVariant}
              >
                {checkActive}
                <div className={styles.variant_cart_select_margin}></div>
              </div>
              <div className={styles.variant_cart_image_name}>
                <div className={styles.variant_cart_image}>{memoizedImage}</div>
                <span className={styles.variant_cart_name}>{name}</span>
              </div>
            </div>
            <div className={styles.variant_cart_control}>
              <div className={styles.variant_cart_price}>
                <span className={styles.variant_cart_price_text}>
                  {convertMoney(variantAmount) + " đ"}
                </span>
              </div>
              <div className={styles.variant_cart_input_control}>
                {isRemove ? (
                  <span className={styles.variant_cart_quantity}>
                    {quantity}
                  </span>
                ) : (
                  <div className={styles.variant_cart_input_control_main}>
                    <div
                      className={styles.variant_cart_decrement}
                      onClick={() => {
                        dispatch(
                          updateCart({
                            categoryId: categoryId,
                            productId: productId,
                            variantId: variantId,
                            quantityNew: Number(quantity) - 1,
                            quantityOld: quantity,
                            condition: condition,
                          })
                        ).catch((e) => {
                          console.log(e);
                        });
                      }}
                    >
                      <div className={styles.decrement_wapper}>
                        <div className={styles.icon_decrement}></div>
                      </div>
                    </div>
                    <input
                      className={styles.variant_cart_input}
                      placeholder="0"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        dispatch(
                          updateCart({
                            categoryId: categoryId,
                            productId: productId,
                            variantId: variantId,
                            quantityNew: Number(e.target.value),
                            quantityOld: quantity,
                            condition: condition,
                          })
                        ).catch((e) => {
                          console.log(e);
                        });
                      }}
                    />
                    <div className={styles.variant_cart_increment}>
                      <div
                        onClick={() => {
                          dispatch(
                            updateCart({
                              categoryId: categoryId,
                              productId: productId,
                              variantId: variantId,
                              quantityNew: Number(quantity) + 1,
                              quantityOld: quantity,
                              condition: condition,
                            })
                          );
                        }}
                        className={styles.increment_wapper}
                      >
                        <div className={styles.icon_increment_level}></div>
                        <div className={styles.icon_increment_vertical}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.variant_cart_error}>
              {!isRemove && !canActiveProduct ? (
                <span className={styles.variant_cart_error_text}>
                  Sản Phẩm Yêu Cầu Tối Thiểu Biến Thể : {condition} {unit}
                </span>
              ) : null}
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(
                getRemoveVariant({
                  categoryId: categoryId,
                  productId: productId,
                  variantId: variantId,
                })
              );
            }}
            className={styles.variant_cart_button_remove}
          >
            <span className={styles.variant_cart_button_remove_text}>Xóa</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(VariantCart);
