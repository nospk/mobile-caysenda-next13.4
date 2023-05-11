import KeyWord from '@/components/KeyWord';
import styles from './page.module.css';

import Loading from '@/components/Loading';
import { Suspense } from 'react';

import KeyWordService from '@/services/KeyWord.service';

//export const dynamic = 'force-dynamic';

export default async function Page() {
	const keyWordsTop = await KeyWordService.getKeyWordTopData();

	let keyWordTopCard = keyWordsTop.map((keyword: string) => (
		<KeyWord key={keyword} keyword={keyword} />
	));

	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className={styles.search_history}>{keyWordTopCard}</div>
			</Suspense>
		</>
	);
}
