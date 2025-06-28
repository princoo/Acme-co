import { navItems } from "@/constants/NavItems";
import React from "react";
import AuthActions from "./AuthActions";
import Link from "next/link";
import UserAvatar from "./UserAvatar";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-3 px-10 border-b-2 border-secondary">
      <h1 className="text-lg font-bold">Acme Co</h1>
      <div className="flex">
        <ul className="flex gap-6 items-center text-sm">
          {navItems.map((item) => (
            <Link key={item.idx} href={item.href}>
              {item.item}
            </Link>
          ))}
          <AuthActions />
          <UserAvatar />
        </ul>
      </div>
    </div>
  );
}
