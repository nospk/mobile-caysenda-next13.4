'use client'
import type { FC } from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { numberToString } from "@/lib/formatPrice";
import WholeSaleModal from "@/components/AddToCartModal/WholeSaleModal";
import RetailModal from "@/components/AddToCartModal/RetailModal";
import React from "react";
import Link from "next/link";
import {shimmer} from './Shimmer';
import { useRouter } from 'next/navigation'

type ProductCard = {
	image: string;
	name: string;
	price: number;
	sold: number;
	unit: string;
	link: string;
	product: object;
	priority?: boolean;
};

const ProductCard: FC<ProductCard> = React.memo(function card(props) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter()
	const toBase64 = (str: string) => typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
	const navigate = (link:string) => {
		router.push(link);
	}

	return (
		<div className={styles.product_card} >
			<div className={styles.image_product}>
				<Link href={props.link}>
					<Image
						className={styles.image_square}
						src={props.image}
						alt={props.name}
						sizes="100vw"
						width={0}
						height={0}
						style={{ width: "100%", height: "100%" }}
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
						priority={props.priority ? true : false}
					/>
				</Link>
			</div>
			<div className={styles.info_product}>
				<span className={styles.name_product} onClick={() => navigate(props.link)}>{props.name}</span>
				<span className={styles.price_product} onClick={() => navigate(props.link)}>{numberToString(props.price)}đ</span>
				<div className={styles.sold}>
					<span className="float-left">Đã bán:</span>
					<span className="float-right">{props.sold} {props.unit ? props.unit : ""}</span>
				</div>
				{false ? (<RetailModal className={styles.add_cart} />) : (<WholeSaleModal className={styles.add_cart} />)}
			</div>
		</div>
	);
});

export default ProductCard;
