import styles from './styles.module.css';
//import type { Video } from '@/types/video';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import FlexTwoColView from '@/components/FlexTwoColView';
import BannerService from '@/services/Banner.service';
type Video = { type: 'video'; data: {} };
async function getVideo() {
	const videos = [
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
		{ type: 'video', data: '' },
	] as Video[];

	return videos;
}

export default async function Page() {
	const videosData = getVideo();
	const bannersData = BannerService.getBannerCardData();

	const [videos, banners] = await Promise.all([videosData, bannersData]);

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

			<FlexTwoColView data={videos} banners={banners} />
		</>
	);
}
