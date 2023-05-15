export default function Layout({
	children,
	NavBar,
}: {
	children: React.ReactNode;
	NavBar: React.ReactNode;
}) {
	return (
		<>
			{NavBar}
			{children}
		</>
	);
}
