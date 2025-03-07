"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  { number: "34M+", name: "Makanan Dibagikan" },
  { number: "400+", name: "Relawan" },
  { number: "20+", name: "Sekolah Terbantu" },
];

const images = [
  "/assets/journey.png",
  "/assets/journey.png",
  "/assets/journey.png",
];

const Journey = () => {
  return (
    <div className="mt-24 bg-primary py-16 rounded-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 sm:px-10 md:px-1">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="font-bold tracking-[2px]">Perjalanan Kami</h2>
          <h1 className="font-bold text-2xl leading-[1.2]">
            Bagaimana Kami Menyediakan Jutaan Makanan Gratis
          </h1>
          <p className="leading-[1.6]">
            Sejak awal, kami telah bekerja keras untuk memastikan setiap anak
            memiliki akses ke makanan bergizi di sekolah. Dengan dukungan dari
            donatur, relawan, dan komunitas, program ini terus berkembang,
            menjangkau lebih banyak sekolah, dan membantu anak-anak belajar
            tanpa rasa lapar.
          </p>
          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-5">
            {stats.map((data, index) => (
              <div className="flex flex-col" key={index}>
                <h2 className="font-semibold text-2xl">{data.number}</h2>
                <p className="text-sm">{data.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Swiper Slider */}
        <div className="w-full md:w-1/2">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt="Journey Image"
                  priority
                  quality={100}
                  fill
                  className="rounded-lg w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Journey;
