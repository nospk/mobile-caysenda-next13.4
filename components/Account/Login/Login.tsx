"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { LoginProps } from "@/types/Account";
import AccountService from "@/services/Account.service";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// Login Page Component
const Login = () => {
  //state | props
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<LoginProps>({});
  const [showPassword, setShowPassword] = useState(false);

  // Event handle
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // Submit Login Form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await AccountService.Login({ username, password });
      if (res.status === 200) {
        const auth = await res.json();
        localStorage.setItem("user_id", JSON.stringify(auth.id));
        localStorage.setItem("token", JSON.stringify(auth.token));
        router.back();
      } else {
        const errmsg = await res.json();
        setError(errmsg.message);
      }
    } catch {
      console.error(error);
      setError(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // UI Login
  return (
    <div className={styles.login_background}>
      <div className={styles.head_block}>
        <div className={styles.back}>
          <button
            type="button"
            onClick={() => router.push("/")}
            className={styles.icon_back}
          >
            <IoIosArrowBack size={22} />
          </button>
        </div>
        <div className={styles.logo_block}>
          <div className={styles.name_nomi}>Nomi</div>
          <div className={styles.login_image}>
            <Image src="/LogoLogin.png" alt="logo" width={50} height={50} />
          </div>
          <div className={styles.name_nomi}>ㅤ</div>
        </div>
      </div>
      <div className={styles.login_block}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              aria-label="Tài Khoản / Số Điện Thoại/ Email"
              placeholder="Tài Khoản / Số Điện Thoại / Email"
              autoCapitalize={"off"}
              onChange={handleUsernameChange}
              className={styles.input_text}
            />
          </div>
          {error.username && <p className={styles.errmsg}>{error.username}</p>}
          <div className={styles.input_group}>
            <input
              aria-label="Mật Khẩu"
              placeholder="Mật Khẩu"
              autoCapitalize={"off"}
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              className={styles.input_text}
            />
            <div
              className={styles.hidden_eye}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className={styles.hidden_eye} />
              ) : (
                <AiOutlineEye className={styles.hidden_eye} />
              )}
            </div>
          </div>
          {error.password && <p className={styles.errmsg}>{error.password}</p>}
          <div className={styles.button_group}>
            <button type="submit" tabIndex={3} className={styles.fm_btn}>
              Đăng Nhập
            </button>
          </div>
        </form>
        <div className={styles.login_link}>
          <Link href="./register" className={styles.register}>
            Đăng Ký
          </Link>
          <div>/</div>
          <Link href="./forgot-password" className={styles.forgot}>
            Quên Mật Khẩu
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

