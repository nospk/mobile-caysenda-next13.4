'use client';
import SearchBar from '@/components/SearchBar';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
export default function Page() {
	let [select, setSelect] = useState<boolean>(true);
	useEffect(() => {}, [select]);
	return (
		<>
			<SearchBar site="product" showType={false} />
			<div className={styles.text_box}>
				<span
					className={select ? styles.active : ''}
					onClick={() => {
						setSelect(true);
					}}
				>
					Có Sẵn
				</span>
				<span
					className={select ? '' : styles.active}
					onClick={() => {
						setSelect(false);
					}}
				>
					Order
				</span>
			</div>
		</>
	);
}
