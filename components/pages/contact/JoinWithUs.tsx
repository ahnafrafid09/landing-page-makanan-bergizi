import React from "react";
import TitlePage from "@/components/TitlePage";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const JoinWithUs = () => {
  return (
    <section className="bg-secondary py-24 px-6 lg:px-24 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <TitlePage>informasi sukarelawan</TitlePage>
          <h2 className="text-6xl text-darken font-bold mt-4">
            Gabung bersama kami
          </h2>
          <p className="text-darken mt-4 leading-relaxed">
            Bantu kami menyediakan makanan sehat dan lingkungan yang lebih baik
            bagi anak-anak. Bergabunglah sebagai relawan dan ikut serta dalam
            kegiatan berbagi serta edukasi yang bermanfaat!
          </p>
        </div>

        <div className="space-y-14">
          <div>
            <h3 className="text-2xl font-semibold">Let{"'"}s talk!</h3>
            <p className="mt-2 text-darken">
              +234 09012346514
              <span className="ml-2">hello@largerthani.com</span>
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Headoffice</h4>
            <p className="text-darken">8 Brewery Drive, Lagos, Nigeria.</p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Branch Office</h4>
            <p className="text-gray-700">
              Opp Opolo round about, Yenagoa, Bayelsa, Nigeria.
            </p>
          </div>

          <div className="mt-6 flex gap-4 text-gray-700 text-xl">
            <Link href="https://facebook.com">
              <FaFacebook className="hover:text-black cursor-pointer" />
            </Link>
            <Link href="https://x.com">
              <FaTwitter className="hover:text-black cursor-pointer" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin className="hover:text-black cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;
