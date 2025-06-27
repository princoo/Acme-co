import React from "react";

export default function UserInfo() {
  return (
    <div className="grid grid-cols-2 mt-4 gap-10">
      <div className="flex flex-col border-t-2 border-secondary p-2">
        <p className="text-sm text-gray-secondary">Name</p>
        <p>Princo dev</p>
      </div>
      <div className="flex flex-col border-t-2 border-secondary p-2">
        <p className="text-sm text-gray-secondary">Email</p>
        <p>Princo@gmail.com</p>
      </div>
      <div className="flex flex-col border-t-2 border-secondary p-2">
        <p className="text-sm text-gray-secondary">Role</p>
        <p>Administrator</p>
      </div>
    </div>
  );
}
