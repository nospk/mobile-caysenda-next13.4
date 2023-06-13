import { Icon } from "@/components/Icon";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
export default async function Page() {
  return (
    <div>
      <div className="absolute bottom-auto top-[8vw] h-[calc(100dvh-17.5vw)] w-full overflow-auto ">
        <div className="absolute left-0 right-0 top-0">
          <div className="box-border block bg-white p-[2.4vw]">
            <div className="box-border block">
              <div className="box-border flex flex-shrink-0 flex-row items-center overflow-hidden">
                <Icon
                  src="/place.png"
                  alt="icon-place"
                  className="relative block h-[5vw] w-[5vw] align-middle"
                />
                <div className="box-border flex-1 px-[2vw]">
                  <div className="text-[3.2vw] text-[#666]">
                    Phường Hoàn Kiếm, Quận Ba Đình, thành phố Hà Nội
                  </div>
                  <div className="mb-[0.666666vw] box-border text-[3.333337vw] font-medium text-[#333]">
                    24A Bà Triệu
                  </div>
                  <div className="box-border block text-[2.877777vw] text-[#666]">
                    <span className="mr-[1vw] inline-block">
                      Nguyễn Thanh Bình
                    </span>
                    <span className="mr-[1vw] inline-block">0961216330</span>
                  </div>
                </div>
                <AiOutlineRight className="h-[3.23333vw] w-[3.23333vw] text-[#999]" />
              </div>
            </div>
          </div>
          <div className="block overflow-hidden">
            <div className="my-[1.66667vw] box-border block bg-white px-[1.66667vw]">
              <div className="block">
                <div className="box-border flex flex-row items-center py-[1.66667vw]">
                  <h3 className="box-border flex-1 truncate text-[3.666667vw] font-medium">
                    Chậu Gốm Sứ Chậu Thú
                  </h3>
                </div>
              </div>
              <article className="block">
                <div className="box-border">
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
                        <div className="mb-[1vw] box-border truncate text-[3.033333vw] font-medium text-[#222]">
                          ZTC1
                        </div>
                      </div>
                    </div>
                    <ul className="box-border">
                      <li className="list-item">
                        <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                          <div className="box-border flex-1 overflow-hidden">
                            <div className="box-border">
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
                                {"x "}
                                <em className="not-italic text-[#222]">123</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-item">
                        <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                          <div className="box-border flex-1 overflow-hidden">
                            <div className="box-border">
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
                                {"x "}
                                <em className="not-italic text-[#222]">123</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-item">
                        <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                          <div className="box-border flex-1 overflow-hidden">
                            <div className="box-border">
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
                                {"x "}
                                <em className="not-italic text-[#222]">12</em>
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
                        <div className="mb-[1vw] box-border truncate text-[3.033333vw] font-medium text-[#222]">
                          ZTC1
                        </div>
                      </div>
                    </div>
                    <ul className="box-border">
                      <li className="list-item">
                        <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                          <div className="box-border flex-1 overflow-hidden">
                            <div className="box-border">
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
                                {"x "}
                                <em className="not-italic text-[#222]">1</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative box-border pb-[1.666667vw]">
                  <div className="box-border">
                    <div className="flex flex-row items-center justify-between py-[1.166667vw] text-[2.833333vw]">
                      <label>Hình Thức Thanh Toán</label>
                      <div className="flex flex-1 flex-row items-center justify-end pl-[0.833333vw]">
                        <span className="inline text-[#666]">CK trước 10%</span>
                        <AiOutlineRight className="ml-[0.666667vw] h-[2vw] w-[2vw] text-[#999]" />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-[1.166667vw] text-[2.833333vw]">
                      <label className="mr-[2vw]">Phí Vận Chuyển</label>
                      <div className="flex flex-1 flex-row items-center justify-end pl-[0.833333vw]">
                        <span className="inline font-medium text-[#333]">
                          30K
                        </span>
                        <AiOutlineRight className="ml-[0.666667vw] h-[2vw] w-[2vw] text-[#999]" />
                      </div>
                    </div>
                    <div className="box-border">
                      <div className="relative h-auto bg-white pt-[1.166667vw]">
                        <div className="flex flex-row items-center overflow-hidden text-[2.833333vw]">
                          <label className="mr-[2vw]">Ghi Chú</label>
                          <input
                            className="flex-1 pl-[1.333333vw] text-right outline-0"
                            maxLength={500}
                            placeholder="Lưu Ý Cho Người Bán"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="my-[1.66667vw] box-border block bg-white px-[1.66667vw]">
              <div className="block">
                <div className="box-border flex flex-row items-center py-[1.66667vw]">
                  <h3 className="box-border flex-1 truncate text-[3.666667vw] font-medium">
                    Chậu Gốm Sứ Chậu Thú
                  </h3>
                </div>
              </div>
              <article className="block">
                <div className="box-border">
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
                        <div className="mb-[1vw] box-border truncate text-[3.033333vw] font-medium text-[#222]">
                          ZTC1
                        </div>
                      </div>
                    </div>
                    <ul className="box-border">
                      <li className="list-item">
                        <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                          <div className="box-border flex-1 overflow-hidden">
                            <div className="box-border">
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                        <div className="mb-[1vw] box-border truncate text-[3.033333vw] font-medium text-[#222]">
                          ZTC1
                        </div>
                      </div>
                    </div>
                    <ul className="box-border">
                      <li className="list-item">
                        <div className="mb-[1.66667vw] flex list-none flex-row items-center rounded-lg bg-[#f9f9f9] px-[1.66667vw] py-[0.833333vw]">
                          <div className="box-border flex-1 overflow-hidden">
                            <div className="box-border">
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
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
                              <span className="box-border text-[2.866667vw] text-[#666]">
                                Chậu hình voi
                              </span>
                            </div>
                            <span className="mr-[0.666666vw] box-border text-[3.666667vw] leading-[3vw] text-[#FF4000]">
                              <span className="box-border">16K</span>
                            </span>
                            <span className="mr-[0.666666vw] box-border text-[2.666667vw] leading-[2vw] text-[#999]">
                              {`Tổng: `}
                              <span className="box-border">16K</span>
                            </span>
                          </div>
                          <div className="box-border flex flex-col ">
                            <div className="box-border h-[4.876vw] ">
                              <span className="inline-block h-full rounded-lg bg-white px-[1.66667vw] text-[2.833333vw] leading-[4.876vw] text-[#999]">
                                {"x "}
                                <em className="not-italic text-[#222]">1</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative box-border pb-[1.666667vw]">
                  <div className="box-border">
                    <div className="flex flex-row items-center justify-between py-[1.166667vw] text-[2.833333vw]">
                      <label>Hình Thức Thanh Toán</label>
                      <div className="flex flex-1 flex-row items-center justify-end pl-[0.833333vw]">
                        <span className="inline text-[#666]">CK trước 10%</span>
                        <AiOutlineRight className="ml-[0.666667vw] h-[2vw] w-[2vw] text-[#999]" />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-[1.166667vw] text-[2.833333vw]">
                      <label className="mr-[2vw]">Phí Vận Chuyển</label>
                      <div className="flex flex-1 flex-row items-center justify-end pl-[0.833333vw]">
                        <span className="inline font-medium text-[#333]">
                          30K
                        </span>
                        <AiOutlineRight className="ml-[0.666667vw] h-[2vw] w-[2vw] text-[#999]" />
                      </div>
                    </div>
                    <div className="box-border">
                      <div className="relative h-auto bg-white pt-[1.166667vw]">
                        <div className="flex flex-row items-center overflow-hidden text-[2.833333vw]">
                          <label className="mr-[2vw]">Ghi Chú</label>
                          <input
                            className="flex-1 pl-[1.333333vw] text-right outline-0"
                            maxLength={500}
                            placeholder="Lưu Ý Cho Người Bán"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="box-border bg-white">
              <div className="mb-[1.666667vw] px-[1.666667vw] py-[2.333333vw] text-[#222]">
                <div className="text-[3.666667vw] font-medium ">
                  Chi Tiết Thanh Toán
                </div>
                <div className="box-border">
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[2.666667vw] ">
                      Tổng Tiền Hàng
                      <span className="ml-[1vw] text-[2.1666667vw] text-[#999]">
                        2 Loại 5 Cái
                      </span>
                    </label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <span className="box-border text-[3.233333vw] ">
                        90K
                        <span className="ml-[0.333333vw] text-[2.666667vw]">
                          đ
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[2.666667vw]">
                      Tổng Tiền Phí Vận Chuyển
                    </label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <span className="box-border text-[3.233333vw] text-[#222]">
                        60K
                        <span className="ml-[0.333333vw] text-[2.666667vw]">
                          đ
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between py-[1.1666667vw]">
                    <label className="text-[2.666667vw]">Tổng Thanh Toán</label>
                    <div className="box-border flex flex-1 flex-row items-center justify-end pl-[1.666667vw]">
                      <span className="box-border text-[3.233333vw] ">
                        190K
                        <span className="ml-[0.333333vw] text-[2.666667vw]">
                          đ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[9.5vw] w-full bg-white">
        <div className="box-border p-[1.666667vw]">
          <div className="flex flex-row items-center">
            <div className="mr-[1.666667vw] flex-shrink-0 grow text-right text-[3.2vw] ">
              <label>
                <span className="mr-[1vw] text-[2.666667vw] text-[#999]">
                  Đã bao gồm phí vận chuyển
                </span>
                {"Tổng Cộng "}
              </label>
              <span className="box-border text-[4vw] font-medium text-[#FF4000]">
                190K<span className="ml-[0.333333vw] text-[3.666667vw]">đ</span>
              </span>
            </div>
            <div className="flex-initial">
              <div className="flex">
                <button className="h-[6.1666667vw] w-[16.6666667vw] flex-1 rounded-full bg-[#ff4000] text-[3.2vw] font-medium leading-[6.1666667vw] text-white">
                  Xác Nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
