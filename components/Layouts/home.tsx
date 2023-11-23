import Footer from "@/components/Footer";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="h-[calc(100dvh-14.6667vw)] mb-[14.6667vw]">{children}</section>
      <Footer />
    </>
  );
}
