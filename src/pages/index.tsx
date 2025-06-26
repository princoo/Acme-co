import Hero from "@/components/Hero";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}${plus_Jakarta_Sans.className}`}>
      <Hero />
    </div>
  );
}
