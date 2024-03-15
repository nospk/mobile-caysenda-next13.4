import { Suspense } from "react";
import Loading from "@/app/loading";
import SearchBar from "../SearchBar";
export const dynamic = 'force-dynamic';
const SearchPage = async () => {

	return (
		<div className="bg-white pt-11">
			<SearchBar/>
			<div className="px-[2.4vw] mt-2 h-full overflow-y-auto">

			</div>
		</div>
	)
}
export default SearchPage;