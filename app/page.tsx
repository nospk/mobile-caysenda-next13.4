import Menu from '@/components/Menu';
import ProductView from '@/components/ProductsView';
import SpanHistory from '@/components/SpanHistory';
import StickSearch from '@/components/StickSearch';
import styles from './page.module.css';
import ProductsService from '@/services/Products.service';
async function getProducts() {
	let listProduct = await ProductsService.getListProduct();
	const productsLefts = listProduct.slice(0, 10);
	const productsRights = listProduct.slice(10);
	const slideBanners = [
		'https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500',
	];
	return { slideBanners, productsLefts, productsRights };
}

export default async function Page() {
	const products = await getProducts();
	const textInputs = [
		'Áo Nữ',
		'Thời trang nam nữ',
		'ốp điện thoại',
		'Quần áo trẻ 1',
		'Quần áo trẻ 2',
		'Quần áo trẻ 3',
		'Quần áo trẻ 4',
	];
	let listHistory = textInputs.map((textInput) => (
		<SpanHistory key={textInput} textInput={textInput} />
	));
	return (
		<>
			<StickSearch />
			<div className={styles.search_history}>{listHistory}</div>
			<Menu showCategory={true} />
			{/* Show Products */}
			<ProductView
				slideBanners={products.slideBanners}
				productsLefts={products.productsLefts}
				productsRights={products.productsRights}
			/>
		</>
	);
}
