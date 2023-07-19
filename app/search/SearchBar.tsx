"use client"
import { KeyboardEvent, useState } from 'react'
import styles from './SearchBar.module.css'
import {GrPrevious} from 'react-icons/gr'
import KeyWordService from '@/services/KeyWord.service'
import { useRouter } from 'next/navigation'
const SearchBar = () => {
	const[value, setValue] = useState('');
	const router = useRouter();

	const goBack = (event:any) => {
		router.back();
	}

	const onKeydown = (e:KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addHistory(value);
			gotoProduct(value);
		}
	}

	const confirmAction = () => {
		addHistory(value);
		gotoProduct(value);
	}

	const addHistory = (keyword: string) => {
		KeyWordService.historyService.add(keyword);
	}

	const gotoProduct = (keyword:string) => {
		router.push("/product-sale")
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.backto} onClick={goBack}>
				<GrPrevious/>
			</div>
			<div className={styles.searchform}>
				<select className={styles.dropdown}>
					<option value="1">Sản phẩm</option>
				</select>
				<input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKeydown} type="text" placeholder='Tìm theo tên sản phẩm'/>
				<button className={styles.confirm} onClick={confirmAction}>Tìm kiếm</button>
			</div>
		</div>
	)
}
export default SearchBar;