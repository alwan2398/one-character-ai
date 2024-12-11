import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="lg:mt-8 mt-6 px-4">
      <div className="flex flex-col p-4 my-2 bg-slate-800 rounded-lg">
        <h1 className="lg:text-2xl text-xl font-bold">About One AI</h1>
        <h3 className="lg:text-lg text-sm mt-2 text-gray-300">
          One AI adalah platform revolusioner yang menghadirkan berbagai
          karakter AI dengan keahlian unik di setiap bidang. Dibangun
          menggunakan teknologi modern seperti Next.js, Tailwind CSS, dan API AI
          canggih, One AI mampu memberikan pengalaman interaksi yang responsif,
          cerdas, dan sesuai kebutuhan Anda. Dari asisten pribadi hingga pakar
          profesional, temukan solusi berbasis AI yang dirancang untuk membantu
          Anda 😄{" "}
        </h3>
        <h3 className="lg:text-base text-sm mt-6 flex items-center gap-2 font-bold">
          Support Saya dan Berikan Feedback ke{" "}
          <ArrowDown className=" w-6 h-6" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
          <Link href="https://github.com/alwan2398" target="_blank" className="bg-white hover:text-white hover:bg-primary cursor-pointer p-2 rounded-lg">
            <h3 className="text-sm text-center text-blue-700 hover:text-white font-bold">
              Github
            </h3>
          </Link>
          <Link href="https://www.tiktok.com/@alwan.balweel" target="_blank" className="bg-white hover:text-white hover:bg-primary cursor-pointer p-2 rounded-lg">
            <h3 className="text-sm text-center text-blue-700 hover:text-white font-bold">
              TikTok
            </h3>
          </Link>
          <Link href="https://www.instagram.com/alwanbalweel/" target="_blank" className="bg-white hover:text-white hover:bg-primary cursor-pointer p-2 rounded-lg">
            <h3 className="text-sm text-center text-blue-700 hover:text-white font-bold">
              Instagram
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
