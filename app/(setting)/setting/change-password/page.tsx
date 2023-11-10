"use client";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AccountService from "@/services/Account.service";
import styles from "./styles.module.css";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { isPasswordValid } from "@/lib/validation";

type ChangePasswordData = {
  currentPassword: string;
  newPassword: string;
  renewPassword: string;
};

const inputList = [
  {
    name: "currentPassword",
    label: "Mật Khẩu Hiện Tại",
    placeholder: "Mật Khẩu Hiện Tại",
  },
  {
    name: "newPassword",
    label: "Mật khẩu Mới",
    placeholder: "Mật khẩu Mới",
  },
  {
    name: "renewPassword",
    label: "Nhập lại mật khẩu",
    placeholder: "Nhập lại mật khẩu",
  },
];

const ChangePasswordPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState<ChangePasswordData>({
    currentPassword: "",
    newPassword: "",
    renewPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field as keyof ChangePasswordData]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword != formData.renewPassword) {
      dispatch(
        openDialog({
          message: "Nhập Lại Mật Khẩu Mới Không Trùng Nhau",
        })
      );
      return;
    }
    if (!isPasswordValid(formData.newPassword)) {
      dispatch(
        openDialog({
          message: "Mật Khẩu Mới Không Hợp Lệ",
        })
      );
      return;
    } else {
      let result = await AccountService.ChangePassWord(formData);
      if (result.status == 200) {
        dispatch(openDialog({ message: result.message }));
        router.push("/setting");
      } else {
        dispatch(openDialog({ message: result.message }));
      }
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.space}></div>
      {inputList.map(({ name, label, placeholder }) => (
        <div key={name} className={styles.item_list}>
          <input
            name={name}
            type={name.includes("newPassword") && !showPassword ? "password" : "text"}
            className={styles.input}
            id={name}
            tabIndex={1}
            aria-label={label}
            placeholder={placeholder}
            autoCapitalize="off"
            onChange={(e) => handleChange(e, name)}
            required
            autoComplete="off"
          />
          <div className={styles.border_input} onClick={togglePasswordVisibility}>
            {name != "newPassword" ? null : showPassword ? (
              <AiOutlineEyeInvisible className={styles.border} />
            ) : (
              <AiOutlineEye className={styles.border} />
            )}
          </div>
        </div>
      ))}
      <div className={styles.confirm}>
        <button type="submit" tabIndex={3} className={styles.button}>
          Lưu Mật Khẩu
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordPage;
