//xét điều kiện nhập
const isPhoneValid = (phone: string) => {
  const phoneRegex = /^0[0-9]{9}$/; // regex cho số điện thoại bắt đầu bằng 0, có 10 chữ số
  return phoneRegex.test(phone); // trả về true nếu phone đúng định dạng, false nếu ngược lại
};
const isEmailValid = (email: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex cho định dạng email hợp lệ
  return emailRegex.test(email); // trả về true nếu email đúng định dạng, false nếu ngược lại
};

const isPasswordValid = (password: string) => {
  return password.length >= 6; // trả về true nếu độ dài mật khẩu >= 6 ký tự, false nếu ngược lại
};

export { isPhoneValid, isEmailValid, isPasswordValid };
