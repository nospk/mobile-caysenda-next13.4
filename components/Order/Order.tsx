import { type FC, useState, useEffect } from 'react';
import styles from './Order.module.css';

import Link from 'next/link';
import {
	AiOutlineAccountBook,
	AiOutlineCarryOut,
	AiOutlineClockCircle,
	AiOutlineTransaction,
	AiOutlineCreditCard,
} from 'react-icons/ai';

const Order: FC = () => {
	return (
		<>
			<div className={styles.menu}>
				<div className={styles.menu_item}>
					<Link href="/order">
						<div className={styles.menu_icon}>
							<AiOutlineCreditCard size={50} />
						</div>
						<span>Đơn Mới</span>
					</Link>
				</div>
				<div className={styles.menu_item}>
					<Link href="/order">
						<div className={styles.menu_icon}>
							<AiOutlineTransaction size={50} />
						</div>
						<span>Đang Vận Chuyển</span>
					</Link>
				</div>
				<div className={styles.menu_item}>
					<Link href="/product-new">
						<div className={styles.menu_icon}>
							<AiOutlineClockCircle size={50} />
						</div>
						<span>Chờ Bổ Sung</span>
					</Link>
				</div>
				<div className={styles.menu_item}>
					<Link href="/product-hot">
						<div className={styles.menu_icon}>
							<AiOutlineCarryOut size={50} />
						</div>
						<span>Hoàn Thành</span>
					</Link>
				</div>
				<div className={styles.menu_item}>
					<Link href="/order">
						<div className={styles.menu_icon}>
							<AiOutlineAccountBook size={50} />
						</div>
						<span>Toàn bộ</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Order;
