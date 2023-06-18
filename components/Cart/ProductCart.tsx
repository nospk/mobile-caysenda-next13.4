import Image from "next/image";
import VariantCart from "./VariantCart";
import { useState, useEffect } from "react";
export default function ProductCart() {
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

  return (
    <div className="box-border flex flex-shrink-0 flex-col">
      <div
        onTouchStart={(e) => TouchStart(e)}
        onTouchMove={(e) => TouchHandle(e)}
        onTouchEnd={TouchEnd}
        className="relative mt-[4vw] box-border flex flex-shrink-0 touch-auto flex-col overflow-hidden"
      >
        <div className={`z-10 bg-white ${cssTouch.css}`}>
          <div className="box-border flex flex-shrink-0 flex-row items-center px-[3.2vw]">
            <div className="relative ml-[-2.4vw] flex flex-shrink-0 flex-row items-center pb-[2.4vw] pl-[2.66667vw] pt-[2.4vw]">
              <div className="relative flex h-[5.33333vw] w-[5.33333vw] flex-col content-start items-center justify-center rounded-full border-[0.26667vw] border-[#ff4000] bg-[#ff4000] transition">
                <span className="box-border block text-center font-icon text-[4.26667vw] leading-none text-white before:content-['\e8b0']"></span>
              </div>
              <div className="relative ml-[2.13333vw] box-border flex flex-shrink-0 flex-col"></div>
            </div>
            <div className="box-border flex flex-1 flex-shrink-0 flex-row content-start items-center">
              <div className="relative mr-[2.4vw] box-border flex flex-shrink-0 flex-col">
                <div className="block h-[18.66667vw] w-[18.66667vw]">
                  <Image
                    className="rounded-lg"
                    src="https://caysenda.vn/resources/upload/22216875771_102253868.jpg"
                    alt="test"
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="box-border flex w-0 flex-1 shrink-0 flex-col content-start self-start overflow-hidden">
                <span className="mb-[1.6vw] box-border block truncate whitespace-nowrap text-[3.46667vw] font-medium text-[#333333]">
                  Chậu hình thú
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-0 flex h-full flex-row flex-nowrap items-stretch whitespace-nowrap">
          <span className="box-border flex w-[12vw] items-center justify-center bg-[#ff0000] text-center text-[3.2vw] text-white">
            Xóa
          </span>
        </div>
      </div>
      <VariantCart />
    </div>
  );
}
