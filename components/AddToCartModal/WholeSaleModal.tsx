"use client";
import { useCallback, type FC, useEffect } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { numberToString } from "@/lib/formatPrice";
import Variant from "./Variant";
import InforWholeSale from "./InforWholeSale";
import ButtonClose from "./ButtonClose";
import ProductService from "@/services/Product.service";
import { QuickViewType, VariantQuickViewType } from "./types/QuickViewType";
interface Props {
	className?: string,
	productId: number
}

const AddToCartModal: FC<Props> = (props) => {
	const [data, setData] = useState<QuickViewType>(
		{
			product: {condition:0,condition1:0, condition2: 0, price: 0, price1: 0, price2:0,unit:'Cai', thumbnail: '', pricemax: 0, pricemin: 0},
			variants: []
		}
	);
	const [variants, setVariants] = useState<any>([]);
	const [indexAcitve, setIndexAcitve] = useState<number>(0);
	const [totalOrder, setTotalOrder] = useState<number>(0);
	const [totalType, setTotalType] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [activePrice, setActivePrice] = useState<number>(0);
	const setActive = useCallback((index: number) => {
		setIndexAcitve(index);
	}, []);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			ProductService.getQuickview({productId: props.productId}, false).then((res) => {
				setData(res);
				setVariants(res.variants);
			});
		}
	}, [isOpen]);

	const decreaseOrder = useCallback((sku:string) => {
		const newVariants = [...variants];

		newVariants[indexAcitve].variants.map((variant:any) => {
			if (variant.sku === sku) {
				variant.order = Number(variant.order) - 1;
				if (variant.order > variant.stock) variant.order = variant.stock;
			}
		});

		newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce((orderTotal:number, item:any) => {
				return orderTotal + item.order;
			},
			0
		);

		setVariants(newVariants);
		calculatorOrder();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indexAcitve, variants]);

	const increaseOrder = useCallback((sku:string) => {
		const newVariants = [...variants];

		newVariants[indexAcitve].variants.map((variant:any) => {
			if (variant.sku === sku) {
				variant.order = Number(variant.order) + 1;
				if (variant.order > variant.stock) variant.order = variant.stock;
			}
		});

		newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce((orderTotal:number, item:any) => {
				return orderTotal + item.order;
			},
			0
		);

		setVariants(newVariants);
		calculatorOrder();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indexAcitve, variants]);

	const changeOrder = useCallback((e: any, sku:string) => {
		const newVariants = [...variants];
		let value = Number(e.target.value);

		if (value < 0) {
			value = 0;
		}

		newVariants[indexAcitve].variants.map((variant:any) => {
			if (variant.sku === sku) {
				variant.order = value;
				;
				if (variant.order > variant.stock) variant.order = variant.stock;
			}
		});

		newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce((orderTotal:number, item:any) => {
				return orderTotal + item.order;
			},
			0
		);
		setVariants(newVariants);
		calculatorOrder();
		
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[indexAcitve, variants]
	);

	const handleOpenModal = useCallback(() => {
		setIsOpen(true);
		document.body.classList.add("overflow-hidden");
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsOpen(false);
		document.body.classList.remove("overflow-hidden");
	}, []);

	const calculatorOrder = () => {
		//Cal orders
		let orders = variants.reduce(function (order:any, item:any) {
		return order + item.order;
		}, 0);

		//Cal types
		let types = variants.reduce(function (type:any, item:any) {
		if (item.order > 0) return type + 1;
		return type;
		}, 0);

		//Cal price and level price
		let price = 0;
		if (orders >= data.product.condition2) {
			price = orders * Number(data.product.price2);
			setActivePrice(2);
		} else if (orders >= data.product.condition1) {
			price = orders * Number(data.product.price1);
			setActivePrice(1);
		} else {
			price = orders * Number(data.product.price);
			setActivePrice(0);
		}

		//Set
		setTotalOrder(orders);
		setTotalType(types);
		setTotalPrice(price);
	};

	const pushToServer = () => {
		handleCloseModal();
	};

	return (
		<>
			<button
				onClick={handleOpenModal}
				className={props.className ? props.className : styles.button}>
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
						{
							variants.map((variant:any, index:number) => (
								<Variant
									key={variant.name + index}
									name={variant.name}
									thumbnail={variant.image}
									order={variant.order}
									className={`${
									indexAcitve == index ? styles.varriant_active : ""
									} ${
									index == 0
										? styles.wapper_variant_first
										: styles.wapper_variant
									}`}
									setActive={setActive}
									index={index}
								/>
								))
						}
					</div>
					</div>
					<div className={styles.wapper_right}>
					<div className={styles.body_right}>
						<InforWholeSale
							image={variants[indexAcitve]?.image ? variants[indexAcitve].image : data.product.thumbnail}
							name={variants[indexAcitve]?.name}
							activePrice={activePrice}
							product={data.product}/>
						<div className={styles.order_widget_wapper}>
							{
								variants[indexAcitve]?.variants.map((variant:any, index: number) => {
									return (
										<div className={styles.order_item} key={index}>
											<div className={styles.order_info}>
											<span className={styles.order_name}>
												{variant.name}
											</span>
											<span className={styles.order_stock}>
												Tồn kho: {variant.stock}
											</span>
											</div>
											<div className={styles.order_control}>
											<div
												onClick={() => decreaseOrder(variant.sku)}
												className={styles.decrease_wapper}
											>
												<div className={styles.icon_wapper}>
												<div
													className={`${styles.icon_decrease} ${variant.order > 0 ? "bg-[#666666]": "bg-[#CCCCCC]"}`}
												></div>
												</div>
											</div>
											<input
												className={styles.input_number}
												placeholder="0"
												type="number"
												value={variant.order != 0 ? variant.order : ""}
												onChange={(event) => changeOrder(event, variant.sku)}
												min="0"
												max={variant.stock}
											/>
											<div
												onClick={() => increaseOrder(variant.sku)}
												className={styles.increase_wapper}
											>
												<div className={styles.icon_wapper}>
												<div className={styles.icon_increase_level}></div>
												<div className={styles.icon_increase_vertical}></div>
												</div>
											</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
					</div>
				</div>
				<div className={styles.modal_footer}>
					<div className={styles.condition_wapper}>
					<div className={styles.count_total_wapper}>
						{totalOrder > 0 && totalOrder < data.product.condition ? (
						<div className={styles.condition}>
							<span className={styles.span_condition}>
							Tối thiểu {data.product.condition} {data.product.unit}
							</span>
						</div>
						) : null}

						<div>
						<div className={styles.count_total}>
							<div className={styles.count_total_num}>
							<span className={styles.span_count_total}>
								Đã Chọn: {totalType} Loại {totalOrder} Cái
							</span>
							</div>
							<div className={styles.count_price}>
							<span className={styles.span_count_price}>
								{"Tổng cộng : "}
							</span>
							<div className={styles.total_price}>
								<span className={styles.span_total_price}>
								{numberToString(totalPrice)}
								</span>
								<span className={styles.span_curency}>{" đ"}</span>
							</div>
							</div>
						</div>
						</div>
						<div className={styles.button_confirm} onClick={pushToServer}>
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
