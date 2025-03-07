import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="mt-24 container mx-auto px-4">
      <div className="relative w-full">
        <Image
          src="/assets/action.png"
          alt="Children smiling"
          width={1200}
          height={400}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          unoptimized
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Jadilah Bagian dari Gerakan Peduli Anak!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
