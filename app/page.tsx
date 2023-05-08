import Menu from "@/components/Menu";
import Flex2Col from "@/components/Flex2Col";
import KeyWord from "@/components/KeyWord";
import StickSearch from "@/components/StickSearch";
import styles from "./page.module.css";
import ProductsService from "@/services/Products.service";
import BannerCard from "@/components/BannerCard";
import ProductCard from "@/components/ProductCard";
import SearchCardCol from "@/components/SearchCard";

import type { Product } from "@/types/product";
export const dynamic = 'force-dynamic'
async function getProducts() {
  let listProduct = await ProductsService.getListProduct();
  const productsLefts = listProduct.slice(0, 10);
  const productsRights = listProduct.slice(10);
  const slideBanners = [
    "https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500",
    "https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500",
    "https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500",
  ];
  return { slideBanners, productsLefts, productsRights };
}

export default async function Page() {
  const products = await getProducts();
  const textInputs = [
    "Áo Nữ",
    "Thời trang nam nữ",
    "ốp điện thoại",
    "Quần áo trẻ 1",
    "Quần áo trẻ 2",
    "Quần áo trẻ 3",
    "Quần áo trẻ 4",
  ];
  let listKeyWord = textInputs.map((textInput: string) => (
    <KeyWord key={textInput} keyword={textInput} />
  ));
  const listslideBanner = products.slideBanners.map((slideBanner: any) => {
    return {
      src: slideBanner,
      alt: "banner",
      link: "/product",
    };
  });
  const listLeft = products.productsLefts.map(
    (product: Product, index: number) => (
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
    )
  );
  const listRight = products.productsRights.map(
    (product: Product, index: number) => (
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
    )
  );
  listLeft.unshift(<BannerCard key={30} banner={listslideBanner} />);
  // prettier-ignore
  listRight.splice(3, 0,<SearchCardCol key={31} keywords={["Quần Áo", "Đồ trẻ em", "Túi xách", "Quần jean", "Áo Thun", "Túi xách hình con thỏ", "Tai nghe bluetooth", "Điện thoại Iphone"]}/>)
  return (
    <>
      <StickSearch />
      <div className={styles.search_history}>{listKeyWord}</div>
      <Menu showCategory={true} />
      {/* Show Products */}
      <Flex2Col>
        <div className="flex-1">{listLeft}</div>
        <div className="flex-1">{listRight}</div>
      </Flex2Col>
    </>
  );
}
