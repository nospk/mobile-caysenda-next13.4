import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Xác Nhận Đơn Hàng",
};

export default function Layout(props: {
  children: React.ReactNode;
  NavBar: React.ReactNode;
}) {
  return (
    <>
      {props.NavBar}
      {props.children}
    </>
  );
}
