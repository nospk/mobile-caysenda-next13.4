import { convertMoney } from "@/lib/formatPrice";
import { ActiveFull, HaftFull, NotFull } from "./Checked";
import styles from "./styles.module.css";
import Image from "next/image";
export default function VariantCart() {
  return (
    <>
      <div className="box-border flex flex-shrink-0 flex-col">
        <div className="mt-[3.2vw] box-border flex flex-shrink-0 flex-col">
          <div className="box-border flex flex-shrink-0 flex-col px-[3.2vw]">
            <div className="fex-row box-border flex flex-shrink-0 items-center justify-between">
              <div className="relative ml-[-2.4vw] flex flex-shrink-0 flex-row items-center pb-[2.4vw] pl-[2.66667vw] pt-[2.4vw]">
                <HaftFull />
                <div className="relative ml-[2.13333vw] box-border flex flex-shrink-0 flex-col"></div>
              </div>
              <div className="box-border flex min-h-[6.93333vw] flex-1 flex-row content-between items-center">
                <div className="mr-[1.6vw] block h-[8vw] w-[8vw]">
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
                <span className="box-border flex flex-1 flex-row content-between items-center rounded-lg bg-[#f9f9f9] p-[2.13333vw] text-[3.46667vw] text-[#666]">
                  Thú hình Voi
                </span>
              </div>
            </div>
            <div className="ml-[7.46667vw] mt-[2.13333vw] box-border flex min-h-[6.93333vw] flex-1 flex-row items-center justify-between">
              <div className="box-border flex flex-shrink-0 flex-row text-[#FF4000]">
                <span className="relative box-border text-[3.2vw] leading-[3.2vw]">
                  {convertMoney(16000) + "K"}
                </span>
              </div>
              <div className="relative flex flex-row items-center text-[3.73333vw]">
                <div className="relative box-border flex flex-shrink-0 flex-row items-center justify-start text-[3.73333vw]">
                  <div className="box-border flex flex-shrink-0 flex-col items-center justify-center rounded-l-xl border-x border-y border-solid border-[#CECECE] p-[1.06667vw] text-center">
                    <div className="relative box-border flex h-[4.26667vw] w-[4.26667vw] flex-shrink-0 flex-col justify-center">
                      <div className="relative left-0 box-border flex h-[1px] w-[3.2vw] flex-shrink-0 flex-col self-center rounded-xl bg-[#222222]"></div>
                    </div>
                  </div>
                  <input
                    className="relative box-content h-[4.26667vw] w-[8.53333vw] appearance-none rounded-none border-y border-solid border-[#CECECE] p-[1.06667vw] text-center align-middle text-[3.73333vw] placeholder-black outline-0 focus:placeholder-white"
                    placeholder="0"
                    type="number"
                    value={0}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <div className="box-border flex flex-shrink-0 flex-col items-center justify-center rounded-r-xl border-x border-y border-solid border-[#CECECE] p-[1.06667vw] text-center ">
                    <div className="relative box-border flex h-[4.26667vw] w-[4.26667vw] flex-shrink-0 flex-col justify-center">
                      <div className="relative top-[1.6vw] box-border flex h-[1px] w-[3.2vw] flex-shrink-0 flex-col self-center rounded-xl bg-[#222222]"></div>
                      <div className="relative box-border flex h-[3.2vw] w-[1px] flex-shrink-0 flex-col self-center rounded-xl bg-[#222222]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[7.46667vw] box-border flex flex-shrink-0 flex-row justify-between">
              <span className="ml-[3.2vw] box-border block flex-1 whitespace-pre-wrap text-right text-[2.93333vw] text-[#FF4000]">
                Yêu cầu tối thiểu : {2} {"Cái"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
