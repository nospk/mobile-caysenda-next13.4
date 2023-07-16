"use client";
import { useCallback, type FC, useEffect } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { convertMoney, numberToString } from "@/lib/formatPrice";
import Variant from "./Variant";
import ButtonClose from "./ButtonClose";
import InforRetail from "./InforRetail";
import ProductService from "@/services/Product.service";

interface Variants {
	name: string;
	image: string;
	stock: number;
	order: number;
	sku: string;
	orderPrice: number;
	variants: any[];
}

interface Props {
	className?: string,
	productId: number
}

const AddToCartModal: FC<Props> = (props) => {
	const [variants, setVariants] = useState<any>([]);
	const [indexAcitve, setIndexAcitve] = useState<number>(0);
	const [totalOrder, setTotalOrder] = useState<number>(0);
	const [totalType, setTotalType] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const setActive = useCallback((index: number) => {
		setIndexAcitve(index);
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProdct] = useState<any>();

	useEffect(() => {
		ProductService.getQuickview({productId: props.productId}, true).then((res) => {
			setVariants(res.variants);
			setProdct(res.product);
		});
	},[]);

	const decreaseOrder = useCallback((sku: string) => {
		const newVariants = [...variants];

		newVariants[indexAcitve].variants.map((variant:any) => {
			if (variant.sku === sku) {
			variant.order = Number(variant.order) - 1;
			if (variant.order < 0) variant.order = 0;
			}
		});

		newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce((orderTotal:any, item:any) => {
				return orderTotal + item.order;
			},
			0
		);

		newVariants[indexAcitve].orderPrice = newVariants[indexAcitve].variants.reduce((orderPriceTotal:any, item:any) => {
			return orderPriceTotal + Number(item.order) * Number(item.vip1);
		}, 0);

		setVariants(newVariants);
		calculatorOrder();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[indexAcitve, variants]
	);
	const increaseOrder = useCallback((sku: string) => {
		const newVariants = [...variants];

		newVariants[indexAcitve].variants.map((variant:any) => {
			if (variant.sku === sku) {
			variant.order = Number(variant.order) + 1;
			if (variant.order > variant.stock) variant.order = variant.stock;
			}
		});

		newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce((orderTotal:any, item:any) => {
			return orderTotal + item.order;
			},
			0
		);

		newVariants[indexAcitve].orderPrice = newVariants[indexAcitve].variants.reduce((orderPriceTotal: any, item: any) => {
			return orderPriceTotal + Number(item.order) * Number(item.vip1);
		}, 0);

		setVariants(newVariants);
		calculatorOrder();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[indexAcitve, variants]
	);
	const changeOrder = useCallback((e: any, sku: string) => {
		const newVariants = [...variants];

		newVariants[indexAcitve].variants.map((variant:any) => {
			if (variant.sku === sku) {
			variant.order = Number(e.target.value);
			if (variant.order < 0) variant.order = 0;
			if (variant.order > variant.stock) variant.order = variant.stock;
			}
		});

		newVariants[indexAcitve].order = newVariants[indexAcitve].variants.reduce((orderTotal:any, item:any) => {
			return orderTotal + item.order;
			},
			0
		);

		newVariants[indexAcitve].orderPrice = newVariants[indexAcitve].variants.reduce((orderPriceTotal:any, item: any) => {
			return orderPriceTotal + Number(item.order) * Number(item.vip1);
		}, 0);

		setVariants(newVariants);
		calculatorOrder();
		},[indexAcitve, variants]);
	const handleOpenModal = useCallback(() => {
		setIsOpen(true);
		document.body.classList.add("overflow-hidden");
	}, []);
	const handleCloseModal = useCallback(() => {
		setIsOpen(false);
		document.body.classList.remove("overflow-hidden");
	}, []);

	const calculatorOrder = () => {
		let totalData = variants.reduce((res:any, variant:any) => {
			let qtyTotal = variant.variants.reduce((qty:number, item:any) => {
				return qty + item.order;
			}, 0);
			let amountTotal = variant.variants.reduce((amount:number, item:any) => {
				return amount + (item.order * item.price);
			}, 0);
			return {
				qtyTotal: res.qtyTotal + qtyTotal,
				amountTotal: res.amountTotal + amountTotal
			};
		}, {qtyTotal: 0, amountTotal: 0});
		let totalType = variants.reduce((res:any, variant:any) => {
			if (variant.order > 0) {
				return res + 1;
			}

			return res;
		}, 0);
		//Set
		setTotalOrder(totalData.qtyTotal);
		setTotalType(totalType);
		setTotalPrice(totalData.amountTotal);
	};
	const pushToServer = () => {
		handleCloseModal();
	};
	return (
	<>
		<button
			onClick={handleOpenModal}
			className={props.className ? props.className : styles.button}
		>
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
					{variants.map((variant:any, index:any) => (
					<Variant
						key={variant.name + index}
						name={variant.name}
						thumbnail={variant.image ? variant.image : product?.thumbnail}
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
					))}
				</div>
				</div>
				<div className={styles.wapper_right}>
				<div className={styles.body_right}>
					<InforRetail
						name={variants[indexAcitve]?.name}
						image={variants[indexAcitve]?.image? variants[indexAcitve].image : product?.thumbnail}
						product={product}/>
					<div className={styles.order_widget_wapper}>
					{variants[indexAcitve]?.variants?.map((variant: any) => (
						<div key={variant.sku} className={styles.order_item}>
							<div className={styles.order_info}>
								<span className={styles.order_name}>
								{variant.name}
								</span>
								<span className={styles.order_stock}>
								Tồn kho: {variant.stock}
								</span>
								<span className={styles.order_stock}>
								Giá: {convertMoney(variant.price) + "đ"}
								</span>
							</div>
							<div className={styles.order_control}>
								<div
								onClick={() => decreaseOrder(variant.sku)}
								className={styles.decrease_wapper}
								>
								<div className={styles.icon_wapper}>
									<div
									className={`${styles.icon_decrease} ${
										variant.order > 0
										? "bg-[#666666]"
										: "bg-[#CCCCCC]"
									}`}
									></div>
								</div>
								</div>
								<input
									className={styles.input_number}
									placeholder="0"
									type="number"
									value={variant.order != 0 ? variant.order : ""}
									onChange={(e) => changeOrder(e, variant.sku)}
									min="0"
									max={variant.stock}
								/>
								<div
									onClick={() => increaseOrder(variant.sku)}
									className={styles.increase_wapper}>
								<div className={styles.icon_wapper}>
									<div className={styles.icon_increase_level}></div>
									<div className={styles.icon_increase_vertical}></div>
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
