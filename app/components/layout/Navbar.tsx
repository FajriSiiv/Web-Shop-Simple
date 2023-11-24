import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 items-center bg-primary text-white py-4">
      <span className="text-2xl font-bold ">Shopping Web</span>
      <ul className="flex justify-center items-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
