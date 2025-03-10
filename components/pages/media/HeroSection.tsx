import TitlePage from "@/components/TitlePage";
import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Hari Peduli Gizi Anak",
    date: "15th Nov 2022",
    description:
      "Kegiatan edukasi tentang pentingnya gizi seimbang bagi anak-anak. Acara ini mencakup pembagian makanan sehat serta sesi informasi untuk orang tua dan guru.",
    image: "/news1.png",
  },
  {
    title: "Bantuan Makanan untuk Sekolah Terpencil",
    date: "15th Nov 2022",
    description:
      "Menjangkau sekolah-sekolah di daerah terpencil, memastikan anak-anak mendapatkan asupan nutrisi yang cukup untuk mendukung pertumbuhan mereka.",
    image: "/news2.png",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col items-center md:flex-row md:items-start gap-4">
          {/* left section */}
          <div className="md:w-1/2">
            <TitlePage>Top News</TitlePage>
            <div className="mt-10 md:mt-24 space-y-4 md:space-y-10  w-full max-w-md">
              <h1 className="text-center md:text-start text-5xl font-bold leading-[1.2]">
                Misi Kami Untuk Anak - Anak
              </h1>
              <p className="text-gray text-center md:text-start leading-[1.6]">
                Setiap anak berhak mendapatkan masa depan yang cerah. Melalui
                berbagai program dan kegiatan, kami berusaha memberikan
                lingkungan yang mendukung pertumbuhan, pembelajaran, dan
                kebahagiaan mereka.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <div className="bg-white w-full max-w-xl flex items-center justify-center flex-col gap-4 py-5 rounded-2xl">
              {data.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex bg-white overflow-hidden max-w-lg px-4 md:px-0"
                  >
                    <div className="w-1/3">
                      <Image
                        src={data.image}
                        width={160}
                        height={100}
                        alt={data.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-2/3 p-4 space-y-2">
                      <h3 className="font-bold text-lg">{data.title}</h3>
                      <p className="text-sm text-gray-500">{data.date}</p>
                      <p className="text-xs text-gray-700">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
