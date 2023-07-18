import KeyWord from '@/components/KeyWord';
import styles from './page.module.css';

import KeyWordService from '@/services/KeyWord.service';

//export const dynamic = 'force-dynamic';

export default async function Page() {
	const keywords = await KeyWordService.getKeyWordCardData({orderBy :'COUNT', limit: '5'});
	let keyWordTopCard = keywords.data.map((keyword: string) => (
		<KeyWord key={keyword} keyword={keyword} />
	));

	return <div className={styles.search_history}>{keyWordTopCard}</div>;
}
