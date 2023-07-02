"use client"
import ProductService from '@/services/Product.service';
import Loading from '@/components/Loading';
import { Suspense, useEffect, useState } from 'react';
import Login from '@/components/Account/Login'
import { useRouter } from 'next/navigation';

import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export default async function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<Login />
		</Suspense>

	);

}
