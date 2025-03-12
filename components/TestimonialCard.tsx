import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface CardProps {
  name: string;
  job: string;
  rating: number;
  review: string;
  photo: string;
}
const TestimonialCard = ({ name, job, rating, review, photo }: CardProps) => {
  return (
    <div className="relative bg-white dark:bg-darken shadow-lg rounded-2xl p-5 pt-10 w-[350px] flex flex-col overflow-visible">
      {/* Foto Profil */}
      <Image
        src={photo}
        alt={name}
        quality={100}
        width={100}
        height={100}
        className="absolute -top-8 left-4 w-16 h-16 rounded-full shadow-md z-10"
      />

      {/* Nama & Pekerjaan */}
      <div className="flex items-center justify-between">
        <div className="mt-4">
          <h3 className="text-lg text-darken dark:text-white font-semibold">
            {name}
          </h3>
          <p className="text-sm text-gray">{job}</p>
        </div>

        {/* Rating Bintang */}
        <div className="flex mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={20}
              className={i < rating ? "text-[#FFC452]" : "text-gray-300"}
              fill={i < rating ? "#FFC452" : "none"}
            />
          ))}
        </div>
      </div>

      {/* Deskripsi Testimoni */}
      <p className="text-sm text-gray/80 mt-2 line-clamp-3">{review}</p>
    </div>
  );
};

export default TestimonialCard;
