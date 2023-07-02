
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-black w-full h-full">
            { children }
		</div>
	);
};

export default Layout;
