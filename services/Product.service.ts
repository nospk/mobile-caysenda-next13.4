import API from '@/lib/api'
import type { Product } from '@/types/product'
import getBaseUrl from '@/lib/getBaseUrl'

const getProductData = async () => {
  let products: Product[] = await API.GETOTHER({
    path: `${getBaseUrl + '/api/product'}`
  })
  return products
}
const ProductService = {
  getProductData
}
export default ProductService
