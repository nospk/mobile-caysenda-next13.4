import styles from "./KeyWord.module.css";
import Link from "next/link";

const KeyWord = ({ keyword }: { keyword: string }) => {
  return (
    <span className={styles.text_search}>
      <Link href={`/search?keyword=${keyword}`}>{keyword}</Link>
    </span>
  );
};

export default KeyWord;
