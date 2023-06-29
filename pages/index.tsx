import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-purple-500 to-purple-900">
      <Navbar />
        <div className="text-center mt-5 p-10">
          <h1 className="text-5xl font-bold text-yellow-400 mt-20">MyCompi</h1>
          <h2 className="text-white text-xl  mt-5">
            Todas las herramientas para compartir piso,{" "}
            <span className="font-bold text-yellow-400">en una sola app</span>
          </h2>
        </div>
      </div>
    </>
  );
}
