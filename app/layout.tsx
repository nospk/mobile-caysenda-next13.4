import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import localFont from "next/font/local";
import { StoreProviders } from "@/redux/provider";

//dialog message global
import Dialog from "@/components/Dialog";


//font text basic
const fonter = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

//font for icon by unicode
const fontIcon = localFont({
  src: "./icon/font-icon.ttf",
  variable: "--font-icon",
});

//seo global
export const metadata: Metadata = {
  title: {
    template: "%s",
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
      <body className={`${fontIcon.variable} `}>
        <StoreProviders>
            <main>{children}</main>
            <Dialog />
        </StoreProviders>
      </body>
    </html>
  );
}
