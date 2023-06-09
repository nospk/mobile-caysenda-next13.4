import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thanh Toán",
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
