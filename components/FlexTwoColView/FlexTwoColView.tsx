'use client';
import { useEffect, useState } from 'react';
import styles from './FlexTwoColView.module.css';

interface Props {
	keywordCard?: React.ReactNode;
	bannerCard?: React.ReactNode;
	listLeft: React.ReactNode[];
	listRight: React.ReactNode[];
}

const FlexTwoColView = function FlexTwoColView(props: Props) {
	const [render, setRender] = useState<boolean>(true);
	const [listLeft, setListLeft] = useState<React.ReactNode[]>(props.listLeft.slice(0, 4));
	const [listRight, setListRight] = useState<React.ReactNode[]>(props.listRight.slice(0, 4));
	const [listLeft2, setListLeft2] = useState<React.ReactNode[]>([]);
	const [listRight2, setListRight2] = useState<React.ReactNode[]>([]);
	useEffect(() => {
		if (render) {
			let left2 = props.listLeft.slice(5);
			let right2 = props.listRight.slice(5);
			setListLeft2(left2);
			setListRight2(right2);
			setRender(false);
		}
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			console.log(listLeft2);
			setListLeft((state) => [...state, listLeft2]);
			setListRight((state) => [...state, listRight2]);
		}, 10000);
		return () => clearTimeout(timer);
	}, [listLeft2, listRight2]);
	return (
		<div className={styles.flex2col}>
			<div className="flex-1">{listLeft}</div>
			<div className="flex-1">{listRight}</div>
		</div>
	);
};
/**
 * Flex chia 2 cột
 * showBanner, showKeyWord dùng default trừ product available
 * showVideo dùng cho trang video, nếu true thì ko getProduct
 */
export default FlexTwoColView as unknown as (props: Props) => JSX.Element;
