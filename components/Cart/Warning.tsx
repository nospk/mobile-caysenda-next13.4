import styles from "./styles.module.css";
export default function Warning() {
  return (
    <>
      <div className={styles.warning_text}>
        <span>Lưu ý: Khách Hàng Điền Đủ Thông Tin Giao Nhận</span>
        <span>Thời gian: Giao Hàng Dự Kiến 5 Tới 7 Ngày</span>
      </div>
      <div className={styles.warning_banner}>
        <span>ĐƠN HÀNG ĐỦ MỨC TỐI THIẾU MỚI BẤM ĐẶT HÀNG ĐƯỢC</span>
      </div>
    </>
  );
}
