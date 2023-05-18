
import styles from "./ProductDetail.module.css";
export default function Price({
  unit,
  retail,
  price,
}: {
  unit: string;
  retail: boolean;
  price: any[];
}) {
  const convertMoney = (money: string) => {
    return `${money.slice(0, -3)}K`;
  };
  return (
    <>
      <div className={styles.wrapper_price}>
        <div className={styles.price_flex_row}>
          {price.map((item) => {
            return (
              <div className={styles.wrapper_price_item}>
                <div className={styles.price_item}>
                  <span className={styles.price_number}>
                    {convertMoney(item.money.toString())}
                  </span>
                  <span className={styles.price_currency}>đ</span>
                </div>
                <div className={styles.warpper_price_condition}>
                  <span className={styles.price_condition}>
                    {item.condition} {unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
}
