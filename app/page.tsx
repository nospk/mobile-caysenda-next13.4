import Menu from '@/components/Menu';

import KeyWord from '@/components/KeyWord';
import StickSearch from '@/components/StickSearch';
import styles from './page.module.css';
import ProductView from '@/components/FlexTwoColView/FlexTwoColView';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function Page() {
	const textInputs = [
		'Áo Nữ',
		'Thời trang nam nữ',
		'ốp điện thoại',
		'Quần áo trẻ 1',
		'Quần áo trẻ 2',
		'Quần áo trẻ 3',
		'Quần áo trẻ 4',
	];
	let listKeyWord = textInputs.map((textInput: string) => (
		<KeyWord key={textInput} keyword={textInput} />
	));

	return (
		<>
			<StickSearch />
			<div className={styles.search_history}>{listKeyWord}</div>
			<Menu showCategory={true} />
			{/* Show Products */}
			<Suspense fallback={<Loading />}>
				<ProductView showBanner={true} showKeyword={true} getData="index" />
			</Suspense>
		</>
	);
}
