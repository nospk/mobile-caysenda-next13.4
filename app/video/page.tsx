import styles from './styles.module.css';

import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import FlexTwoColView from '@/components/FlexTwoColView';
export default async function Page() {
	return (
		<>
			<div className={styles.sticky_out_wrapper}>
				<div className={styles.sticky_wrapper}>
					<span className={styles.avatar}>
						<AiOutlineUser className={styles.img} />
					</span>
					<span className={styles.title}> Video Sản Phẩm Nổi Bật</span>
					<div className={styles.wrapper_icon}>
						<Link href="/search_video">
							<AiOutlineSearch className={styles.icon} />
						</Link>
					</div>
				</div>
			</div>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView showBanner={true} showKeyword={true} getData="product-sale" />
			</Suspense>
		</>
	);
}
