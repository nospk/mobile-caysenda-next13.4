import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OfferBar.module.css';
interface Props {
	offers: {
		src: string;
		alt: string;
		productName: string;
		url: string;
	}[];
}

const OfferBar: FC<Props> = (props) => {
	return (
		<div className={styles.offer_bar}>
			<Link href={props.offers[0].url}>
				<div className={styles.offer_card}>
					<Image
						className={styles.image_offer}
						src={props.offers[0].src}
						alt={props.offers[0].alt}
						sizes="46vw"
						fill
						style={{ objectFit: 'cover' }}
						priority
					/>
					<div className={styles.product_offer}>
						<span>{props.offers[0].productName}</span>
					</div>
				</div>
			</Link>
			<Link href={props.offers[1].url}>
				<div className={styles.offer_card}>
					<Image
						className={styles.image_offer}
						src={props.offers[1].src}
						alt={props.offers[1].alt}
						sizes="46vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
					<div className={styles.product_offer}>
						<span>{props.offers[1].productName}</span>
					</div>
				</div>
			</Link>
			<Link href={props.offers[2].url}>
				<div className={styles.offer_card}>
					<Image
						className={styles.image_offer}
						src={props.offers[2].src}
						alt={props.offers[2].alt}
						sizes="46vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
					<div className={styles.product_offer}>
						<span>{props.offers[2].productName}</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default OfferBar;
