import OrderMenu from "@/components/Order/OrderMenu/OrderMenu";
import styles from "./Menu.module.css";

export default function orderMenu() {
  return (
    <div className={styles.menu}>
      <OrderMenu />
    </div>
  );
}
