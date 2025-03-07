import { ArrowRight } from "lucide-react";
import React from "react";

const calendar = [
  {
    date: 13,
    month: "apr",
    title: "Makan Siang Bersama: Peduli & Berbagi",
  },
  {
    date: 25,
    month: "apr",
    title: "Seminar: Pentingnya Gizi Seimbang untuk Anak",
  },
];

const Calendar = () => {
  return (
    <section className="container mx-auto my-24 px-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-darken mb-8 text-center sm:text-left">
        Jadwal Kegiatan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {calendar.map((data, index) => (
          <div
            key={index}
            className="flex items-center bg-primary py-10 px-6 text-darken rounded-lg shadow-md w-full max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center rounded-lg px-4 py-2">
              <span className="text-4xl font-bold">{data.date}</span>
              <span className="text-sm uppercase tracking-widest">
                {data.month}
              </span>
            </div>
            <div className="flex-1 ml-4 space-y-4">
              <div className="flex items-center gap-4">
                <h4 className="font-medium uppercase tracking-[2px]">
                  Next Event
                </h4>
                <div className="w-10 border border-darken"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{data.title}</h2>
            </div>

            {/* Panah di Kanan */}
            <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
              <ArrowRight className="text-black w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calendar;
