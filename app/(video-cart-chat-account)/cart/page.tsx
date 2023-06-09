import { AiOutlineEnvironment, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { convertMoney } from "@/lib/formatPrice";
export default async function Page() {
  return (
    <>
      <div className=" box-border flex h-[calc(100dvh-14.6667vw)] w-[100vw] flex-col items-stretch bg-[#f0f0f0]">
        <div className="box-border flex h-[100%] flex-shrink-0 flex-col">
          <div className="box-border flex flex-shrink-0 flex-col">
            <div className="relative box-border flex h-[11.7333vw] flex-shrink-0 flex-row content-start items-center bg-gradient-to-b from-[#f5f5f5] ">
              <div className="box-border flex flex-1 flex-row items-center">
                <span className="ml-[3.2vw] block whitespace-pre-wrap text-[4.233vw] font-bold text-[#222]">
                  Địa chỉ
                </span>
                <div className="mx-[1.6vw] box-border flex max-w-[53.3333vw] flex-1 flex-row items-center ">
                  <AiOutlineEnvironment className="mr-[0.8vw] flex h-[3.2vw] w-[2.93333vw] flex-shrink-0" />
                  <div className="box-border flex w-0 flex-1 flex-row items-center">
                    <span className="box-border block truncate text-[3.2vw] text-[#666] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </span>
                    <AiOutlineRight className="box-border h-[3.26667vw] w-[3.26667vw] flex-shrink-0 text-center text-[#666]" />
                  </div>
                </div>
              </div>
              <div className="relative ml-auto box-border flex flex-shrink-0 flex-row items-center">
                <span className="mr-[2.66667vw] box-border block whitespace-pre-wrap text-[3.73333vw] text-[#333333]">
                  Chi Tiết
                </span>
              </div>
            </div>
          </div>
          <div className=" box-border flex h-[70vw] flex-1 flex-col overflow-x-hidden overflow-y-scroll overscroll-none p-[2.4vw] scrollbar-hide">
            <div className="box-border block flex-shrink-0">
              <div className="box-border flex flex-shrink-0 flex-col overflow-hidden">
                <div className="box-border flex flex-shrink-0 flex-col">
                  <div className="mb-[3.2vw] flex flex-col text-[3.2vw] text-[#F66D09]">
                    <span className="flex">
                      Lưu ý: Khách Hàng Điền Đủ Thông Tin Giao Nhận
                    </span>
                    <span className="flex">
                      Thời gian: Giao Hàng Dự Kiến 5 Tới 7 Ngày
                    </span>
                  </div>
                  <div className="relative mb-[2.4vw] flex h-[10.66667vw] items-center justify-center rounded-lg bg-[#f5ddcb] px-[2.4vw] text-[3.2222vw] font-semibold text-[#333]">
                    <span>ĐƠN HÀNG ĐỦ MỨC TỐI THIẾU MỚI BẤM ĐẶT HÀNG ĐƯỢC</span>
                  </div>
                  <div className="box-border flex flex-shrink-0 flex-col">
                    <div className="mb-[2.4vw] box-border flex flex-shrink-0 flex-col content-start rounded-lg bg-white py-[2.4vw]">
                      <div className="flex flex-shrink-0 flex-col content-start px-[3.2vw]">
                        <div className="box-border flex flex-shrink-0 flex-row content-start items-center">
                          <div className="relative ml-[-2.4vw] box-border flex flex-shrink-0 flex-row content-start items-center pl-[2.66667vw]">
                            <div className="h-[5.33333vw] w-[5.33333vw] content-start items-center rounded-full border-[0.26667vw] border-[#ddd] transition"></div>
                            <div className="relative ml-[2.13333vw] box-border flex flex-shrink-0 flex-col"></div>
                          </div>
                          <div className="box-border flex flex-1 flex-row items-center overflow-hidden text-[2.6667vw]">
                            <span className="box-border block truncate whitespace-nowrap text-[#333]">
                              Quần áo thời
                            </span>
                            {">"}
                            <span className="box-border block w-fit whitespace-nowrap text-red-700">
                              Tối thiểu: 1.000K
                            </span>
                            {">>"}
                            <span className="box-border block w-fit whitespace-nowrap text-[#333]">
                              Hiện tại: 249K
                            </span>
                          </div>
                          <span className="ml-[1.6vw] block whitespace-pre-wrap text-[2.6667vw] italic text-blue-800">
                            Đặt Thêm
                          </span>
                        </div>
                        <div className="pl-[7.46666vw] text-[2.6667vw] text-red-700">
                          <span>Chưa đạt mức tối thiểu của danh mục này</span>
                        </div>
                      </div>
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
                        <div className="box-border flex flex-shrink-0 flex-col">
                          <div className="mt-[3.2vw] box-border flex flex-shrink-0 flex-col">
                            <div className="box-border flex flex-shrink-0 flex-col px-[3.2vw]">
                              <div className="fex-row box-border flex flex-shrink-0 items-center justify-between">
                                <div className="relative ml-[-2.4vw] flex flex-shrink-0 flex-row items-center pb-[2.4vw] pl-[2.66667vw] pt-[2.4vw]">
                                  <div className="relative flex h-[5.33333vw] w-[5.33333vw] flex-col content-start items-center justify-center rounded-full border-[0.26667vw] border-[#ff4000] bg-[#ff4000] transition">
                                    <span className="box-border block text-center font-icon text-[4.26667vw] leading-none text-white before:content-['\e8a5']"></span>
                                  </div>
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
                                    <span className="ml-[0.66667vw] text-[2.93333vw]">
                                      đ
                                    </span>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border block flex-shrink-0 bg-[#fff]">
            <div className="box-border flex flex-shrink-0 flex-col content-start">
              <span className="box-border whitespace-pre-wrap bg-[#fff2e6] p-[2.4vw] text-[3.2vw] text-[#666]">
                Có {1} sản phẩm chưa đặt đủ số lượng hàng tối thiểu
              </span>
              <div className="flex flex-row items-center justify-between border-t border-solid border-[#e9e9e9] p-[2.66667vw]">
                <div className="relative ml-[-1.6vw] box-border flex flex-shrink-0 flex-row items-center py-[2.4vw] pl-[2.66667vw]">
                  <div className="h-[5.33333vw] w-[5.33333vw] content-start items-center rounded-full border-[0.26667vw] border-[#ddd] transition"></div>
                  <span className="ml-[2.13333vw] box-border block whitespace-pre-wrap text-[3.2vw] text-[#333]">
                    Tất Cả
                  </span>
                </div>
                <div className="box-border flex flex-1 flex-row items-center justify-end">
                  <div className="mx-[2.66667vw] box-border flex flex-1 flex-col">
                    <div className="flex flex-1 flex-row flex-wrap content-start items-baseline justify-end">
                      <div className="box-border flex flex-shrink-0 flex-row items-baseline text-[#FF4000]">
                        <span className="box-border block whitespace-pre-wrap text-[2.93333vw]">
                          Tổng Cộng:{" "}
                        </span>
                        <span className="box-border block whitespace-pre-wrap text-[3.73333vw] font-bold">
                          {convertMoney(16000) + "K"}
                        </span>
                        <span className="ml-[0.66667vw]">đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="box-border flex flex-shrink-0 flex-col">
                    <div className="min-w-[26.66667vw] rounded-full bg-[#ff602d] bg-gradient-to-r to-[#ff4000] px-[4vw] py-[2.93333vw] text-[3.73333vw] leading-[3.73333vw] text-white">
                      <a href="/checkout">
                        <span>Mua Hàng</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
