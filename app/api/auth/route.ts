interface AuthData {
  emailOrPhone: string;
  password: string;
}

export default async function loginUser(data: AuthData) {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate");
  }
  const responseJson = await response.json();

  return responseJson;
}
