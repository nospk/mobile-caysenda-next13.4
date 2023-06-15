import Image from "next/image";
import VariantCart from './VariantCart'
export default function ProductCart() {
  return (
    <>
      <div className="box-border flex flex-shrink-0 flex-col">
        <div className="mt-[4vw] box-border flex flex-shrink-0 flex-col">
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
        <VariantCart />
      </div>
    </>
  );
}
