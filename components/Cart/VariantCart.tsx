import { convertMoney } from "@/lib/formatPrice";
import { ActiveFull, NotActive } from "../Checked/Checked";
import { useState, useRef } from "react";
import { useOnActionOutside } from "@/components/hook/useOnActionOutside";
import styles from "./styles.module.css";
import type { CartVariant } from "@/types/cart";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  updateCart,
  getActiveVariant,
} from "@/redux/features/cart/cart.action";

interface Prop {
  variant: CartVariant;
  condition: number;
  catId: number;
  productId: number;
  unit: string;
  range: number;
}
const VariantCart = ({
  variant,
  condition,
  catId,
  productId,
  unit,
  range,
}: Prop) => {
  const { selected, name, thumbnail, quantity, price, id } = variant;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);

  const dispatch = useAppDispatch();
  const isRemove = useAppSelector((state) => state.removeCartReducer.isRemove);
  const handleClickOutside = () => {
    setCssTouch({ css: touchPosition[0], level: 0 });
    setdirection("left");
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useOnActionOutside(ref, handleClickOutside, "mousedown");
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

  const checkPrice = (): number => {
    if (!range) return Number(price) * Number(quantity);
    const listPrice = [variant.vip1, variant.vip2, variant.vip3, variant.vip4]
    const priceActive = listPrice[range-1]
    return Number(priceActive) * Number(quantity)
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
          ref={ref}
          onTouchStart={(e) => TouchStart(e)}
          onTouchMove={(e) => TouchHandle(e)}
          onTouchEnd={TouchEnd}
          className={styles.variant_cart}
        >
          <div className={`${styles.variant_cart_padding} ${cssTouch.css}`}>
            <div className={styles.variant_cart_content}>
              <div
                className={styles.variant_cart_select}
                onClick={() => {
                  dispatch(
                    getActiveVariant({
                      active: selected,
                      catId: catId,
                      productId: productId,
                      variantId: id,
                    })
                  );
                }}
              >
                {selected ? <ActiveFull /> : <NotActive />}
                <div className={styles.variant_cart_select_margin}></div>
              </div>
              <div className={styles.variant_cart_image_name}>
                <div className={styles.variant_cart_image}>
                  <Image
                    className="rounded-lg"
                    src={thumbnail}
                    alt="test"
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span className={styles.variant_cart_name}>{name}</span>
              </div>
            </div>
            <div className={styles.variant_cart_control}>
              <div className={styles.variant_cart_price}>
                <span className={styles.variant_cart_price_text}>
                  {convertMoney(checkPrice()) + " đ"}
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
                            catId: catId,
                            productId: productId,
                            variantId: id,
                            quantity: Number(quantity) - 1,
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
                            catId: catId,
                            productId: productId,
                            variantId: id,
                            quantity: Number(e.target.value),
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
                              catId: catId,
                              productId: productId,
                              variantId: id,
                              quantity: Number(quantity) + 1,
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
              {!isRemove && quantity < condition ? (
                <span className={styles.variant_cart_error_text}>
                  Yêu cầu tối thiểu : {condition} {unit}
                </span>
              ) : null}
            </div>
          </div>
          <div className={styles.variant_cart_button_remove}>
            <span className={styles.variant_cart_button_remove_text}>Xóa</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(VariantCart);
