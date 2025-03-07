import React from "react";

const VisionMision = () => {
  return (
    <div className="bg-secondary min-h-[571px] mt-24 text-darken flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-6 sm:px-10 md:px-1">
        {/* Mission */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="font-bold tracking-[2px] uppercase">Misi</h2>
          <h1 className="font-bold text-2xl leading-[1.5]">
            Memastikan Setiap Anak Mendapatkan Makanan Bergizi di Sekolah
          </h1>
          <p className="leading-[1.6]">
            Kami berkomitmen untuk menyediakan makan siang gratis bagi anak-anak
            sekolah agar mereka dapat tumbuh sehat, belajar dengan baik, dan
            mencapai masa depan yang lebih cerah.
          </p>
        </div>

        {/* Vision */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="font-bold tracking-[2px] uppercase">Visi</h2>
          <h1 className="font-bold text-2xl leading-[1.5]">
            Mewujudkan Akses Makanan Bergizi untuk Semua Anak di Indonesia
          </h1>
          <p className="leading-[1.6]">
            Kami bercita-cita menciptakan lingkungan di mana setiap anak, tanpa
            terkecuali, memiliki akses terhadap makanan sehat yang mendukung
            pertumbuhan dan pendidikan mereka.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMision;
