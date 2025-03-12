import React from "react";
import TitlePage from "@/components/TitlePage";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-secondary py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <TitlePage>informasi</TitlePage>
          <h2 className="text-6xl text-darken  font-bold mt-4 dark:text-white">
            Daftarkan Sekolah Anda
          </h2>
          <p className="text-darken  mt-4 leading-relaxed dark:text-gray">
            BaBersama, kita bisa menciptakan masa depan yang lebih baik bagi
            anak-anak! Daftarkan sekolah Anda dan jadilah bagian dari program
            yang mendukung pendidikan dan kesejahteraan siswa.
          </p>
        </div>

        <div className="space-y-14">
          <div>
            <h3 className="text-2xl font-semibold dark:text-white">
              Let{"'"}s talk!
            </h3>
            <p className="mt-2 text-darken dark:text-gray">
              +234 09012346514
              <span className="ml-2">hello@largerthani.com</span>
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold dark:text-white">
              Headoffice
            </h4>
            <p className="text-darken dark:text-gray">
              8 Brewery Drive, Lagos, Nigeria.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold dark:text-white">
              Branch Office
            </h4>
            <p className="text-gray">
              Opp Opolo round about, Yenagoa, Bayelsa, Nigeria.
            </p>
          </div>

          <div className="mt-6 flex gap-4 text-gray text-xl">
            <Link href="https://facebook.com">
              <FaFacebook className="hover:text-black dark:hover:text-white transition duration-200 cursor-pointer" />
            </Link>
            <Link href="https://x.com">
              <FaTwitter className="hover:text-black dark:hover:text-white transition duration-200 cursor-pointer" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin className="hover:text-black dark:hover:text-white transition duration-200 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
