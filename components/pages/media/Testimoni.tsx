"use client";
import { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import { Circle } from "lucide-react";

const testimonials = [
  {
    name: "Sebastian",
    job: "Graphic Design",
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Evangeline",
    job: "Model",
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Alexander",
    job: "Software Engineer",
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Charlotte",
    job: "Photographer",
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Daniel",
    job: "Architect",
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Sophia",
    job: "Entrepreneur",
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const Testimoni = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Fungsi untuk mengupdate jumlah items per halaman berdasarkan ukuran layar
  const updateItemsPerPage = () => {
    if (window.innerWidth <= 640) {
      setItemsPerPage(1);
    } else if (window.innerWidth <= 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  };

  // Gunakan useEffect untuk menangani perubahan ukuran layar
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Ambil data berdasarkan halaman saat ini
  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="my-24 ">
      <h1 className="text-4xl sm:text-5xl text-center font-bold mb-10 text-darken dark:text-white">
        Testimoni
      </h1>

      <div className="relative w-full flex justify-center">
        {/* Background Image */}
        <Image
          src="/testimoni.jpeg"
          width={900}
          height={600}
          quality={100}
          priority
          alt="bg"
          className="w-full h-[435px] object-cover "
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
          <div className="container mx-auto px-6 flex flex-col items-center">
            {/* Grid Testimoni (berada di tengah) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-md lg:max-w-screen-2xl justify-center">
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className="p-1 rounded-full transition"
          >
            <Circle
              size={10}
              fill={index === currentPage ? "#8B5A2B" : "#AA9F9A"}
              className="text-transparent"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimoni;
