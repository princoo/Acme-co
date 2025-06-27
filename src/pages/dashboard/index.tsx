import UserInfo from "@/components/UserInfo";
import Link from "next/link";
import { PiUsersLight,PiShieldThin } from "react-icons/pi";


export default function index() {
  return (
    <div className="px-32 py-6">
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <p className="capitalize mt-8 font-bold">user information</p>
      <UserInfo />
      <p className="capitalize mt-8 font-bold">Navigation</p>
      <Link
        href="#"
        className="capitalize flex gap-3 mt-4 justify-between p-3 items-center border-2 border-transparent hover:border-secondary rounded-lg"
      >
        <span>manage users</span>
        <PiUsersLight />
      </Link>
      <Link
        href="#"
        className="capitalize flex gap-3 mt-5 justify-between p-3 items-center border-2 border-transparent hover:border-secondary  rounded-lg"
      >
        <span>manage roles</span>
        <PiShieldThin />
      </Link>
    </div>
  );
}
