import ProductCart from "./ProductCart";
import { ActiveFull, HaftFull, NotActive } from "./Checked";
import styles from "./styles.module.css";
export default function Catogery() {
  const variants = [
    {
      image: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
      name: "Thú Hình Voi",
      active: true,
      condition: 2,
      quantity: 3,
      price: 29000,
    },
    {
      image: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
      name: "Thú Hình Voi 1",
      active: false,
      condition: 5,
      quantity: 1,
      price: 11000,
    },
    {
      image: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
      name: "Thú Hình Voi 2",
      active: true,
      condition: 2,
      quantity: 2,
      price: 19000,
    },
  ];
  const products = [
    {
      image: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
      name: "ZTC-1",
      active: true,
      variants: variants,
    },
  ];
  return (
    <div className={styles.catogerycart_wrapper}>
      <div className={styles.catogerycart}>
        <div className={styles.catogerycart_main}>
          <div className={styles.catogerycart_info}>
            <div className={styles.catogerycart_checked_wrapper}>
              <NotActive />
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
        {products.map((product) => (
          <ProductCart
            key={product.name}
            image={product.image}
            name={product.name}
            active={product.active}
            variants={product.variants}
          />
        ))}
      </div>
    </div>
  );
}
