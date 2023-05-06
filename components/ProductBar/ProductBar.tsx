import { FC } from 'react';
import Image from 'next/image';
import styles from './ProductBar.module.css';
import Link from 'next/link';
interface Product {
	name: string;
	sold: number;
	image: string;
	link: string;
	id: string;
	index: number;
}
const ACHIEVEMENT = ['top_1', 'top_2', 'top_3', 'top_other'];

const ProductBar: FC<Product> = (product) => {
	const color =
		ACHIEVEMENT[product.index] != undefined ? ACHIEVEMENT[product.index] : ACHIEVEMENT[3];
	return (
		<Link href={product.link}>
			<div className={styles.product_item}>
				<span className={styles[color]}>{product.index + 1}</span>
				<div className={styles.product_image}>
					<Image
						className="rounded-lg"
						src={product.image}
						alt="Product Hot 1"
						sizes="31vw,31vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className={styles.product_info}>
					<p> {product.name}</p>
					<p className={styles.product_sold}> {product.sold}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductBar;
