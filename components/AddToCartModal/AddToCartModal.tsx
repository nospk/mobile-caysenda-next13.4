"use client";
import { type FC } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "@/components/Modal";
import styles from "./AddToCartModal.module.css";
import Image from "next/image";
interface Props {}
const AddToCartModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <button onClick={handleOpenModal} className={styles.button}>
        Thêm vào giỏ hàng
      </button>

      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper_modal}>
          <div
            onClick={handleCloseModal}
            className="flex flex-col content-start flex-shrink-0 top-0 right-0 absolute z-10 pr-[1vw] pt-[1vw]"
          >
            <AiOutlineClose className="h-[3vw] w-[3vw]" />
          </div>
          <div className={styles.modal_body}>
            <div className="box-border flex flex-col content-start flex-shrink-0">
              <div className="box-border flex flex-col content-start flex-shrink-0 text-[#666666] bg-[#F4F4F4] overflow-auto h-full relative w-[30.66667vw] rounded-l-lg text-[3.7333vw] grow">
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] bg-[#FFFFFF] pb-[2.6667vw] pt-[4.8vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="text-[2.6667vw]">
                          {"x"}
                          {"2"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] py-[2.6667vw]">
                  <div>
                    <div className="box-border flex flex-row content-start flex-shrink-0 relative">
                      <div className="absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg">
                        <span className="">
                          {"x"}
                          {"5"}
                        </span>
                      </div>
                      <Image
                        className="h-[10.6667vw] w-[10.6667vw] relative ml-[2.4vw]"
                        src={
                          "https://caysenda.vn/resources/upload/17892827873_102253868.jpg"
                        }
                        alt={"product1"}
                        sizes="100vw"
                        width={0}
                        height={0}
                      />
                      <div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
                        <span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
                          abcdwd
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>abc</div>
          </div>
          <div className={styles.modal_footer}>
            <div className="box-border flex flex-col content-start flex-shrink-0 ">
              <div className="box-border flex content-start flex-shrink-0 flex-row justify-center items-center w-screen h-[9.6vw] bg-[#FFF9EC]">
                <span className="border-0 border-solid border-black relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[3.2vw]">
                  Tối thiếu 2 Cái
                </span>
              </div>
              <div className="box-border flex flex-col content-start flex-shrink-0 relative pl-[2.66667vw] pr-[2.93333vw] py-[1.46667vw]">
                <div>
                  <div className="flex box-border flex-row flex-no-wrap justify-between min-w-[30.66667vw] pr-[2.66667vw] pb-[2.4vw]">
                    <div className="flex box-border flex-shrink-0 flex-row justify-start items-center">
                      <span className="border-0 border-solid border-black relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[2.66667vw] text-[#999999]">
                        Đã Chọn: 2 Loại 4 Cái
                      </span>
                    </div>
                    <div className="box-border flex content-start flex-shrink-0 flex-row items-baseline">
                      <span className="relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[2.66667vw] text-[#222222]">
                        {"Tổng cộng : "}
                      </span>
                      <div className="flex flex-row flex-shrink-0 items-end">
                        <span className="relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[4.2667vw] text-[#ff4000]">
                          200K
                        </span>
                        <span className="relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[2.93333vw] text-[#ff4000] mb-[0.26667vw]">
                          {" đ"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border flex content-start flex-shrink-0 text-center text-white flex-row items-center justify-center bg-[#ff4000] rounded-full text-[3.46667vw] h-[9.6vw]">
                  Xác Nhận
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default AddToCartModal;
