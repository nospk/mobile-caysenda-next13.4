import Footer from '@/components/Footer';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<section className="mb-14">{children}</section>
			<Footer />
		</>
	);
}
