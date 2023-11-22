import Menu from './_components/Menu'
import NavBar from './_components/NavBar'
export default function Layout(props: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			<Menu />
			{props.children}
		</>
	);
}
