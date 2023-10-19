import { IoIosArrowBack } from "react-icons/io";
import styles from "./styles.module.css";
import Link from "next/link";
const SettingLayout = ({
  children,
  title,
  back,
}: {
  children: React.ReactNode;
  title: string;
  back: string;
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Link href={back}>
          <div dir="rtl">
            <button type="button" className={styles.button_back}>
              <IoIosArrowBack size={18} />
            </button>
          </div>
        </Link>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default SettingLayout;
