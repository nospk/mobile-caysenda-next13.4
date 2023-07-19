"use client"
import { useEffect, useState } from 'react';
import styles from './History.module.css';
import {RiDeleteBinLine} from 'react-icons/ri'
import KeyWordService from '@/services/KeyWord.service';
import Link from 'next/link';
interface Props {
}
const HistoryView:any = async (props:Props) => {
	const [data,setData] = useState([]);

	useEffect(() => {
		getHistoryData();
	}, []);

	const getHistoryData = () => {
		setData(KeyWordService.historyService.getData());
	}

	const clearHistory = () => {
		KeyWordService.historyService.remove();
		getHistoryData();
	}

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.label}>Lịch sử tìm kiếm</div>
				<div className={styles.delete} onClick={clearHistory}><RiDeleteBinLine/></div>
			</div>
			<div className={styles.content}>
				{data.map((keyword:string, index: number) => {
					return (
						<Link href={"/product-sale"} key={index}>{keyword}</Link>
					)
				})}
			</div>
		</div>
	);
};
export default HistoryView;
