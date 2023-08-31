import getBaseUrl from '@/lib/getBaseUrl'
import {RegisterForm, LoginProps} from '@/types/Account'
const authLoginApi = async (props : LoginProps) => {
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: props.username,
            password: props.password,
            // expiresInMins: 60, // optional
        })
    })
    return res
};
const registerApi = async (props :RegisterForm) => {
    const res = await fetch(`${getBaseUrl + '/api/register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: props.username,
          phone: props.phone,
          email: props.email,
          password: props.password,
          confirm_password: props.confirm_password,
        })
      });
    return res;
};
const getPasswordApi = async (email : string) => {
    const res = await fetch(`${getBaseUrl + '/api/getpassword'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email
        })
      });
    return res;
};
const AccountService = {
    authLoginApi,
    registerApi,
    getPasswordApi
};
export default AccountService;
