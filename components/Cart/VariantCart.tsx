import { convertMoney } from "@/lib/formatPrice";
import { ActiveFull, NotActive } from "./Checked";
import { useState, useRef } from "react";
import { useOnActionOutside } from "@/components/hook/useOnActionOutside";
import styles from "./styles.module.css";
import type { CartVariant } from "@/types/cart";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateCart } from "@/redux/features/cart/cart.action";


interface Prop {
  variant: CartVariant;
  condition: number;
  catId: number;
  productId: number;
}
const VariantCart = ({ variant, condition, catId, productId }: Prop) => {
  const { selected, name, thumbnail, quantity, price, id } = variant;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);



  const dispatch = useAppDispatch();
  const isRemove = useAppSelector((state) => state.removeCartReducer.isRemove);
  const handleClickOutside = () => {
    // Your custom logic here
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
      <div className="relative box-border flex flex-shrink-0 flex-col overflow-hidden ">
        <div
          ref={ref}
          onTouchStart={(e) => TouchStart(e)}
          onTouchMove={(e) => TouchHandle(e)}
          onTouchEnd={TouchEnd}
          className="relative mt-[3.2vw] box-border flex flex-shrink-0 touch-auto flex-col "
        >
          <div
            className={`z-10 box-border flex flex-shrink-0 flex-col bg-white px-[3.2vw] ${cssTouch.css}`}
          >
            <div className="fex-row box-border flex flex-shrink-0 items-center justify-between">
              <div className="relative ml-[-2.4vw] flex flex-shrink-0 flex-row items-center pb-[2.4vw] pl-[2.66667vw] pt-[2.4vw]">
                {selected ? <ActiveFull /> : <NotActive />}
                <div className="relative ml-[2.13333vw] box-border flex flex-shrink-0 flex-col"></div>
              </div>
              <div className="box-border flex min-h-[6.93333vw] flex-1 flex-row content-between items-center">
                <div className="mr-[1.6vw] block h-[8vw] w-[8vw]">
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
                <span className="box-border flex flex-1 flex-row content-between items-center rounded-lg bg-[#f9f9f9] p-[2.13333vw] text-[3.46667vw] text-[#666]">
                  {name}
                </span>
              </div>
            </div>
            <div className="ml-[7.46667vw] mt-[2.13333vw] box-border flex min-h-[6.93333vw] flex-1 flex-row items-center justify-between">
              <div className="box-border flex flex-shrink-0 flex-row text-[#FF4000]">
                <span className="relative box-border text-[3.2vw] leading-[3.2vw]">
                  {convertMoney(Number(price) * Number(quantity)) + "K"}
                </span>
              </div>
              <div className="relative flex flex-row items-center text-[3.73333vw]">
                {isRemove ? (
                  <span className="box-broder block text-[3.46667vw] text-[#333]">
                    {quantity}
                  </span>
                ) : (
                  <div className="relative box-border flex flex-shrink-0 flex-row items-center justify-start text-[3.73333vw]">
                    <div
                      onClick={() => {
                        dispatch(
                          updateCart({
                            catId: catId,
                            productId: productId,
                            variantId: id,
                            quantity: Number(quantity) - 1,
                          })
                        ).catch((e)=>{
                          console.log(e)
                        })
                      }}
                      className="box-border flex flex-shrink-0 flex-col items-center justify-center rounded-l-xl border-x border-y border-solid border-[#CECECE] p-[1.06667vw] text-center"
                    >
                      <div className="relative box-border flex h-[4.26667vw] w-[4.26667vw] flex-shrink-0 flex-col justify-center">
                        <div className="relative left-0 box-border flex h-[1px] w-[3.2vw] flex-shrink-0 flex-col self-center rounded-xl bg-[#222222]"></div>
                      </div>
                    </div>
                    <input
                      className="relative box-content h-[4.26667vw] w-[8.53333vw] appearance-none rounded-none border-y border-solid border-[#CECECE] p-[1.06667vw] text-center align-middle text-[3.73333vw] placeholder-black outline-0 focus:placeholder-white"
                      placeholder="0"
                      type="number"
                      value={quantity}
                      onChange={(e) => console.log(e.target.value)}
                    />
                    <div className="box-border flex flex-shrink-0 flex-col items-center justify-center rounded-r-xl border-x border-y border-solid border-[#CECECE] p-[1.06667vw] text-center ">
                      <div
                        onClick={() => {
                          dispatch(
                            updateCart({
                              catId: catId,
                              productId: productId,
                              variantId: id,
                              quantity: Number(quantity) + 1,
                            })
                          )
                        }}
                        className="relative box-border flex h-[4.26667vw] w-[4.26667vw] flex-shrink-0 flex-col justify-center"
                      >
                        <div className="relative top-[1.6vw] box-border flex h-[1px] w-[3.2vw] flex-shrink-0 flex-col self-center rounded-xl bg-[#222222]"></div>
                        <div className="relative box-border flex h-[3.2vw] w-[1px] flex-shrink-0 flex-col self-center rounded-xl bg-[#222222]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="ml-[7.46667vw] box-border flex flex-shrink-0 flex-row justify-between">
              {!isRemove && quantity < condition ? (
                <span className="ml-[3.2vw] box-border block flex-1 whitespace-pre-wrap text-right text-[2.93333vw] text-[#FF4000]">
                  Yêu cầu tối thiểu : {condition} {"Cái"}
                </span>
              ) : null}
            </div>
          </div>
          <div className="absolute right-0 top-0 z-0 flex h-full flex-row flex-nowrap items-stretch whitespace-nowrap">
            <span className="box-border flex w-[18vw] items-center justify-center bg-[#ff0000] text-center text-[3.2vw] text-white">
              Xóa
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(VariantCart);
