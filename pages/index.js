import Image from "next/image";
import { Inter } from "next/font/google";
import ValidationForm from "../components/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <ValidationForm />
      </div>
    </main>
  );
}
