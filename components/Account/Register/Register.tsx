import registerUser from "@/app/api/auth/route";
import Link from "next/link";
import { Icon } from '@/components/Icon';
import { useRouter } from "next/router";
import { useState } from "react";
import styles from './styles.module.css';
import Image from 'next/image';
import "@/app/favicon.ico"
const Register =  () => {

  return (<div className={styles['register-form-body']}>
  <div className={styles.container}>
    <div className={styles['register-label-text']}>
      <div className={styles['register-content-box']}>
        <div className={styles['register-password']}>
          <div className={styles['register-error']}>
            <i className="iconfont icon-warning"></i>
            <div className={styles['register-error-msg']}></div>
          </div>
          <form className={styles['register-form']}>
            <div className={`${styles['register-blocks']} ${styles['logo-block']}`}>
              <Image src="/avatarzalo.jpg" alt="logo" width={100} height={100}/>
            </div>
            
            <div className={styles['fm-field']}>
              <div className={styles['fm-label']} hidden>
                <span>UserName</span>
              </div>
              <div className={`${styles['input-pwa-wrap']} input-wrap-registerid`}>
                <input
                  name="fm-register-id"
                  type="text"
                  className={styles['fm-text']}
                  id="fm-register-username"
                  tabIndex={1}
                  aria-label="Tên Tài Khoản"
                  placeholder="Tên Tài Khoản"
                  autoCapitalize={'off'}
                />
                <div className={styles.underline}>
                  <div className={styles['unfocused-line']}></div>
                  <div className={styles['focused-line']}></div>
                </div>
              </div>
            </div>
            <div className={styles['fm-field']}>
              <div className={styles['fm-label']} hidden>
                <span>Số Điện Thoại</span>
              </div>
              <div className={`${styles['input-pwa-wrap']} input-wrap-registerid`}>
                <input
                  name="fm-register-phone"
                  type="text"
                  className={styles['fm-text']}
                  id="fm-register-phone"
                  tabIndex={2}
                  aria-label="Số Điện Thoại"
                  placeholder="Số Điện Thoại"
                  autoCapitalize={'off'}
                />
                <div className={styles.underline}>
                  <div className={styles['unfocused-line']}></div>
                  <div className={styles['focused-line']}></div>
                </div>
              </div>
            </div>
            <div className={styles['fm-field']}>
              <div className={styles['fm-label']} hidden>
                <span>Email</span>
              </div>
              <div className={`${styles['input-pwa-wrap']} input-wrap-registerid`}>
                <input
                  name="fm-register-email"
                  type="text"
                  className={styles['fm-text']}
                  id="fm-register-email"
                  tabIndex={3}
                  aria-label="Email"
                  placeholder="Email"
                  autoCapitalize={'off'}
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
                  name="fm-register-password"
                  type="password"
                  className={styles['fm-text']}
                  id="fm-register-password"
                  tabIndex={4}
                  aria-label="Mật Khẩu"
                  placeholder="Mật Khẩu"
                  autoCapitalize={'off'}
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
                className={styles['baxia-container'] + ' tb-register'}
                style={{ display: 'none' }}
              >
                <div id="baxia-password" style={{ display: 'block' }}></div>
              </div>
              <div
                className={styles['nc-container'] + ' tb-register'}
                id="nocaptcha-password"
                data-nc-idx="2"
                style={{ display: 'none' }}
              >
              </div>
            </div>
            <div className={styles['fm-field']}>
              <div className={styles['fm-label']} hidden>
                <span>Password</span>
              </div>
              <div className={`${styles['input-pwa-wrap']} has-password-look-btn input-wrap-password`}>
                <input
                  name="fm-register-confirm-password"
                  type="password"
                  className={styles['fm-text']}
                  id="fm-register-confirm-password"
                  tabIndex={5}
                  aria-label="Xác Nhận Mật Khẩu"
                  placeholder="Xác Nhận Mật Khẩu"
                  autoCapitalize={'off'}
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
                className={styles['baxia-container'] + ' tb-register'}
                style={{ display: 'none' }}
              >
                <div id="baxia-password" style={{ display: 'block' }}></div>
              </div>
              <div
                className={styles['nc-container'] + ' tb-register'}
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
                className={styles['fm-button'] + ' password-register'}
              >
                Đăng Ký
              </button>
            </div>
            <div className={`${styles['register-blocks']} ${styles['show-other-register']}`}></div>
          </form>
        </div>
      </div>
      <div className={styles['extra-register-content']}></div>
    </div>
  </div>
</div>
  );
}
export default  Register;