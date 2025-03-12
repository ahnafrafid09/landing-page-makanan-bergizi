import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="h-full w-full object-cover "
          alt="Hero Image"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-white container mx-auto px-6 flex items-center justify-center lg:justify-start">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Makan Gratis, <br /> Penuhi Potensi Siswa
          </h1>
          <Link href="/registration">
            <Button
              variant="light"
              className="py-3 px-6 sm:py-4 sm:px-8 text-lg"
            >
              Apa yang Kami Lakukan?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
