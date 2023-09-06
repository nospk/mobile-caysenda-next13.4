import LayoutHome from '@/components/Layouts/home';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Giỏ hàng',
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return <LayoutHome> {children}</LayoutHome>;
}
