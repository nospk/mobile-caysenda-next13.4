export type LoginProps = {
    username?: string;
    password?: string;
}
export type RegisterForm = {
    username?: string;
    phone?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
    Errmsg?: string;
  };
export type RegisterFormError = {
    username?: {
      errorMsg: string;
      type: string;
    };
    phone?: {
      errorMsg: string;
      type: string;
    };
    email?: {
      errorMsg: string;
      type: string;
    };
    password?: {
      errorMsg: string;
      type: string;
    };
    confirm_password?: {
      errorMsg: string;
      type: string;
    };
  }; 