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
      const res = await AccountService.authLoginApi({ username, password });
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

/**
 * 
 * <div className='w-full h-full flex justify-center items-center'>
	  <div className='w-full max-w-full'>
		<div className='absolute top-0 left-0 right-0 bottom-0 overflow-auto bg-white flex flex-col items-center'>
		  <div className='w-full'>
			<div className={styles['login-password']}>
			  <div className={styles['login-error']}>
				{error &&
				  <>
					<VscWarning className="warning" />
					<div className={styles['login-error-msg']}>{error}</div>
				  </>
				}
			  </div>

			  <form className="w-full mt-10 flex p-5 flex-col items-center" onSubmit={handleSubmit}>
				<h1 className="text-xl capitalize drop-shadow-md text-[#ff4800]">Đăng Nhập Vào Cây Sen Đá !!!</h1>
				<div className={`${styles['login-blocks']} ${styles['logo-block']}`}>

				  <Image src="/LogoLogin.jpg" alt="logo" width={100} height={100} />
				</div>
				<div className={styles['fm-field']}>
				  <div className={styles['fm-label']} hidden>
					<span>UserName</span>
				  </div>
				  <div className={`${styles['input-pwa-wrap']} input-wrap-loginid`}>
					<input
					  name="fm-login-id"
					  type="text"
					  className={styles['fm-text']}
					  id="fm-login-id"
					  tabIndex={1}
					  aria-label="Tài Khoản | Số Điện Thoại | Email"
					  placeholder="Tài Khoản | Số Điện Thoại | Email"
					  autoCapitalize={'off'}
					  onChange={handleUsernameChange}
					/>

					<div className={styles.underline}>
					  <div className={styles['unfocused-line']}></div>
					  <div className={styles['focused-line']}></div>
					</div>
				  </div>
				</div>
				<div className={styles['fm-field']}>
				  <div className={`${styles['input-pwa-wrap']}`}>
					<input
					  name="fm-login-password"
					  type={showPassword ? 'text' : 'password'}
					  className={styles['fm-text']}
					  id="fm-login-password"
					  tabIndex={2}
					  aria-label="Mật Khẩu"
					  placeholder="Mật Khẩu"
					  autoCapitalize={'on'}
					  onChange={handlePasswordChange}
					/>
				  </div>
				  <div className={styles.underline}>
					<div className={styles['unfocused-line']}></div>
					<div className={styles['focused-line']}></div>
				  </div>
				</div>
				<div className={`${styles['fm-field']} baxia-container-wrapper`}>
				  <div
					className={styles['baxia-container'] + ' tb-login'}
					style={{ display: 'none' }}
				  >
					<div id="baxia-password" style={{ display: 'block' }}></div>
				  </div>
				  <div
					className={styles['nc-container'] + ' tb-login'}
					id="nocaptcha-password"
					data-nc-idx="2"
					style={{ display: 'none' }}
				  >
				  </div>
				</div>
				<div className={styles['fm-btn']}>

				  <button
					type="submit"
					tabIndex={3}
					className={styles['fm-button'] + ' password-login'}
				  >
					Đăng Nhập
				  </button>
				</div>
				<div className={`${styles['login-blocks']} ${styles['login-links']}`}>
				  <div className="text-[#ffaf47]">
					<Link href="./register">Đăng Ký Tài Khoản</Link>
				  </div>

				  <div className="link-forgot-password pl-2">
					<Link href="./forgotPassword">Quên Mật Khẩu</Link>
				  </div>
				</div>
				<div className={`${styles['login-blocks']} ${styles['show-other-login']}`}></div>
			  </form>
			</div>
		  </div>
		  <div className={styles['extra-login-content']}></div>
		</div>
	  </div>
	</div>
    
 */
