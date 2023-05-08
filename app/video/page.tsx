import styles from './styles.module.css';

import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import VideoCard from '@/components/VideoCard';
import BannerCard from '@/components/BannerCard';
import Flex2Col from '@/components/Flex2Col';
import Link from 'next/link';
export default async function Page() {
	const productsLefts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const productsRights = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	const slideBanners = [
		'https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500',
	];
	const listslideBanner = slideBanners.map((slideBanner) => {
		return {
			src: slideBanner,
			alt: 'banner',
			link: '/product',
		};
	});
	const listLeft = productsLefts.map((productsLeft) => (
		<VideoCard
			key={productsLeft}
			name="Kẹo dẻo"
			detail="Kẹo dẻo mềm thơm ngon"
			image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
			id="349938442291"
		/>
	));
	const listRight = productsRights.map((productsRight) => (
		<VideoCard
			key={productsRight}
			name="Kẹo dẻo"
			detail="Kẹo dẻo mềm thơm ngon"
			image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
			id="349938442291"
		/>
	));
	listLeft.unshift(<BannerCard key={30} banner={listslideBanner} />);
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
			<Flex2Col>
				<div className="flex-1">{listLeft}</div>
				<div className="flex-1">{listRight}</div>
			</Flex2Col>
		</>
	);
}
