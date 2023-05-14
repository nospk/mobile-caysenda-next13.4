import API from '@/lib/api'
import type { KeyWord } from '@/types/keyword'
import getBaseUrl from '@/lib/getBaseUrl'

const getKeyWordTopData = async () => {
  const keywords = [
    'Áo Nữ',
    'Thời trang nam nữ',
    'ốp điện thoại',
    'Quần áo trẻ 1',
  ] as KeyWord[]

  return keywords
}
const getKeyWordCardData = async () => {
  const keywords = [
    'Quần Áo',
    'Đồ trẻ em',
    'Túi xách',
    'Quần jean',
    'Áo Thun',
    'Túi xách hình con thỏ',
    'Tai nghe bluetooth',
    'Điện thoại Iphone'
  ] as KeyWord[]

  return keywords
}
const KeyWordService = {
  getKeyWordTopData,
  getKeyWordCardData
}
export default KeyWordService
