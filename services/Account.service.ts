import getBaseUrl from "@/lib/getBaseUrl";
import { RegisterForm, LoginProps } from "@/types/Account";
import { ProductDetail } from "@/types/Product";
const Login = async (props: LoginProps) => {
  const res = await fetch(`https://caysenda.vn/ajax/user/login?username=${props.username}&password=${props.password}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
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
const ChangePassWord = async (data: { currentPassword: string; newPassword: string; renewPassword: string }) => {
  // const res = await fetch(`${getBaseUrl + "/api/change-avatar"}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     file: file,
  //   }),
  // });
  //console.log(data);
  return {
    status: 200,
    message: "Thay đổi mật khẩu thành công",
  };
};
const GetDataUser = async () => {
  return {
    name: "nospk",
    avatar:
      "https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=500",
    phone: "0962776490",
    vip: 2,
  };
};
const SetProductRecent = (product: ProductDetail) => {
  product.type = "product-recent";
  let data: ProductDetail[] = GetProductRecent();
  if (!data.some((obj) => obj.id === product.id)) {
    if (data.length < 99) {
      data = [product, ...data];
    } else {
      data = [product, ...data.slice(0, 98)];
    }
  }

  localStorage.setItem("product-recent", JSON.stringify(data));
};
const GetProductRecent = () => {
  let data = localStorage.getItem("product-recent");

  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  }

  return [];
};
const GetProductSuggest = () => {
  /* return like ProductRecent [          
          name={item.name}
          price={item.price[0].money}
          sold={item.sold}
          image={item.thumbnail}
          unit={item.unit}
          link={`${"\\" + item.category_slug + "\\" + convertNameToURL(item.name)}`}
          type='product-suggest']
  */
  let data = localStorage.getItem("product-recent");

  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  }

  return [];
};
const AccountService = {
  Login,
  Register,
  ForGotPassWord,
  ChangeAvatar,
  ChangePhone,
  ChangePassWord,
  GetDataUser,
  SetProductRecent,
  GetProductRecent,
  GetProductSuggest,
};
export default AccountService;
