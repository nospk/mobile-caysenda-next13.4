import { Icon } from "@/components/Icon";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
export default async function Page() {
  return (
    <div>
      <div className="absolute bottom-auto top-[8vw] h-[calc(100vh-17.5vw)] w-full overflow-auto ">
        <div className="absolute left-0 right-0 top-0">
          <div className="box-border block bg-white p-[2.4vw]">
            <div className="box-border block">
              <div className="box-border flex flex-shrink-0 flex-row items-center overflow-hidden">
                <Icon
                  src="/place.png"
                  alt="icon-place"
                  className="relative block h-[4vw] w-[4vw] align-middle"
                />
                <div className="box-border flex-1 px-[2vw]">
                  <div className="text-[2.16667vw] text-[#666]">
                    Phường Hoàn Kiếm, Quận Ba Đình, thành phố Hà Nội
                  </div>
                  <div className="mb-[0.66667vw] box-border text-[2.66667vw] font-medium text-[#333]">
                    24A Bà Triệu
                  </div>
                  <div className="box-border block text-[2.16667vw] text-[#666]">
                    <span className="mr-[1vw] inline-block">
                      Nguyễn Thanh Bình
                    </span>
                    <span className="mr-[1vw] inline-block">0961216330</span>
                  </div>
                </div>
                <AiOutlineRight className="h-[2.4vw] w-[2.4vw] text-[#999]" />
              </div>
            </div>
          </div>
          <div className="block overflow-hidden">
            <div className="mt-[1.66667vw] box-border block bg-white px-[1.66667vw]">
              <div className="block">
                <div className="box-border flex flex-row items-center py-[1.66667vw]">
                  <h3 className="box-border flex-1 truncate text-[2.66667vw] font-medium">
                    Chậu Gốm Sứ Chậu Thú
                  </h3>
                </div>
              </div>
              <article className="block">
                <div className="box-border">
                  <div className="mb-[1.66667vw] box-border flex flex-row items-start">
                    <div className="mr-[1vw] block h-[12.084vw] w-[12.084vw]">
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
                    <div className="box-border flex-1 overflow-hidden">
                      <div className="mb-[1vw] box-border truncate text-[2.16667vw] font-medium text-[#222]">
                        ZTC1
                      </div>
                    </div>
                  </div>
                  <ul className="box-border">
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-border">
                  <div className="mb-[1.66667vw] box-border flex flex-row items-start">
                    <div className="mr-[1vw] block h-[12.084vw] w-[12.084vw]">
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
                    <div className="box-border flex-1 overflow-hidden">
                      <div className="mb-[1vw] box-border truncate text-[2.16667vw] font-medium text-[#222]">
                        ZTC1
                      </div>
                    </div>
                  </div>
                  <ul className="box-border">
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-border">
                  <div className="mb-[1.66667vw] box-border flex flex-row items-start">
                    <div className="mr-[1vw] block h-[12.084vw] w-[12.084vw]">
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
                    <div className="box-border flex-1 overflow-hidden">
                      <div className="mb-[1vw] box-border truncate text-[2.16667vw] font-medium text-[#222]">
                        ZTC1
                      </div>
                    </div>
                  </div>
                  <ul className="box-border">
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                        <div className="box-border flex-1 overflow-hidden">
                          <div className="box-border">
                            <span className="box-border text-[2.166667vw] text-[#666]">
                              Chậu hình voi
                            </span>
                          </div>
                          <span className="mr-[0.666666vw] box-border text-[3vw] leading-[3vw] text-[#FF4000]">
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[2vw]">
                                đ
                              </span>
                            </span>
                          </span>
                          <span className="mr-[0.666666vw] box-border text-[2vw] leading-[2vw] text-[#999]">
                            {`Tổng: `}
                            <span className="box-border">
                              16K
                              <span className="ml-[0.333333vw] text-[1.66667vw]">
                                đ
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="box-border flex flex-col ">
                          <div className="box-border h-[4.876vw] ">
                            <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.333333vw] leading-[4.666667vw] text-[#999]">
                              {"x "}
                              <em className="not-italic text-[#222]">1</em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[9.5vw] w-full bg-white">
        a
      </div>
    </div>
  );
}
