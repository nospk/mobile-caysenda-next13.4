"use client";
import { useState } from "react";
import { isPhoneValid } from "@/lib/validation";
import AccountService from "@/services/Account.service";
import styles from "./styles.module.css";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
type Phone = string | "";
export const dynamic = 'force-dynamic';
const ChangePasswordPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [phone, setPhone] = useState<Phone>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(Number(e.target.value))) {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu đổi mật khẩu tới server
    // Các xử lý logic khác...
    if (isPhoneValid(phone)) {
      let result = await AccountService.ChangePhone(phone);
      if (result.status == 200) {
        dispatch(openDialog({ message: result.message }));
        router.push("/setting");
      } else {
        dispatch(openDialog({ message: result.message }));
      }
    } else {
      dispatch(openDialog({ message: "Số Điện Thoại Không Hợp Lệ" }));
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.space}></div>

      <div className={styles.wrapper}>
        <input
          value={phone}
          name="phone"
          type="text"
          className={styles.input}
          tabIndex={1}
          aria-label="phone"
          placeholder="Nhập số điện thoại mới"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          required
        />
        <div className={styles.border_input}></div>
      </div>

      <div className={styles.button_wrapper}>
        <button type="submit" tabIndex={3} className={styles.button}>
          Lưu Số Mới
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordPage;
