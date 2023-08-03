import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-black w-full h-full">
			<section className="mb-14">{children}</section>
			<Footer />
		</div>
	);
};

export default Layout;
