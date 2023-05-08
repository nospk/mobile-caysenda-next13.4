const numberToString = (number: number) => {
  if (Number.isInteger(number))
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return "lỗi";
};

export default numberToString;
