"use client";
import loginUser from "@/app/api/auth/route";
import Link from "next/link";
import { Icon } from '@/components/Icon';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from './styles.module.css';
import Image from 'next/image';
const Login =  () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
  };
  return (<div className={styles['login-form-body']}>
  <div className={styles.container}>
    <div className={styles['login-label-text']}>
      <div className={styles['login-content-box']}>
        <div className={styles['login-password']}>
          <div className={styles['login-error']}>
            {error &&
              <>
                <Icon className="warning" src={""} alt={"Error"} />
                <div className={styles['login-error-msg']}>{error}</div>
                </>
            }
          </div>
          <form className={styles['login-form']} onSubmit={handleSubmit}>
            <div className={`${styles['login-blocks']} ${styles['logo-block']}`}>
              <Image src="/avatarzalo.jpg" alt="logo" width={100} height={100}/>
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
              <div className={styles['fm-label']} hidden>
                <span>Password</span>
              </div>
              <div className={`${styles['input-pwa-wrap']} has-password-look-btn input-wrap-password`}>
                <input
                  name="fm-login-password"
                  type="password"
                  className={styles['fm-text']}
                  id="fm-login-password"
                  tabIndex={2}
                  aria-label="Mật Khẩu"
                  placeholder="Mật Khẩu"
                  autoCapitalize={'off'}
                  onChange={handlePasswordChange}
                />
                <div className={styles.underline}>
                  <div className={styles['unfocused-line']}></div>
                  <div className={styles['focused-line']}></div>
                </div>
                <div className={styles['password-look-btn']}>
                  <i className="iconfont icon-eye-close"></i>
                </div>
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
            <div className="link-forgot-password">
              <Link href="./register">Quên Mật Khẩu</Link>
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
              <Link href="./register">Đăng Ký Tài Khoản</Link>
            </div>
            <div className={`${styles['login-blocks']} ${styles['show-other-login']}`}></div>
          </form>
        </div>
      </div>
      <div className={styles['extra-login-content']}></div>
    </div>
  </div>
</div>
  );
}
export default  Login;
