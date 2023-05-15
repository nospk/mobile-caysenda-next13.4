import getBaseUrl from "@/lib/getBaseUrl";


const GET = async ({
  path,
  data,
  auth,
}: {
  path: string;
  data: any;
  auth: boolean;
}) => {
  try {
    const params = new URLSearchParams(data);
    if (!auth) {
      const response = await fetch(getBaseUrl + path + "?" + params.toString(), {
        method: "GET",
      });
      return await response.json();
    } else {
      const header = {
        Authorization: localStorage.getItem("user_id") as string,
        "Content-Type": "application/json",
      };
      const response = await fetch(getBaseUrl + path + "?" + params, {
        method: "GET",
        headers: header,
      });
      return await response.json();
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};
const GETOTHER = async ({ path }: { path: string }) => {
  try {
    const response = await fetch(path, {
      method: "GET",
      cache: 'no-store'
    });
    return await response.json();
  } catch (e) {
    console.log(e);
    return e;
  }
};
const POST = async ({ data }: { data: any }) => {
  const params = new URLSearchParams(data);
  const header = {
    Authorization: localStorage.getItem("user_id") as string,
    "Content-Type": "application/json",
  };
  const response = await fetch(getBaseUrl + params.toString(), {
    method: "POST",
    headers: header,
  });
  return await response.json();
};
const API = {
  GET,
  GETOTHER,
  POST,
};
export default API;
