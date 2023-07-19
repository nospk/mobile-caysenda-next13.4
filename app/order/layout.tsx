import LayoutHome from '@/components/Layouts/home';
import OrderMenu from '@/components/Order/OrderMenu/OrderMenu';
export default function Layout(props: {
	children: React.ReactNode;
	NavBar: React.ReactNode;
	KeyWord: React.ReactNode;
	Menu: React.ReactNode;
	Product: React.ReactNode;
}) {
	return (
		<>
			{props.NavBar}
			{props.KeyWord}
			{props.Menu}
			{props.children}
		</>
	);
}
