import type { FC } from 'react';
import Image from 'next/image';
import styles from './VideoCard.module.css';
import Link from 'next/link';
interface Video {
	name: string;
	detail: string;
	image: string;
	id: string;
}

const ProductCard: FC<Video> = (props) => {
	return (
		<div className={styles.product_card}>
			<Link href={`/video/${props.id}`}>
			<div className={styles.image_product}>
				<Image
					className={styles.image_square}
					src={props.image}
					alt="Picture of the author"
					sizes="46.4vw,46.4vw"
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className={styles.info_product}>
				<span>{props.name}</span>
				<span className={styles.detail}>{props.detail}</span>
			</div>
			</Link>
		</div>
	);
};

export default ProductCard;
