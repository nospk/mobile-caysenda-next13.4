"use client";
import { type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { AiOutlineClose, AiOutlineEnvironment } from "react-icons/ai";
interface Props {
  children: React.ReactNode;
}
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
      <div className="w-full" onClick={handleOpenModal}>
        {props.children}
      </div>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className="h-full w-full">
          <a className="absolute right-2 top-2 z-10 text-lg text-[#999]">
            <AiOutlineClose />
          </a>
          <div className="mb-[0.625rem] text-center text-[1.125rem] font-medium leading-[2.8125rem]">
            Địa Chỉ Giao Hàng
          </div>
          <div className="box-border h-full px-[0.5625rem]">
            <div className="mb-[0.96875rem] box-border text-[0.815rem] text-[#999]">
              Địa chỉ hiện tại
            </div>
            <div className="mb-[1.625rem] box-border flex flex-row items-center justify-start">
              <AiOutlineEnvironment className="ml-[0.375rem] mr-[0.625rem] box-border h-[1.5rem] w-[1.375rem]" />
              <div className="box-border block">
                <div className="mb-[0.8125rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                  <span className="mr-[1rem] box-border">
                    Trần Đăng Huy Hoàng
                  </span>
                  <span className="box-borer">0962773213</span>
                </div>
                <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                  24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ
                  Chí Minh
                </div>
              </div>
            </div>
            <div className="mb-[0.15625rem] box-border text-[0.815rem] text-[#999]">
              Chọn địa chỉ nhận hàng
            </div>
            <div className="mx-[-0.5625rem] h-[calc(100%-252px)] overflow-auto px-[0.5625rem] ">
              <div className="box-border items-center border-b border-[#eee] px-[12px]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border items-center border-b border-[#eee] px-[12px]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border items-center border-b border-[#eee] px-[12px]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border items-center px-[12px] border-b border-[#eee]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border items-center px-[12px] border-b border-[#eee]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border items-center px-[12px] border-b border-[#eee]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border items-center px-[12px] border-b border-[#eee]">
                <div className="flex items-center justify-start overflow-hidden ">
                  <div className="box-border flex-auto py-[0.8125rem]">
                    <div className="mb-[0.75rem] box-border text-[0.875rem] leading-[0.875rem] text-[#222]">
                      <span className="mr-[1rem] box-border">
                        Trần Đăng Huy Hoàng
                      </span>
                      <span className="box-borer">0962773213</span>
                    </div>
                    <div className="text-[0.875rem] leading-[0.875rem] text-[#222] ">
                      24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành
                      phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-[2.125rem] left-0 box-border w-full px-[0.5625rem]">
              <button className="w-full rounded-3xl bg-[#ff602d] py-[0.4375rem] text-[1rem] text-white">
                Tạo Địa Chỉ Giao Hàng Mới
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectAddressModal;
