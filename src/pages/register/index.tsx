import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div className="w-1/2 mx-auto px-20 py-5 text-center">
      <h1 className="font-bold text-xl">Create your account</h1>
      <RegisterForm />
      <p className="text-sm text-gray-400 mt-4">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
