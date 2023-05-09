import FlexTwoColView from '@/components/FlexTwoColView/FlexTwoColView';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

export default async function Page() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<FlexTwoColView showBanner={false} showKeyword={false} getData="product-available" />
			</Suspense>
		</>
	);
}
