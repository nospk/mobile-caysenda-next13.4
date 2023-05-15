const getBaseUrl =
  process.env.NODE_ENV == 'production'
    ? `https://test.caysenda.vn`
    : `http://localhost:${process.env.PORT ?? 3000}`
export default getBaseUrl
