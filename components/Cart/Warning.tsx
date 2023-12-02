import styles from "./styles.module.css";
import React from 'react'
 const Warning = () => {
  return (
    <>
      <div className={styles.warning_text}>
        <span>Lưu ý: Khách Hàng Điền Đủ Thông Tin Giao Nhận</span>
        <span>Thời gian: Giao Hàng Dự Kiến 3 Tới 8 Ngày</span>
      </div>
      <div className={styles.warning_banner}>
        <span>ĐƠN HÀNG ĐỦ MỨC TỐI THIẾU MỚI BẤM ĐẶT HÀNG ĐƯỢC</span>
      </div>
    </>
  );
}
export default React.memo(Warning)