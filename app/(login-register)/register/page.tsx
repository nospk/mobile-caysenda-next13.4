
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import Register from '@/components/Account/Register'

import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export default async function Page() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Register />
			</Suspense>
		</>
	);
}
