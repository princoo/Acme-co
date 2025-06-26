import Link from "next/link";
import React from "react";

export default function AuthActions() {
  return (
    <ul className="flex gap-4 justify-between font-semibold items-center">
      <Link
        href="/register"
        className="bg-primary p-2 px-5 rounded-full text-white hover:bg-primary/90"
      >
        Register
      </Link>
      <Link href="/login" className="bg-secondary p-2 px-5  rounded-full hover:bg-secondary/90">
        Login
      </Link>
    </ul>
  );
}
