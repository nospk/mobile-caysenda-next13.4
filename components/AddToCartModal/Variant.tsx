import React from 'react';
import styles from './AddToCartModal.module.css';
import Image from 'next/image';
interface Variants {
	name: string;
	image: string;
	stock: number;
	order: number;
	sku: string;
}
const Variant = React.memo(function Variant({
	variant,
	className,
	setActive,
	index,
}: {
	variant: Variants;
	className: string;
	setActive: any;
	index: number;
}) {
	return (
		<div onClick={() => setActive(index)} className={className}>
			<div>
				<div className={styles.wapper_offer_number}>
					<div
						className={`${styles.offer_number} ${
							variant.order > 0 ? '' : styles.hidden_offer
						}`}
					>
						<span className={styles.span_offer_number}>
							{'x'}
							{variant.order}
						</span>
					</div>
					<div className={styles.image_variant}>
						<Image
							className="rounded-xl"
							src={variant.image}
							alt={variant.name}
							fill
							object-fit={'contain'}
							sizes="50vw"
						/>
					</div>
					<div className={styles.name_variant}>
						<span className={styles.span_name_variant}>{variant.name}</span>
					</div>
				</div>
			</div>
		</div>
	);
});
export default Variant;
