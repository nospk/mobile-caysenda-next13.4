import SearchBar from '@/components/SearchBar';

export default function Layout(props: {
	children: React.ReactNode;
	HistoryView: React.ReactNode;
	ProductView: React.ReactNode;
}) {
	return (
		<>
			<SearchBar site="product" />
			<div className="px-[2.4vw]">
				{props.HistoryView}
				{props.ProductView}
			</div>
		</>
	);
}
