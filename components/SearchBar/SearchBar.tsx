import { FC, useState, useRef, useEffect } from 'react';
import { MdArrowBackIosNew, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './SearchBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface Search {
	site: string;
	showType?: boolean;
	productType?: string;
}
const SearchBar: FC<Search> = ({ site, productType, showType = true }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		const handleScroll = () => {
			setIsOpen(false);
		};
		document.addEventListener('mousedown', handleOutsideClick);
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.removeEventListener('scroll', handleScroll);
		};
	}, [dropdownRef]);
	return (
		<div className={styles.sticky_out_wrapper}>
			<div className={styles.bar_back} onClick={() => router.back()}>
				<MdArrowBackIosNew size={30} className={styles.icon_center} />
			</div>
			<div className={styles.sticky_wrapper}>
				<div className={styles.dropdown} ref={dropdownRef}>
					<button
						className={`${showType ? styles.search_select : 'hidden'}`}
						onClick={() => setIsOpen(!isOpen)}
					>
						{site == 'product' ? 'Sản phẩm' : 'Video'}
						<MdOutlineKeyboardArrowDown />
					</button>
					{isOpen && (
						<div
							className={styles.dropdown_wapper}
							role="menu"
							aria-labelledby="dropdown-button"
							tabIndex={-1}
						>
							<div className={styles.dropdown_select} role="none">
								<div
									className={`${styles.dropdown_select_item} ${
										site === 'product' ? styles.active : ''
									}`}
									onClick={() => setIsOpen(false)}
								>
									<Link href="/search">
										<span>Sản Phẩm</span>
									</Link>
								</div>
								<div
									className={`${styles.dropdown_select_item} ${
										site === 'video' ? styles.active : ''
									}`}
									onClick={() => setIsOpen(false)}
								>
									<Link href="/search_video">
										<span>Video</span>
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
				<input
					className={styles.search_text}
					placeholder={
						site == 'product'
							? 'Tìm Theo Tên Sản Phẩm ...'
							: 'Tìm Theo Tên Video ...'
					}
				/>
				<button className={styles.search_button}>Tìm</button>
			</div>
		</div>
	);
};

export default SearchBar;
