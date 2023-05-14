import type { FC } from 'react';
import styles from './KeyWordCard.module.css';
import { BsSearch } from 'react-icons/bs';
import React from 'react';

interface KeyWord {
	keywords: string[];
}

const KeyWordCard: FC<KeyWord> = React.memo(function Card(props) {
	const list = props.keywords.map((keyword) => {
		return (
			<span key={keyword} className={styles.span}>
				{keyword}
			</span>
		);
	});
	return (
		<div className={styles.search_card}>
			<div className={styles.sticky_wrapper}>
				<span className={styles.wapper_icon}>
					<BsSearch className={styles.icon} />
				</span>
				<span className={styles.search_text}>Tìm Kiếm Nhiều Nhất</span>
			</div>
			{list}
		</div>
	);
});

export default KeyWordCard;
