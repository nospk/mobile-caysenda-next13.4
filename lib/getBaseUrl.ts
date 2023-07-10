const getBaseUrl =
  process.env.NODE_ENV == 'production'
    ? `https://caysenda.vn`
    : `https://caysenda.vn`
export default getBaseUrl
