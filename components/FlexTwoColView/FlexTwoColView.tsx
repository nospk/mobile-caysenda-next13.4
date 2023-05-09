import type { Product } from '@/types/product';
import type { Video } from '@/types/video';
import BannerCard from '@/components/BannerCard';
import ProductCard from '@/components/ProductCard';
import SearchCardCol from '@/components/SearchCard';
import ProductsService from '@/services/Products.service';
import styles from './FlexTwoColView.module.css';
import VideoCard from '@/components/VideoCard';
interface Props {
	showBanner: boolean;
	showKeyword: boolean;
	showvideos?: boolean;
	getData:
		| 'index'
		| 'product-hot'
		| 'product-sale'
		| 'product-new'
		| 'product-available'
		| 'video';
}

const ProductView = async function ProductView(props: Props) {
	let listProduct = await ProductsService.getListProduct();
	const productsLefts = listProduct.slice(0, 10);
	const productsRights = listProduct.slice(10);
	const slideBanners = [
		'https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500',
	];

	const listslideBanner = slideBanners.map((slideBanner: any) => {
		return {
			src: slideBanner,
			alt: 'banner',
			link: '/product',
		};
	});
	const videosLefts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const videossRights = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	let listLeft: React.ReactElement[] = [];
	let listRight: React.ReactElement[] = [];
	if (props.showvideos) {
		listLeft = videosLefts.map((productsLeft: unknown, index: number) => (
			<VideoCard
				key={index}
				name="Kẹo dẻo"
				detail="Kẹo dẻo mềm thơm ngon"
				image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
				id="349938442291"
			/>
		));
		listRight = videossRights.map((productsRight: unknown, index: number) => (
			<VideoCard
				key={index}
				name="Kẹo dẻo"
				detail="Kẹo dẻo mềm thơm ngon"
				image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
				id="349938442291"
			/>
		));
	} else {
		listLeft = productsLefts.map((product: Product, index: number) => (
			<ProductCard
				key={product.name}
				name={product.name}
				price={product.price}
				sold={product.sold}
				image={product.image}
				unit={product.unit}
				data={product.data}
				link={product.link}
				priority={index == 0 ? true : false}
			/>
		));
		listRight = productsRights.map((product: Product, index: number) => (
			<ProductCard
				key={product.name}
				name={product.name}
				price={product.price}
				sold={product.sold}
				image={product.image}
				unit={product.unit}
				data={product.data}
				link={product.link}
				priority={index < 2 ? true : false}
			/>
		));
	}

	if (props.showBanner) listLeft.unshift(<BannerCard key="banner" banner={listslideBanner} />);
	// prettier-ignore
	if (props.showKeyword) listRight.splice(3, 0,<SearchCardCol key="keyword" keywords={["Quần Áo", "Đồ trẻ em", "Túi xách", "Quần jean", "Áo Thun", "Túi xách hình con thỏ", "Tai nghe bluetooth", "Điện thoại Iphone"]}/>)

	return (
		<div className={styles.flex2col}>
			<div className="flex-1">{listLeft}</div>
			<div className="flex-1">{listRight}</div>
		</div>
	);
};
/**
 * Flex chia 2 cột
 * showBanner, showKeyWord dùng default trừ product available
 * showVideo dùng cho trang video, nếu true thì ko getProduct
 */
export default ProductView as unknown as (props: Props) => JSX.Element;
