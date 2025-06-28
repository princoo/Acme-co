"use client";

import { useSession } from "next-auth/react";
export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session?.user) return <p>Not signed in</p>;
  return (
    <div className="grid grid-cols-2 mt-4 gap-10">
      <div className="flex flex-col border-t-2 border-secondary p-2">
        <p className="text-sm text-gray-secondary">Name</p>
        <p className="capitalize">{session.user.name}</p>
      </div>
      <div className="flex flex-col border-t-2 border-secondary p-2">
        <p className="text-sm text-gray-secondary">Email</p>
        <p>{session.user.email}</p>
      </div>
      <div className="flex flex-col border-t-2 border-secondary p-2">
        <p className="text-sm text-gray-secondary">Role</p>
        <p className="uppercase">{session.user.role}</p>
      </div>
    </div>
  );
}
