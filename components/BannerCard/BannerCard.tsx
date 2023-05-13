'use client';
import type { FC } from 'react';
import styles from './BannerCard.module.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Banner } from '@/types/banner';
interface Props {
	banner: Banner[];
}

SwiperCore.use([Pagination, Autoplay]);

const BannerCard: FC<Props> = React.memo(function Card(props) {
	return (
		<div className={styles.silder}>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false,
				}}
			>
				{props.banner.map((slide, index) => (
					<SwiperSlide key={'slide' + index}>
						<Link href={slide.link}>
							<div className={styles.image}>
								<Image
									fill
									className="rounded-xl"
									src={slide.img}
									alt="Slide Card"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
});
export default BannerCard;
