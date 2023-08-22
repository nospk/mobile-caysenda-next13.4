'use client'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from './styles.module.css';
import SwipeButton from 'react-swipezor';
import { IoIosArrowBack } from 'react-icons/io';
import AccountService from '@/services/Account.service'


const ForgotPassword = () => {
    const [reset, setReset] = useState(0);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('đã gửi email');


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        let res = await AccountService.getPasswordApi(email);
        if (res.status == 200) {
            const req = await res.json();
            setMsg(req.msg)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.back} >
                <button type="button" onClick={() => router.back()} className="rounded-full px-2 py-0.5 flex-none">
                    <IoIosArrowBack size={22} />
                </button>
                <h1 className={styles.head_block}>
                    <span className="text-2xl">Lấy Lại Mật Khẩu</span>
                </h1>
            </div>
            <div className={styles.form_submit}>
                <div className={styles.input_block}>
                    <label className={styles.input_label}>Email:</label>
                    <input type="text"
                        className={styles.input_email}
                        placeholder={'Nhập Email, hoặc liên hệ admin'}
                        onChange={e => {
                            setEmail(e.target.value)
                        }} />
                </div>
                <div className={styles.btn_block}>
                    <SwipeButton
                        mainText="Kéo để lấy lại mật khẩu"
                        overlayText="Kéo để lấy lại mật khẩu"
                        classList={styles.swipe_block}
                        onSwipeDone={handleSubmit}
                        reset={reset}
                    />
                </div>
            </div>
            {msg && (
                <div className={styles.msg_block}>
                    <span className={styles.msg_text}>{msg}</span>
                </div>
            )}
        </div>
    )
};
export default ForgotPassword;