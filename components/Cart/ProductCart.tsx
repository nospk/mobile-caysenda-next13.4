import Image from "next/image";
import VariantCart from "./VariantCart";
import { useState, useEffect, useRef } from "react";
import { ActiveFull, HaftFull, NotActive } from "../Checked/Checked";
import { useOnActionOutside } from "@/components/hook/useOnActionOutside";
import type { CartProduct } from "@/types/cart";
import { useAppDispatch } from "@/redux/hooks";
import {
  getActiveProduct,
  getRemoveProduct,
} from "@/redux/features/cart/cart.action";
import styles from "./styles.module.css";
import React, { useMemo } from "react";
interface Props {
  product: CartProduct;
  categoryId: number;
  categoryAmount: number;
  categoryCondtion: number;
  isRemove: boolean;
}
const ProductCart = ({
  product,
  categoryId,
  categoryAmount,
  categoryCondtion,
  isRemove,
}: Props) => {
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
    selectedDelete,
  } = product;
  const dispatch = useAppDispatch();

  const findConditionIndex = (
    conditions: (number | null)[],
    quantity: number
  ) => {
    for (let index = 0; index < conditions.length; index++) {
      if (conditions[index] != null && quantity <= conditions[index]!) {
        return index;
      }
    }
    return 0;
  };
  const checkPrice = (): number => {
    //If retail will get price in variant
    if (retail) Number(product.priceDefault);
    //Else will be get condition to get the price level
    let indexPrice = findConditionIndex(
      [condition1, condition2, condition3, condition4],
      quantity
    );
    const listPrice = [
      product.price1,
      product.price2,
      product.price3,
      product.price4,
    ];
    const priceActive = listPrice[indexPrice];
    return Number(priceActive);
  };

  const checkActive = useMemo(() => {
    if (!isRemove) {
      if (!active) {
        return <NotActive />;
      } else {
        const check = variants.filter((variant) => variant.selected == false);
        return check.length == 0 ? <ActiveFull /> : <HaftFull />;
      }
    } else {
      if (!selectedDelete) {
        return <NotActive />;
      } else {
        const check = variants.filter(
          (variant) => variant.selectedDelete == false
        );
        return check.length == 0 ? <ActiveFull /> : <HaftFull />;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRemove, active, selectedDelete]);
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

  /** CSS Config */
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

  // const handleClickOutside = () => {
  //   // Your custom logic here
  //   setCssTouch({ css: touchPosition[0], level: 0 });
  //   setdirection("left");
  // };

  //const ref = useRef(null);
  //useOnActionOutside(ref, handleClickOutside, "mousedown");
  return (
    <div className={styles.productcart_wrapper}>
      <div
        //ref={ref}
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
              {checkActive}
              <div className={styles.checked_padding}></div>
            </div>
            <div className={styles.productcart_main}>
              <div className={styles.productcart_image}>
                <div className={styles.productcart_wrapper_image}>
                  {memoizedImage}
                </div>
              </div>
              <div className={styles.productcart_name}>
                <span className={styles.productcart_name_text}>{name}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            dispatch(
              getRemoveProduct({ categoryId: categoryId, productId: productId })
            )
          }
          className={styles.productcart_button}
        >
          <span className={styles.productcart_button_text}>Xóa</span>
        </div>
      </div>
      {variants.map((variant) => (
        <VariantCart
          key={variant.variantId}
          variant={variant}
          productId={productId}
          categoryId={categoryId}
          unit={unit}
          price={!retail ? checkPrice() : variant.price}
          condition={conditionDefault}
          quantityProduct={quantity}
          categoryAmount={categoryAmount}
          categoryCondtion={categoryCondtion}
          isRemove={isRemove}
        />
      ))}
    </div>
  );
};
export default React.memo(ProductCart);
