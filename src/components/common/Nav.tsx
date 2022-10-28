import Link from "next/link";
import React, { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="w-full flex gap-5 p-6 items-center text-black text-3xl font-bold italic">
      <Link href="/" className=" hover:text-white">
        Home
      </Link>
      {/* -- 5px -- */}
      <Link href="/books" className=" hover:text-white">
        Books
      </Link>
    </nav>
  );
};
