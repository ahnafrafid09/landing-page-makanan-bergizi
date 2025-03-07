import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="mt-24 container mx-auto px-6">
      <div className="relative w-full rounded-lg overflow-hidden">
        <Image
          src="/action.png"
          alt="Children smiling"
          priority
          quality={100}
          fill
          className="w-full h-[400px] object-cover"
        />

        {/* Overlay dengan teks */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
            Jadilah Bagian dari Gerakan Peduli Anak!
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link href="/contact">
              <Button variant="primary" className="py-3 px-8">
                Gabung sebagai Relawan
              </Button>
            </Link>
            <Button variant="light" className="py-3 px-8">
              Ajak Teman
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
