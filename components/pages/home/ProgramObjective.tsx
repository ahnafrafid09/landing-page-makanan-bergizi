import TitlePage from "@/components/TitlePage";
import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Meningkatkan Kesejahteraan Siswa",
    description:
      "Program ini memastikan siswa mendapatkan makanan bergizi untuk mendukung kesehatan mereka.",
  },
  {
    title: "Mendukung Konsentrasi Belajar",
    description:
      "Dengan makanan yang cukup, siswa dapat fokus lebih baik dalam proses belajar.",
  },
  {
    title: "Menjamin Akses Pangan Untuk Semua",
    description:
      "Memberikan makanan gratis kepada siswa tanpa hambatan finansial, memastikan setiap anak mendapatkan hak mereka.",
  },
  {
    title: "Mendorong Tumbuh Kembang yang Sehat",
    description:
      "Memberikan asupan gizi yang tepat untuk mendukung perkembangan fisik dan mental siswa.",
  },
];

const ProgramObjective = () => {
  return (
    <section className="bg-secondary  py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left section */}
          <div className="space-y-10 text-center lg:text-left">
            <TitlePage>Tujuan Program</TitlePage>
            <div className="space-y-5 w-full max-w-3xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] dark:text-white">
                Fasilitas yang kami berikan untuk siswa
              </h2>
              <p className="text-gray leading-[1.6] text-base sm:text-lg">
                Memastikan setiap siswa mendapatkan makanan bergizi secara
                terjangkau, sehingga mereka dapat fokus belajar tanpa khawatir
                soal kebutuhan makan.
              </p>
              <div className="flex gap-5 pl-5">
                <div className="border border-[#864949] w-0.5"></div>
                <div className="space-y-5 w-full max-w-lg mx-auto lg:mx-0">
                  {data.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <h3 className="text-xl sm:text-2xl text-darken dark:text-white font-bold">
                        {item.title}
                      </h3>
                      <p className="text-gray leading-[1.6] text-base sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center justify-center">
            <Image
              src="/home2.png"
              width={700}
              height={700}
              quality={100}
              priority
              alt="home image"
              className="max-w-[80%] sm:max-w-[480px] h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramObjective;
