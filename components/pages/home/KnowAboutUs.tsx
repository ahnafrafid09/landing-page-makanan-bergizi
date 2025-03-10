import Button from "@/components/Button";
import TitlePage from "@/components/TitlePage";
import Image from "next/image";
import React from "react";

const KnowAboutUs = () => {
  return (
    <section className="container mx-auto my-24 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5">
        {/* Left section */}
        <div className="flex flex-col w-full lg:w-1/2 gap-10 text-center lg:text-left">
          <TitlePage>Know About Us</TitlePage>
          <div className="space-y-5">
            <h1 className="text-darken text-3xl sm:text-4xl md:text-5xl leading-[1.2] font-bold max-w-3xl w-full">
              Makanan Gratis untuk Setiap Siswa
            </h1>
            <p className="text-gray leading-[1.6] text-base sm:text-lg">
              Program makan gratis ini dirancang untuk memastikan setiap siswa
              di sekolah dapat menikmati makanan bergizi tanpa biaya. Kami
              bekerja sama dengan sekolah-sekolah untuk menyediakan makanan
              sehat, mendukung kesejahteraan siswa, dan membantu mereka belajar
              dengan fokus penuh. Dengan akses pangan yang lebih baik, kami
              berharap siswa dapat tumbuh dengan energi positif dan meraih
              prestasi maksimal di sekolah.
            </p>
            <Button>Pelajari Lebih Lanjut</Button>
          </div>
        </div>
        {/* Right section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/home.png"
            width={700}
            height={700}
            quality={100}
            priority
            alt="know about us image"
            className="w-[80%] sm:w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowAboutUs;
