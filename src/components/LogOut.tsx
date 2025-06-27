import React from "react";
import { signOut } from "next-auth/react";
export default function LogOut() {
  return (
    <div className="cursor-pointer" onClick={() => signOut({callbackUrl:'/'})}>
      LogOut
    </div>
  );
}
