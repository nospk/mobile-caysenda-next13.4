'use client';
import { type FC } from 'react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import styles from './AddToCartModal.module.css';
interface Props {}
const AddToCartModal: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenModal = () => {
		setIsOpen(true);
		document.body.classList.add('overflow-hidden');
	};
	const handleCloseModal = () => {
		setIsOpen(false);
		document.body.classList.remove('overflow-hidden');
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
					<div className={styles.modal_body}>
						<div className="box-border flex flex-col content-start flex-shrink-0">
							<div className="box-border flex flex-col content-start flex-shrink-0 text-[#666666] overflow-auto h-full relative w-[30.66667vw] text-[3.7333vw] flex-grow">
								aaa
							</div>
						</div>
					</div>
					<div className={styles.modal_footer}>
						<div className="box-border flex flex-col content-start flex-shrink-0">
							<div className="box-border flex content-start flex-shrink-0 flex-row justify-center items-center w-screen h-[9.6vw] bg-[#FFF9EC]">
								<span className="border-0 border-solid border-black relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[3.2vw]">
									Tối thiếu 2 Cái
								</span>
							</div>
              <div className='box-border flex flex-col content-start flex-shrink-0 relative px-[2.66667vw] py-[1.46667vw]'>
                  <div>
                    <div className='flex box-border flex-row flex-no-wrap justify-between min-w-[30.66667vw] pr-[2.66667vw] pb-[2.4vw]'>
                      <div className='flex box-border flex-shrink-0 flex-row justify-start items-center'>
                        <span className='border-0 border-solid border-black relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[2.66667vw] text-[#999999]'>
                            Đã Chọn: 2 Loại 4 Cái
                        </span>
                      </div>
                      <div className='box-border flex content-start flex-shrink-0 flex-row items-baseline'>
                        <span>

                        </span>
                        <span>

                        </span>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className='box-border flex content-start flex-shrink-0 text-center text-white flex-row items-center justify-center bg-[#ff4000] rounded-full text-[3.46667vw] h-[9.6vw]'>Xác Nhận</div>
              </div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};
export default AddToCartModal;
