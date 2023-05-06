import { type FC } from 'react';
import styles from './Menu.module.css';
import { Icon } from '@/components/Icon';
import CategoryModal from '@/components/CategoryModal';
import Link from 'next/link';

const Menu: FC<{ showCategory: boolean }> = ({ showCategory }) => {
	return (
		<>
			<div className={styles.menu}>
				{showCategory && (
					<CategoryModal>
						<div className={styles.menu_icon}>
							<Icon src="/iconCategory.png" alt="category" width={50} height={50} />
						</div>
						<span>Danh Mục</span>
					</CategoryModal>
				)}

				<div className={styles.menu_item}>
					<Link href="/product-sale">
						<div className={styles.menu_icon}>
							<Icon src="/iconProductSale.png" alt="sale" width={50} height={50} />
						</div>
						<span>Sale</span>
					</Link>
				</div>
				<div className={styles.menu_item}>
					<Link href="/product-new">
						<div className={styles.menu_icon}>
							<Icon src="/iconProductNews.png" alt="News" width={50} height={50} />
						</div>
						<span>SP Mới</span>
					</Link>
				</div>
				<div className={styles.menu_item}>
					<Link href="/product-hot">
						<div className={styles.menu_icon}>
							<Icon src="/iconProductHot.png" alt="Hot" width={50} height={50} />
						</div>
						<span>SP Hot</span>
					</Link>
				</div>
				{process.env.NEXT_PUBLIC_PRODUCT_AVAILABILITY && (
					<div className={styles.menu_item}>
						<Link href="/product-availability">
							<div className={styles.menu_icon}>
								<Icon
									src="/iconProductAvailability.png"
									alt="ProductAvailability"
									width={50}
									height={50}
								/>
							</div>
							<span>Phân Loại</span>
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Menu;
