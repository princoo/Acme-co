import Image from "next/image";
import AuthActions from "./AuthActions";

export default function Hero() {
  return (
    <div className="w-3/4 mx-auto my-5 rounded-xl overflow-hidden h-96 relative bg-primary/20">
      <Image
        src="/images/Research-paper-rafiki.png"
        alt="Hero"
        fill
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pb-10 bg-gradient-to-r from-transparent to-black/40">
        <h1 className="text-5xl font-bold text-white">Welcome to Acme Co</h1>
        <p className="text-sm mb-8 text-white">Your friendly reminder</p>
        <AuthActions />
      </div>
    </div>
  );
}
