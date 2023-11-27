import VideoPlayer from "@/components/VideoPlayer";
import { BsFire } from "react-icons/bs";
import { AiFillCarryOut, AiOutlineLeft } from "react-icons/ai";
import Image from "next/image";
import ProductService from "@/services/Product.service";
import { convertMoney } from "@/lib/formatPrice";
import WholeSaleModal from "@/components/AddToCartModal/WholeSaleModal";
import RetailModal from "@/components/AddToCartModal/RetailModal";
import Link from "next/link";
import styles from "./styles.module.css";
interface Variant {
  id: string;
  price: string;
  image: string;
}

interface ProductDetail {
  id: number;
  slug: string;
  name: string;
  unit: string;
  variants: Variant[];
  retail: boolean;
  sold: number;
  category_slug: string;
}
export const dynamic = 'force-dynamic';
export default async function Page({ searchParams }: any) {
  const id: string = searchParams.id;
  //Will edit by search ProductId
  const slug = "ech-da-quang-zc-559";
  const data: ProductDetail = await ProductService.getDetail({
    slug: slug,
  });
  return (
    <>
      <Link href={`/videos`}>
        <div className={styles.back}>
          <AiOutlineLeft className={styles.icon_back} />
        </div>
      </Link>
      <VideoPlayer id={id} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.info_wrapper}>
              <div className={styles.name}>{data.name}</div>
              <div className={styles.sold}>
                <BsFire size={16} />
                <span className={styles.sold_number}>
                  {data.sold} {data.unit} Đã Bán
                </span>
              </div>
            </div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.list_item_wrapper}>
              <div className={styles.variants}>
                {data.variants.map((variant: any) => (
                  <div key={variant.id} className={styles.variant_content}>
                    <Link href={`/${data.category_slug}/${slug}`}>
                      <div className={styles.variant_image}>
                        <Image
                          className="rounded-lg"
                          src={variant.thumbnail}
                          alt={variant.name}
                          sizes="100vw"
                          width={0}
                          height={0}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <span className={styles.variant_price}>
                        {convertMoney(variant.price)}đ
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.add_to_cart}>
            {/* <div className="relative">
              <AiFillCarryOut size={24} />
              <div className="absolute -top-2 left-[14px] h-[20px] min-w-[30px] rounded-3xl border border-white bg-[red] text-sm">
                <div className="text-center leading-[20px]">{data.variants.length}</div>
              </div>
            </div> */}
            {data.retail ? (
              <RetailModal className={styles.button} productId={data.id} />
            ) : (
              <WholeSaleModal className={styles.button} productId={data.id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
