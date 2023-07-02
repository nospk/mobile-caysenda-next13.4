'use server';
import { cookies } from 'next/headers';

const JWT_SECRET = "your-secret-key"; // Replace with your own secret key

export default async function handler({ req, res }: { req: { method: string; body: { userlogin: any}; }; res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; token?: any; }): void; new(): any; }; }; }; }): Promise<void> {
  if (req.method === "POST") {
    const { userlogin } = req.body;

    // Example hardcoded users object array, for demonstration purposes only
    const users = [
      { id: 1, login: "user1", password: "123456" }, // password: 123456
      { id: 2, login: "user2", password: "abcdef" }, // password: abcdef
    ];

    // Find the user with the given login (username)
    const user = users.find((u) => u.login === userlogin.username);

    if (!user) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    // Check the given password against the stored password hash

    if (user.password===userlogin.password) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    // Create a JWT token with user ID and secret key, and return it to the client
    cookies().set('token', user.id.toString());
    const token = cookies().get('token');
    res.status(200).json({token: token});
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
