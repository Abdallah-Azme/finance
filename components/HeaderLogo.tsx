import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex ">
        <Image alt="logo" src="/logo.svg" width={28} height={28} />
        <div className="font-semibold text-white text-2xl ml-2.5 ">FINANCE</div>
      </div>
    </Link>
  );
}
