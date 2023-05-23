'use client';
import { type FC } from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from '@/components/Modal';
import styles from './AddToCartModal.module.css';
import Image from 'next/image';
interface Props {}
const AddToCartModal: FC = () => {
	const [variants, setVariants] = useState<any>([
		{
			name: 'Con Voi',
			image: 'https://caysenda.vn/resources/upload/22216875771_102253868.jpg',
			stock: 16837,
			order: 0,
			active: true,
			sku: 'ZCT-1-1',
		},
		{
			name: 'Con Cáo',
			image: 'https://caysenda.vn/resources/upload/22298539415_102253868.jpg',
			stock: 2167,
			order: 0,
			active: false,
			sku: 'ZCT-1-2',
		},
	]);
	const [variantAcitve, setVariantAcitve] = useState(variants[0]);
	const convertMoney = (money: string) => {
		return `${money.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace(/0+/, '')}K`;
	};
	const setActive = (sku: string) => {
		let newVariants = variants.map((variant: any) => {
			if (variant.sku == sku) {
				variant.active = true;
				setVariantAcitve(variant);
			} else {
				variant.active = false;
			}
			return variant;
		});

		setVariants(newVariants);
	};
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProdct] = useState({
		price: 25000,
		price1: 22000,
		price2: 19400,
		condition: 6,
		condition1: 720,
		condition3: 7200,
		unit: 'Cái',
		activePrice: 0,
	});
	const decreaseOrder = () => {
		let newVariants = variants.map((variant: any) => {
			if (variant.sku == variantAcitve.sku) variant.order = Number(variant.order) - 1;
			return variant;
		});
		setVariants(newVariants);
	};
	const increaseOrder = () => {
		let newVariants = variants.map((variant: any) => {
			if (variant.sku == variantAcitve.sku) variant.order = Number(variant.order) + 1;
			return variant;
		});
		setVariants(newVariants);
	};
	const changeOrder = (e: any) => {
		let order = e.target.value;
		let newVariants = variants.map((variant: any) => {
			if (variant.sku == variantAcitve.sku) variant.order = Number(order);
			return variant;
		});
		setVariants(newVariants);
	};
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
					<div
						onClick={handleCloseModal}
						className="flex flex-col content-start flex-shrink-0 top-0 right-0 absolute z-10 pr-[1vw] pt-[1vw]"
					>
						<AiOutlineClose className="h-[3vw] w-[3vw]" />
					</div>
					<div className={styles.modal_body}>
						<div className="box-border flex flex-col content-start flex-shrink-0">
							<div className="box-border flex flex-col content-start flex-shrink-0 text-[#666666] bg-[#F4F4F4] overflow-auto h-full relative w-[30.66667vw] rounded-l-lg text-[3.7333vw] grow">
								{variants.map((variant: any, index: number) => (
									<div
										key={variant.name}
										onClick={() => setActive(variant.sku)}
										className={`box-content flex flex-row content-start flex-shrink-0 items-center relative min-h-[12vw] bg-[#FFFFFF] pb-[2.6667vw] ${
											variant.active ? 'bg-[#FFFFFF]' : 'bg-[#f8f8f8]'
										} ${index == 0 ? 'pt-[4.8vw]' : 'pt-[2.4vw]'}`}
									>
										<div>
											<div className="box-border flex flex-row content-start flex-shrink-0 relative">
												<div
													className={`absolute text-white bg-[#FD4000] top-[-1.4667vw] left-[2.6667vw] z-[1] text-center min-w-[4.66667vw] h-[2.93333vw] leading-[2.93333vw] text-[2.66667vw] p-[0 0.66667vw] rounded-t-lg rounded-br-lg ${
														variant.order > 0 ? '' : 'hidden'
													}`}
												>
													<span className="text-[2.6667vw]">
														{'x'}
														{variant.order}
													</span>
												</div>
												<div className="h-[10.6667vw] w-[10.6667vw] ml-[2.4vw] relative align-middle">
													<Image
														className="rounded-xl"
														src={variant.image}
														alt={variant.name}
														fill
														object-fit={'contain'}
														sizes="50vw"
													/>
												</div>
												<div className="box-border flex flex-col content-start relative flex-1 ml-[1.8667vw] max-h-full justify-center min-h-[10.66667vw] leading-[3.46667vw]">
													<span className="relative box-border flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[#666666] text-[2.9333vw] align-middle line-clamp-6 leading-[3.4667vw]">
														{variant.name}
													</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="box-border flex flex-col flex-1 relative content-start">
							<div className="box-border flex flex-col flex-1 relative content-start px-[3.4667vw] pt-[3.4667vw]">
								<div className="box-border flex flex-row flex-shrink-0">
									<div className="w-[32vw] h-[32vw] relative align-middle">
										<Image
											className="rounded-xl"
											src={variantAcitve.image}
											alt={'product1'}
											sizes="50vw"
											fill
											object-fit={'contain'}
										/>
									</div>
									<div className="box-border flex flex-col flex-shirnk-0 ml-[3.2vw] justify-center items-start">
										<div className="mb-[2.4vw] ">
											<div className="relative box-border flex flex-row text-[4.8vw] leading-[5.6vw] font-bold items-baseline text-[#FF2900]">
												{convertMoney(product.price.toString())}
												<span className="text-[2.13333vw] ml-[0.66667vw]">
													đ
												</span>
											</div>
											<div className="box-border flex flex-col text-[#999] text-[2.66667vw] leading-[3.2vw] indent-[0.66667vw]">
												{`6 ~ 719`} {product.unit}
											</div>
										</div>
										<div className="mb-[2.4vw] ">
											<div className="relative box-border flex flex-row text-[4.8vw] leading-[5.6vw] font-bold items-baseline text-[#666666]">
												{convertMoney(product.price1.toString())}
												<span className="text-[2.13333vw] ml-[0.66667vw]">
													đ
												</span>
											</div>
											<div className="box-border flex flex-col text-[#999] text-[2.66667vw] leading-[3.2vw] indent-[0.66667vw]">
												{`720 ~ 7199`} {product.unit}
											</div>
										</div>
										<div className="mb-[2.4vw] ">
											<div className="relative box-border flex flex-row text-[4.8vw] leading-[5.6vw] font-bold items-baseline text-[#666666]">
												{convertMoney(product.price2.toString())}
												<span className="text-[2.13333vw] ml-[0.66667vw]">
													đ
												</span>
											</div>
											<div className="box-border flex flex-col text-[#999] text-[2.66667vw] leading-[3.2vw] indent-[0.66667vw]">
												{`≥7200`} {product.unit}
											</div>
										</div>
									</div>
								</div>
								<div className="box-border flex flex-col flex-1 flex-shrink-0 mt-[4vw] pt-[4vw] overflow-y-auto">
									<div className="box-border flex flex-row flex-shrink-0 justify-between items-center max-w-full mb-[4.26667vw]">
										<div className="box-border flex flex-col flex-shrink-0">
											<span className="relative box-border flex-shrink-0 whitespace-pre-wrap line-clamp-5 text-[3.46667vw] leading-[3.66667vw] break-all inline-block w-[26.66667vw] text-[#222222]">
												{variantAcitve.name}
											</span>
											<span className="relative box-border flex-shrink-0 items-center overflow-hidden whitespace-no-wrap inline-block text-[2.66667vw] leading-[3.33333vw] w-[32.53333vw] text-ellipsis text-[#999999]">
												Tồn kho: {variantAcitve.stock}
											</span>
										</div>
										<div className="box-border flex flex-shrink-0 flex-row w-[29.06667vw]">
											<div
												onClick={() => decreaseOrder()}
												className="box-border flex flex-col flex-shrink-0 w-[8.26667vw] h-[8.26667vw] leading-[8.26667vw]  justify-center items-center text-center border-x border-y border-solid border-[#CECECE] rounded-l-xl"
											>
												<div className="box-border flex flex-col flex-shrink-0 relative w-[3.46667vw] h-[3.46667vw]">
													<div className="box-border flex flex-col flex-shrink-0 bg-[#CCCCCC] relative top-[1.6vw] left-0 w-[3.46667vw] h-[1px] rounded-xl"></div>
												</div>
											</div>
											<input
												className="w-[11.73333vw] text-center rounded-none border-y border-solid border-[#CECECE] h-[8.26667vw] text-[4.26667vw] outline-0 appearance-none align-middle placeholder-black focus:placeholder-white "
												placeholder="0"
												type="number"
												value={variantAcitve.order}
												onChange={changeOrder}
											/>
											<div
												onClick={() => increaseOrder()}
												className="box-border flex flex-col flex-shrink-0 justify-center items-center text-center w-[8.26667vw] h-[8.26667vw] leading-[8.26667vw] border-x border-y border-solid border-[#CECECE] rounded-r-xl self-center"
											>
												<div className="box-border flex flex-col flex-shrink-0 relative w-[3.46667vw] h-[3.46667vw]">
													<div className="box-border flex flex-col flex-shrink-0 top-[1.6vw] left-0 w-[3.46667vw] h-[1px] rounded-xl bg-[#666666] relative"></div>
													<div className="box-border flex flex-col flex-shrink-0 top-[-0.26667vw] left-[1.6vw] w-[1px] h-[3.46667vw] rounded-xl bg-[#666666] relative"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.modal_footer}>
						<div className="box-border flex flex-col content-start flex-shrink-0 ">
							<div className="box-border flex content-start flex-shrink-0 flex-row justify-center items-center w-screen h-[9.6vw] bg-[#FFF9EC]">
								<span className="border-0 border-solid border-black relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[3.2vw]">
									Tối thiểu {product.condition} {product.unit}
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
												{'Tổng cộng : '}
											</span>
											<div className="flex flex-row flex-shrink-0 items-end">
												<span className="relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[4.2667vw] text-[#ff4000]">
													200K
												</span>
												<span className="relative box-border block flex-col content-start flex-shrink-0 whitespace-pre-wrap text-[2.93333vw] text-[#ff4000] mb-[0.26667vw]">
													{' đ'}
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
