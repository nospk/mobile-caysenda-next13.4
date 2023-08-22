'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import "@/app/favicon.ico";
import getBaseUrl from '@/lib/getBaseUrl'
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import {RegisterForm, RegisterFormError} from '@/types/Account'

const inputList = [
  { name: "username", label: "Username", placeholder: "Tên tài khoản" },
  { name: "phone", label: "Số điện thoại", placeholder: "Số điện thoại" },
  { name: "email", label: "Email", placeholder: "Email" },
  { name: "password", label: "Mật khẩu", placeholder: "Mật khẩu" },
  { name: "confirm_password", label: "Nhập lại mật khẩu", placeholder: "Nhập lại mật khẩu" },
];

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterForm>({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
});
  const [errors, setErrors] = useState<Partial<RegisterFormError>>({});
  const [message, setMessage] = useState('');

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
      setErrors({ ...errors, [field]: { errorMsg: "Số điện thoại không hợp lệ!", type: "text" } })
    } else if (field === 'email' && value && !isEmailValid(value)) {
      setErrors({ ...errors, [field]: { errorMsg: "Email không hợp lệ!", type: "text" } });
    } else if (field === 'password' && value && !isPasswordValid(value)) {
      setErrors({ ...errors, [field]: { errorMsg: "Mật khẩu không hợp lệ!", type: "text" } });
    } else if (field === 'confirm_password' && value && value !== formData.password) {
      setErrors({ ...errors, [field]: { errorMsg: "Mật khẩu không chính xác", type: "text" } });
    } else {
      const newErrors = { ...errors };
      delete newErrors[field as keyof RegisterFormError]; // Xóa thông tin lỗi của trường input khi người dùng nhập lại
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
        })
      })
      if (res.status == 200) {

        router.push('/login');
      }
      else {
        const errmsg = await res.json();
        setErrors(errmsg);
      }
    }
    catch {

    }
  };

  return (
    <div className="bg-white w-full h-full flex justify-center items-center">
      <div className="w-full max-w-full">
        <div className={styles.back} >
          <button type="button" onClick={() => router.back()} className="rounded-full px-2 py-0.5">
            <IoIosArrowBack size={22} />
          </button>
        </div>
        <div className="overflow-auto h-screen p-5 flex flex-col items-center">
          <div className="w-full">
            <div className="flex justify-center items-center flex-col mt-0.5">
              <form className="w-full mt-10 flex flex-col items-center" onSubmit={handleSubmit}>
                {inputList.map(({ name, label, placeholder }) => (
                  <div key={name} className={styles.fm_field}>
                    <input
                      name={name}
                      type={'password'}
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
                    <div className={styles.underline}>
                      <div className={styles.unfocused_line}></div>
                      <div className={styles.focused_line}></div>
                    </div>
                    {errors[name as keyof RegisterFormError] &&
                      (errors[name as keyof RegisterFormError]?.type == 'link' ? (
                        <div className={styles.register_error}>
                          <i className="iconfont icon-warning"></i>
                          <Link href={'./forgot-password'} className={styles.register_error_msg}>{errors[name as keyof RegisterFormError]?.errorMsg} {"-> lấy lại mật khẩu"}</Link>
                        </div>
                      ) : (
                        <div className={styles.register_error}>
                          <i className="iconfont icon-warning"></i>
                          <div className={styles.register_error_msg}>{errors[name as keyof RegisterFormError]?.errorMsg}</div>
                        </div>
                      ))}
                  </div>
                ))}
                <div className={styles.fm_btn}>
                  <button type="submit" tabIndex={3} className={styles.fm_button + ' password-register'}>
                    Đăng Ký
                  </button>
                </div>
              </form>
              {message && (
              <p id="message">{message}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;