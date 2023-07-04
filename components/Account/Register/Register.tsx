'use client';
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import "@/app/favicon.ico";

import getBaseUrl from '@/lib/getBaseUrl'


type RegisterForm = {
  username?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
};

const inputList = [
  { name: "username", label: "Username", placeholder: "Tên tài khoản" },
  { name: "phone", label: "Số điện thoại", placeholder: "Số điện thoại" },
  { name: "email", label: "Email", placeholder: "Email" },
  { name: "password", label: "Mật khẩu", placeholder: "Mật khẩu" },
  { name: "confirm_password", label: "Nhập lại mật khẩu", placeholder: "Nhập lại mật khẩu" },
];

const Register = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //xét điều kiện nhập
  const isPhoneValid = (phone: string) => {
    const phoneRegex = /^0[0-9]{9}$/; // regex cho số điện thoại bắt đầu bằng 0, có 10 chữ số
    return phoneRegex.test(phone); // trả về true nếu phone đúng định dạng, false nếu ngược lại
  }
  const isEmailValid = (email: string) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex cho định dạng email hợp lệ
    return emailRegex.test(email); // trả về true nếu email đúng định dạng, false nếu ngược lại
  };

  const isPasswordValid = (password: string) => {
    return password.length >= 6; // trả về true nếu độ dài mật khẩu >= 6 ký tự, false nếu ngược lại
  };
  //xét điều kiện nhập
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = event.target.value.trim();

    // Kiểm tra điều kiện lỗi của trường input và lưu vào state errors
    if (field === 'phone' && value && !isPhoneValid(value)) {
      setErrors({ ...errors, [field]: 'Số điện thoại không hợp lệ!' });
    } else if (field === 'email' && value && !isEmailValid(value)) {
      setErrors({ ...errors, [field]: 'Email không hợp lệ!' });
    } else if (field === 'password' && value && !isPasswordValid(value)) {
      setErrors({ ...errors, [field]: 'Mật khẩu phải có đủ 6 ký tự!' });
    } else if (field === 'confirm_password' && value && value !== formData.password) {
      setErrors({ ...errors, [field]: 'Mật khẩu không khớp!' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[field as keyof RegisterForm]; // Xóa thông tin lỗi của trường input khi người dùng nhập lại
      setErrors(newErrors);
    }

    // Lưu giá trị của trường input vào state formData
    if (formData.hasOwnProperty(field)) {
      setFormData({
        ...formData,
        [field as keyof RegisterForm]: value,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      // Gọi API bằng hàm `fetch`
      const res = await fetch(`${getBaseUrl + '/api/register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirm_password,
          // expiresInMins: 60, // optional
        })
      })
    }
    catch {

    }
  };

  const handleShowPassword = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto bg-white p-5 flex flex-col items-center">
          <div className="w-full">
            <div className="flex justify-center items-center flex-col mt-0.5">

              <form className="w-full mt-10 flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="mt-6 mb-4">
                  <Image src="/avatarzalo.jpg" alt="logo" width={100} height={100} />
                </div>
                {errors && (
                      <div className={styles.register_error}>
                        <i className="iconfont icon-warning"></i>
                        <div className={styles.register_error_msg}>{errors.username}</div>
                      </div>
                    )}
                {inputList.map(({ name, label, placeholder }) => (
                  <div key={name} className={styles.fm_field}>
                    <input
                      name={name}
                      type={name.includes('password') ? showPassword || showConfirmPassword ? 'text' : 'password' : 'text'}
                      className={styles.fm_text}
                      id={name}
                      tabIndex={1}
                      aria-label={label}
                      placeholder={placeholder}
                      autoCapitalize="off"
                      onClick={e => handleSubmit}
                      onChange={(e) => handleChange(e, name)}
                      required
                    />
                    {name.includes('password') && (
                      <div className="password_state" onClick={name === 'password' ? handleShowPassword : handleShowConfirmPassword}>
                        {name === 'password' ? (
                          showPassword ? (
                            <i className="iconfont icon-eyes-visible"></i>
                          ) : (
                            <i className="iconfont icon-eyes-invisible"></i>
                          )
                        ) : (
                          showConfirmPassword ? (
                            <i className="iconfont icon-eyes-visible"></i>
                          ) : (
                            <i className="iconfont icon-eyes-invisible"></i>
                          )
                        )}
                      </div>
                    )}
                    <div className={styles.underline}>
                      <div className={styles.unfocused_line}></div>
                      <div className={styles.focused_line}></div>
                    </div>
                    {errors[name as keyof RegisterForm] && (
                      <div className={styles.register_error}>
                        <i className="iconfont icon-warning"></i>
                        <div className={styles.register_error_msg}>{errors[name as keyof RegisterForm]}</div>
                      </div>
                    )}
                  </div>
                ))}
                <div className={styles.fm_btn}>
                  <button type="submit" tabIndex={3} className={styles.fm_button + ' password-register'}>
                    Đăng Ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;