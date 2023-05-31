'use client';
import { useCallback, type FC } from 'react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import styles from './styles.module.css';
import { numberToString } from '@/lib/formatPrice';
import Variant from './Variant';
import ButtonClose from './ButtonClose';
import InforRetail from './InforRetail';
interface Variants {
	name: string;
	image: string;
	stock: number;
	order: number;
	sku: string;
	orderPrice: number;
	variants: any[];
}
interface Props {}
const AddToCartModal: FC = () => {
	const [variants, setVariants] = useState<Variants[]>([
		{
			name: 'Mô hình Cây (JY-278)',
			image: 'https://caysenda.vn/resources/upload/14442943058_1234020846.jpg',
			stock: 16837,
			order: 0,
			orderPrice: 0,
			sku: 'ZCT-1-1',
			variants: [
				{
					id: 121131,
					nameVi: '13,5cm',
					skuVi: 'Jiye-278-1',
					stock: 10000,
					price: 11200,
					vip1: 6700,
					vip2: 6700,
					vip3: 6700,
					vip4: 6700,
					order: 0,
				},
				{
					id: 121132,
					nameVi: '11cm',
					skuVi: 'Jiye-278-2',
					stock: 9890,
					price: 9500,
					vip1: 5700,
					vip2: 5700,
					vip3: 5700,
					vip4: 5700,
					order: 0,
				},
				{
					id: 121133,
					nameVi: '9cm',
					skuVi: 'Jiye-278-3',
					stock: 9990,
					price: 7100,
					vip1: 4300,
					vip2: 4300,
					vip3: 4300,
					vip4: 4300,
					order: 0,
				},
				{
					id: 121134,
					nameVi: '7cm',
					skuVi: 'Jiye-278-4',
					stock: 9880,
					price: 4600,
					vip1: 2700,
					vip2: 2700,
					vip3: 2700,
					vip4: 2700,
					order: 0,
				},
				{
					id: 121135,
					nameVi: '5,5cm',
					skuVi: 'Jiye-278-5',
					stock: 9970,
					price: 3100,
					vip1: 1900,
					vip2: 1900,
					vip3: 1900,
					vip4: 1900,
					order: 0,
				},
			],
		},
	]);
	const [indexAcitve, setIndexAcitve] = useState<number>(0);
	const [totalOrder, setTotalOrder] = useState<number>(0);
	const [totalType, setTotalType] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const setActive = useCallback((index: number) => {
		setIndexAcitve(index);
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProdct] = useState({
		pricemin: 1900,
		pricemax: 6700,
		unit: 'Cái',
		condition: 2,
	});
	const decreaseOrder = useCallback(
		(skuVi: string) => {
			const newVariants = [...variants];
			newVariants[indexAcitve].variants.map((variant) => {
				if (variant.skuVi === skuVi) {
					variant.order = Number(variant.order) - 1;
					if (variant.order < 0) variant.order = 0;
				}
			});
			newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce(
				(orderTotal, item) => {
					return orderTotal + item.order;
				},
				0
			);
			newVariants[indexAcitve].orderPrice = newVariants[indexAcitve].variants.reduce(
				(orderPriceTotal, item) => {
					return orderPriceTotal + Number(item.order) * Number(item.vip1);
				},
				0
			);
			setVariants(newVariants);
			calculatorOrder();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[indexAcitve]
	);
	const increaseOrder = useCallback(
		(skuVi: string) => {
			const newVariants = [...variants];
			newVariants[indexAcitve].variants.map((variant) => {
				if (variant.skuVi === skuVi) {
					variant.order = Number(variant.order) + 1;
					if (variant.order > variant.stock) variant.order = variant.stock;
				}
			});
			newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce(
				(orderTotal, item) => {
					return orderTotal + item.order;
				},
				0
			);
			newVariants[indexAcitve].orderPrice = newVariants[indexAcitve].variants.reduce(
				(orderPriceTotal, item) => {
					return orderPriceTotal + Number(item.order) * Number(item.vip1);
				},
				0
			);
			setVariants(newVariants);
			calculatorOrder();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[indexAcitve]
	);
	const changeOrder = useCallback(
		(e: any, skuVi: string) => {
			const newVariants = [...variants];
			newVariants[indexAcitve].variants.map((variant) => {
				if (variant.skuVi === skuVi) {
					variant.order = Number(e.target.value);
					if (variant.order < 0) variant.order = 0;
					if (variant.order > variant.stock) variant.order = variant.stock;
				}
			});
			newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce(
				(orderTotal, item) => {
					return orderTotal + item.order;
				},
				0
			);
			newVariants[indexAcitve].orderPrice = newVariants[indexAcitve].variants.reduce(
				(orderPriceTotal, item) => {
					return orderPriceTotal + Number(item.order) * Number(item.vip1);
				},
				0
			);
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
		let price = variants.reduce(function (price, item) {
			if (item.orderPrice > 0) return price + item.orderPrice;
			return price;
		}, 0);

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
									<Variant
										key={variant.name}
										name={variant.name}
										image={variant.image}
										order={variant.order}
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
								<InforRetail
									name={variants[indexAcitve].name}
									image={variants[indexAcitve].image}
									product={product}
								/>
								<div className={styles.order_widget_wapper}>
									{variants[indexAcitve].variants.map((variant: any) => (
										<div key={variant.skuVi} className={styles.order_item}>
											<div className={styles.order_info}>
												<span className={styles.order_name}>
													{variant.nameVi}
												</span>
												<span className={styles.order_stock}>
													Tồn kho: {variant.stock}
												</span>
												<span className={styles.order_stock}>
													Giá: {variant.vip1}
												</span>
											</div>
											<div className={styles.order_control}>
												<div
													onClick={() => decreaseOrder(variant.skuVi)}
													className={styles.decrease_wapper}
												>
													<div className={styles.icon_wapper}>
														<div
															className={`${styles.icon_decrease} ${
																variant.order > 0
																	? 'bg-[#666666]'
																	: 'bg-[#CCCCCC]'
															}`}
														></div>
													</div>
												</div>
												<input
													className={styles.input_number}
													placeholder="0"
													type="number"
													value={variant.order != 0 ? variant.order : ''}
													onChange={(e) => changeOrder(e, variant.skuVi)}
													min="0"
													max={variant.stock}
												/>
												<div
													onClick={() => increaseOrder(variant.skuVi)}
													className={styles.increase_wapper}
												>
													<div className={styles.icon_wapper}>
														<div
															className={styles.icon_increase_level}
														></div>
														<div
															className={
																styles.icon_increase_vertical
															}
														></div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.modal_footer}>
						<div className={styles.condition_wapper}>
							{totalOrder > 0 && totalOrder < product.condition ? (
								<div className={styles.condition}>
									<span className={styles.span_condition}>
										Tối thiểu {product.condition} {product.unit}
									</span>
								</div>
							) : null}
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
