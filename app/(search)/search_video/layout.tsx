import SearchBar from '@/components/SearchBar';

export default function Layout(props: {
	children: React.ReactNode;
	HistoryView: React.ReactNode;
}) {
	return (
		<>
			<SearchBar site="video" />
			<div className="px-[2.4vw]">
				{props.HistoryView}
			</div>
		</>
	);
}
