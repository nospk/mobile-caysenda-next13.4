/**
  Convert price to string then add character "," to each times 3 number
*/
export function numberToString (number: number): string {
  if (Number.isInteger(number))
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  else return 'lỗi'
}
/**
  Convert price to string then convert currency to thoursands
*/
export function convertMoney (number: number): string {
  if (Number.isInteger(number))
    return number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      .replace(/\.0+$/, '')
      .replace(/(\.[0-9]*[1-9])0+$/, '$1')
      .replace(/\.$/, '')
  return 'lỗi'
}
