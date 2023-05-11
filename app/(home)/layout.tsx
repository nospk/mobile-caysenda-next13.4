import LayoutHome from '@/components/Layouts/home';

export default function Layout(props: {
	children: React.ReactNode;
	NavBar: React.ReactNode;
	KeyWord: React.ReactNode;
	Menu: React.ReactNode;
	Product: React.ReactNode;
}) {
	return (
		<LayoutHome>
			{props.NavBar}
			{props.KeyWord}
			{props.Menu}
			{props.children}
			{props.Product}
		</LayoutHome>
	);
}
