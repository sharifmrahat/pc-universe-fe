import Header from "@/components/layout/Header";
import { Oswald } from "next/font/google";

const oswald = Oswald({ style: "normal", weight: "600", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div
        className={`text-xl font-semibold bg-primary text-accent p-10 ${oswald.className}`}
      >
        PC UNIVERSE
      </div>
    </main>
  );
}
