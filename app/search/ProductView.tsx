import styles from './ProductView.module.css';
import {FaCrown} from 'react-icons/fa';
import ProductService from '@/services/Product.service'
import Top3Product from './Top3Product';
import Top10Product from './Top10Product';

const ProductView:any = async () => {
	const topData =  await ProductService.getTop3Product();
	const bestSeller =  await ProductService.getTop10Product();

	return (
		<>
			<div className="py-3 text-lg font-semibold">
				<span className={styles.font12}>Sản phẩm nổi bật</span>
				<div className="content grid grid-cols-3 gap-2">
					{
						topData.map((product:any, idx:number) => {
							return (
								<Top3Product product={product} key={idx}/>
							);
						})
					}
				</div>
			</div>
			<div className="py-3 text-lg font-semibold">
				<span className={`${styles.font12} text-orange-600`}>Sản phẩm hot</span>
				<div className={styles.hotcard}>
					<div className={styles.hotcard_header}>
						<FaCrown className={styles.hotcard_header_icon}/>
						<span className={styles.hotcard_header_title}>Giày dép quảng châu</span>
					</div>
					<div className={`${styles.hotcard_content}`}>
						{
							bestSeller.map((item:any, idx:number) => {
								return (
									<Top10Product product={item} idx={idx} key={idx}/>
								)
							})
						}
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductView;
