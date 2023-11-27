import styles from "./styles.module.css";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import FlexTwoColView from "@/components/FlexTwoColView";
import BannerService from "@/services/Banner.service";
import VideoService from "@/services/Video.service";
import {ProductListParamType} from "@/services/types/ProductRequestType";
export const dynamic = 'force-dynamic';
export default async function Page() {
  const data = await VideoService.getVideoList() ;
  const banners = await BannerService.getBannerCardData();
  let requestData:ProductListParamType = {}
	requestData.page = 1;
  return (
    <>
      <div className={styles.sticky_out_wrapper}>
        <div className={styles.sticky_wrapper}>
          <span className={styles.avatar}>
            <AiOutlineUser className={styles.img} />
          </span>
          <span className={styles.title}> Video Sản Phẩm Nổi Bật</span>
          <div className={styles.wrapper_icon}>
            <Link href="/search_video">
              <AiOutlineSearch className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>

      <FlexTwoColView data={data} banners={banners} maxPage={1}
					requestData={requestData} />
    </>
  );
}
