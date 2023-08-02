import { Suspense } from "react";
import HistoryView from "./HistoryView";
import ProductView from "./ProductView";
import Loading from "@/app/loading";
import KeyWordService from "@/services/KeyWord.service";
import SearchBar from "./SearchBar";
import TopKeyword from "./TopKeyword";

const SearchPage = async () => {

	return (
		<div className="bg-white pt-11">
			<SearchBar/>
			<div className="px-[2.4vw] mt-2 h-full overflow-y-auto">
				<HistoryView />
				<Suspense fallback={<Loading/>}>
					<TopKeyword/>
				</Suspense>
				<Suspense fallback={<Loading/>}>
					<ProductView />
				</Suspense>
			</div>
		</div>
	)
}
export default SearchPage;