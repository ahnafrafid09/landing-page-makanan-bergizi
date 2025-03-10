import TitlePage from "@/components/TitlePage";
import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Distribusi Makanan Sehat: Program Makan Siang Gratis",
    description:
      "Kami menyediakan makan siang gratis bagi anak-anak sekolah yang membutuhkan. Makanan bergizi ini membantu mereka tetap sehat dan fokus dalam belajar.",
    image: "/bg1.png",
  },
  {
    title: "Pengiriman Makanan ke Sekolah Setiap Minggu",
    description:
      "Setiap minggu, kami mengantarkan makanan ke berbagai sekolah yang terdaftar dalam program. Kami memastikan anak-anak mendapatkan asupan gizi yang cukup untuk mendukung pertumbuhan mereka.",
    image: "/bg2.png",
  },
  {
    title: "Edukasi Gizi dan Pola Makan Sehat",
    description:
      "Kami juga mengadakan sesi edukasi tentang pentingnya makanan sehat, cara memilih makanan bergizi, serta kebiasaan makan yang baik untuk anak-anak dan orang tua.",
    image: "/bg3.png",
  },
];

const WhatWeDo = () => {
  return (
    <section className="container mx-auto mt-24 px-6 sm:px-8 md:px-12">
      <TitlePage>Yang Kami Lakukan</TitlePage>
      <div className="mt-10 space-y-10 text-center md:text-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-xl">
          Kami memberikan fasilitas untuk membantu tumbuh kembang anak
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.image}
                width={400}
                height={400}
                quality={100}
                alt="bg image"
                className="w-full h-auto max-h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white flex-col px-6 sm:px-10 bg-black/40 text-center">
                <h3 className="text-xl sm:text-2xl font-bold leading-[1.4]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base sm:hidden lg:block  block leading-[1.6] mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
