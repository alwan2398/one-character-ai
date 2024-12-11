import { cn } from "@/lib/utils";
import React from "react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import Particles from "../ui/particles";
import GridPattern from "../ui/grid-pattern";
import { Button } from "../ui/button";
import { AvatarCirclesView } from "../views/CharacterCirclesView";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex h-[calc(100vh-1px)] w-full flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "z-30 group rounded-full border transition-all ease-in dark:border-white/5 dark:bg-gray-900"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Powerfull AI Character</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>

      <div className="flex flex-col items-center text-center z-30 lg:mt-8 mt-4 lg:max-w-4xl max-w-2xl p-1">
        <h2 className="lg:text-4xl text-2xl font-bold tracking-wide">
          ONE AI Character hadir dengan bertujuan membantu dalam mencari sesuatu
          hal yang baru.
        </h2>
        <p className="mt-4 lg:text-base text-sm text-muted-foreground p-2">
          One AI menghadirkan karakter AI dengan keahlian unik untuk membantu
          Anda di berbagai bidang. Mulai percakapan yang bermakna, dapatkan
          solusi tepat, dan rasakan teknologi AI yang personal dan cerdas
        </p>

        <div className="flex flex-col mt-4 space-y-2">
          <p className="lg:text-base text-sm font-bold">User Yang bergabung</p>
          <AvatarCirclesView />
        </div>

        <Link href={"/dashboard"}>
          <Button className="mt-6 text-white bg-blue-700 hover:bg-blue-800">
            Mulai Sekarag
          </Button>
        </Link>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={50}
        color={"#ffffff"}
        refresh
      />

      <div className="absolute inset-0 z-10">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}
