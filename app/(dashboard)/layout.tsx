import Header from "@/components/Header";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        <div>{children}</div>
      </main>
    </>
  );
}
