import LoginForm from "@/components/LoginForm";
import React from "react";

export default function index() {
  return (
    <div className="w-1/2 mx-auto px-20 py-5 text-center">
      <h1 className="font-bold text-xl">Welcome back</h1>
      <LoginForm />
    </div>
  );
}
