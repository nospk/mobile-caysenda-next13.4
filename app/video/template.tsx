import LayoutHome from '@/components/Layouts/home';

export default function Template({ children }: { children: React.ReactNode }) {
	return <LayoutHome> {children}</LayoutHome>;
}
