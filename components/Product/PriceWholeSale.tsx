import styles from './ProductDetail.module.css';
import { convertMoney } from "@/lib/formatPrice";
export default function PriceWholeSale({
	unit,
	price,
	condition,
}: {
	unit: string;
	price: any;
	condition: number;
}) {

	return (
		<>
			<div className={styles.wrapper_price}>
				<div className={styles.price_flex_row}>
					<div className={styles.wrapper_price_item}>
						<div className={styles.price_item}>
							<span className={styles.price_number}>
								{convertMoney(price.min) }
							</span>
							<span className={styles.price_currency}>đ</span>
							<span className={styles.space}> - </span>
							<span className={styles.price_number}>
								{convertMoney(price.max) }
							</span>
							<span className={styles.price_currency}>đ</span>
						</div>
						<div className={styles.warpper_price_condition}>
							<span className={styles.price_condition}>
								{condition} {unit}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
