import styles from './FlexTwoColView.module.css';

interface Props {
	keywordCard?: React.ReactNode;
	bannerCard?: React.ReactNode;
	listLeft: React.ReactNode[];
	listRight: React.ReactNode[];
}

const FlexTwoColView = async function FlexTwoColView(props: Props) {
	let { keywordCard, bannerCard, listLeft, listRight } = props;
	if (bannerCard) listLeft.unshift(bannerCard);
	// prettier-ignore
	if (keywordCard) listRight.splice(3, 0,keywordCard)

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
