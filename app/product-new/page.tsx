import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

export default async function Page() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView showBanner={true} showKeyword={true} getData="product-new" />
			</Suspense>
		</>
	);
}
