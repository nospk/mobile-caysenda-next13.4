import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
const fonter = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-google",
});
import Dialog from "@/components/Dialog";
import { DialogProvider } from "@/components/Dialog/Provider";
export const metadata: Metadata = {
  title: {
    template: "%s - Cây Sen Đá - Nomi - Ngọc Minh",
    default: "Cây Sen Đá - Nomi - Ngọc Minh",
    absolute: "Cây Sen Đá - Nomi - Ngọc Minh",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={fonter.className}>
        <DialogProvider>
          {children}
          <Dialog />
        </DialogProvider>
      </body>
    </html>
  );
}
