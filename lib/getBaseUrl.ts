import { cache } from "react";

const getBaseUrl = cache(() =>
  process.env.NODE_ENV == "production"
    ? `https://caysenda.vn`
    : `http://localhost:${process.env.PORT ?? 3000}`
);
export default getBaseUrl;
