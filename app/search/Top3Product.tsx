import { Interface } from 'readline';
import styles from './Top3Product.module.css';
import {AiTwotoneFire} from 'react-icons/ai';
import Link from 'next/link';

interface Props {
	product:any
}
const Top3Product = ({product}:Props) => {
	return (
		<Link href={product.LINK}>
			<div className={styles.productCart}>
				<img className={styles.thumbnail} src={product.THUMBNAIL} alt={product.LABEL1} />
				<div className={styles.title}>
					<span className={styles.label1}>{product.LABEL1}</span>
					<span className={styles.label2}>
						<AiTwotoneFire size={14} color='white'/>
						<span>{product.LABEL2}</span>
					</span>
				</div>
				<div className={styles.overlay}></div>
			</div>
		</Link>
	)
}

export default Top3Product;