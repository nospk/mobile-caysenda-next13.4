'use client'
import Link from 'next/link';
import styles from './Top10Product.module.css';

interface Props {
	product: any,
	idx: number
}

const Top10Product = ({product, idx}:Props) => {
	return (
		<Link href={product.LINK}>
			<div className={styles.hotcard_content_product}>
				<div className={styles.hotcard_content_product_thumbnail}>
					<img className='w-full' src={product.THUMBNAIL} alt={product.LABEL1} />
				</div>
				<div className={styles.hotcard_content_product_info}>
					<span className={styles.hotcard_content_product_info_title}>{product.LABEL1}</span>
					<span className={styles.hotcard_content_product_info_sold}>{product.SOLD} cái</span>
				</div>
				<div className={`${styles.hotcard_content_bagde} ${styles['bg' + (idx + 1)]}`}>{(idx + 1)}</div>
			</div>
		</Link>
	)
}

export default Top10Product;