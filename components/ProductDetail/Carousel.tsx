'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs, Pagination } from 'swiper';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './ProductDetail.module.css';
import 'swiper/css';
import 'swiper/css/thumbs';
export default function Carousel({ images, name }: { images: string[]; name: string }) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
	return (
		<>
			<Swiper
				className={styles.carousel_main}
				spaceBetween={10}
				slidesPerView={1}
				grabCursor={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				pagination={{
					type: 'fraction',
				}}
				modules={[Pagination, Thumbs]}
			>
				{images.map((image, index) => {
					return (
						<SwiperSlide key={`${name}_${index}`}>
							<Image
								className={styles.image_round}
								src={image}
								alt={`${name}_slide${index}`}
								sizes="100vw"
								width={0}
								height={0}
								style={{ width: '100%', height: '100%' }}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className={styles.wrapper_carousel_small}>
				<Swiper
					className={styles.carousel_small}
					loop={false}
					spaceBetween={2}
					slidesPerView={7}
					watchSlidesProgress
					touchRatio={2}
					slideToClickedSlide={true}
					onSwiper={setThumbsSwiper}
					modules={[Thumbs]}
				>
					{images.map((image, index) => {
						return (
							<SwiperSlide key={`${name}_${index}`}>
								<Image
									className={`${styles.image_round} ${styles.carousel_image_small}`}
									src={image}
									alt={`${name}_slide${index}`}
									sizes="50vw"
									width={0}
									height={0}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className={styles.carousel_arrow}>
					<AiOutlineRight className={styles.arrow_icon} />
				</div>
			</div>
		</>
	);
}
