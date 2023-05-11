import styles from './styles.module.css';
import type { Video } from '@/types/video';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import FlexTwoColView from '@/components/FlexTwoColView';
import VideoCard from '@/components/VideoCard';
import BannerCard from '@/components/BannerCard';

async function getVideo() {
	const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	return videos;
}
async function getBannerCard() {
	const banners = [
		'https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500',
	];
	return banners;
}
export default async function Page() {
	const videosData = getVideo();
	const bannersCardData = getBannerCard();

	const [videos, bannersCard] = await Promise.all([videosData, bannersCardData]);
	const videosLefts = videos.slice(0, 10);
	const videossRights = videos.slice(10);

	let listLeft = videosLefts.map((video: unknown, index: number) => (
		<VideoCard
			key={index}
			name="Kẹo dẻo"
			detail="Kẹo dẻo mềm thơm ngon"
			image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
			id="349938442291"
		/>
	));
	let listRight = videossRights.map((video: unknown, index: number) => (
		<VideoCard
			key={index}
			name="Kẹo dẻo"
			detail="Kẹo dẻo mềm thơm ngon"
			image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
			id="349938442291"
		/>
	));
	const listslideBanner = bannersCard.map((banner: string) => {
		return {
			src: banner,
			alt: 'Slide Card',
			link: '',
		};
	});

	const bannerCard = <BannerCard key="banner" banner={listslideBanner} />;
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

			<FlexTwoColView listLeft={listLeft} listRight={listRight} bannerCard={bannerCard} />
		</>
	);
}
