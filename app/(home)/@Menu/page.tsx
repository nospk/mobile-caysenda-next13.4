import Menu from '@/components/Menu';
import {getCategoryNav} from '@/services/WebSetting.service'
export default async function Page() {
	let categoryNav = await getCategoryNav();
	return <Menu showCategory={true} nav={categoryNav} />;
}
