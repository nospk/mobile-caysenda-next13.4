import VideoPlayer from "@/components/VideoPlayer";
import { BsFire } from "react-icons/bs";
import { AiFillCarryOut } from "react-icons/ai";
import Image from "next/image";
export default async function Page({ searchParams }: any) {
  const id: string = searchParams.id;

  return (
    <>
      <VideoPlayer id={id} />
      <div className="box-broder absolute bottom-0 flex w-[100vw] flex-shrink-0 flex-col">
        <div className="relative mb-[9.0667vw] box-border flex flex-shrink-0 flex-col pl-[3.2vw]">
          <div className="relative box-border flex h-[14.9333vw] flex-shrink-0 flex-row place-content-between pr-[3.2vw]">
            <div className="relative box-border block flex-shrink-0 flex-col content-start leading-[3.4667vw] text-white">
              <div className="text-[4.2vw] ">Chậu Hình Thú</div>
              <div className="mt-[2.6667vw] flex flex-row items-center justify-start text-[2.7vw] text-gray-400">
                <BsFire size={16} />
                <span className="leading-[16px]">14 Cái Đã Bán</span>
              </div>
            </div>
          </div>
          <div className="relative box-border flex h-[26.1333vw] w-full flex-shrink-0 flex-col content-start overflow-hidden">
            <div className="relative flex h-[29.3333vw] w-full flex-shrink-0 flex-row content-start overflow-scroll pr-[2.6667vw]">
              <div className="relative flex flex-shrink-0 flex-row content-start">
                <div className="relative mr-[2.6667vw] box-border flex h-[26.1333vw] w-[20.8vw] flex-shrink-0 flex-col content-start items-center rounded-lg bg-white pt-[1.0667vw]">
                  <div className="relative box-border flex h-[18.6667vw] w-[18.6667vw] flex-shrink-0 flex-col content-start overflow-hidden">
                    <Image
                      className="rounded-lg"
                      src="https://caysenda.vn/resources/upload/1920487345_394298364.jpg"
                      alt="a"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <span className="relative mt-[0.9333vw] box-border block text-sm leading-[4vw] text-red-500">
                    9.000đ
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-[3.2vw] box-border flex flex-shrink-0 flex-row place-content-between text-white">
            <div className="relative">
              <AiFillCarryOut size={24} />
              <div className="absolute -top-2 left-[14px] h-[20px] min-w-[30px] rounded-3xl border border-white bg-[red] text-sm">
                <div className="text-center leading-[20px]">2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
