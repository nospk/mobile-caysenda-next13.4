import getBaseUrl from "@/lib/getBaseUrl";
import { RegisterForm, LoginProps } from "@/types/Account";
const Login = async (props: LoginProps) => {
  const res = await fetch(
    `https://caysenda.vn/ajax/user/login?username=${props.username}&password=${props.password}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  return res;
};
const Register = async (props: RegisterForm) => {
  const res = await fetch(`${getBaseUrl + "/api/register"}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: props.username,
      phone: props.phone,
      email: props.email,
      password: props.password,
      confirm_password: props.confirm_password,
    }),
  });
  return res;
};
const ForGotPassWord = async (email: string) => {
  const res = await fetch(`${getBaseUrl + "/api/forgot-password"}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  });
  return res;
};
const ChangeAvatar = async (file: File) => {
  // const res = await fetch(`${getBaseUrl + "/api/change-avatar"}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     file: file,
  //   }),
  // });
  return {
    status: 200,
    message: "Thay đổi hình đại diện thành công",
  };
};
const ChangePhone = async (phone: string) => {
  // const res = await fetch(`${getBaseUrl + "/api/change-avatar"}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     file: file,
  //   }),
  // });
  return {
    status: 200,
    message: "Thay đổi số điện thoại thành công",
  };
};
const ChangePassWord = async (data:  {
  currentPassword: string;
  newPassword: string;
  renewPassword: string;
}) => {
  // const res = await fetch(`${getBaseUrl + "/api/change-avatar"}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     file: file,
  //   }),
  // });
  console.log(data);
  return {
    status: 200,
    message: "Thay đổi mật khẩu thành công",
  };
};
const AccountService = {
  Login,
  Register,
  ForGotPassWord,
  ChangeAvatar,
  ChangePhone,
  ChangePassWord
};
export default AccountService;
