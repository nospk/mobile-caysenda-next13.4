import type { FC } from "react";
import Image from "next/image";
import styles from "./VideoCard.module.css";
import Link from "next/link";
import React from "react";
interface Video {
  name: string;
  detail: string;
  image: string;
  id: string;
}

const VideoCard: FC<Video> = React.memo(function card(props) {
  return (
    <div className={styles.video_card}>
      <Link href={`/video?id=${props.id}`}>
        <div className={styles.image_product}>
          <Image
            className={styles.image_square}
            src={props.image}
            alt={props.name}
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.info_product}>
          <span>{props.name}</span>
          <span className={styles.detail}>{props.detail}</span>
        </div>
      </Link>
    </div>
  );
});

export default VideoCard;
