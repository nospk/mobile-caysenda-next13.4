/**
  Convert price to string then add character "," to each times 3 number
*/
export function numberToString(number: number): string {
  if (Number.isInteger(number))
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return "lỗi";
}
/**
  Convert price to string then convert currency to thoursands
*/
export function convertMoney(number: number): string {
  if (Number.isInteger(number)) {
    const formattedNumber = (number / 1000).toFixed(3); // Làm tròn số về 3 chữ số thập phân
    const parts = formattedNumber.split("."); // Tách phần nguyên và phần thập phân

    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Định dạng phần nguyên
    const decimalPart = parts[1].replace(/0+$/, ""); // Phần thập phân
    if (decimalPart === "") {
      return integerPart;
    }
    return `${integerPart},${decimalPart}`;
  }
  return "lỗi";
}
