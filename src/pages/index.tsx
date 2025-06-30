import Hero from "@/components/Hero";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${plus_Jakarta_Sans.className}`}>
      <Hero />
    </div>
  );
}
