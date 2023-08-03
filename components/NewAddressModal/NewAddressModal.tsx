"use client";
import { type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  children: React.ReactNode;
}
// {
//   "id": "342",
//   "fullname": "Huy",
//   "email": "yesterday_baby@yahoo.com",
//   "phoneNumber": "012354123",
//   "province": "202",
//   "dictrict": "1451",
//   "ward": "20910",
//   "address": "1231",
//   "ref": "address"
// }
const SelectAddressModal: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className={styles.main} onClick={handleOpenModal}>
        {props.children}
      </div>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper}>
          <a className={styles.close} onClick={handleCloseModal}>
            <AiOutlineClose />
          </a>
          <article className="box-border flex flex-col items-stretch">
            <header className="mb-[0.75rem] box-border flex h-[45px] items-center bg-white px-3">
              <div className="text-left font-medium">ĐỊA CHỈ GIAO HÀNG MỚI</div>
            </header>
            <div className="box-border block border-y border-[#eee] bg-white">
              <div className="overflow-hidden">
                <div className="relative block pl-4 text-[17px] leading-[1.5] ">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="box-border w-20 flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Họ Tên
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền Họ Và Tên Đầy Đủ"
                          ></input>
                        </div>
                        <div className="box-border block">
                          <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                            Lỗi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="box-border w-20 flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Email
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền Email"
                          ></input>
                        </div>
                        <div className="box-border block">
                          <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                            Lỗi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Số điện thoại
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                          ></input>
                        </div>
                        <div className="box-border block">
                          <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                            Lỗi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Tỉnh/Thành Phố
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                          ></input>
                        </div>
                        <div className="box-border block">
                          <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                            Lỗi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Quận/Huyện
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                          ></input>
                        </div>
                        <div className="box-border block">
                          <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                            Lỗi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Phường/Xã
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                          ></input>
                        </div>
                        <div className="box-border block">
                          <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                            Lỗi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start pr-3">
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <textarea
                          rows={4}
                          className="m-0 box-border block max-h-full w-full max-w-full resize-none appearance-none p-0 leading-normal outline-none"
                          placeholder="Vui Lòng Nhập Địa Chỉ Chi Tiết"
                        ></textarea>
                      </div>
                    </div>
                    <div className="box-border block">
                      <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                        Lỗi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer></footer>
          </article>
        </div>
      </Modal>
    </>
  );
};

export default SelectAddressModal;
