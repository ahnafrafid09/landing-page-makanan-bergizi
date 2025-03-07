import TitlePage from "@/components/TitlePage";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-24 container mx-auto px-4">
      <TitlePage>Tentang Kami</TitlePage>
      <div className="flex flex-col lg:flex-row lg:h-[221px] mt-5 justify-between items-start gap-6">
        <h1 className="font-bold leading-[1.2] text-darken text-[32px] md:text-[40px] lg:text-[45px] max-w-sm">
          Makanan Bergizi dan Masa Depan Cerah
        </h1>
        <div className="w-full lg:w-[804px] flex flex-col justify-between h-full">
          <h2 className="text-[18px] md:text-[20px] font-bold">
            Menyediakan makan siang gratis bagi siswa, karena setiap anak berhak
            mendapatkan makanan sehat untuk tumbuh dan belajar.
          </h2>
          <p className="text-gray leading-[1.6] text-sm md:text-base">
            Program Makan Siang Gratis ini didedikasikan untuk menyediakan
            makanan bergizi bagi anak-anak sekolah di seluruh negeri. Kami
            percaya bahwa setiap anak berhak mendapatkan asupan gizi yang cukup
            agar dapat tumbuh sehat dan belajar dengan maksimal. Program ini
            dirancang untuk memastikan tidak ada siswa yang belajar dalam
            kondisi lapar. Dengan bekerja sama dengan sekolah, petani lokal, dan
            komunitas, kami menyediakan makanan yang seimbang dan bernutrisi
            bagi mereka yang membutuhkan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
