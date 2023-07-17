import styles from "./styles.module.css";

const ActiveFull = () => {
  return (
    <div className={styles.checked_active_full}>
      <span className={styles.checked_active_full_icon}></span>
    </div>
  );
};
const HaftFull = () => {
  return (
    <div className={styles.checked_active_half}>
      <span className={styles.checked_active_half_icon}></span>
    </div>
  );
};
const NotActive = () => {
  return <div className={styles.checked_not_active}></div>;
};

export { ActiveFull, HaftFull, NotActive };
