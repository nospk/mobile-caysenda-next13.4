import Loading from '@/components/Loading';
import Wapper from './wrapper'
import { Suspense } from 'react';
import { Metadata } from 'next';
import {getPageInfo} from "@/services/Web.service";
import {convertPageInfoToMeta} from "@/utils/SeoUtil";
export async function generateMetadata({ params , searchParams}:any) {
	let pageData = await getPageInfo(searchParams.slug);
	return convertPageInfoToMeta(pageData);
}
export const dynamic = 'force-dynamic';

export default async function Page() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				{/* @ts-expect-error Async Server Component */}
				<Wapper/>
			</Suspense>
		</>
	);
}
