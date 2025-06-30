import React from "react";
import { signOut } from "next-auth/react";
import Button from "./ui/Button";
export default function LogOut() {
  return (
    <Button
      variant="outline"
      size="large"
      className="text-sm px-3"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout
    </Button>
  );
}
