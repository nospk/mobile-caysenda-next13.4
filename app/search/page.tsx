import { Suspense } from "react";
import HistoryView from "./HistoryView";
import ProductView from "./ProductView";
import Loading from "@/app/loading";
import KeyWordService from "@/services/KeyWord.service";
import SearchBar from "./SearchBar";
import TopKeyword from "./TopKeyword";

const SearchPage = async () => {

	return (
		<div className="bg-white h-full">
			<SearchBar/>
			<div className="px-[2.4vw] mt-2">
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