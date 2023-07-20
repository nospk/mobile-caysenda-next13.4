import Image from "next/image";
import VariantCart from "./VariantCart";
import { useState, useEffect, useRef } from "react";
import { ActiveFull, HaftFull, NotActive } from "../Checked/Checked";
import { useOnActionOutside } from "@/components/hook/useOnActionOutside";
import type { CartProduct } from "@/types/cart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getActiveProduct } from "@/redux/features/cart/cart.action";
import styles from "./styles.module.css";
import React from "react";
interface Props {
  product: CartProduct;
  categoryId: number;
  categoryAmount: number;
  categoryCondtion: number;
}
const ProductCart = ({ product, categoryId, categoryAmount, categoryCondtion }: Props) => {
  const {
    variants,
    name,
    thumbnail,
    active,
    conditionDefault,
    condition1,
    condition2,
    condition3,
    condition4,
    productId,
    unit,
    retail,
    quantity,
  } = product;
  const dispatch = useAppDispatch();
  const isRemove = useAppSelector((state) => state.removeCartReducer.isRemove);
  const widthDivHidden = 12;
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
  ];
  const [touchStart, setTouchStart] = useState<number>(0);
  const [cssTouch, setCssTouch] = useState({ css: touchPosition[0], level: 0 });
  const [direction, setdirection] = useState<"left" | "right">("left");

  //Get Start postion
  const TouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const startTouch = e.touches[0].clientX;
    setTouchStart(startTouch);
  };

  const TouchHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isRemove) {
      //Cal width will touch with div element with 12vw
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
            setCssTouch({ css: touchPosition[12], level: 12 });
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
          setCssTouch({ css: touchPosition[12], level: 12 });
        }
      }
    }
  };

  //When div position doesn't reach the end then calculate
  const TouchEnd = () => {
    if (direction == "left") {
      if (cssTouch.level > 5) {
        setCssTouch({ css: touchPosition[12], level: 12 });
        setdirection("right");
      } else setCssTouch({ css: touchPosition[0], level: 0 });
    } else {
      if (cssTouch.level < 8) {
        setCssTouch({ css: touchPosition[0], level: 0 });
        setdirection("left");
      } else setCssTouch({ css: touchPosition[12], level: 12 });
    }
  };
  const CheckActiveFull = () => {
    const check = variants.filter((variant) => variant.selected == false);
    return check.length > 0 ? false : true;
  };
  const handleClickOutside = () => {
    // Your custom logic here
    setCssTouch({ css: touchPosition[0], level: 0 });
    setdirection("left");
  };

  const ref = useRef(null);
  useOnActionOutside(ref, handleClickOutside, "mousedown");
  return (
    <div className={styles.productcart_wrapper}>
      <div
        ref={ref}
        onTouchStart={(e) => TouchStart(e)}
        onTouchMove={(e) => TouchHandle(e)}
        onTouchEnd={TouchEnd}
        className={styles.productcart_swiper}
      >
        <div className={`${styles.productcart} ${cssTouch.css}`}>
          <div className={styles.productcart_pad}>
            <div
              onClick={() => {
                dispatch(
                  getActiveProduct({
                    active: !active,
                    categoryId: categoryId,
                    productId: productId,
                  })
                );
              }}
              className={styles.checked_wrapper}
            >
              {!active ? (
                <NotActive />
              ) : CheckActiveFull() ? (
                <ActiveFull />
              ) : (
                <HaftFull />
              )}
              <div className={styles.checked_padding}></div>
            </div>
            <div className={styles.productcart_main}>
              <div className={styles.productcart_image}>
                <div className={styles.productcart_wrapper_image}>
                  <Image
                    className={styles.productcart_image_styles}
                    src={thumbnail}
                    alt="test"
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className={styles.productcart_name}>
                <span className={styles.productcart_name_text}>{name}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productcart_button}>
          <span className={styles.productcart_button_text}>Xóa</span>
        </div>
      </div>
      {variants.map((variant) => (
        <VariantCart
          key={variant.name}
          variant={variant}
          productId={productId}
          categoryId={categoryId}
          conditions={[condition1, condition2, condition3, condition4]}
          conditionDefault={conditionDefault}
          unit={unit}
          retail={retail}
          quantityProduct={quantity}
          categoryAmount={categoryAmount}
          categoryCondtion={categoryCondtion}
        />
      ))}
    </div>
  );
};
export default React.memo(ProductCart);
