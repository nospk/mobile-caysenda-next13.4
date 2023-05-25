'use client';
import { useCallback, type FC } from 'react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import styles from './AddToCartModal.module.css';
import { numberToString } from '@/lib/formatPrice';
import Variant from './Variant';
import InforWholeSale from './InforWholeSale';
import ButtonClose from './ButtonClose';
interface Variants {
	name: string;
	image: string;
	stock: number;
	order: number;
	sku: string;
}
interface Props {}
const AddToCartModal: FC = () => {
	const [variants, setVariants] = useState<Variants[]>([
		{
			name: 'Con Voi',
			image: 'https://caysenda.vn/resources/upload/22216875771_102253868.jpg',
			stock: 16837,
			order: 0,
			sku: 'ZCT-1-1',
		},
		{
			name: 'Con Cáo',
			image: 'https://caysenda.vn/resources/upload/22298539415_102253868.jpg',
			stock: 2167,
			order: 0,
			sku: 'ZCT-1-2',
		},
	]);
	const [indexAcitve, setIndexAcitve] = useState<number>(0);
	const [totalOrder, setTotalOrder] = useState<number>(0);
	const [totalType, setTotalType] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [activePrice, setActivePrice] = useState<number>(0);
	const setActive = useCallback((index: number) => {
		setIndexAcitve(index);
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProdct] = useState({
		price: 25000,
		price1: 22000,
		price2: 19400,
		condition: 6,
		condition1: 720,
		condition2: 7200,
		unit: 'Cái',
	});
	const decreaseOrder = useCallback(() => {
		const newVariants = [...variants];
		newVariants[indexAcitve].order = Number(newVariants[indexAcitve].order) - 1;
		if (newVariants[indexAcitve].order < 0) newVariants[indexAcitve].order = 0;
		setVariants(newVariants);
		calculatorOrder();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indexAcitve]);
	const increaseOrder = useCallback(() => {
		const newVariants = [...variants];
		newVariants[indexAcitve].order = Number(newVariants[indexAcitve].order) + 1;
		if (newVariants[indexAcitve].order > newVariants[indexAcitve].stock)
			newVariants[indexAcitve].order = newVariants[indexAcitve].stock;
		setVariants(newVariants);
		calculatorOrder();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indexAcitve]);
	const changeOrder = useCallback(
		(e: any) => {
			const newVariants = [...variants];
			newVariants[indexAcitve].order = Number(e.target.value);
			if (newVariants[indexAcitve].order < 0) newVariants[indexAcitve].order = 0;
			if (newVariants[indexAcitve].order > newVariants[indexAcitve].stock)
				newVariants[indexAcitve].order = newVariants[indexAcitve].stock;
			setVariants(newVariants);
			calculatorOrder();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[indexAcitve]
	);
	const handleOpenModal = useCallback(() => {
		setIsOpen(true);
		document.body.classList.add('overflow-hidden');
	}, []);
	const handleCloseModal = useCallback(() => {
		setIsOpen(false);
		document.body.classList.remove('overflow-hidden');
	}, []);
	const calculatorOrder = () => {
		//Cal orders
		let orders = variants.reduce(function (order, item) {
			return order + item.order;
		}, 0);

		//Cal types
		let types = variants.reduce(function (type, item) {
			if (item.order > 0) return type + 1;
			return type;
		}, 0);

		//Cal price and level price
		let price = 0;
		if (orders > product.condition2) {
			price = orders * Number(product.price2);
			setActivePrice(2);
		} else if (orders > product.condition1) {
			price = orders * Number(product.price1);
			setActivePrice(1);
		} else {
			price = orders * Number(product.price);
			setActivePrice(0);
		}

		//Set
		setTotalOrder(orders);
		setTotalType(types);
		setTotalPrice(price);
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
					<ButtonClose handleCloseModal={handleCloseModal} />
					<div className={styles.modal_body}>
						<div className={styles.body_left}>
							<div className={styles.wapper_left}>
								{variants.map((variant, index) => (
									// <div
									// 	key={variant.name}
									// 	onClick={() => setActive(index)}
									// 	className={`${
									// 		indexAcitve == index ? styles.varriant_active : ''
									// 	} ${
									// 		index == 0
									// 			? styles.wapper_variant_first
									// 			: styles.wapper_variant
									// 	}`}
									// >
									// 	<div>
									// 		<div className={styles.wapper_offer_number}>
									// 			<div
									// 				className={`${styles.offer_number} ${
									// 					variant.order > 0 ? '' : styles.hidden_offer
									// 				}`}
									// 			>
									// 				<span className={styles.span_offer_number}>
									// 					{'x'}
									// 					{variant.order}
									// 				</span>
									// 			</div>
									// 			<div className={styles.image_variant}>
									// 				<Image
									// 					className="rounded-xl"
									// 					src={variant.image}
									// 					alt={variant.name}
									// 					fill
									// 					object-fit={'contain'}
									// 					sizes="50vw"
									// 				/>
									// 			</div>
									// 			<div className={styles.name_variant}>
									// 				<span className={styles.span_name_variant}>
									// 					{variant.name}
									// 				</span>
									// 			</div>
									// 		</div>
									// 	</div>
									// </div>
									<Variant
										key={variant.name}
										variant={variant}
										className={`${
											indexAcitve == index ? styles.varriant_active : ''
										} ${
											index == 0
												? styles.wapper_variant_first
												: styles.wapper_variant
										}`}
										setActive={setActive}
										index={index}
									/>
								))}
							</div>
						</div>
						<div className={styles.wapper_right}>
							<div className={styles.body_right}>
								{/* <div className={styles.img_price_wapper}>
									<div className={styles.img_product}>
										<Image
											className="rounded-xl"
											src={variants[indexAcitve].image}
											alt={variants[indexAcitve].name}
											sizes="50vw"
											fill
											object-fit={'contain'}
										/>
									</div>
									<div className={styles.extend_info}>
										<div className={styles.margin_top}>
											<div
												className={`${styles.price_info} ${
													activePrice == 0 ? styles.price_active : ''
												} `}
											>
												{convertMoney(product.price) + 'K'}
												<span className={styles.span_price}>đ</span>
											</div>
											<div className={styles.condtion_info}>
												{`${product.condition} ~ ${
													Number(product.condition1) - 1
												}`}{' '}
												{product.unit}
											</div>
										</div>
										<div className={styles.margin_top}>
											<div
												className={`${styles.price_info} ${
													activePrice == 1 ? styles.price_active : ''
												} `}
											>
												{convertMoney(product.price1) + 'K'}
												<span className={styles.span_price}>đ</span>
											</div>
											<div className={styles.condtion_info}>
												{`${product.condition1} ~ ${
													Number(product.condition2) - 1
												}`}{' '}
												{product.unit}
											</div>
										</div>
										<div className={styles.margin_top}>
											<div
												className={`${styles.price_info} ${
													activePrice == 2 ? styles.price_active : ''
												} `}
											>
												{convertMoney(product.price2) + 'K'}
												<span className={styles.span_price}>đ</span>
											</div>
											<div className={styles.condtion_info}>
												{`≥${product.condition2}`} {product.unit}
											</div>
										</div>
									</div>
								</div> */}
								<InforWholeSale
									image={variants[indexAcitve].image}
									name={variants[indexAcitve].name}
									activePrice={activePrice}
									product={product}
								/>
								<div className={styles.order_widget_wapper}>
									<div className={styles.order_item}>
										<div className={styles.order_info}>
											<span className={styles.order_name}>
												{variants[indexAcitve].name}
											</span>
											<span className={styles.order_stock}>
												Tồn kho: {variants[indexAcitve].stock}
											</span>
										</div>
										<div className={styles.order_control}>
											<div
												onClick={decreaseOrder}
												className={styles.decrease_wapper}
											>
												<div className={styles.icon_wapper}>
													<div className={styles.icon_decrease}></div>
												</div>
											</div>
											<input
												className={styles.input_number}
												placeholder="0"
												type="number"
												value={variants[indexAcitve].order}
												onChange={changeOrder}
												min="0"
												max={variants[indexAcitve].stock}
											/>
											<div
												onClick={increaseOrder}
												className={styles.increase_wapper}
											>
												<div className={styles.icon_wapper}>
													<div
														className={styles.icon_increase_level}
													></div>
													<div
														className={styles.icon_increase_vertical}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.modal_footer}>
						<div className={styles.condition_wapper}>
							<div className={styles.condition}>
								<span className={styles.span_condition}>
									Tối thiểu {product.condition} {product.unit}
								</span>
							</div>
							<div className={styles.count_total_wapper}>
								<div>
									<div className={styles.count_total}>
										<div className={styles.count_total_num}>
											<span className={styles.span_count_total}>
												Đã Chọn: {totalType} Loại {totalOrder} Cái
											</span>
										</div>
										<div className={styles.count_price}>
											<span className={styles.span_count_price}>
												{'Tổng cộng : '}
											</span>
											<div className={styles.total_price}>
												<span className={styles.span_total_price}>
													{numberToString(totalPrice)}
												</span>
												<span className={styles.span_curency}>{' đ'}</span>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.button_confirm}>Xác Nhận</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};
export default AddToCartModal;
