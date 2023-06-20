import ProductCart from "./ProductCart";
import { ActiveFull, HaftFull, NotFull } from "./Checked";
import styles from "./styles.module.css";
export default function Catogery() {
  return (
    <div className={styles.catogerycart_wrapper}>
      <div className={styles.catogerycart}>
        <div className={styles.catogerycart_main}>
          <div className={styles.catogerycart_info}>
            <div className={styles.catogerycart_checked_wrapper}>
              <NotFull />
              <div className={styles.checked_padding}></div>
            </div>
            <div className={styles.catogerycart_title}>
              <span className={styles.catogerycart_name}>Quần áo</span>
              {">"}
              <span className={styles.catogerycart_pricecondition}>
                Tối thiểu: 1.000K
              </span>
              {">>"}
              <span className={styles.catogerycart_pricenow}>
                Hiện tại: 249K
              </span>
            </div>
            <span className={styles.catogerycart_button_buymore}>Đặt Thêm</span>
          </div>
          <div className={styles.catogerycart_error}>
            <span>Chưa đạt mức tối thiểu của danh mục này</span>
          </div>
        </div>
        <ProductCart />
      </div>
    </div>
  );
}
