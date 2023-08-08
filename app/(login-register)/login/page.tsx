"use client"
import Loading from '@/components/Loading';
import { Suspense, useEffect, useState } from 'react';
import Login from '@/components/Account/Login';
export default async function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<Login />
		</Suspense>

	);

}
