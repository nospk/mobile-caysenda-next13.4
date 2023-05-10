import LayoutHome from '@/components/Layouts/home';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <LayoutHome> {children}</LayoutHome>;
}
