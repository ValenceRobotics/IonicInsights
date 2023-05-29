import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <nav className="flex w-full align-middle justify-center gap-5 p-5">
      <Image src={logo} width={50} height={50} alt="logo" />
      <h1 className="text-4xl font-orbitron font-bold">IonicInsights</h1>
    </nav>
  );
}
