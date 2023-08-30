import KeyWordService from "@/services/KeyWord.service";
import styles from "./Topkeyword.module.css";
import Link from "next/link";
interface Props {
  data: any;
}

const TopKeyword: any = async () => {
  const topKeyword = await KeyWordService.getKeyWordCardData({
    orderBy: "RAND",
    limit: "5",
  });
  //console.log(topKeyword);

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Mọi người đang tìm kiếm</p>
      <div className={styles.content}>
        {topKeyword.data.map((keyword: string) => {
          return (
            <Link key={keyword} href={"/product-sale"}>
              {keyword}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TopKeyword;
