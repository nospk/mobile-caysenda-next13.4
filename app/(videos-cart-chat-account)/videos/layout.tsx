import LayoutHome from '@/components/Layouts/home';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Video Sản Phẩm',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <LayoutHome> {children}</LayoutHome>;
}
