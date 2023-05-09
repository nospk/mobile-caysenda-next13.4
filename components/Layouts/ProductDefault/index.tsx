'use client';

import styles from './styles.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
	const router = useRouter();
	return (
		<>
			<div className={styles.sticky_out_wrapper}>
				<div className={styles.sticky_wrapper}>
					<span className={styles.wapper_back}>
						<MdArrowBackIosNew className={styles.back} onClick={() => router.back()} />
					</span>
					<span className={styles.title}>{title}</span>
					<div className={styles.wrapper_icon}>
						<AiOutlineSearch
							className={styles.icon}
							onClick={() => router.push(`/search`)}
						/>
					</div>
				</div>
			</div>
			{children}
		</>
	);
};

export default Layout;
