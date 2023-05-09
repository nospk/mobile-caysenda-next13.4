import LayoutProduct from '@/components/Layouts/ProductDefault';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <LayoutProduct title="Sản Phẩm Sale"> {children}</LayoutProduct>;
}
