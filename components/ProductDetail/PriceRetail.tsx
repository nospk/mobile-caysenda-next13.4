import styles from './ProductDetail.module.css';
export default function PriceRetail({ unit, price, name }: { unit: string; price: any[]; name: string }) {
	const convertMoney = (money: string) => {
		if(money.length >= 5) return `${money.slice(0, -3)}K`;
		else return `${money.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/^0+/, '')}K`
	};
	return (
		<>
			<div className={styles.wrapper_price}>
				<div className={styles.price_flex_row}>
					{price.map((item, index) => {
						return (
							<div key={`${name}_${index}`} className={styles.wrapper_price_item}>
								<div className={styles.price_item}>
									<span className={styles.price_number}>
										{convertMoney(item.money.toString())}
									</span>
									<span className={styles.price_currency}>đ</span>
								</div>
								<div className={styles.warpper_price_condition}>
									<span className={styles.price_condition}>
										{item.condition} {unit}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
